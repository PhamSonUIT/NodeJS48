// rootRoutes: tổng hợp các routes của ứng dụng
// VD: routes của user, product, order,...

// define rootRoutes 
import express from 'express';
import userRoutes from './userRoutes.js';
import videoRoutes from './videoRoutes.js';
import authRoutes from './authRoutes.js';
const rootRoutes = express.Router();

rootRoutes.use('/users', userRoutes);
rootRoutes.use('/videos', videoRoutes);
rootRoutes.use('/auth', authRoutes);

export default rootRoutes;

