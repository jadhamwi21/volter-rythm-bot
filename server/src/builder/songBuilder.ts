import ffmpeg from "fluent-ffmpeg";
import fs from "fs";
import path from "path";
import internal from "stream";
import { SongMetadata } from "../typescript/interfaces";

export class SongBuilder {
	private title: string;
	private duration: string;
	private thumbnail: string;
	private positionInQueue: number;
	private readStream: internal.Readable;
	private userId: string;
	private buildSongFile() {
		return new Promise((resolve, reject) => {
			if (
				fs.existsSync(
					path.resolve(__dirname, `../data/${this.userId}/${this.title}.mp3`)
				)
			) {
				resolve("Exist");
			}
			ffmpeg(this.readStream)
				.save(
					path.resolve(__dirname, `../data/${this.userId}/${this.title}.mp3`)
				)
				.audioCodec("libmp3lame")
				.on("end", () => {
					resolve("Done Saving");
				})
				.on("error", () => {
					reject("Failed");
				});
		});
	}
	public constructor(id: string) {
		this.userId = id;
	}
	public addTitle(title: string) {
		this.title = title;
		return this;
	}
	public addDuration(duration: string) {
		this.duration = duration;
		return this;
	}
	public addThumbnail(thumbnail: string) {
		this.thumbnail = thumbnail;
		return this;
	}
	public addPositionInQueue(positionInQueue: number) {
		this.positionInQueue = positionInQueue;
		return this;
	}
	public addReadStream(readStream: internal.Readable) {
		this.readStream = readStream;
		return this;
	}
	public async build(): Promise<SongMetadata> {
		try {
			if (this.readStream) {
				await this.buildSongFile();
			}
			return {
				title: this.title ?? "Unknown",
				duration: this.duration ?? "Unknown",
				positionInQueue: this.positionInQueue,
				thumbnail: this.thumbnail ?? "",
			};
		} catch (e) {
			throw new Error("Build Failed");
		}
	}
}
