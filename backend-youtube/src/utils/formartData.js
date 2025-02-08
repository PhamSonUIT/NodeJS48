import dotenv from "dotenv";

dotenv.config();

export const formartVideoList = (listVideos) => {
  return listVideos.map((video) => ({
    ...video.toJSON(),
    thumbnail: `${process.env.BASE_URL}/public/images/${video.thumbnail}`,
    source: `${process.env.BASE_URL}/public/videos/${video.source}`,
  }));
};
