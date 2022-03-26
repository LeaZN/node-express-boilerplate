import mongoose from 'mongoose';

const artistSchema = mongoose.Schema({

    artistName: String,
    selectedFile: String,
    followersCount: {
        type: Number,
        default: 0
    },
    rating: Number,
    
});

const ArtistMessage = mongoose.model('ArtistMessage', artistSchema);

export default ArtistMessage;