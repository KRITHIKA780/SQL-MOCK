const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '.'))); // Serve static files from current directory

// Database Connection
const db = new sqlite3.Database('./quiz.db', (err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

// Routes

// Get all topics
app.get('/api/topics', (req, res) => {
    const sql = 'SELECT id, title, icon, description, difficulty, tutorial FROM topics';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }

        // We need to count questions for each topic to match the UI expectations
        // This is a bit inefficient (N+1 queries), but fine for small scale. 
        // Better way: JOIN and count.
        const topicsWithCount = rows.map(topic => {
            return new Promise((resolve, reject) => {
                db.get('SELECT COUNT(*) as count FROM questions WHERE topic_id = ?', [topic.id], (err, row) => {
                    if (err) reject(err);
                    else {
                        topic.questionCount = row.count;
                        resolve(topic);
                    }
                })
            });
        });

        Promise.all(topicsWithCount).then(topics => {
            res.json({
                "message": "success",
                "data": topics
            });
        });
    });
});

// Get questions by topic
app.get('/api/questions/:topicId', (req, res) => {
    const sql = 'SELECT * FROM questions WHERE topic_id = ?';
    const params = [req.params.topicId];
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        // Parse options JSON
        const questions = rows.map(q => ({
            ...q,
            options: JSON.parse(q.options)
        }));

        res.json({
            "message": "success",
            "data": questions
        });
    });
});

// Start Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`Open http://localhost:${port} to view the app`);
});
