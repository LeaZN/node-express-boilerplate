const mongoose = require('mongoose');
// const validator = require('validator');
const { toJSON, paginate } = require('./plugins');

const albumSchema = mongoose.Schema(
  {
    albumName: {
      type: String,
      required: true,
      trim: true,
      // validate(value) {
      //   if (!validator.isAlbumName(value)) {
      //     throw new Error('Invalid album');
      //   }
      // },
    },
    artistName: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    selectedFile: {
      type: String,
      required: false,
      trim: true,
    },
    releaseDate: {
      type: Number,
      required: true,
    },
    numberOfTracks: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
albumSchema.plugin(toJSON);
albumSchema.plugin(paginate);

// /**
//  * Check if albumName is taken
//  * @param {string} albumName - The album's name
//  * @param {ObjectId} [excludeAlbumId] - The id of the album to be excluded
//  * @returns {Promise<boolean>}
//  */
// albumSchema.statics.isAlbumNameTaken = async function (albumName, excludeAlbumId) {
//   const album = await this.findOne({ albumName, _id: { $ne: excludeAlbumId } });
//   return !!album;
// };

/**
 * @typedef Album
 */
const Album = mongoose.model('Album', albumSchema);

module.exports = Album;
