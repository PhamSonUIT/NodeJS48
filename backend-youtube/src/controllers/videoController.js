// import connect from "../../db.js";
import initModels from "../models/init-models.js";
import connect from "../models/connect.js";
import { formartVideoList } from "../utils/formartData.js";

const models = initModels(connect);
const createVideo = async (req, res) => {
  try {
    // ----sd mysql2
    // const queryString = `insert into videos (video_name, thumbnail, description)
    // values (?, ?, ?)`;
    // let body = req.body;
    // let { video_name, thumbnail, description } = body;
    // const [data] = await connect.execute(queryString, [
    //   video_name,
    //   thumbnail,
    //   description,
    // ]);
    // return res.send(data);

    //------ sd sequelize

    //   {
    //     "video_name": "SƠN TÙNG M-TP | ĐỪNG LÀM TRÁI TIM ANH ĐAU | OFFICIAL TEASER",
    //     "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     "thumbnail": "https://img.youtube.com/vi/CQXQKr_3vKE/maxresdefault.jpg",
    //     "views": 1500,
    //     "source": "https://www.youtube.com/watch?v=CQXQKr_3vKE",
    //     "type_id": 1,
    //     "user_id": 1
    // }

    const {
      video_name,
      description,
      thumbnail,
      views,
      source,
      type_id,
      user_id,
    } = req.body;
    console.log("dữ liệu nhận ở body create video", {
      video_name,
      description,
      thumbnail,
      views,
      source,
      type_id,
      user_id,
    });
    const video = await models.videos.create({
      video_name,
      description,
      thumbnail,
      views,
      source,
      type_id,
      user_id,
    });
    console.log(video.toJSON());
    res.status(200).json("create video");
  } catch (error) {
    return res.send(`Error: ${error}`);
  }
};
//controller list video
const listVideos = async (req, res) => {
  try {
    const listVideos = await models.videos.findAll();
    // format data
    const listVideosFormarter = formartVideoList(listVideos);
    return res.status(200).json(listVideosFormarter);
  } catch (error) {
    return res.status(500).json({ messaage: "error api list video" });
  }
};

//get video type
const getVideoTypes = async (req, res) => {
  try {
    const listVideoTypes = await models.video_types.findAll();
    return res.status(200).json(listVideoTypes);
  } catch {
    return res.status(500).json({ message: "error api get video type" });
  }
};

// cmd k 0 thu gọn các function
//cmd k j xổ hết các function

const createVideoTypes = async (req, res) => {
  try {
    const { type_name } = req.body;
    console.log("dữ liệu từ body", type_name);
    const result = await models.video_types.create({ type_name: type_name });
    console.log(result.toJSON());
    res.status(200).json({ message: "create video type" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// update
const updateVideo = async (req, res) => {
  try {
    // update video nào
    const { id } = req.params;
    console.log("id", id);

    // dữ liệu cần update
    const { video_name } = req.body;
    console.log("dữ liệu cần update", video_name);

    const result = await models.videos.update(
      { video_name: video_name },
      { where: { video_id: id } }
    );
    console.log(result);
    res.status(200).json(`updateVideo`);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const deleteVideo = async (req, res) => {
  try {
    // xoá video nào
    const { id } = req.params;
    console.log("id", id);

    // dữ liệu cần xoá
    const { video_name } = req.body;
    console.log("dữ liệu cần xoá", video_name);

    const result = await models.videos.destroy( 
      { video_name: video_name },
      { where: { video_id: id } }
    );
    console.log(result);
    res.status(200).json(`deleteVideo`);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
export {
  createVideo,
  listVideos,
  getVideoTypes,
  createVideoTypes,
  updateVideo,
  deleteVideo,
};
