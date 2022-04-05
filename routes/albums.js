import express from 'express';


import { getAlbums, createAlbum, updateAlbum } from '../controllers/albums.js'


const router = express.Router();

router.get('/', getAlbums);
router.post('/', createAlbum);
router.patch('/:id', updateAlbum);

export default router;