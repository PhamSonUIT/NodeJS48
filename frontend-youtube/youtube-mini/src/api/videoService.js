import apiClient from "./apiClient";

// lấy danh sách video type
export const getVideoTypes = async () => {
  try {
    const response = await apiClient.get("/sidebar");
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getVideos = async () => {
  try {
    const listVideo = await apiClient.get("/videos/list-video");
    return listVideo.data;
  } catch (error) {
    throw error;
  }
};

export const getVideoType = async (type) => {
  try {
    const listVideo = await apiClient.get(`/videos/get-video-types`);
    return listVideo.data;
  } catch (error) {
    throw error;
  }
};
