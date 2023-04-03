import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.set("strictQuery", false);
console.log("into db connect");
mongoose.set("debug", process.env.NODE_ENV !== 'production')
mongoose
	.connect(process.env.DB_URL!)
	.then(() => {
		console.log("Database Connected Sucessfully");
	})
	.catch((error) => {
		console.log("error in db connections", error);
	});
