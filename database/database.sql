DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;
USE inventory_db;

CREATE TABLE users (
	id INT AUTO_INCREMENT PRIMARY KEY, 
	username VARCHAR(50) NOT NULL UNIQUE,
	password VARCHAR(100) NOT NULL,
	role ENUM('parent', 'admin', 'volunteer') NOT NULL
);

CREATE TABLE inventory (
	id INT AUTO_INCREMENT PRIMARY KEY,
	item_name VARCHAR(100),
	quantity INT,
	added_by INT,
	FOREIGN KEY (added_by) REFERENCES users(id)
);
