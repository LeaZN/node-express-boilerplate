import ArtistMessage from '../models/artistMessage.js';



export const getArtists = async (req, res) => {
    try {
        const artistMessages = await ArtistMessage.find();

        

        res.status(200).json(artistMessages);

    } catch (error) {

        res.status(404).json({ message: error.message });
    }

}


export const createArtist = async (req, res) => {

    const artist = req.body;
    const newArtist = new ArtistMessage(artist);
    try {
        await newArtist.save();
        

        res.status(201).json(newArtist);

    } catch (error) {

        res.status(409).json({ message: error.message });
    }

}



export const updateArtist = () => async (req, res) => {

    const { id: _id } = req.params;
    const artist = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No artists with that id');

    const  updatedArtist = await ArtistMessage.findByIdAndUpdate(_id, artist, { new: true });

    res.json(updatedArtist);

}