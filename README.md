# Expense Tracker API

A RESTful API for managing expenses, built with Node.js, Express, and MongoDB. This API allows users to register, log in, and manage their expenses efficiently.

## Features

- User registration and authentication using JWT (JSON Web Tokens).
- CRUD (Create, Read, Update, Delete) operations for managing expenses.
- Password hashing with bcrypt for secure password storage.
- CORS enabled for cross-origin requests.
- Error handling middleware for graceful error responses.

## Tech Stack

- Node.js
- Express
- MongoDB
- Mongoose
- bcryptjs
- jsonwebtoken
- dotenv
- cors

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB installed locally or a MongoDB Atlas account for cloud storage

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tharun977/expense-tracker-api.git
   cd expense-tracker-api
Install the required dependencies:

bash
Copy code
npm install
Create a .env file in the root directory and add the following environment variables:

env
Copy code
MONGODB_URI=mongodb://username:password@localhost:27017/expensesDB  # Replace with your MongoDB credentials
PORT=5000
JWT_SECRET=your_jwt_secret  # Replace with a strong secret key
Start the server:

bash
Copy code
npm start
The server will run on http://localhost:5000.

API Endpoints
User Routes
POST /api/users/register: Register a new user.
POST /api/users/login: Log in an existing user.
Expense Routes
GET /api/expenses: Get all expenses for the logged-in user.
POST /api/expenses: Add a new expense.
PUT /api/expenses/:id: Update an existing expense by ID.
DELETE /api/expenses/:id: Delete an expense by ID.
Example Usage
Register a User
bash
Copy code
curl -X POST http://localhost:5000/api/users/register \
-H "Content-Type: application/json" \
-d '{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "mobile": "0987654321",
  "password": "mypassword123"
}'
Login a User
bash
Copy code
curl -X POST http://localhost:5000/api/users/login \
-H "Content-Type: application/json" \
-d '{
  "email": "jane@example.com",
  "password": "mypassword123"
}'
Add a New Expense
bash
Copy code
curl -X POST http://localhost:5000/api/expenses \
-H "Authorization: Bearer <token>" \
-H "Content-Type: application/json" \
-d '{
  "amount": 50,
  "description": "Groceries",
  "date": "2024-10-19"
}'
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contributing
Contributions are welcome! Please open an issue or submit a pull request.

Acknowledgements
Express - Web framework for Node.js
MongoDB - NoSQL database
Mongoose - MongoDB object modeling for Node.js
bcryptjs - Password hashing library
jsonwebtoken - JWT implementation
