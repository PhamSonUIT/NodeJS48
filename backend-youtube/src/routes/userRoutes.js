// define các api cho table user
// define userRoutes

import express from 'express';
import { getUsers } from '../controllers/userController.js';
import { createUser } from '../controllers/userController.js';
// tạo userRoutes
const userRoutes = express.Router();

userRoutes.get("/get-users", getUsers);

userRoutes.post("/create-user", createUser);
export default userRoutes;