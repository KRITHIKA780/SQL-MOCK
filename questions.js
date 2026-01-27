// SQL Quiz Questions Database
const quizData = {
    topics: [
        {
            id: 'basics',
            title: 'SQL Basics',
            icon: '📝',
            description: 'Syntax, SELECT, INSERT, UPDATE, DELETE',
            difficulty: 'easy',
            tutorial: `
                <h3>SQL Introduction</h3>
                <p>SQL is a standard language for storing, manipulating and retrieving data in databases.</p>
                <h4>Key Statements</h4>
                <ul>
                    <li><strong>SELECT</strong>: Extracts data.</li>
                    <li><strong>UPDATE</strong>: Updates data.</li>
                    <li><strong>DELETE</strong>: Deletes data.</li>
                    <li><strong>INSERT INTO</strong>: Inserts new data.</li>
                </ul>
                <h4>Distinct & Filtering</h4>
                <ul>
                    <li><strong>SELECT DISTINCT</strong>: Returns only distinct (different) values.</li>
                    <li><strong>WHERE</strong>: Filters records.</li>
                    <li><strong>AND, OR, NOT</strong>: Operators to filter records based on more than one condition.</li>
                </ul>
            `,
            questions: [
                {
                    question: 'What does SQL stand for?',
                    options: ['Structured Query Language', 'Simple Question Language', 'Standard Query Logic', 'System Query Language'],
                    correct: 0,
                    explanation: 'SQL stands for Structured Query Language.'
                },
                {
                    question: 'Which statement is used to extract data from a database?',
                    options: ['GET', 'SELECT', 'EXTRACT', 'OPEN'],
                    correct: 1,
                    explanation: 'SELECT is used to select data from a database.'
                },
                {
                    question: 'Which statement is used to update data in a database?',
                    options: ['MODIFY', 'UPDATE', 'SAVE', 'CHANGE'],
                    correct: 1,
                    explanation: 'UPDATE is used to modify the existing records in a table.'
                },
                {
                    question: 'How do you select all columns from a table named "Customers"?',
                    options: ['SELECT * FROM Customers', 'SELECT [all] FROM Customers', 'SELECT Customers', 'SELECT *.Customers'],
                    correct: 0,
                    explanation: 'The asterisk (*) wildcard selects all columns from the table.'
                },
                {
                    question: 'Which keyword is used to return only different values?',
                    options: ['UNIQUE', 'DIFFERENT', 'DISTINCT', 'COUNT'],
                    correct: 2,
                    explanation: 'SELECT DISTINCT is used to return only distinct (different) values.'
                },
                {
                    question: 'Which SQL operator is used to display a record if all the conditions separated by AND are TRUE?',
                    options: ['AND', 'OR', 'NOT', 'BOTH'],
                    correct: 0,
                    explanation: 'The AND operator displays a record if all the conditions separated by AND are TRUE.'
                },
                {
                    question: 'How do you select a column named "City" from a table named "Customers"?',
                    options: ['SELECT City FROM Customers', 'EXTRACT City FROM Customers', 'SELECT Customers.City', 'GET City FROM Customers'],
                    correct: 0,
                    explanation: 'The correct syntax is SELECT column_name FROM table_name.'
                },
                {
                    question: 'Which operator displays a record if any of the conditions separated by OR is TRUE?',
                    options: ['AND', 'OR', 'NOT', 'EITHER'],
                    correct: 1,
                    explanation: 'The OR operator displays a record if any of the conditions separated by OR is TRUE.'
                },
                {
                    question: 'How do you insert a new record into the "Persons" table?',
                    options: [
                        'INSERT INTO Persons VALUES (\'Jimmy\', \'Doe\')',
                        'INSERT (\'Jimmy\', \'Doe\') INTO Persons',
                        'ADD RECORD Persons VALUES (\'Jimmy\', \'Doe\')',
                        'INSERT Persons VALUES (\'Jimmy\', \'Doe\')'
                    ],
                    correct: 0,
                    explanation: 'INSERT INTO table_name VALUES (value1, value2, ...) is the correct syntax.'
                },
                {
                    question: 'Which keyword adds a condition to a SELECT statement?',
                    options: ['IF', 'WHERE', 'WHEN', 'THEN'],
                    correct: 1,
                    explanation: 'The WHERE clause is used to filter records.'
                }
            ]
        },
        {
            id: 'filtering',
            title: 'Filtering & Sorting',
            icon: '🔍',
            description: 'Wildcards, LIKE, BETWEEN, ORDER BY',
            difficulty: 'easy',
            tutorial: `
                <h3>Filtering Data</h3>
                <p>SQL provides powerful operators to filter specific data:</p>
                <ul>
                    <li><strong>ORDER BY</strong>: Sorts the result set.</li>
                    <li><strong>NULL Values</strong>: Use IS NULL and IS NOT NULL to test.</li>
                    <li><strong>limit</strong>: TOP or LIMIT to specify the number of records.</li>
                    <li><strong>LIKE</strong>: Search for a pattern (used with %, _).</li>
                    <li><strong>IN</strong>: Specify multiple values in a WHERE clause.</li>
                    <li><strong>BETWEEN</strong>: Selects values within a given range.</li>
                    <li><strong>AS</strong>: Aliases for columns or tables.</li>
                </ul>
            `,
            questions: [
                {
                    question: 'Which keyword is used to sort the result-set?',
                    options: ['SORT', 'ORDER BY', 'SORT BY', 'ARRANGE'],
                    correct: 1,
                    explanation: 'ORDER BY is used to sort the result-set in ascending or descending order.'
                },
                {
                    question: 'How can you return all records from "Customers" sorted descending by "Country"?',
                    options: [
                        'SELECT * FROM Customers ORDER BY Country DESC',
                        'SELECT * FROM Customers SORT BY Country DESC',
                        'SELECT * FROM Customers ORDER Country DESC',
                        'SELECT * FROM Customers SORT Country DESC'
                    ],
                    correct: 0,
                    explanation: 'Use ORDER BY column_name DESC to sort in descending order.'
                },
                {
                    question: 'How do you test for a NULL value?',
                    options: ['IS NULL', '= NULL', 'IS EMPTY', '== NULL'],
                    correct: 0,
                    explanation: 'Use IS NULL to test for NULL values. You cannot use comparison operators like =, <, or > with NULL.'
                },
                {
                    question: 'Which operator is used to search for a specified pattern in a column?',
                    options: ['LIKE', 'MATCH', 'SEARCH', 'FIND'],
                    correct: 0,
                    explanation: 'The LIKE operator is used in a WHERE clause to search for a specified pattern.'
                },
                {
                    question: 'Which wildcard represents zero, one, or multiple characters?',
                    options: ['*', '?', '%', '_'],
                    correct: 2,
                    explanation: 'The percent sign (%) represents zero, one, or multiple characters.'
                },
                {
                    question: 'Which wildcard represents a single character?',
                    options: ['?', '_', '%', '.'],
                    correct: 1,
                    explanation: 'The underscore (_) represents a single character.'
                },
                {
                    question: 'Which operator allows you to specify multiple values in a WHERE clause?',
                    options: ['IN', 'BETWEEN', 'EXISTS', 'MANY'],
                    correct: 0,
                    explanation: 'The IN operator allows you to specify multiple values in a WHERE clause.'
                },
                {
                    question: 'Which operator selects values within a given range?',
                    options: ['IN', 'WITHIN', 'RANGE', 'BETWEEN'],
                    correct: 3,
                    explanation: 'The BETWEEN operator selects values within a given range (inclusive).'
                },
                {
                    question: 'How do you create an alias for a column named "CustomerID"?',
                    options: [
                        'SELECT CustomerID AS ID',
                        'SELECT CustomerID NAME ID',
                        'SELECT CustomerID IS ID',
                        'SELECT CustomerID = ID'
                    ],
                    correct: 0,
                    explanation: 'The AS keyword is used to give a table or a column a temporary alias.'
                }
            ]
        },
        {
            id: 'joins',
            title: 'Joins & Unions',
            icon: '🔗',
            description: 'INNER, LEFT, RIGHT, FULL Joins and UNION',
            difficulty: 'medium',
            tutorial: `
                <h3>SQL Joins</h3>
                <p>A JOIN clause is used to combine rows from two or more tables.</p>
                <ul>
                    <li><strong>INNER JOIN</strong>: Matching values in both tables.</li>
                    <li><strong>LEFT JOIN</strong>: All from left, matched from right.</li>
                    <li><strong>RIGHT JOIN</strong>: All from right, matched from left.</li>
                    <li><strong>FULL JOIN</strong>: Match in either table.</li>
                </ul>
                <h3>SQL UNION</h3>
                <p><strong>UNION</strong> operator combines the result-set of two or more SELECT statements.</p>
            `,
            questions: [
                {
                    question: 'Which JOIN returns rows when there is a match in both tables?',
                    options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL JOIN'],
                    correct: 0,
                    explanation: 'INNER JOIN returns records that have matching values in both tables.'
                },
                {
                    question: 'Which JOIN returns all records from the left table, and the matched records from the right?',
                    options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'CROSS JOIN'],
                    correct: 1,
                    explanation: 'LEFT JOIN returns all records from the left table, and the matched records from the right table.'
                },
                {
                    question: 'Which JOIN returns all records from the right table, and the matched records from the left?',
                    options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL JOIN'],
                    correct: 2,
                    explanation: 'RIGHT JOIN returns all records from the right table, and the matched records from the left table.'
                },
                {
                    question: 'Which JOIN returns all records when there is a match in either left or right table?',
                    options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL JOIN'],
                    correct: 3,
                    explanation: 'FULL JOIN (or FULL OUTER JOIN) returns all records when there is a match in either left or right table.'
                },
                {
                    question: 'What is the default JOIN type if you just specify JOIN?',
                    options: ['LEFT JOIN', 'INNER JOIN', 'OUTER JOIN', 'CROSS JOIN'],
                    correct: 1,
                    explanation: 'INNER JOIN is the default if you don\'t specify the type.'
                },
                {
                    question: 'The UNION operator selects only:',
                    options: ['Distinct values', 'Duplicate values', 'All values', 'Null values'],
                    correct: 0,
                    explanation: 'The UNION operator selects only distinct values by default. To allow duplicates, use UNION ALL.'
                },
                {
                    question: 'How do you combine results of two queries including duplicate rows?',
                    options: ['UNION', 'UNION ALL', 'JOIN', 'COMBINE'],
                    correct: 1,
                    explanation: 'UNION ALL combines the result set of two or more SELECT statements, including duplicates.'
                },
                {
                    question: 'What happens if a LEFT JOIN finds no match in the right table?',
                    options: [
                        'It returns NULL for right table columns',
                        'It excludes the row',
                        'It returns an error',
                        'It returns default values'
                    ],
                    correct: 0,
                    explanation: 'If there is no match, the result is NULL on the side of the right table.'
                }
            ]
        },
        {
            id: 'grouping',
            title: 'Grouping & Functions',
            icon: '📊',
            description: 'GROUP BY, HAVING, COUNT, SUM, AVG',
            difficulty: 'medium',
            tutorial: `
                <h3>Grouping Data</h3>
                <p>The <strong>GROUP BY</strong> statement groups rows that have the same values into summary rows.</p>
                <p>The <strong>HAVING</strong> clause operates on grouped records (since WHERE cannot be used with aggregates).</p>
                <h3>Functions</h3>
                <ul>
                    <li>MIN(), MAX(): Smallest/Largest value.</li>
                    <li>COUNT(), AVG(), SUM(): Count, Average, Total Sum.</li>
                </ul>
            `,
            questions: [
                {
                    question: 'Which statement groups rows that have the same values?',
                    options: ['ORDER BY', 'GROUP BY', 'HAVING', 'AGGREGATE'],
                    correct: 1,
                    explanation: 'GROUP BY groups rows that have the same values into summary rows.'
                },
                {
                    question: 'Which clause is used to filter groups?',
                    options: ['WHERE', 'HAVING', 'FILTER', 'GROUP'],
                    correct: 1,
                    explanation: 'The HAVING clause was added to SQL because the WHERE keyword could not be used with aggregate functions.'
                },
                {
                    question: 'Which function returns the number of records?',
                    options: ['NUM()', 'COUNT()', 'TOTAL()', 'SUM()'],
                    correct: 1,
                    explanation: 'COUNT() returns the number of rows that matches a specified criterion.'
                },
                {
                    question: 'Which function returns the average value?',
                    options: ['AVERAGE()', 'AVG()', 'MEAN()', 'MEDIAN()'],
                    correct: 1,
                    explanation: 'AVG() returns the average value of a numeric column.'
                },
                {
                    question: 'The HAVING clause must follow which clause?',
                    options: ['ORDER BY', 'GROUP BY', 'WHERE', 'SELECT'],
                    correct: 1,
                    explanation: 'HAVING comes after GROUP BY.'
                },
                {
                    question: 'Can you use WHERE with aggregate functions?',
                    options: ['Yes', 'No', 'Sometimes', 'Only with Count'],
                    correct: 1,
                    explanation: 'No, aggregate functions cannot be used in the WHERE clause. Use HAVING instead.'
                },
                {
                    question: 'Which function returns the largest value?',
                    options: ['TOP()', 'MAX()', 'HIGH()', 'UPPER()'],
                    correct: 1,
                    explanation: 'MAX() returns the largest value of the selected column.'
                },
                {
                    question: 'Which logic operator tests for the existence of any record in a subquery?',
                    options: ['EXISTS', 'IN', 'ANY', 'ALL'],
                    correct: 0,
                    explanation: 'The EXISTS operator is used to test for the existence of any record in a subquery.'
                }
            ]
        },
        {
            id: 'database',
            title: 'Database Management',
            icon: '🏗️',
            description: 'CREATE, DROP, ALTER, Constraints, Keys',
            difficulty: 'hard',
            tutorial: `
                <h3>DDL (Data Definition Language)</h3>
                <ul>
                    <li><strong>CREATE DATABASE/TABLE</strong>: Creates a new DB or table.</li>
                    <li><strong>DROP DATABASE/TABLE</strong>: Deletes a DB or table.</li>
                    <li><strong>ALTER TABLE</strong>: Modifies, adds, or deletes columns.</li>
                </ul>
                <h3>Constraints</h3>
                <ul>
                    <li><strong>NOT NULL</strong>, <strong>UNIQUE</strong></li>
                    <li><strong>PRIMARY KEY</strong>, <strong>FOREIGN KEY</strong></li>
                    <li><strong>CHECK</strong>, <strong>DEFAULT</strong>, <strong>INDEX</strong></li>
                </ul>
            `,
            questions: [
                {
                    question: 'Which statement is used to create a new database?',
                    options: ['NEW DATABASE', 'CREATE DATABASE', 'ADD DATABASE', 'OPEN DATABASE'],
                    correct: 1,
                    explanation: 'CREATE DATABASE statement is used to create a new SQL database.'
                },
                {
                    question: 'Which statement is used to create a new table in a database?',
                    options: ['CREATE TABLE', 'NEW TABLE', 'ADD TABLE', 'MAKE TABLE'],
                    correct: 0,
                    explanation: 'CREATE TABLE statement is used to create a new table.'
                },
                {
                    question: 'Which statement is used to delete a table?',
                    options: ['DELETE TABLE', 'DROP TABLE', 'REMOVE TABLE', 'CLEAR TABLE'],
                    correct: 1,
                    explanation: 'DROP TABLE statement is used to drop an existing table in a database.'
                },
                {
                    question: 'Which statement is used to add a column to an existing table?',
                    options: ['MODIFY TABLE', 'INSERT COLUMN', 'ALTER TABLE', 'UPDATE TABLE'],
                    correct: 2,
                    explanation: 'ALTER TABLE is used to add, delete, or modify columns in an existing table.'
                },
                {
                    question: 'What constraint uniquely identifies each record in a table?',
                    options: ['FOREIGN KEY', 'PRIMARY KEY', 'UNIQUE', 'INDEX'],
                    correct: 1,
                    explanation: 'A PRIMARY KEY uniquely identifies each record in a table.'
                },
                {
                    question: 'Which constraint ensures that a column cannot have a NULL value?',
                    options: ['NOT NULL', 'UNIQUE', 'PRIMARY KEY', 'CHECK'],
                    correct: 0,
                    explanation: 'The NOT NULL constraint enforces a column to NOT accept NULL values.'
                },
                {
                    question: 'What is a FOREIGN KEY?',
                    options: [
                        'A key that is foreign to the database',
                        'A key that links two tables together',
                        'A key that must be unique',
                        'A key that automatically increments'
                    ],
                    correct: 1,
                    explanation: 'A FOREIGN KEY is a field in one table that refers to the PRIMARY KEY in another table.'
                },
                {
                    question: 'Which SQL statement creates an index on a table?',
                    options: ['CREATE INDEX', 'ADD INDEX', 'MAKE INDEX', 'NEW INDEX'],
                    correct: 0,
                    explanation: 'CREATE INDEX is used to create indexes in tables.'
                },
                {
                    question: 'What is the purpose of the CHECK constraint?',
                    options: [
                        'To check for duplicates',
                        'To limit the value range in a column',
                        'To check if table exists',
                        'To verify foreign keys'
                    ],
                    correct: 1,
                    explanation: 'The CHECK constraint is used to limit the value range that can be placed in a column.'
                }
            ]
        },
        {
            id: 'advanced',
            title: 'Advanced & Security',
            icon: '🛡️',
            description: 'Views, Injection, Auto Increment, Dates',
            difficulty: 'hard',
            tutorial: `
                <h3>Advanced Topics</h3>
                <ul>
                    <li><strong>Views</strong>: Virtual tables based on the result-set of an SQL statement.</li>
                    <li><strong>SQL Injection</strong>: A code injection technique to attack data-driven applications.</li>
                    <li><strong>AUTO INCREMENT</strong>: Allows a unique number to be generated automatically.</li>
                    <li><strong>Dates</strong>: Working with Date/Time types.</li>
                </ul>
            `,
            questions: [
                {
                    question: 'What is an SQL View?',
                    options: [
                        'A table that is viewed only',
                        'A virtual table based on the result of a SQL statement',
                        'A report generated by SQL',
                        'A special permission'
                    ],
                    correct: 1,
                    explanation: 'In SQL, a view is a virtual table based on the result-set of an SQL statement.'
                },
                {
                    question: 'Which statement is used to update a view?',
                    options: ['UPDATE VIEW', 'CREATE OR REPLACE VIEW', 'MODIFY VIEW', 'ALTER VIEW'],
                    correct: 1,
                    explanation: 'CREATE OR REPLACE VIEW is used to update a view.'
                },
                {
                    question: 'What is SQL Injection?',
                    options: [
                        'A way to inject data into database',
                        'A performance optimization technique',
                        'A code injection technique to attack applications',
                        'A database installation method'
                    ],
                    correct: 2,
                    explanation: 'SQL injection is a code injection technique that might destroy your database. It happens when malicious SQL statements are inserted into entry fields for execution.'
                },
                {
                    question: 'How do you generate a unique number automatically when a new record is inserted?',
                    options: ['SEQUENCE', 'AUTO INCREMENT', 'UNIQUE ID', 'IDENTITY'],
                    correct: 1,
                    explanation: 'AUTO INCREMENT field allows a unique number to be generated automatically when a new record is inserted into the table.'
                },
                {
                    question: 'Which function returns the current date and time?',
                    options: ['GETDATE()', 'NOW()', 'CURRENT_TIME', 'DATE()'],
                    correct: 1,
                    explanation: 'Now() returns the current date and time (Note: syntax varies by DB, but NOW() is common in standard SQL quizzes regarding MySQL/Postgres).'
                },
                {
                    question: 'What is the most important rule to prevent SQL injection?',
                    options: [
                        'Use simple passwords',
                        'Use SQL parameters / Prepared Statements',
                        'Only read-only access',
                        'Hide the database name'
                    ],
                    correct: 1,
                    explanation: 'SQL parameters (or prepared statements) are the primary defense against SQL injection.'
                },
                {
                    question: 'Which datatype would you use for a fixed length string?',
                    options: ['VARCHAR', 'TEXT', 'CHAR', 'STRING'],
                    correct: 2,
                    explanation: 'CHAR is used for fixed length strings. VARCHAR is for variable length.'
                }
            ]
        }
    ]
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = quizData;
}
