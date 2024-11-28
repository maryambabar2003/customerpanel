// backend/routes/userRoutes.js

const express = require("express");
const User = require("../models/User"); // Import the User model

const router = express.Router();

// GET: Fetch the user profile by ID
router.get("/profile", async (req, res) => {
  try {
    // Replace with actual user ID (e.g., from JWT token or session)
    const userId = "your-user-id-here"; // Example: get from request (e.g., req.user.id)

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);  // Send the user data as a response
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user profile" });
  }
});

module.exports = router;
