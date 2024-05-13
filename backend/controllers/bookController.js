// - GET /api/v1/books
const BookModel = require("../database/schemas/books");
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

		const books = await BookModel.find(filter).sort(sortOptions);

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
		const book = await BookModel.findOne({ _id: id });

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
exports.createNewBook = async (req, res) => {
	// const newId = books[books.length - 1].id + 1;

	// const reqExmaple = {
	// 	image: "https://i.guim.co.uk/img/media/f51df963039740fa2cb5f1b6649e571a0d31579e/0_0_1355_2079/master/1355.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=0166526b8d4f5d40300085c26a427cea",
	// 	title: "The Great Gatsby",
	// 	description: "A novel by F. Scott Fitzgerald",
	// 	ISBN: "97807432753565",
	// 	listingDate: new Date("2024-05-09"),
	// 	author: "F. Scott Fitzgerald",
	// 	genre: ["Classic", "Fiction"],
	// 	offerType: "Selling",
	// 	bookCondition: "Good",
	// 	price: 15.99,
	// 	oldPrice: 20.99,
	// 	seller: "booklover123",
	// 	numberOfPages: 180,
	// 	comments: [],
	// 	offerStatus: "Active",
	// };
	// get user Id associated with this book
	const userId = "6641d17df5ae6fae41954f55";
	const user = await getUser(userId);
	const newBook = new BookModel(req.body);
	await newBook
		.save()
		.then((savedUser) => {
			console.log("book saved successfully:", savedUser);

			res.status(201).json({
				status: "success",
				data: {
					book: newBook,
				},
			});
		})
		.catch((error) => {
			console.error("Error saving user:", error);
		});
	user.books.push(newBook);
	await user
		.save()
		.then((savedUser) => {
			console.log("book saved successfully:", savedUser);

			res.status(201).json({
				status: "success",
				data: {
					book: newBook,
				},
			});
		})
		.catch((error) => {
			console.error("Error saving user:", error);
		});
};

// - DELETE /api/v1/books/id
exports.deleteBook = (req, res) => {
	// here we are missing the database logic to delete the book from the database

	res.status(204).json({
		status: "success",
		data: null,
	});
};
