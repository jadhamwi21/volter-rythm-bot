import mongoose from "mongoose";
import SocketService from "../services/socketService";
import { UserInterface } from "../typescript/interfaces";

const userSchema = new mongoose.Schema(
	{
		userId: { type: String, required: true },
		queue: [
			{
				youtubeId: String,
				title: String,
			},
		],
	},
	{
		timestamps: false,
	}
);

userSchema.post("save", async (savedUser) => {
	const user = await User.findOne({ userId: savedUser.userId });
	console.log(user.queue);
	if (user.queue.length !== 0)
		SocketService.EmitEventTo(
			user.userId,
			"update-source",
			user.queue[0].title
		);
	else {
		SocketService.EmitEventTo(user.userId, "update-source", "");
	}
});

export const User = mongoose.model<UserInterface>("User", userSchema);
