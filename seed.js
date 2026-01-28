const sqlite3 = require('sqlite3').verbose();
const quizData = require('./questions.js');

console.log("Starting database seeding process...");
console.log("Topics in quizData:", quizData && quizData.topics ? quizData.topics.length : 'undefined');

// Use a fresh database file
const db = new sqlite3.Database('./quiz.db');

db.serialize(() => {
    console.log("Creating tables...");
    // create topics table
    db.run(`CREATE TABLE IF NOT EXISTS topics (
        id TEXT PRIMARY KEY,
        title TEXT,
        icon TEXT,
        description TEXT,
        difficulty TEXT,
        tutorial TEXT
    )`, (err) => {
        if (err) console.error("Error creating topics table:", err);
    });

    // create questions table
    db.run(`CREATE TABLE IF NOT EXISTS questions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        topic_id TEXT,
        question TEXT,
        options TEXT,
        correct INTEGER,
        explanation TEXT,
        FOREIGN KEY(topic_id) REFERENCES topics(id)
    )`, (err) => {
        if (err) console.error("Error creating questions table:", err);
    });

    // Clear existing data
    console.log("Clearing existing data...");
    db.run("DELETE FROM questions");
    db.run("DELETE FROM topics");

    console.log("Inserting data...");
    const stmtTopic = db.prepare("INSERT INTO topics (id, title, icon, description, difficulty, tutorial) VALUES (?, ?, ?, ?, ?, ?)");
    const stmtQuestion = db.prepare("INSERT INTO questions (topic_id, question, options, correct, explanation) VALUES (?, ?, ?, ?, ?)");

    let topicsInserted = 0;
    let questionsInserted = 0;

    quizData.topics.forEach(topic => {
        stmtTopic.run(topic.id, topic.title, topic.icon, topic.description, topic.difficulty, topic.tutorial, (err) => {
            if (err) console.error(`Error inserting topic ${topic.id}:`, err);
            else topicsInserted++;
        });

        topic.questions.forEach(q => {
            stmtQuestion.run(topic.id, q.question, JSON.stringify(q.options), q.correct, q.explanation, (err) => {
                if (err) console.error(`Error inserting question for ${topic.id}:`, err);
                else questionsInserted++;
            });
        });
    });

    stmtTopic.finalize();
    stmtQuestion.finalize();
}, (err) => {
    if (err) console.error("Database error during serialization:", err);
});

// Use a timeout to ensure all callbacks (which are async via stmt.run) have finished 
// since stmt.run callbacks happen outside the main serialize block sequence if many are queued.
// Actually, in sqlite3, closing the DB will wait for pending statements if called correctly.
// But let's verify after a short delay.
setTimeout(() => {
    db.all("SELECT COUNT(*) as count FROM topics", [], (err, rows) => {
        console.log(`Final Topics Count: ${rows[0].count}`);
        db.all("SELECT COUNT(*) as count FROM questions", [], (err, rows) => {
            console.log(`Final Questions Count: ${rows[0].count}`);
            db.close((err) => {
                if (err) console.error("Error closing database:", err);
                else console.log("Database seeded and closed successfully!");
            });
        });
    });
}, 2000);
