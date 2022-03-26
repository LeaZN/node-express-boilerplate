import express from 'express';


import { getAlbums, createAlbum } from '../controllers/albums.js'


const router = express.Router();

router.get('/', getAlbums);
router.post('/', createAlbum);

export default router;