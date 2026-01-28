// Application State
let currentMode = 'test'; // Default to test mode
let currentTopic = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let startTime = null;
let timerInterval = null;
let score = {
    correct: 0,
    incorrect: 0,
    skipped: 0
};

// DOM Elements
const screens = {
    home: document.getElementById('home-screen'),
    registration: document.getElementById('registration-screen'),
    dashboard: document.getElementById('dashboard-screen'),
    topic: document.getElementById('topic-screen'),
    quiz: document.getElementById('quiz-screen'),
    results: document.getElementById('results-screen'),
    review: document.getElementById('review-screen'),
    tutorial: document.getElementById('tutorial-screen')
};

let userRegistration = null; // Store user registration data

// Global function for button click (inline onclick backup)
function handleStartTestClick() {
    console.log('handleStartTestClick called!');
    currentMode = 'test';
    showScreen('registration');
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    console.log('SQL Master App v2.0 - Initializing...');
    initializeEventListeners();
    initializeInteractiveEffects();
    checkExistingUser();
    loadTopics();
    updateStats();
    console.log('App initialized successfully!');
});

function checkExistingUser() {
    const savedUser = localStorage.getItem('sql_user');
    if (savedUser) {
        userRegistration = JSON.parse(savedUser);
        console.log('Returning user found:', userRegistration.name);
        populateDashboard();
        showScreen('dashboard');
    }
}

// Interactive Micro-interactions
function initializeInteractiveEffects() {
    // Mouse tracking for "shiny" buttons
    document.addEventListener('mousemove', (e) => {
        const buttons = document.querySelectorAll('.mode-btn, .topic-card, .stat-card, .submit-btn, .dash-card, .dash-mode-item');
        buttons.forEach(btn => {
            const rect = btn.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / btn.clientWidth) * 100;
            const y = ((e.clientY - rect.top) / btn.clientHeight) * 100;
            btn.style.setProperty('--x', `${x}%`);
            btn.style.setProperty('--y', `${y}%`);
        });
    });
}

// Event Listeners
function initializeEventListeners() {
    console.log('Setting up event listeners...');

    // Mode selection
    const startBtn = document.getElementById('start-test-btn');
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            console.log('Start Mock Test clicked!');
            currentMode = 'test';
            showScreen('registration');
        });
    }

    const learnBtn = document.getElementById('start-learn-btn');
    if (learnBtn) {
        learnBtn.addEventListener('click', () => {
            console.log('Learn Topics clicked!');
            selectMode('learn');
        });
    }

    // Registration Form
    const regForm = document.getElementById('registration-form');
    if (regForm) {
        regForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleRegistration(e);
        });
    }

    // Navigation - with null checks
    const backToHomeFromReg = document.getElementById('back-to-home-from-reg');
    if (backToHomeFromReg) {
        backToHomeFromReg.addEventListener('click', () => showScreen('home'));
    }

    const backToHome = document.getElementById('back-to-home');
    if (backToHome) {
        backToHome.addEventListener('click', () => showScreen('home'));
    }

    const backToTopics = document.getElementById('back-to-topics');
    if (backToTopics) {
        backToTopics.addEventListener('click', () => showScreen('topic'));
    }

    const backToTopicsFromTutorial = document.getElementById('back-to-topics-from-tutorial');
    if (backToTopicsFromTutorial) {
        backToTopicsFromTutorial.addEventListener('click', () => showScreen('topic'));
    }

    const backToResults = document.getElementById('back-to-results');
    if (backToResults) {
        backToResults.addEventListener('click', () => showScreen('results'));
    }

    // Tutorial actions
    const startPracticeBtn = document.getElementById('start-practice-btn');
    if (startPracticeBtn) {
        startPracticeBtn.addEventListener('click', () => startQuiz(currentTopic));
    }

    // Quiz actions
    const skipBtn = document.getElementById('skip-btn');
    if (skipBtn) {
        skipBtn.addEventListener('click', skipQuestion);
    }

    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
        nextBtn.addEventListener('click', nextQuestion);
    }

    const finishBtn = document.getElementById('finish-btn');
    if (finishBtn) {
        finishBtn.addEventListener('click', finishQuiz);
    }

    // Results actions
    const reviewBtn = document.getElementById('review-btn');
    if (reviewBtn) {
        reviewBtn.addEventListener('click', showReview);
    }

    const retryBtn = document.getElementById('retry-btn');
    if (retryBtn) {
        retryBtn.addEventListener('click', retryQuiz);
    }

    const homeBtn = document.getElementById('home-btn');
    if (homeBtn) {
        homeBtn.addEventListener('click', () => showScreen('home'));
    }
}

// Handle Registration
function handleRegistration(e) {
    const formData = new FormData(e.target);
    const name = document.getElementById('reg-name').value;
    const level = document.getElementById('reg-level').value;
    const phone = document.getElementById('reg-phone').value;
    const age = document.getElementById('reg-age').value;
    const gender = document.getElementById('reg-gender').value;

    userRegistration = {
        name,
        level,
        phone,
        age,
        gender
    };

    // Store in localStorage for persistence
    localStorage.setItem('sql_user', JSON.stringify(userRegistration));

    // Proceed to Dashboard
    populateDashboard();
    showScreen('dashboard');
}

function populateDashboard() {
    if (!userRegistration) return;

    const name = userRegistration.name.split(' ')[0];
    document.getElementById('dash-welcome').textContent = `Welcome back, ${name}!`;
    document.getElementById('dash-level-text').textContent = `Level: ${userRegistration.level.charAt(0).toUpperCase() + userRegistration.level.slice(1)}`;

    // Get stats from localStorage or defaults
    const stats = JSON.parse(localStorage.getItem('sql_stats')) || {
        quizzesTaken: 0,
        avgAccuracy: 0,
        streak: 1,
        bestScore: 0,
        points: 0
    };

    document.getElementById('dash-quizzes').textContent = stats.quizzesTaken;
    document.getElementById('dash-accuracy').textContent = `${stats.avgAccuracy}%`;
    document.getElementById('dash-best-val').textContent = `${stats.bestScore}%`;
    document.getElementById('dash-streak-val').textContent = `${stats.streak} Day${stats.streak !== 1 ? 's' : ''}`;
    document.getElementById('dash-points-val').textContent = stats.points;
}

function startMode(mode) {
    currentMode = mode;
    showScreen('topic');
}

// Mode Selection
function selectMode(mode) {
    currentMode = mode;
    const title = mode === 'learn' ? 'Select a Topic to Learn' : 'Select a Topic for Mock Test';
    document.getElementById('topic-screen-title').textContent = title;
    showScreen('topic');
}

// Screen Management
function showScreen(screenName) {
    console.log('Switching to screen:', screenName);
    console.log('Available screens:', Object.keys(screens));

    Object.values(screens).forEach(screen => {
        if (screen) screen.classList.remove('active');
    });

    if (screens[screenName]) {
        // Use a small timeout for a cleaner animation reset if coming from hidden
        setTimeout(() => {
            screens[screenName].classList.add('active');
            console.log('Screen activated:', screenName);
        }, 50);
    } else {
        console.error('Screen not found:', screenName);
    }

    if (screenName === 'home') {
        resetQuiz();
    }
}

// Load Topics
async function loadTopics() {
    try {
        const response = await fetch('/api/topics');
        const result = await response.json();

        const topicsGrid = document.getElementById('topics-grid');
        topicsGrid.innerHTML = '';

        result.data.forEach(topic => {
            const topicCard = createTopicCard(topic);
            topicsGrid.appendChild(topicCard);
        });
    } catch (error) {
        console.error('Error loading topics:', error);
        document.getElementById('topics-grid').innerHTML = '<p style="color:white; text-align:center;">Error loading topics. Please ensure the backend server is running.</p>';
    }
}

// Create Topic Card
function createTopicCard(topic) {
    const card = document.createElement('div');
    card.className = 'topic-card';
    card.innerHTML = `
        <span class="topic-icon">${topic.icon}</span>
        <h3 class="topic-title">${topic.title}</h3>
        <p class="topic-description">${topic.description}</p>
        <div class="topic-meta">
            <span class="topic-questions">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
                ${topic.questionCount} questions
            </span>
            <span class="topic-difficulty difficulty-${topic.difficulty}">
                ${topic.difficulty}
            </span>
        </div>
    `;

    card.addEventListener('click', async () => {
        // Fetch questions for this topic
        try {
            const response = await fetch(`/api/questions/${topic.id}`);
            const result = await response.json();
            const questions = result.data;

            // Attach questions to topic object for compatibility with existing logic
            const topicWithQuestions = { ...topic, questions: questions };
            currentTopic = topicWithQuestions;

            if (currentMode === 'learn') {
                showTutorial(topicWithQuestions);
            } else {
                startQuiz(topicWithQuestions);
            }
        } catch (error) {
            console.error('Error loading questions:', error);
            alert('Failed to load questions. Is the server running?');
        }
    });
    return card;
}

// Show Tutorial
function showTutorial(topic) {
    document.getElementById('tutorial-topic-title').textContent = topic.title;
    document.getElementById('tutorial-content').innerHTML = topic.tutorial || '<p>No tutorial available for this topic.</p>';
    showScreen('tutorial');
}

// Start Quiz
function startQuiz(topic) {
    currentTopic = topic;
    currentQuestions = [...topic.questions];
    currentQuestionIndex = 0;
    userAnswers = [];
    score = { correct: 0, incorrect: 0, skipped: 0 };
    startTime = Date.now();

    // Shuffle questions for test mode
    // Shuffle questions for mock test
    currentQuestions = shuffleArray(currentQuestions);

    document.getElementById('current-topic').textContent = topic.title;
    showScreen('quiz');

    // Timer only for test mode or optional? Let's keep timer for both but maybe hide it for learn mode?
    // User requirement: "good learning platform" usually means untimed practice.
    // Let's hide timer in learn mode.
    // Timer setup
    document.getElementById('timer').style.display = 'inline-block';
    startTimer();

    displayQuestion();
}

// Display Question
function displayQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    const totalQuestions = currentQuestions.length;

    // Update progress
    document.getElementById('question-counter').textContent =
        `Question ${currentQuestionIndex + 1}/${totalQuestions}`;
    document.getElementById('progress-fill').style.width =
        `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`;

    // Update question content
    document.getElementById('q-number').textContent = `Question ${currentQuestionIndex + 1}`;
    document.getElementById('question-text').textContent = question.question;

    // Hide code block by default
    document.getElementById('code-block').style.display = 'none';

    // Display options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionBtn = createOptionButton(option, index);
        optionsContainer.appendChild(optionBtn);
    });

    // Hide feedback and next button
    document.getElementById('feedback-box').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('finish-btn').style.display = 'none';

    // Show skip button
    document.getElementById('skip-btn').style.display = 'inline-block';
}

// Create Option Button
function createOptionButton(option, index) {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `
        <span class="option-letter">${String.fromCharCode(65 + index)}</span>
        <span class="option-text">${option}</span>
    `;

    btn.addEventListener('click', () => selectAnswer(index));
    return btn;
}

// Select Answer
function selectAnswer(selectedIndex) {
    const question = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedIndex === question.correct;

    // Store answer
    userAnswers[currentQuestionIndex] = {
        question: question.question,
        selected: selectedIndex,
        correct: question.correct,
        isCorrect: isCorrect,
        explanation: question.explanation,
        options: question.options
    };

    // Update score
    if (isCorrect) {
        score.correct++;
    } else {
        score.incorrect++;
    }

    // Disable all options
    const options = document.querySelectorAll('.option-btn');
    options.forEach((opt, idx) => {
        opt.classList.add('disabled');
        if (idx === question.correct) {
            opt.classList.add('correct');
        }
        if (idx === selectedIndex && !isCorrect) {
            opt.classList.add('incorrect');
        }
    });

    // Show feedback in learning mode
    // No immediate feedback in mock test mode

    // Hide skip button, show next/finish button
    document.getElementById('skip-btn').style.display = 'none';

    if (currentQuestionIndex < currentQuestions.length - 1) {
        document.getElementById('next-btn').style.display = 'inline-block';
    } else {
        document.getElementById('finish-btn').style.display = 'inline-block';
    }
}

// Show Feedback
function showFeedback(isCorrect, explanation) {
    const feedbackBox = document.getElementById('feedback-box');
    const feedbackIcon = document.getElementById('feedback-icon');
    const feedbackText = document.getElementById('feedback-text');

    feedbackBox.className = 'feedback-box ' + (isCorrect ? 'correct' : 'incorrect');
    feedbackIcon.textContent = isCorrect ? '✓' : '✗';
    feedbackText.innerHTML = `
        <strong>${isCorrect ? 'Correct!' : 'Incorrect'}</strong><br>
        ${explanation}
    `;

    feedbackBox.style.display = 'block';
}

// Skip Question
function skipQuestion() {
    userAnswers[currentQuestionIndex] = {
        question: currentQuestions[currentQuestionIndex].question,
        selected: null,
        correct: currentQuestions[currentQuestionIndex].correct,
        isCorrect: false,
        explanation: currentQuestions[currentQuestionIndex].explanation,
        options: currentQuestions[currentQuestionIndex].options,
        skipped: true
    };

    score.skipped++;

    if (currentQuestionIndex < currentQuestions.length - 1) {
        nextQuestion();
    } else {
        finishQuiz();
    }
}

// Next Question
function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

// Finish Quiz
function finishQuiz() {
    stopTimer();
    showResults();
}

// Show Results
function showResults() {
    const totalQuestions = currentQuestions.length;
    const percentage = Math.round((score.correct / totalQuestions) * 100);
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);

    // Update trophy and title based on score
    const trophyIcon = document.getElementById('trophy-icon');
    const resultsTitle = document.getElementById('results-title');
    const resultsSubtitle = document.getElementById('results-subtitle');

    if (percentage >= 90) {
        trophyIcon.textContent = '🏆';
        resultsTitle.textContent = 'Outstanding!';
        resultsSubtitle.textContent = 'You\'re an SQL master!';
    } else if (percentage >= 70) {
        trophyIcon.textContent = '🎉';
        resultsTitle.textContent = 'Great Job!';
        resultsSubtitle.textContent = 'You\'re doing really well!';
    } else if (percentage >= 50) {
        trophyIcon.textContent = '👍';
        resultsTitle.textContent = 'Good Effort!';
        resultsSubtitle.textContent = 'Keep practicing to improve!';
    } else {
        trophyIcon.textContent = '📚';
        resultsTitle.textContent = 'Keep Learning!';
        resultsSubtitle.textContent = 'Practice makes perfect!';
    }

    // Update score circle
    document.getElementById('score-percentage').textContent = `${percentage}%`;
    const circumference = 2 * Math.PI * 85;
    const offset = circumference - (percentage / 100) * circumference;
    document.getElementById('score-ring-fill').style.strokeDashoffset = offset;

    // Add gradient definition for score ring
    const svg = document.querySelector('.score-ring');
    if (!svg.querySelector('#scoreGradient')) {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        gradient.setAttribute('id', 'scoreGradient');
        gradient.innerHTML = `
            <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
        `;
        defs.appendChild(gradient);
        svg.appendChild(defs);
    }

    // Update stats
    document.getElementById('correct-count').textContent = score.correct;
    document.getElementById('incorrect-count').textContent = score.incorrect;
    document.getElementById('skipped-count').textContent = score.skipped;

    // Update time taken
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    document.getElementById('time-taken').textContent = `${minutes}m ${seconds}s`;

    // Update best score in local storage
    updateBestScore(percentage);

    showScreen('results');
}

// Show Review
function showReview() {
    const reviewContent = document.getElementById('review-content');
    reviewContent.innerHTML = '';

    userAnswers.forEach((answer, index) => {
        const reviewItem = createReviewItem(answer, index);
        reviewContent.appendChild(reviewItem);
    });

    showScreen('review');
}

// Create Review Item
function createReviewItem(answer, index) {
    const item = document.createElement('div');
    item.className = 'review-item';

    const status = answer.skipped ? 'skipped' : (answer.isCorrect ? 'correct' : 'incorrect');
    const statusText = answer.skipped ? 'Skipped' : (answer.isCorrect ? 'Correct' : 'Incorrect');

    let selectedAnswerHTML = '';
    if (!answer.skipped) {
        selectedAnswerHTML = `
            <div class="review-answer">
                <div class="review-answer-label">Your Answer:</div>
                <div class="review-answer-text ${answer.isCorrect ? 'correct' : 'incorrect'}">
                    ${answer.options[answer.selected]}
                </div>
            </div>
        `;
    }

    item.innerHTML = `
        <div class="review-header">
            <span class="review-question-number">Question ${index + 1}</span>
            <span class="review-status ${status}">${statusText}</span>
        </div>
        <h3 class="review-question">${answer.question}</h3>
        ${selectedAnswerHTML}
        <div class="review-answer">
            <div class="review-answer-label">Correct Answer:</div>
            <div class="review-answer-text correct">
                ${answer.options[answer.correct]}
            </div>
        </div>
        <div class="review-explanation">
            <strong>Explanation:</strong> ${answer.explanation}
        </div>
    `;

    return item;
}

// Retry Quiz
function retryQuiz() {
    startQuiz(currentTopic);
}

// Reset Quiz
function resetQuiz() {
    currentMode = null;
    currentTopic = null;
    currentQuestions = [];
    currentQuestionIndex = 0;
    userAnswers = [];
    score = { correct: 0, incorrect: 0, skipped: 0 };
    stopTimer();
}

// Timer Functions
function startTimer() {
    stopTimer();
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function updateTimer() {
    if (!startTime) return;

    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;

    document.getElementById('timer').textContent =
        `⏱️ ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Update Stats
function updateStats() {
    const bestScore = localStorage.getItem('sqlQuizBestScore') || 0;
    document.getElementById('user-score').textContent = `${bestScore}%`;
}

// Update Best Score
function updateBestScore(score) {
    const currentBest = parseInt(localStorage.getItem('sqlQuizBestScore') || 0);
    if (score > currentBest) {
        localStorage.setItem('sqlQuizBestScore', score);
        updateStats();
    }
}

// Utility Functions
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Add smooth scrolling to top when changing screens
function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Call scroll on screen changes
const originalShowScreen = showScreen;
showScreen = function (screenName) {
    originalShowScreen(screenName);
    smoothScrollToTop();
};
