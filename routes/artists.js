import express from 'express';


import { getArtists, createArtist, updateArtist } from '../controllers/artists.js'


const router = express.Router();

router.get('/', getArtists);
router.post('/', createArtist);
router.patch('/:id', updateArtist);


export default router;