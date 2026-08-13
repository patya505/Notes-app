## Live Demo

[Notes App] (https://notes-app-hjpx.onrender.com/)


Backend-commits

Notes App

A full-stack Notes application built with React, Node.js, Express.js, and MongoDB.

The application allows users to create, view, update, and delete notes. All note data is stored in MongoDB, so changes made through the application are persisted in the database.

Features

Create a new note

Fetch and display all notes

Delete a note

Update a note's description

MongoDB database integration

REST API using Express.js

React frontend

Axios for communication between frontend and backend

CORS enabled for frontend-backend communication

Tech Stack

Frontend

React

Vite

Axios

CSS

Backend

Node.js

Express.js

MongoDB

Mongoose

CORS

Project Structure

day-9/
│
├── Backend/
│   ├── models/
│   │   └── note.model.js
│   ├── public/
│   ├── src/
│   ├── server.js
│   └── package.json
│
├── Frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   └── ...
│   ├── public/
│   └── package.json
│
└── .gitignore

API Endpoints

Method

Endpoint

Description

POST

/api/notes

Create a new note

GET

/api/notes

Fetch all notes

PATCH

/api/notes/:id

Update a note

DELETE

/api/notes/:id

Delete a note

Create Note

POST /api/notes

Request body:

{
  "title": "My Note",
  "description": "This is my note"
}

Get Notes

GET /api/notes

Returns all notes stored in MongoDB.

Update Note

PATCH /api/notes/:id

Request body:

{
  "description": "Updated description"
}

Delete Note

DELETE /api/notes/:id

The note with the specified MongoDB ID is deleted.

How It Works

The React frontend uses Axios to communicate with the Express backend.

For example:

React Frontend
      │
      │ Axios HTTP Request
      ▼
Express.js REST API
      │
      │ Mongoose
      ▼
MongoDB

When a user creates or deletes a note, the frontend sends a request to the backend. The backend then performs the corresponding operation in MongoDB.

After the operation is completed, the frontend fetches the updated notes and displays them.

Running the Project

1. Clone the repository

git clone https://github.com/abhinavbhambad07-cyber/Backend-commits.git
cd Backend-commits

2. Install backend dependencies

cd Backend
npm install

3. Configure environment variables

Create a .env file in the backend directory and add your MongoDB connection string according to the database configuration used by the project.

Example:

MONGO_URI=your_mongodb_connection_string

Do not commit your .env file to GitHub.

4. Start the backend

npm start

or use the appropriate development command configured in package.json.

5. Install frontend dependencies

Open another terminal:

cd Frontend
npm install

6. Start the frontend

npm run dev

The Vite development server will provide the local URL in the terminal.

Future Improvements

Add edit functionality to the React UI

Add loading states

Add error handling

Add form validation

Add confirmation before deleting notes

Improve responsive UI

Add authentication

Add user-specific notes

Author

Abhinav

Built as part of a full-stack development learning project.
