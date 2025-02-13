const express = require("express");
const mongoose = require("mongoose");
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/User.js");
const dotenv = require('dotenv');
const cors = require('cors');
const jwt = require('jsonwebtoken'); // Import jsonwebtoken

dotenv.config();

const app = express();

// Use CORS middleware
app.use(cors({
    origin: ['http://localhost:5173', 'https://live-project-red.vercel.app'], // Allow requests from both origins
    methods: ['GET', 'POST'], // Allow specific HTTP methods
    credentials: true // Allow credentials (if needed)
}));

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
    .then(() => console.log("MongoDB connected for authentication"))
    .catch(err => console.error("MongoDB connection error:", err));

// Secret key for JWT
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'; // Use an environment variable for the secret

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

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/auth/login", async (req, res, next) => {
  const { email, password } = req.body; // Destructure email and password from the request body
  try {
    const user = await User.findOne({ email }); // Find user by email
    if (!user) return res.status(401).send("Login failed"); // Check if user exists

    const isMatch = await user.verifyPassword(password); // Verify password
    if (!isMatch) return res.status(401).send("Login failed"); // Check if password matches

    // Generate a token
    const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: '1h' }); // Token expires in 1 hour

    res.json({ token }); // Send the token back to the client
  } catch (err) {
    return next(err); // Handle any errors
  }
});

app.post("/auth/register", async (req, res) => {
    try {
        const { username, email, password } = req.body; // Ensure this matches the request body structure

        // Check if the user already exists
        const existingUserByEmail = await User.findOne({ email }); // Check by email
        if (existingUserByEmail) {
            return res.status(400).send("Email already exists"); // Send specific error message
        }

        const existingUserByUsername = await User.findOne({ username }); // Check by username
        if (existingUserByUsername) {
            return res.status(400).send("Username already exists"); // Send specific error message
        }

        // Create a new user
        const newUser = new User({ username, email, password }); // Ensure the User model has the email field
        await newUser.save();

        return res.send("Registration successful");
    } catch (err) {
        console.error(err);
        return res.status(500).send("Error registering user");
    }
});

app.get("/auth/user", async (req, res) => {
  if (req.isAuthenticated()) {
    // Fetch user data from the MongoDB database
    try {
      const user = await User.findById(req.user.id).select('username email'); // Get user by ID from the request
      if (!user) {
        return res.status(404).send("User not found"); // Handle case where user is not found
      }
      return res.json({ username: user.username, email: user.email }); // Send user data
    } catch (err) {
      return res.status(500).send("Error retrieving user data"); // Handle any errors
    }
  } else {
    return res.status(401).send("Unauthorized"); // User is not authenticated
  }
});

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
