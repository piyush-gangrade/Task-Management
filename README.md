# Task Management Application

A task management application built with React.js and TypeScript for the frontend, Express.js and TypeScript for the backend, and MongoDB for the database using Mongoose. This app allows users to create, edit, and manage tasks efficiently.

## Features

- **Task Creation**: Add new tasks with details such as title, description, and due date.
- **Task Management**: Edit, update, and delete tasks as needed.
- **Drag and Drop**: Organize tasks easily by dragging and dropping them within the interface.
- **Task Status Tracking**: Mark tasks as complete or in progress to track progress.

## Technologies Used

- **Frontend**: React.js with TypeScript
- **Backend**: Express.js with TypeScript
- **Database**: MongoDB with Mongoose

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/piyush-gangrade/Task-Management.git
    cd Task-Management
    ```

2. Install dependencies for both frontend and backend:
    ```bash
    cd client
    npm install
    cd ../server
    npm install
    ```

3. Set up environment variables:

   - In the `server` directory, create a `.env` file with the following:
    ```makefile
    MONGODB_URL=your_mongodb_connection_string
    PORT=3000
    ```

    - In the `client` directory, create a `.env` file with the following:
    ```makefile
    VITE_BASE_URL=http://localhost:5000
    ```

4. Start the application:

    - **Backend**: 
      ```bash
      cd server
      npm run dev
      ```

    - **Frontend**:
      ```bash
      cd client
      npm run dev
      ```

5. Open your browser and navigate to `http://localhost:5173`.

## Usage

1. Load the task management application by opening `http://localhost:5173`.
2. Use the interface to create, edit, delete, and organize tasks.
3. Track task progress and manage completion status.

---

Organize and manage tasks effectively with this application!
