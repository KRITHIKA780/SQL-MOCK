# SQL Master - Quiz Application

A beautiful, interactive SQL learning and testing application with 50+ questions covering 8 comprehensive topics.

## Features

### 🎯 Two Learning Modes
- **Learning Mode**: Practice with instant feedback and explanations after each question
- **Mock Test Mode**: Timed test with final results (simulates real exam conditions)

### 📚 8 Comprehensive Topics
1. **SQL Basics** - Fundamental SQL concepts and syntax (Easy)
2. **SQL Joins** - Understanding different types of joins (Medium)
3. **SQL Functions** - Aggregate and scalar functions (Medium)
4. **GROUP BY & HAVING** - Grouping and filtering grouped data (Medium)
5. **Subqueries** - Nested queries and subqueries (Hard)
6. **Constraints & Keys** - Primary keys, foreign keys, and constraints (Medium)
7. **Indexes & Performance** - Database optimization and indexes (Hard)
8. **Transactions & ACID** - Transaction management and ACID properties (Hard)

### ✨ Key Features
- **50+ Questions** with detailed explanations
- **Progress Tracking** with visual progress bar
- **Timer** to track your quiz duration
- **Score Tracking** with local storage for best scores
- **Review Mode** to review all answers with explanations
- **Beautiful UI** with modern design, gradients, and animations
- **Responsive Design** works on desktop, tablet, and mobile
- **Dark Theme** with glassmorphism effects

## How to Run

### Option 1: Direct File Opening
1. Navigate to the project folder: `C:\Users\Krithika\.gemini\antigravity\scratch\sql-quiz-app`
2. Double-click on `index.html` to open it in your default browser

### Option 2: Using a Local Server (Recommended)
1. Open PowerShell or Command Prompt
2. Navigate to the project folder:
   ```powershell
   cd C:\Users\Krithika\.gemini\antigravity\scratch\sql-quiz-app
   ```
3. Start a simple HTTP server:
   
   **Using Python 3:**
   ```powershell
   python -m http.server 8000
   ```
   
   **Using Node.js (if installed):**
   ```powershell
   npx http-server -p 8000
   ```

4. Open your browser and go to: `http://localhost:8000`

### Option 3: Using Live Server (VS Code)
1. Open the project folder in VS Code
2. Install the "Live Server" extension if you haven't already
3. Right-click on `index.html` and select "Open with Live Server"

## How to Use

### Getting Started
1. **Choose Your Mode**
   - Click "Learning Mode" for practice with instant feedback
   - Click "Mock Test" for a timed test experience

2. **Select a Topic**
   - Browse through 8 different SQL topics
   - Each topic shows difficulty level and number of questions

3. **Take the Quiz**
   - Read each question carefully
   - Select your answer from the options
   - In Learning Mode: Get instant feedback and explanations
   - In Mock Test: See all results at the end

4. **Review Your Performance**
   - View your score and statistics
   - Review all questions with correct answers and explanations
   - Track your best score on the home screen

## Project Structure

```
sql-quiz-app/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling with animations
├── questions.js        # Question database (50+ questions)
├── app.js             # Application logic and interactivity
└── README.md          # This file
```

## Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with:
  - CSS Variables
  - Flexbox & Grid
  - Animations & Transitions
  - Glassmorphism effects
  - Gradient backgrounds
- **Vanilla JavaScript** - No frameworks, pure JS for:
  - Quiz logic
  - Timer functionality
  - Score tracking
  - Local storage
  - Dynamic UI updates

## Browser Compatibility

Works best on modern browsers:
- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Opera

## Features in Detail

### Learning Mode
- Answer questions one by one
- Get immediate feedback (correct/incorrect)
- Read detailed explanations for each answer
- Skip questions if needed
- No time pressure

### Mock Test Mode
- All questions shuffled randomly
- Timer tracks your progress
- No immediate feedback
- See results only at the end
- Simulates real exam conditions

### Results Screen
- Visual score circle with percentage
- Breakdown of correct, incorrect, and skipped questions
- Time taken to complete the quiz
- Trophy icon based on performance:
  - 🏆 90%+ : Outstanding!
  - 🎉 70-89% : Great Job!
  - 👍 50-69% : Good Effort!
  - 📚 Below 50% : Keep Learning!

### Review Mode
- See all questions with your answers
- Compare with correct answers
- Read explanations for better understanding
- Color-coded status (correct/incorrect/skipped)

## Customization

### Adding More Questions
Edit `questions.js` and add questions to any topic:

```javascript
{
    question: 'Your question here?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correct: 0, // Index of correct answer (0-3)
    explanation: 'Detailed explanation here'
}
```

### Adding New Topics
Add a new topic object to the `topics` array in `questions.js`:

```javascript
{
    id: 'topic-id',
    title: 'Topic Title',
    icon: '📌',
    description: 'Topic description',
    difficulty: 'easy', // easy, medium, or hard
    questions: [
        // Add questions here
    ]
}
```

### Changing Colors
Modify CSS variables in `styles.css`:

```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    /* Add more customizations */
}
```

## Tips for Best Experience

1. **Use Learning Mode First** - Get familiar with questions and learn from explanations
2. **Try Mock Test** - Test your knowledge under timed conditions
3. **Review Your Answers** - Always review to understand mistakes
4. **Track Progress** - Your best score is saved automatically
5. **Practice Regularly** - Repetition helps retain SQL knowledge

## Future Enhancements (Ideas)

- [ ] Add more questions (100+ questions)
- [ ] Add difficulty levels within topics
- [ ] Export results as PDF
- [ ] User accounts and cloud sync
- [ ] Leaderboard system
- [ ] Code editor for SQL practice
- [ ] More advanced topics (Views, Stored Procedures, etc.)
- [ ] Multi-language support

## License

This project is free to use for educational purposes.

## Support

For issues or questions, please check:
1. Make sure all files are in the same directory
2. Use a modern browser (Chrome/Edge recommended)
3. Check browser console for any errors (F12)

---

**Happy Learning! 🚀**

Master SQL one question at a time!
