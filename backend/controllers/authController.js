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
			comments: [],
			books: [],
		});

		res.status(201).json({
			message: "User created successfully",
			status: 200,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({
			message: "Internal server error",
			error: error.message,
		});
	}
};

exports.checkUser = async (req, res) => {
	try {
		const { email, password,currentUsername } = req.body;

		console.log(req.body)

		// Check if the user exists
		const user = await User.findOne({ username:req.body.username });

		if (!user) {

			console.log(currentUsername)



			
			return res.status(404).json({ message: "User not found" });
		}


		// Compare passwords
		const isPasswordValid = await bcrypt.compare(password, user.password);

		if (!isPasswordValid) {
			return res
				.status(401)
				.json({ message: "Invalid email or password" });
		}

		// If the password is correct, create a JWT token
        
		// const token = jwt.sign(
		// 	{
		// 		userId: user._id,
		// 		email: user.email,
		// 	},
		// 	process.env.JWT_SECRET,
		// 	{ expiresIn: "1h" },
		// );

		res.status(200).json({
			message: "Authentication successful",
			// token: token,
			// userId: user._id,
			// expiresIn: 3600,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({
			message: "Internal server error",
			error: error.message,
		});
	}
};
