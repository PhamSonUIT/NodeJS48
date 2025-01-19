// rootRoutes: tổng hợp các routes của ứng dụng
// VD: routes của user, product, order,...

// define rootRoutes 
import express from 'express';
import userRoutes from './userRoutes.js';
import videoRoutes from './videoRoutes.js';
const rootRoutes = express.Router();

rootRoutes.use('/users', userRoutes);
rootRoutes.use('/videos', videoRoutes);

export default rootRoutes;

