import YtSearch, { VideoSearchResult } from "yt-search";

export const GetYoutubeSearchResults = async (query: string) => {
	const { videos } = await YtSearch(query);
	return videos;
};

export const GetFirstVideo = (videos: VideoSearchResult[]) => {
	return videos[0];
};

export const GetFirstVideoId = async (query: string) => {
	try {
		const Videos = await GetYoutubeSearchResults(query);
		const FirstVideo = GetFirstVideo(Videos);
		const FirstVideoId = FirstVideo.videoId;
		return FirstVideoId;
	} catch (e) {
		throw new Error("No Results Found :(");
	}
};
