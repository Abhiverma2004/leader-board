🏆 Real-Time Leaderboard Task
This project is a full-stack application featuring a dynamic, real-time leaderboard. The backend is built with Node.js and Express, using MongoDB for data persistence. The frontend is a responsive single-page application built with React.

✨ Core Features
User Management: Select from a list of users or add new users directly from the UI.

Claim Random Points: Award a random number of points (1-10) to any selected user with a single click.

Persistent Storage: All user data, total points, and claim history are stored securely in a MongoDB database.

Claim History: Every point claim is logged in a separate collection for auditing and historical tracking.

Dynamic Real-Time Ranking: The leaderboard updates instantly after every point claim, showing the latest ranks, names, and total points without needing a page refresh.

🛠️ Tech Stack
Backend: Node.js, Express.js

Frontend: React.js

Database: MongoDB with Mongoose

Real-time Communication: (Assumed) WebSockets (e.g., Socket.IO) or efficient polling.

🚀 Getting Started
Follow these instructions to get a copy of the project up and running on your local machine.

Prerequisites
Node.js (v18.x or later)

npm or yarn

MongoDB (Ensure your MongoDB server is running)

Setup & Installation
Clone the repository:

Bash

git clone <your-repository-link>
cd <repository-name>
Setup the Backend:

Bash

cd server
npm install
Create a .env file in the server directory and add your MongoDB connection string:

Code snippet

MONGO_URI=your_mongodb_connection_string
PORT=5000
Setup the Frontend:

Bash

cd ../client
npm install
Running the Application
Start the Backend Server:

Bash

# From the /server directory
npm start
The server will be running on http://localhost:5000.

Start the Frontend App:

Bash

# From the /client directory
npm start
The React application will open in your browser at http://localhost:3000.

📦 Database Schema
The application uses two main collections in MongoDB.

1. users Collection
Stores user information and their cumulative points.

Field	Type	Description
_id	ObjectId	Unique identifier for the user.
name	String	The name of the user.
totalPoints	Number	The user's total accumulated points.

Export to Sheets
2. claimhistories Collection
Logs every single point claim transaction.

Field	Type	Description
_id	ObjectId	Unique identifier for the history entry.
userId	ObjectId	Reference to the user who claimed points.
pointsClaimed	Number	The number of points awarded in this claim.
timestamp	Date	The exact time the claim was made.

Export to Sheets
🔌 API Endpoints
The backend provides the following RESTful APIs to be consumed by the frontend.

Method	Endpoint	Description
GET	/api/users	Fetches a list of all users.
POST	/api/users	Adds a new user to the database.
POST	/api/claim	Claims random points for a specified user ID.
GET	/api/leaderboard	Retrieves the current user rankings.
GET	/api/history	Retrieves the full claim points history.

Export to Sheets
🏆 Bonus Points Checklist
This submission includes the following bonus features:

[x] Clean and Modern UI: A user-friendly interface for a smooth experience.

[x] Responsive and Optimized Layout: The layout works seamlessly across desktop and mobile devices.

[x] Efficient Pagination Logic: Implemented for the claim history view to handle large datasets efficiently.

[x] Well-structured and Reusable Code: Code is organized into logical components and modules for maintainability.

[x] Code Comments and Best Practices: Clear comments are provided for complex logic, and code follows established best practices.
