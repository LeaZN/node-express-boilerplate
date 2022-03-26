import AlbumMessage from '../models/albumMessage.js';



export const getAlbums = async (req, res) => {
    try {
        const albumMessages = await AlbumMessage.find();

        

        res.status(200).json(albumMessages);

    } catch (error) {

        res.status(404).json({ message: error.message });
    }

}


export const createAlbum = async (req, res) => {

    const album = req.body;
    const newAlbum = new AlbumMessage(album);
    try {
        await newAlbum.save();
        

        res.status(201).json(newAlbum);

    } catch (error) {

        res.status(409).json({ message: error.message });
    }

}

