const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const userController = require('./controllers/userController');

dotenv.config();

const app = express();
const port = 3000; 

app.use(cors());
app.use(express.json());

// المسارات
app.post('/signup', userController.signup);
app.post('/verify', userController.verifyEmail);
app.post('/login', userController.login);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
