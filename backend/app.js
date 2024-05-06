const express = require("express");
const morgan = require("morgan");
const { connectToDb, getDb } = require("./database/db");
const User = require("./database/schemas/users"); // Modify this line
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors"); // Add this line

const bookRouter = require("./routes/bookRoutes"); // importing routes
const userRouter = require("./routes/authRoutes"); // importing routes

// here we might check if we connect to the database

connectToDb(async (err) => {
	if (!err) {
		database = getDb();

		const newUser = new User({
			name: "John Doe",
			email: "john@example.com",
			username: "johnny",
			password: "hashedPassword", // You should hash the password before saving it
			profileImage: "https://example.com/profile.jpg",
			phoneNumber: "1234567890",
			address: "123 Main St, City, Country",
			comments: [
				{
					image: "https://example.com/comment_image.jpg",
					rating: 4,
					userName: "commenter123",
					content: "Great user!",
					date: new Date(),
				},
			],
			offers: ["Offer 1", "Offer 2"], // Example offers
			listedBooks: ["Book 1", "Book 2"], // Example listed books
		});

		// Save the new user to the database
		try {
			const savedUser = await newUser.save();
			console.log("User saved successfully:", savedUser);
		} catch (error) {
			console.error("Error saving user:", error);
		}
	}
});

const app = express();

// Enable CORS
app.use(cors());

// 1) MIDDLEWARES

// this is a 3rd party middleware that will log the request to the console in a dev format
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

app.use(express.json());
/** this is a middleware that will parse the incoming request body into json format
    because if we did not use that the body of the request will be undefined
    this middleware will add a body property to the request object
    so that we will be able to handle the incoming data in a post request for example, req.body
**/

//  meddleware to get the date of the request
app.use((req, res, next) => {
	req.requestTime = new Date().toISOString();
	next();
});

/**  example a standerd API structure
    books array will be fetched from the database
    resources that we will have: books, users, reviews, etc.
    versions are used because we do not break the api when we make changes
    You can test the api using postman VERY IMPORTANT
    for each resource we need to create appropriate routes for each of the CRUD operations
    all APIs must follow the RESTful conventions 
    GET /api/v1/books - get all books
    GET /api/v1/books/id - get a single book by id
    POST /api/v1/books - create a new book
    PATCH /api/v1/books/id - update a book by id
    DELETE /api/v1/books/id - delete a book by id
*/

// 2) ROUTES

// app.use("http://localhost:5000/api/v1/users", userRouter);

// app.post("/signup", async (req, res) => {

//   const name = req.body.name;
//   const email= req.body.email;
//   const username = req.body.username;
//   const password = req.body.password;

//   const encryptedPassword= await bcrypt.hash(password,10)

//   try{
//     const sameUsername = await User.findOne({ emails });
//     const sameEmail = await User.findOne({email});
//     if(sameUsername || sameEmail){
//       return res.send({error: "user exist"})
//     }
//     console.log("here")
//     await User.create({
//       name: name,
//       email: email,
//       username: username,
//       password:encryptedPassword,
//     });

//     res.send({ status: "ok"})
//   } catch(error){
//     res.send({status: "error"})
//   }

// });

app.use("/api/v1/books", bookRouter);
app.use("/api/v1/users", userRouter);

/**
 *
 *
 *
 *
 */

app.get("/", (req, res) => {
	res.status(200).send("<>Hello World");
});

app.post("/", (req, res) => {
	res.send("This is a post request");
});

module.exports = app;
