import mongoose from "mongoose";

export const ConnectToDatabase = () => {
	mongoose
		.connect(
			"mongodb+srv://jadhamwi21:House3125474@mycluster.51j5r.mongodb.net/volter-rythm-bot?retryWrites=true&w=majority"
		)
		.then(() => {
			console.log("Connected To Database");
		})
		.catch((e) => {
			console.log(e);
		});
};
