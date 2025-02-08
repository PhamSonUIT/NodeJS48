import express from "express";

import { createVideo } from "../controllers/videoController.js";
import { listVideos } from "../controllers/videoController.js";
import { getVideoTypes } from "../controllers/videoController.js";
import { createVideoTypes } from "../controllers/videoController.js";
import { updateVideo } from "../controllers/videoController.js";
import { deleteVideo } from "../controllers/videoController.js";

const videoRoutes = express.Router();

videoRoutes.post("/create-video", createVideo);

videoRoutes.get("/list-video", listVideos);

videoRoutes.get("/get-video-types", getVideoTypes);

videoRoutes.post("/create-video-types", createVideoTypes);
videoRoutes.put("/update-video/:id", updateVideo);
videoRoutes.delete("/delete-video/:id", deleteVideo);
export default videoRoutes;
