import mongoose from 'mongoose';

const albumSchema = mongoose.Schema({

    albumName: String,
    artistName: String,
    selectedFile: String,
    releaseDate: Date,
    numberOfTracks: Number,
    
});

const AlbumMessage = mongoose.model('AlbumMessage', albumSchema);

export default AlbumMessage;