const express = require("express");
const router = express.Router();
const User = require("../database/schemas/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


exports.createUser = async (req, res) => {
	try {
		const { name, username, email, password } = req.body;

		// Check if the email or username is already registered
		const existingEmail = await User.findOne({ email });
		const existingUsername = await User.findOne({ username });
		console.log(req.body);

		if (existingEmail) {
			return res.status(400).json({ message: "Email already exists" });
		}

		if (existingUsername) {
			return res.status(400).json({ message: "Username already exists" });
		}

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Create a new user
		const newUser = await User.create({
			name,
			username,
			email,
			password: hashedPassword,
			profileImage: null,
			phoneNumber: null,
			address: null,
			comments: [
				{
					image: null,
					rating: null,
					userName: null,
					content: null,
					date: null,
				},
			],
			offers: [], // Example offers
			listedBooks: [], // Example listed books
		});

		res.status(201).json({ message: "User created successfully",status:200 });
	} catch (error) {
		console.error(error);
		res.status(500).json({
			message: "Internal server error",
			error: error.message,
		});
	}
};