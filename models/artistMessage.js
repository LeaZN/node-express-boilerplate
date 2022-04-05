import mongoose from 'mongoose';

const artistSchema = mongoose.Schema({

    artistName: String,
    selectedFile: String,
    followersCount: Number,
    rating: Number,
    
});

const ArtistMessage = mongoose.model('ArtistMessage', artistSchema);

export default ArtistMessage;