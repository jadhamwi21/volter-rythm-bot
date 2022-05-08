import fs from "fs";
import PQueue from "p-queue";
import path from "path";
import { User } from "../models/userModel";
import { PQueues } from "../services/requestPriorityService";
import SocketService from "../services/socketService";
import { MessageMutationInterface } from "../typescript/interfaces";
import { Behavior, Message } from "../typescript/types";

export const SendMessageMutationEvent = (
	id: string,
	messageMutationObject: MessageMutationInterface
) => {
	SocketService.EmitEventTo(id, "mutate-message", messageMutationObject);
};
export const AddNewMessageEvent = (id: string, message: Message) => {
	SocketService.EmitEventTo(id, "add-message", message);
};

export const GetResponseBehavior = (queue: any[]) => {
	return queue.length >= 1 ? Behavior.Queue : Behavior.Play;
};

export const CreateNewUser = (id: string) => {
	return User.create({
		userId: id,
		queue: [],
	});
};

export const CreateDataDirectoryIfNotExist = () => {
	if (!fs.existsSync(path.resolve(__dirname, "../data"))) {
		fs.mkdirSync(path.resolve(__dirname, "../data"));
	}
};

export const CreateUserDirectory = (id: string) => {
	return new Promise((resolve, reject) => {
		try {
			fs.mkdirSync(path.resolve(__dirname, `../data/${id}`));
			resolve("Created");
		} catch (e) {
			reject(new Error("Creating User Songs Directory Failed"));
		}
	});
};

export const RegisterPriorityQueue = (id: string) => {
	PQueues.set(id, new PQueue({ autoStart: true, concurrency: 1 }));
};

export const UserCleanup = (id: string) => {
	return new Promise((resolve) => {
		User.findOneAndDelete({ userId: id }).then(() => {
			fs.rmSync(path.resolve(__dirname, `../data/${id}`), {
				recursive: true,
				force: true,
			});
			PQueues.delete(id);
			resolve("Cleaned Up");
		});
	});
};
