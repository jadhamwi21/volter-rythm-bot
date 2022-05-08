import { Server as HttpServerType } from "http";
import { Server } from "socket.io";
import {
	CreateNewUser,
	CreateUserDirectory,
	RegisterPriorityQueue,
	UserCleanup,
} from "../helper/utils";
import { User } from "../models/userModel";

export default class SocketService {
	private static io;
	public static setupSocketIo(server: HttpServerType) {
		this.io = new Server(server, {
			cors: {
				origin: [
					"https://volter-rythm-bot.netlify.app",
					"http://localhost:3000",
				],
			},
		});
		this.io.on("connection", (client) => {
			const id = client.id;
			// Create User In DB
			CreateNewUser(id)
				.then(() => {
					// Create Songs Directory For That User
					return CreateUserDirectory(id);
				})
				.then(() => {
					// Register Priority Queue For That User
					RegisterPriorityQueue(id);
				});

			client.on("terminate", async () => {
				await UserCleanup(id);
			});
			client.on("disconnect", async () => {
				await UserCleanup(id);
			});
		});
		this.io.listen(server);
	}
	public static EmitEventTo(id: string, eve: string, ...args) {
		this.io.to(id).emit(eve, ...args);
	}
}
