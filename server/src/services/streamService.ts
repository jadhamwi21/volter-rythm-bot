import ytdl from "ytdl-core";

export const GetAudioStream = (videoId: String) => {
	return ytdl(`https://www.youtube.com/watch?v=${videoId}`, {
		quality: "highestaudio",
	});
};
