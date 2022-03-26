import express from 'express';


import { getArtists, createArtist } from '../controllers/artists.js'


const router = express.Router();

router.get('/', getArtists);
router.post('/', createArtist);

export default router;