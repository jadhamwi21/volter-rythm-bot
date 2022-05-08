import cors from "cors";
import express, { Application, Request, Response } from "express";
import http, { Server as HttpServer } from "http";
import path from "path";
import { CreateDataDirectoryIfNotExist } from "./helper/utils";
import { ConnectToDatabase } from "./models/db";
import botRouter from "./routers/botRouters";
import SocketService from "./services/socketService";

class App {
	private expressApp: Application;
	private httpServer: HttpServer;
	private port: number | string;
	private io;
	public constructor(port: number | string) {
		this.expressApp = express();
		this.expressApp.use(
			cors({
				origin: [
					"https://volter-rythm-bot.netlify.app",
					"http://localhost:3000",
				],
			})
		);
		this.expressApp.use(
			"/data",
			express.static(path.resolve(__dirname, "./data"))
		);
		this.expressApp.use(express.urlencoded({ extended: true }));
		this.expressApp.use(express.json());
		this.expressApp.get("/", (req: Request, res: Response) => {
			res.end("<div>Volter Rythm Bot</div>");
		});
		this.expressApp.use("/bot", botRouter);
		this.httpServer = http.createServer(this.expressApp);
		SocketService.setupSocketIo(this.httpServer);
		ConnectToDatabase();
		CreateDataDirectoryIfNotExist();
		this.port = port;
	}
	public run() {
		this.httpServer.listen(this.port, () => {
			console.log(`listening on port ${this.port}`);
		});
	}
}

const port = process.env.PORT || 8080;

new App(port).run();
