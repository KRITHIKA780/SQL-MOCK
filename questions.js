// SQL Quiz Questions Database
const quizData = {
    topics: [
        {
            id: 'basics',
            title: 'SQL Basics',
            icon: '📝',
            description: 'Fundamental SQL concepts and syntax',
            difficulty: 'easy',
            tutorial: `
                <h3>Introduction to SQL</h3>
                <p>SQL (Structured Query Language) is the standard language for interacting with relational database management systems (RDBMS). It is used to store, manipulate, and retrieve data.</p>
                
                <h4>Key SQL Commands</h4>
                <ul>
                    <li><strong>SELECT</strong> - Extracts data from a database</li>
                    <li><strong>UPDATE</strong> - Updates data in a database</li>
                    <li><strong>DELETE</strong> - Deletes data from a database</li>
                    <li><strong>INSERT INTO</strong> - Inserts new data into a database</li>
                </ul>

                <h4>Basic Syntax</h4>
                <div class="code-example">
                    SELECT column1, column2 FROM table_name;
                </div>
                <p>SQL keywords (like SELECT, FROM) are NOT case sensitive, but it is a best practice to write them in uppercase.</p>
            `,
            questions: [
                {
                    question: 'What does SQL stand for?',
                    options: [
                        'Structured Query Language',
                        'Simple Question Language',
                        'Standard Query Logic',
                        'System Query Language'
                    ],
                    correct: 0,
                    explanation: 'SQL stands for Structured Query Language. It is a standard language for storing, manipulating, and retrieving data in databases.'
                },
                {
                    question: 'Which SQL statement is used to extract data from a database?',
                    options: ['GET', 'SELECT', 'EXTRACT', 'OPEN'],
                    correct: 1,
                    explanation: 'The SELECT statement is used to select data from a database. The data returned is stored in a result table.'
                },
                {
                    question: 'Which SQL keyword is used to sort the result-set?',
                    options: ['SORT', 'ORDER BY', 'SORT BY', 'ORDER'],
                    correct: 1,
                    explanation: 'The ORDER BY keyword is used to sort the result-set in ascending or descending order.'
                },
                {
                    question: 'Which SQL statement is used to update data in a database?',
                    options: ['MODIFY', 'UPDATE', 'SAVE', 'CHANGE'],
                    correct: 1,
                    explanation: 'The UPDATE statement is used to modify the existing records in a table.'
                },
                {
                    question: 'Which SQL statement is used to delete data from a database?',
                    options: ['REMOVE', 'DELETE', 'COLLAPSE', 'DROP'],
                    correct: 1,
                    explanation: 'The DELETE statement is used to delete existing records in a table.'
                },
                {
                    question: 'Which SQL statement is used to insert new data in a database?',
                    options: ['ADD', 'INSERT INTO', 'ADD NEW', 'INSERT'],
                    correct: 1,
                    explanation: 'The INSERT INTO statement is used to insert new records in a table.'
                },
                {
                    question: 'With SQL, how do you select a column named "FirstName" from a table named "Persons"?',
                    options: [
                        'SELECT Persons.FirstName',
                        'SELECT FirstName FROM Persons',
                        'EXTRACT FirstName FROM Persons',
                        'GET FirstName FROM Persons'
                    ],
                    correct: 1,
                    explanation: 'The correct syntax is SELECT column_name FROM table_name.'
                },
                {
                    question: 'With SQL, how do you select all the columns from a table named "Persons"?',
                    options: [
                        'SELECT *.Persons',
                        'SELECT [all] FROM Persons',
                        'SELECT * FROM Persons',
                        'SELECT Persons'
                    ],
                    correct: 2,
                    explanation: 'The asterisk (*) is used to select all columns from a table.'
                },
                {
                    question: 'Which SQL clause is used to filter records?',
                    options: ['WHERE', 'FILTER', 'HAVING', 'IF'],
                    correct: 0,
                    explanation: 'The WHERE clause is used to filter records and extract only those records that fulfill a specified condition.'
                },
                {
                    question: 'Which operator is used to search for a specified pattern in a column?',
                    options: ['LIKE', 'PATTERN', 'MATCH', 'SEARCH'],
                    correct: 0,
                    explanation: 'The LIKE operator is used in a WHERE clause to search for a specified pattern in a column.'
                }
            ]
        },
        {
            id: 'joins',
            title: 'SQL Joins',
            icon: '🔗',
            description: 'Understanding different types of joins',
            difficulty: 'medium',
            tutorial: `
                <h3>SQL Joins</h3>
                <p>A JOIN clause is used to combine rows from two or more tables, based on a related column between them.</p>

                <h4>Types of Joins</h4>
                <ul>
                    <li><strong>(INNER) JOIN</strong>: Returns records that have matching values in both tables</li>
                    <li><strong>LEFT (OUTER) JOIN</strong>: Returns all records from the left table, and the matched records from the right table</li>
                    <li><strong>RIGHT (OUTER) JOIN</strong>: Returns all records from the right table, and the matched records from the left table</li>
                    <li><strong>FULL (OUTER) JOIN</strong>: Returns all records when there is a match in either left or right table</li>
                </ul>
                
                <div class="code-example">
                    SELECT Orders.OrderID, Customers.CustomerName<br>
                    FROM Orders<br>
                    INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;
                </div>
            `,
            questions: [
                {
                    question: 'Which JOIN returns all rows from both tables, with NULL values where there is no match?',
                    options: ['INNER JOIN', 'LEFT JOIN', 'FULL OUTER JOIN', 'CROSS JOIN'],
                    correct: 2,
                    explanation: 'FULL OUTER JOIN returns all rows from both tables, with NULL values in columns where there is no match.'
                },
                {
                    question: 'Which JOIN returns only the rows that have matching values in both tables?',
                    options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL JOIN'],
                    correct: 0,
                    explanation: 'INNER JOIN returns only the rows that have matching values in both tables.'
                },
                {
                    question: 'Which JOIN returns all rows from the left table and matched rows from the right table?',
                    options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'CROSS JOIN'],
                    correct: 1,
                    explanation: 'LEFT JOIN returns all rows from the left table and matched rows from the right table. If no match, NULL values are returned for right table columns.'
                },
                {
                    question: 'What does a CROSS JOIN do?',
                    options: [
                        'Returns matching rows only',
                        'Returns all rows from left table',
                        'Returns the Cartesian product of both tables',
                        'Returns unique rows only'
                    ],
                    correct: 2,
                    explanation: 'CROSS JOIN returns the Cartesian product of both tables, meaning every row from the first table is combined with every row from the second table.'
                },
                {
                    question: 'Which keyword is used to combine the result of two or more SELECT statements?',
                    options: ['COMBINE', 'UNION', 'MERGE', 'JOIN'],
                    correct: 1,
                    explanation: 'UNION is used to combine the result-set of two or more SELECT statements. Each SELECT statement must have the same number of columns.'
                },
                {
                    question: 'What is the difference between UNION and UNION ALL?',
                    options: [
                        'No difference',
                        'UNION removes duplicates, UNION ALL keeps them',
                        'UNION ALL removes duplicates, UNION keeps them',
                        'UNION is faster'
                    ],
                    correct: 1,
                    explanation: 'UNION removes duplicate rows from the result set, while UNION ALL keeps all rows including duplicates.'
                },
                {
                    question: 'Which JOIN is the default JOIN in SQL?',
                    options: ['LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 'FULL JOIN'],
                    correct: 2,
                    explanation: 'INNER JOIN is the default JOIN type. If you just write JOIN without specifying the type, it performs an INNER JOIN.'
                },
                {
                    question: 'What does a SELF JOIN do?',
                    options: [
                        'Joins a table to itself',
                        'Joins all tables in database',
                        'Creates a copy of the table',
                        'Joins primary keys only'
                    ],
                    correct: 0,
                    explanation: 'A SELF JOIN is a regular join but the table is joined with itself. It is useful for comparing rows within the same table.'
                }
            ]
        },
        {
            id: 'functions',
            title: 'SQL Functions',
            icon: '⚡',
            description: 'Aggregate and scalar functions',
            difficulty: 'medium',
            tutorial: `
                <h3>SQL Functions</h3>
                <p>SQL has many built-in functions for performing calculations on data.</p>
                
                <h4>Aggregate Functions</h4>
                <p>Aggregate functions return a single value, calculated from values in a column.</p>
                <ul>
                    <li><strong>AVG()</strong> - Returns the average value</li>
                    <li><strong>COUNT()</strong> - Returns the number of rows</li>
                    <li><strong>MAX()</strong> - Returns the largest value</li>
                    <li><strong>MIN()</strong> - Returns the smallest value</li>
                    <li><strong>SUM()</strong> - Returns the sum</li>
                </ul>

                <h4>Scalar Functions</h4>
                <p>Scalar functions return a single value, based on the input value.</p>
                <ul>
                    <li><strong>UCASE()</strong> - Converts a field to uppercase</li>
                    <li><strong>LCASE()</strong> - Converts a field to lowercase</li>
                    <li><strong>ROUND()</strong> - Rounds a numeric field to the number of decimals specified</li>
                </ul>
            `,
            questions: [
                {
                    question: 'Which function returns the number of rows that matches a specified criterion?',
                    options: ['NUMBER()', 'COUNT()', 'SUM()', 'TOTAL()'],
                    correct: 1,
                    explanation: 'The COUNT() function returns the number of rows that matches a specified criterion.'
                },
                {
                    question: 'Which function returns the average value of a numeric column?',
                    options: ['AVG()', 'AVERAGE()', 'MEAN()', 'MEDIAN()'],
                    correct: 0,
                    explanation: 'The AVG() function returns the average value of a numeric column.'
                },
                {
                    question: 'Which function returns the total sum of a numeric column?',
                    options: ['TOTAL()', 'ADD()', 'SUM()', 'PLUS()'],
                    correct: 2,
                    explanation: 'The SUM() function returns the total sum of a numeric column.'
                },
                {
                    question: 'Which function returns the smallest value of the selected column?',
                    options: ['MIN()', 'SMALLEST()', 'LOWEST()', 'BOTTOM()'],
                    correct: 0,
                    explanation: 'The MIN() function returns the smallest value of the selected column.'
                },
                {
                    question: 'Which function returns the largest value of the selected column?',
                    options: ['MAX()', 'LARGEST()', 'HIGHEST()', 'TOP()'],
                    correct: 0,
                    explanation: 'The MAX() function returns the largest value of the selected column.'
                },
                {
                    question: 'Which SQL function is used to count the number of rows in a SQL query?',
                    options: ['COUNT()', 'NUMBER()', 'SUM()', 'ROWS()'],
                    correct: 0,
                    explanation: 'COUNT() is used to count the number of rows in a SQL query.'
                },
                {
                    question: 'Which function converts a value to uppercase?',
                    options: ['UPPER()', 'UCASE()', 'UPPERCASE()', 'Both A and B'],
                    correct: 3,
                    explanation: 'Both UPPER() and UCASE() can be used to convert a value to uppercase, though UPPER() is more commonly used.'
                },
                {
                    question: 'Which function returns the current date and time?',
                    options: ['NOW()', 'CURRENT_TIMESTAMP()', 'GETDATE()', 'All of the above'],
                    correct: 3,
                    explanation: 'NOW(), CURRENT_TIMESTAMP(), and GETDATE() all return the current date and time, though availability depends on the database system.'
                }
            ]
        },
        {
            id: 'groupby',
            title: 'GROUP BY & HAVING',
            icon: '📊',
            description: 'Grouping and filtering grouped data',
            difficulty: 'medium',
            tutorial: `
                <h3>GROUP BY Statement</h3>
                <p>The GROUP BY statement groups rows that have the same values into summary rows, e.g. "find the number of customers in each country".</p>
                <p>It is often used with aggregate functions (COUNT, MAX, MIN, SUM, AVG).</p>
                
                <div class="code-example">
                    SELECT COUNT(CustomerID), Country<br>
                    FROM Customers<br>
                    GROUP BY Country;
                </div>

                <h3>HAVING Clause</h3>
                <p>The HAVING clause was added to SQL because the WHERE keyword could not be used with aggregate functions.</p>
                
                <div class="code-example">
                    SELECT COUNT(CustomerID), Country<br>
                    FROM Customers<br>
                    GROUP BY Country<br>
                    HAVING COUNT(CustomerID) > 5;
                </div>
            `,
            questions: [
                {
                    question: 'What is the purpose of the GROUP BY clause?',
                    options: [
                        'To sort the results',
                        'To group rows that have the same values',
                        'To filter rows',
                        'To join tables'
                    ],
                    correct: 1,
                    explanation: 'The GROUP BY clause groups rows that have the same values into summary rows, often used with aggregate functions.'
                },
                {
                    question: 'Which clause is used to filter groups in SQL?',
                    options: ['WHERE', 'FILTER', 'HAVING', 'GROUP'],
                    correct: 2,
                    explanation: 'The HAVING clause is used to filter groups. WHERE filters individual rows before grouping, while HAVING filters groups after grouping.'
                },
                {
                    question: 'Can you use aggregate functions in the WHERE clause?',
                    options: [
                        'Yes, always',
                        'No, use HAVING instead',
                        'Only with GROUP BY',
                        'Only COUNT()'
                    ],
                    correct: 1,
                    explanation: 'Aggregate functions cannot be used in the WHERE clause. Use the HAVING clause to filter based on aggregate function results.'
                },
                {
                    question: 'What is the correct order of clauses in a SELECT statement?',
                    options: [
                        'SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY',
                        'SELECT, WHERE, FROM, GROUP BY, HAVING, ORDER BY',
                        'SELECT, FROM, GROUP BY, WHERE, HAVING, ORDER BY',
                        'SELECT, FROM, WHERE, HAVING, GROUP BY, ORDER BY'
                    ],
                    correct: 0,
                    explanation: 'The correct order is: SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY.'
                },
                {
                    question: 'Which of the following is true about GROUP BY?',
                    options: [
                        'It must be used with aggregate functions',
                        'It can only group by one column',
                        'It groups rows with same values in specified columns',
                        'It sorts the results'
                    ],
                    correct: 2,
                    explanation: 'GROUP BY groups rows that have the same values in specified columns. It can group by multiple columns and doesn\'t necessarily require aggregate functions.'
                },
                {
                    question: 'What happens if you use SELECT with columns not in GROUP BY or aggregate functions?',
                    options: [
                        'It works fine',
                        'It causes an error in most databases',
                        'It returns NULL values',
                        'It groups automatically'
                    ],
                    correct: 1,
                    explanation: 'In most SQL databases, all columns in the SELECT clause must either be in the GROUP BY clause or be used with an aggregate function.'
                }
            ]
        },
        {
            id: 'subqueries',
            title: 'Subqueries',
            icon: '🔍',
            description: 'Nested queries and subqueries',
            difficulty: 'hard',
            tutorial: `
                <h3>Subqueries</h3>
                <p>A Subquery or Inner query or a Nested query is a query within another SQL query and embedded within the WHERE clause.</p>
                <p>A subquery is used to return data that will be used in the main query as a condition to further restrict the data to be retrieved.</p>
                
                <div class="code-example">
                    SELECT * FROM Customers<br>
                    WHERE CustomerID IN (SELECT CustomerID FROM Orders WHERE OrderTotal > 1000);
                </div>
            `,
            questions: [
                {
                    question: 'What is a subquery?',
                    options: [
                        'A query that runs after the main query',
                        'A query nested inside another query',
                        'A query that updates data',
                        'A query that creates tables'
                    ],
                    correct: 1,
                    explanation: 'A subquery is a query nested inside another query. It can be used in SELECT, INSERT, UPDATE, or DELETE statements.'
                },
                {
                    question: 'Where can subqueries be used?',
                    options: [
                        'Only in WHERE clause',
                        'Only in FROM clause',
                        'In SELECT, FROM, WHERE, and HAVING clauses',
                        'Only in SELECT clause'
                    ],
                    correct: 2,
                    explanation: 'Subqueries can be used in SELECT, FROM, WHERE, and HAVING clauses, making them very versatile.'
                },
                {
                    question: 'What is a correlated subquery?',
                    options: [
                        'A subquery that runs once',
                        'A subquery that references the outer query',
                        'A subquery with multiple tables',
                        'A subquery with JOIN'
                    ],
                    correct: 1,
                    explanation: 'A correlated subquery references columns from the outer query and is executed once for each row processed by the outer query.'
                },
                {
                    question: 'Which operator is commonly used with subqueries to check if a value exists?',
                    options: ['EXISTS', 'CONTAINS', 'HAS', 'INCLUDES'],
                    correct: 0,
                    explanation: 'The EXISTS operator is used to test for the existence of any record in a subquery. It returns TRUE if the subquery returns one or more records.'
                },
                {
                    question: 'What does the IN operator do with a subquery?',
                    options: [
                        'Checks if a value matches any value in the subquery result',
                        'Checks if all values match',
                        'Counts the subquery results',
                        'Sorts the subquery results'
                    ],
                    correct: 0,
                    explanation: 'The IN operator allows you to specify multiple values in a WHERE clause and checks if a value matches any value returned by the subquery.'
                },
                {
                    question: 'Can you use ORDER BY in a subquery?',
                    options: [
                        'Yes, always',
                        'No, never',
                        'Only in the FROM clause subquery',
                        'Only with TOP or LIMIT'
                    ],
                    correct: 3,
                    explanation: 'ORDER BY in a subquery is generally only meaningful when used with TOP, LIMIT, or OFFSET to select specific rows.'
                }
            ]
        },
        {
            id: 'constraints',
            title: 'Constraints & Keys',
            icon: '🔐',
            description: 'Primary keys, foreign keys, and constraints',
            difficulty: 'medium',
            tutorial: `
                <h3>SQL Constraints</h3>
                <p>SQL constraints are used to specify rules for the data in a table.</p>
                <ul>
                    <li><strong>NOT NULL</strong> - Ensures that a column cannot have a NULL value</li>
                    <li><strong>UNIQUE</strong> - Ensures that all values in a column are different</li>
                    <li><strong>PRIMARY KEY</strong> - A combination of a NOT NULL and UNIQUE. Uniquely identifies each row in a table</li>
                    <li><strong>FOREIGN KEY</strong> - Prevents actions that would destroy links between tables</li>
                    <li><strong>CHECK</strong> - Ensures that the values in a column satisfies a specific condition</li>
                    <li><strong>DEFAULT</strong> - Sets a default value for a column if no value is specified</li>
                    <li><strong>CREATE INDEX</strong> - Used to create and retrieve data from the database very quickly</li>
                </ul>
            `,
            questions: [
                {
                    question: 'What is a PRIMARY KEY?',
                    options: [
                        'A key that can have NULL values',
                        'A unique identifier for each record in a table',
                        'A key that references another table',
                        'A key that can have duplicates'
                    ],
                    correct: 1,
                    explanation: 'A PRIMARY KEY uniquely identifies each record in a table. It must contain unique values and cannot contain NULL values.'
                },
                {
                    question: 'What is a FOREIGN KEY?',
                    options: [
                        'A key from another database',
                        'A key that links two tables together',
                        'A key that is always unique',
                        'A key that cannot be NULL'
                    ],
                    correct: 1,
                    explanation: 'A FOREIGN KEY is a field (or collection of fields) in one table that refers to the PRIMARY KEY in another table, creating a link between the two tables.'
                },
                {
                    question: 'Which constraint ensures that all values in a column are different?',
                    options: ['PRIMARY KEY', 'UNIQUE', 'DISTINCT', 'CHECK'],
                    correct: 1,
                    explanation: 'The UNIQUE constraint ensures that all values in a column are different. Unlike PRIMARY KEY, a table can have multiple UNIQUE constraints.'
                },
                {
                    question: 'Which constraint prevents NULL values in a column?',
                    options: ['UNIQUE', 'CHECK', 'NOT NULL', 'DEFAULT'],
                    correct: 2,
                    explanation: 'The NOT NULL constraint enforces a column to NOT accept NULL values, ensuring that a field always contains a value.'
                },
                {
                    question: 'What does the CHECK constraint do?',
                    options: [
                        'Checks for NULL values',
                        'Checks for duplicates',
                        'Limits the value range that can be placed in a column',
                        'Checks foreign key references'
                    ],
                    correct: 2,
                    explanation: 'The CHECK constraint is used to limit the value range that can be placed in a column based on a condition.'
                },
                {
                    question: 'What does the DEFAULT constraint do?',
                    options: [
                        'Sets a default value for a column when no value is specified',
                        'Makes a column the primary key',
                        'Prevents NULL values',
                        'Creates an index'
                    ],
                    correct: 0,
                    explanation: 'The DEFAULT constraint provides a default value for a column when no value is specified during an INSERT operation.'
                },
                {
                    question: 'Can a table have multiple PRIMARY KEYs?',
                    options: [
                        'Yes, unlimited',
                        'Yes, but only two',
                        'No, only one PRIMARY KEY per table',
                        'Yes, one per column'
                    ],
                    correct: 2,
                    explanation: 'A table can have only one PRIMARY KEY, but it can consist of multiple columns (composite primary key).'
                },
                {
                    question: 'What happens when you try to delete a record that is referenced by a FOREIGN KEY?',
                    options: [
                        'It always deletes successfully',
                        'It depends on the ON DELETE action defined',
                        'It always fails',
                        'It deletes all related records'
                    ],
                    correct: 1,
                    explanation: 'The behavior depends on the ON DELETE action (CASCADE, SET NULL, RESTRICT, etc.) defined for the foreign key constraint.'
                }
            ]
        },
        {
            id: 'indexes',
            title: 'Indexes & Performance',
            icon: '⚙️',
            description: 'Database optimization and indexes',
            difficulty: 'hard',
            tutorial: `
                <h3>SQL Indexes</h3>
                <p>Indexes are used to speed up the performance of queries. They help the database server find and retrieve specific rows much faster than it could without an index.</p>
                <p>However, indexes slow down INSERT, UPDATE, and DELETE statements.</p>
                
                <h4>Clustered vs Non-Clustered</h4>
                <ul>
                    <li><strong>Clustered Index</strong>: Stores the actual data rows in the index structure. There can be only one per table.</li>
                    <li><strong>Non-Clustered Index</strong>: Contains a pointer to the data row. There can be multiple per table.</li>
                </ul>
            `,
            questions: [
                {
                    question: 'What is the purpose of an INDEX?',
                    options: [
                        'To store data',
                        'To speed up data retrieval',
                        'To enforce constraints',
                        'To create relationships'
                    ],
                    correct: 1,
                    explanation: 'An INDEX is used to speed up data retrieval operations. It creates a data structure that allows faster searching, but can slow down INSERT, UPDATE, and DELETE operations.'
                },
                {
                    question: 'What is a disadvantage of having too many indexes?',
                    options: [
                        'Faster queries',
                        'Slower INSERT, UPDATE, and DELETE operations',
                        'Better data integrity',
                        'No disadvantages'
                    ],
                    correct: 1,
                    explanation: 'While indexes speed up SELECT queries, they slow down INSERT, UPDATE, and DELETE operations because the indexes must be updated as well.'
                },
                {
                    question: 'What is a CLUSTERED INDEX?',
                    options: [
                        'An index that sorts and stores data rows',
                        'An index that only stores pointers',
                        'An index on multiple tables',
                        'An index that groups similar values'
                    ],
                    correct: 0,
                    explanation: 'A CLUSTERED INDEX sorts and stores the data rows in the table based on the index key. A table can have only one clustered index.'
                },
                {
                    question: 'How many CLUSTERED indexes can a table have?',
                    options: ['Unlimited', 'One', 'Two', 'One per column'],
                    correct: 1,
                    explanation: 'A table can have only one CLUSTERED INDEX because the data rows themselves can be sorted in only one order.'
                },
                {
                    question: 'What is a NON-CLUSTERED INDEX?',
                    options: [
                        'An index that sorts the data',
                        'An index that stores pointers to data rows',
                        'An index that cannot be used',
                        'An index without a key'
                    ],
                    correct: 1,
                    explanation: 'A NON-CLUSTERED INDEX creates a separate structure that stores index keys and pointers to the actual data rows. A table can have multiple non-clustered indexes.'
                },
                {
                    question: 'Which statement is used to create an index?',
                    options: ['CREATE INDEX', 'ADD INDEX', 'NEW INDEX', 'MAKE INDEX'],
                    correct: 0,
                    explanation: 'The CREATE INDEX statement is used to create an index on one or more columns of a table.'
                }
            ]
        },
        {
            id: 'transactions',
            title: 'Transactions & ACID',
            icon: '💾',
            description: 'Transaction management and ACID properties',
            difficulty: 'hard',
            tutorial: `
                <h3>Transactions</h3>
                <p>A transaction is a single unit of work. If a transaction is successful, all of the data modifications made during the transaction are committed and become a permanent part of the database.</p>
                
                <h4>ACID Properties</h4>
                <ul>
                    <li><strong>Atomicity</strong>: All or nothing.</li>
                    <li><strong>Consistency</strong>: Database remains in a valid state.</li>
                    <li><strong>Isolation</strong>: Transactions don't interfere with each other.</li>
                    <li><strong>Durability</strong>: Saved data is permanent.</li>
                </ul>
                
                <h4>Commands</h4>
                <ul>
                    <li><strong>COMMIT</strong>: Save changes.</li>
                    <li><strong>ROLLBACK</strong>: Undo changes.</li>
                </ul>
            `,
            questions: [
                {
                    question: 'What does ACID stand for in database transactions?',
                    options: [
                        'Atomicity, Consistency, Isolation, Durability',
                        'Accuracy, Completeness, Integrity, Dependability',
                        'Access, Control, Integrity, Data',
                        'Atomicity, Completeness, Isolation, Data'
                    ],
                    correct: 0,
                    explanation: 'ACID stands for Atomicity, Consistency, Isolation, and Durability - the four key properties that guarantee database transactions are processed reliably.'
                },
                {
                    question: 'What does Atomicity mean in ACID?',
                    options: [
                        'Transactions can be partially completed',
                        'Transactions are either fully completed or fully rolled back',
                        'Transactions are isolated from each other',
                        'Transactions are permanent'
                    ],
                    correct: 1,
                    explanation: 'Atomicity ensures that a transaction is treated as a single unit - it either completes entirely or is fully rolled back if any part fails.'
                },
                {
                    question: 'Which SQL command is used to permanently save changes made in a transaction?',
                    options: ['SAVE', 'COMMIT', 'APPLY', 'CONFIRM'],
                    correct: 1,
                    explanation: 'The COMMIT command is used to permanently save all changes made in the current transaction to the database.'
                },
                {
                    question: 'Which SQL command is used to undo changes made in a transaction?',
                    options: ['UNDO', 'REVERT', 'ROLLBACK', 'CANCEL'],
                    correct: 2,
                    explanation: 'The ROLLBACK command is used to undo all changes made in the current transaction and restore the database to its previous state.'
                },
                {
                    question: 'What does Isolation in ACID mean?',
                    options: [
                        'Transactions are stored separately',
                        'Transactions cannot see each other\'s uncommitted changes',
                        'Transactions run one at a time',
                        'Transactions are independent of the database'
                    ],
                    correct: 1,
                    explanation: 'Isolation ensures that concurrent transactions do not interfere with each other. Each transaction is isolated from others until it is committed.'
                },
                {
                    question: 'What does Durability in ACID mean?',
                    options: [
                        'Transactions last forever',
                        'Once committed, changes are permanent even after system failure',
                        'Transactions cannot be deleted',
                        'Transactions are backed up automatically'
                    ],
                    correct: 1,
                    explanation: 'Durability guarantees that once a transaction is committed, the changes are permanent and will survive system failures, crashes, or power outages.'
                }
            ]
        }
    ]
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = quizData;
}
