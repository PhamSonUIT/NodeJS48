import connect from "../../db.js";

const createVideo = async (req, res) => {
  try {
    const queryString = `insert into videos (video_name, thumbnail, description) 
    values (?, ?, ?)`;
    let body = req.body;
    let { video_name, thumbnail, description } = body;
    const [data] = await connect.execute(queryString, [
      video_name,
      thumbnail,
      description,
    ]);
    return res.send(data);
  } catch (error) {
    return res.send(`Error: ${error}`);
  }
};

export { createVideo };
