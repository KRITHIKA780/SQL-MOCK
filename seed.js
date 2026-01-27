const sqlite3 = require('sqlite3').verbose();
const quizData = require('./questions.js');

const db = new sqlite3.Database('./quiz.db');

db.serialize(() => {
    // create topics table
    db.run(`CREATE TABLE IF NOT EXISTS topics (
        id TEXT PRIMARY KEY,
        title TEXT,
        icon TEXT,
        description TEXT,
        difficulty TEXT,
        tutorial TEXT
    )`);

    // create questions table
    db.run(`CREATE TABLE IF NOT EXISTS questions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        topic_id TEXT,
        question TEXT,
        options TEXT,
        correct INTEGER,
        explanation TEXT,
        FOREIGN KEY(topic_id) REFERENCES topics(id)
    )`);

    const stmtTopic = db.prepare("INSERT OR REPLACE INTO topics VALUES (?, ?, ?, ?, ?, ?)");
    const stmtQuestion = db.prepare("INSERT INTO questions (topic_id, question, options, correct, explanation) VALUES (?, ?, ?, ?, ?)");

    // Clear existing data to avoid duplicates during re-runs
    db.run("DELETE FROM questions");
    db.run("DELETE FROM topics");

    quizData.topics.forEach(topic => {
        stmtTopic.run(topic.id, topic.title, topic.icon, topic.description, topic.difficulty, topic.tutorial);

        topic.questions.forEach(q => {
            stmtQuestion.run(topic.id, q.question, JSON.stringify(q.options), q.correct, q.explanation);
        });
    });

    stmtTopic.finalize();
    stmtQuestion.finalize();

    console.log("Database seeded successfully!");
});

db.close();
