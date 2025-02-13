const express = require("express");
const mongoose = require("mongoose");
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/User.js");
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// Connect to MongoDB
const mongoURI = process.env.MONGO_URI; // Use the MongoDB URI from the environment variable
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

passport.use(new LocalStrategy(
    async (username, password, done) => {
      try {
        const user = await User.findOne({ username });
        if (!user) return done(null, false, { message: "User not found" });
  
        const isMatch = await user.verifyPassword(password);
        if (!isMatch) return done(null, false, { message: "Incorrect password" });
  
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  ));  

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/auth/login", (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(401).send("Login failed");
    req.logIn(user, (err) => {
      if (err) return next(err);
      return res.send("Login successful");
    });
  })(req, res, next);
});

app.post("/auth/register", async (req, res) => {
    try {
        const { username, password } = req.body;
    
        // Check if the user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
          return res.status(400).send("User already exists");
        }
    
        // Create a new user
        const newUser = new User({ username, password });
        await newUser.save();
    
        return res.send("Registration successful");
      } catch (err) {
        console.error(err);
        return res.status(500).send("Error registering user");
      }
});
  

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
