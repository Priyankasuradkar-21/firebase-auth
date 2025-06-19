const express = require('express');
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

const PORT = 9080;
const app = express();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.get('/login', async(req, res) => {

  const authorization = req.headers.authorization;
  console.log("Headers:: ",authorization );

  const value = authorization.split(" ");
  const token = value[1]

  try{

    const AuthResponse = await admin.auth().verifyIdToken(token);
    console.log(AuthResponse);
    res.json({ message: `Hello, ${AuthResponse.email}` , uid: `${AuthResponse.uid}`  });

  }catch(error){
    console.error('Error verifying Firebase JWT token', error);
    res.json({ "message": "Unauthorized"  });
    throw error;
  }

});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

