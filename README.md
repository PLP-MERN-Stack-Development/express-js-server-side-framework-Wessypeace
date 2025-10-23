# Express.js Server-Side Framework - Product API

## Description

This is a RESTful API built with Express.js to manage products. It implements CRUD operations, authentication, and logging middleware.

## Installation

1. Clone the repository:
git clone <https://github.com/PLP-MERN-Stack-Development/express-js-server-side-framework-Wessypeace.git>

2. Navigate into the project folder:
cd express-js-server-side-framework-Wessypeace

3. Install dependencies:
npm install

4. Start the server:
node server.js

The server runs on: <http://localhost:3000>

### GET all products

- URL: /api/products
- Method: GET
- Auth: Not required

Response Example:
[
  {
    "id": "1",
    "name": "Laptop",
    "description": "High-performance laptop with 16GB RAM",
    "price": 1200,
    "category": "electronics",
    "inStock": true
  }
]

## Middleware

1. Logger Middleware: Logs HTTP method, URL, and timestamp for each request.  
2. Authentication Middleware: Protects POST, PUT, DELETE routes using x-api-key.

## Notes

- Data is stored in an in-memory array, so all changes are lost when the server restarts.  
- Include the API key when calling protected routes.

## Environment Variables

A sample .env.example file is included:

API_KEY= x-api-key: 12345
PORT=3000

## Author

Wessypeace (wesani letsoalo)
