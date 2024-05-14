// - GET /api/v1/books
const Book = require("../database/schemas/books");
const User = require("../database/schemas/users");

// get that user that is asscoiated with this ID
async function getUser(userId) {
	const user = await User.findOne({
		_id: userId,
	});
	return user;
}

// check id middleware
exports.checkId = (req, res, next, val) => {
	if (req.params.id * 1 > BookModel.length || req.params.id * 1 < 0) {
		return res.status(404).json({
			status: "fail",
			message: "Invalid ID",
		});
	}
	console.log(`Book id is: ${val}`);
	next();
};

// All book CRUD operations handlers
exports.getAllBooks = async (req, res) => {
	try {
		const { genre, sort, offerType } = req.query;
		let filter = {};

		if (genre) {
			filter.genre = { $in: [genre] };
		}
		if (offerType) {
			// Split the offerType string into an array by commas
			const offerTypes = offerType.split(",");
			filter.offerType = { $in: offerTypes };
		}

		let sortOptions = {};
		if (sort === "priceAsc") sortOptions.price = 1;
		if (sort === "priceDesc") sortOptions.price = -1;
		if (sort === "dateAsc") sortOptions.listingDate = 1;
		if (sort === "dateDesc") sortOptions.listingDate = -1;

		const books = await Book.find(filter).sort(sortOptions);

		res.status(200).json({
			status: "success",
			results: books.length,
			data: {
				books,
			},
		});
	} catch (err) {
		console.error("Error fetching books based on filters:", err);
		res.status(500).json({
			status: "error",
			message: "Internal Server Error",
		});
	}
};

// - GET using a variable route parameter
exports.getBook = async (req, res) => {
	const { id } = req.params;
	console.log(id);

	try {
		const book = await Book.findOne({ _id: id });

		res.status(200).json({
			status: "success",
			data: {
				book,
			},
		});

		console.log(book);
	} catch (err) {
		console.error(err);
		res.status(500).json({
			status: "error",
			message: "Internal Server Error",
		});
	}
};

// - PATCH /api/v1/books/id
exports.updateBook = (req, res) => {
	// here we are missing the database logic to update the book in the database

	res.status(200).json({
		status: "success",
		data: {
			book: "Updated book",
		},
	});
};

// - POST /api/v1/books

// exports.createNewBook = async (req, res) => {
// 	// const newId = books[books.length - 1].id + 1;

// 	// const reqExmaple = {
// 	// 	image: "https://i.guim.co.uk/img/media/f51df963039740fa2cb5f1b6649e571a0d31579e/0_0_1355_2079/master/1355.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=0166526b8d4f5d40300085c26a427cea",
// 	// 	title: "The Great Gatsby",
// 	// 	description: "A novel by F. Scott Fitzgerald",
// 	// 	ISBN: "97807432753565",
// 	// 	listingDate: new Date("2024-05-09"),
// 	// 	author: "F. Scott Fitzgerald",
// 	// 	genre: ["Classic", "Fiction"],
// 	// 	offerType: "Selling",
// 	// 	bookCondition: "Good",
// 	// 	price: 15.99,
// 	// 	oldPrice: 20.99,
// 	// 	seller: "booklover123",
// 	// 	numberOfPages: 180,
// 	// 	comments: [],
// 	// 	offerStatus: "Active",
// 	// };
// 	// get user Id associated with this book
// 	const userId = "6641d17df5ae6fae41954f55";
// 	const user = await getUser(userId);
// 	// req.body.bookGenre
// 	const bookObject = {
// 		image: "https://www.google.com/imgres?q=mathematics%20book&imgurl=http%3A%2F%2Fwww.sahityabharatipublications.com%2Fuploads%2Fproductimg%2FWonderful%2520Mathematics%2520Book%2520-3.jpg&imgrefurl=http%3A%2F%2Fwww.sahityabharatipublications.com%2Fbook%2Fthebook%2F591&docid=I_GaUHIckGFa3M&tbnid=QG6F1JTA7Eq8MM&vet=12ahUKEwi1prCLyIuGAxXk7QIHHTQmDp8QM3oFCIEBEAA..i&w=240&h=320&hcb=2&ved=2ahUKEwi1prCLyIuGAxXk7QIHHTQmDp8QM3oFCIEBEAA",
// 		title: req.body.bookName,
// 		description: req.body.bookDescription,
// 		ISBN: req.body.bookISBN,
// 		listingDate: new Date(),
// 		author: req.body.bookAuthor,
// 		// genre: [],
// 		offerType: req.body.orderType,
// 		bookCondition: req.body.bookCondition,
// 		price: req.body.bookPrice,
// 		oldPrice: null,
// 		seller: req.body.seller,
// 		numberOfPages: req.body.numberOfPages,
// 		comments: [],
// 		offerStatus: "Active",
// 	};

// 	const newBook = new Book(bookObject);
// 	user.books.push(newBook);
// 	await newBook
// 		.save()
// 		.then((savedUser) => {
// 			console.log("book saved successfully:", savedUser);

// 			res.status(201).json({
// 				status: "success",
// 				data: {
// 					book: newBook,
// 				},
// 			});
// 		})
// 		.catch((error) => {
// 			console.error("Error saving user:", error);
// 		});
// 	user.books.push(newBook);
// 	await user
// 		.save()
// 		.then((savedUser) => {
// 			console.log("book saved successfully:", savedUser);

// 			res.status(201).json({
// 				status: "success",
// 				data: {
// 					book: newBook,
// 				},
// 			});
// 		})
// 		.catch((error) => {
// 			console.error("Error saving user:", error);
// 		});
// };

exports.createNewBook = async (req, res) => {
	try {
		// Assuming user ID comes from authenticated session or token
		const userId = req.user._id;

		const {
			title,
			description,
			ISBN,
			author,
			genre,
			offerType,
			bookCondition,
			price,
			publicationYear,
			numberOfPages,
		} = req.body;

		const newBook = new Book({
			image: req.file.path, // Path where Multer saves the file
			title,
			description,
			ISBN: JSON.parse(ISBN), // Assuming ISBN comes as a JSON stringified array
			listingDate: new Date(), // Automatically set the listing date
			author,
			genre: JSON.parse(genre), // Assuming genre comes as a JSON stringified array
			offerType,
			bookCondition,
			price,
			publicationYear,
			numberOfPages,
			seller: userId, // Link the book to the user who posted it
		});

		await newBook.save(); // Save the book to the database

		// Optionally, add the book to the user's list of books
		await User.findByIdAndUpdate(userId, { $push: { books: newBook._id } });

		res.status(201).json({
			status: "success",
			data: {
				book: newBook,
			},
		});
	} catch (error) {
		res.status(400).json({
			status: "fail",
			message: error.message,
		});
	}
};
// - DELETE /api/v1/books/id
exports.deleteBook = (req, res) => {
	// here we are missing the database logic to delete the book from the database

	res.status(204).json({
		status: "success",
		data: null,
	});
};

exports.getRecomendation = async (req, res) => {
	try {
		const recentBooks = await Book.find()
			.sort({ publishedDate: -1 })
			.limit(5);

		res.status(200).json({
			status: "success",
			data: {
				recentBooks,
			},
		});

		console.log(book);
	} catch (err) {
		console.error(err);
		res.status(500).json({
			status: "error",
			message: "Internal Server Error",
		});
	}
};
