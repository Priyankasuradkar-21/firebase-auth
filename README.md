🔐 Firebase JWT Auth API (Node.js + Postman)
This project is a lightweight Node.js backend that integrates Firebase Authentication using JWT tokens. It demonstrates how to authenticate users via Firebase, manually retrieve tokens using Postman, and secure Express routes with the Firebase Admin SDK.

🚀 Features
✅ Firebase Email/Password login via Postman
✅ Firebase ID token (JWT) generation using Firebase REST API
✅ Secure Express endpoints with JWT verification middleware
✅ Clean code structure using express
✅ No frontend — backend-only for quick API prototyping
🧰 Tech Stack
Node.js
Express.js
Firebase Admin SDK
Postman (for testing)
📁 Project Structure
firebase-jwt-api/ ├── ServiceAccountKey.json # Firebase Admin SDK credentials ├── index.js # Main application file └── package.json

⚙️ Setup Instructions
1. 📦 Clone and Install
git clone https://github.com/YOUR_USERNAME/firebase-jwt-api.git cd firebase-jwt-api npm install

🔐 Firebase Setup Go to Firebase Console
Create a project

Enable Email/Password sign-in method

Create a test user under Authentication > Users

Generate a service account key and save it as ServiceAccountKey.json in the project root

🌐 Get Your Firebase Web API Key Go to Project Settings > General > Web App

Find apiKey in your Firebase config and have it handy.

🧪 Usage with Postman

Step 1: Get Firebase JWT (idToken)

POST /v1/accounts:signInWithPassword?key={apiKey} HTTP/1.1 Host: identitytoolkit.googleapis.com Content-Type: application/json Content-Length: 97

{ "email": "your_email", "password": "password", "returnSecureToken": true }

Step 2: Call the Node App Endpoint

GET http://localhost:9080/login

Headers

Authorization: Bearer

Response:

{ "message": "Hello, your_email", "uid": "OcJqYuoB3Hcp5zN1S1NIsfYVpcu2" }
