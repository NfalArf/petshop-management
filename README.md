# Petshop Management System

A modern CRUD-based web application for managing petshop animal records. Built using Node.js, Express.js, EJS, and MySQL, this application provides a simple and responsive dashboard interface to manage pet data efficiently.

## Features
- Add animal data
- View animal details
- Edit animal information
- Delete animal data
- Responsive dashboard UI
- Status indicator
- MySQL database integration

## Tech Stack
- Node.js
- Express.js
- EJS
- Tailwind CSS
- MySQL

## Installation

Clone the repository:

git clone https://github.com/NfalArf/petshop-management.git
cd petshop-management

Environment Variables

Create a .env file in the root directory and configure the following variables:

DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=
PORT=3000

##Database Setup

Import the provided SQL file into your MySQL database:

db_petshop.sql

##Install dependencies:

npm install

Run the application:

npm start

## Preview
- Home <img width="1918" height="868" alt="image" src="https://github.com/user-attachments/assets/6f82a98f-9919-48d7-838d-d2279eb4615d" />
- Daftar Hewan <img width="1901" height="868" alt="image" src="https://github.com/user-attachments/assets/c2d7946c-ef31-407f-82bf-eba0573f1e4a" />
- Detail <img width="1898" height="870" alt="image" src="https://github.com/user-attachments/assets/60643c16-6370-406f-aa6b-e23163e89e3d" />

##Project Structure
petshop-management/
│
├── views/         # EJS templates
├── public/        # Static assets
├── routes/        # Application routes
├── db.js          # Database configuration
├── server.js      # Main server entry point
├── package.json
└── .env

##Author

Developed by Naufal Arif

