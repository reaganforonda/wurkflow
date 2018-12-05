DROP TABLE IF EXISTS users;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(50) UNIQUE,
    pw TEXT,
    firstName VARCHAR(50),
    lastName VARCHAR(50)
);