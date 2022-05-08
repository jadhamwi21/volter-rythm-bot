import ytdl from "ytdl-core";

export const GetSongMetadata = async (videoId: string) => {
	const generalSongInfo = await ytdl.getInfo(videoId);
	const songInfo = {
		title: generalSongInfo.videoDetails.title,
		duration: generalSongInfo.videoDetails.lengthSeconds,
		thumbnail: generalSongInfo.videoDetails.thumbnails[0].url,
	};
	return songInfo;
};
