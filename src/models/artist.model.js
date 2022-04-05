const mongoose = require('mongoose');
// const validator = require('validator');
const { toJSON, paginate } = require('./plugins');

const artistSchema = mongoose.Schema(
  {
    artistName: {
      type: String,
      required: true,
      trim: true,
      // validate(value) {
      //   if (!validator.isArtistName(value)) {
      //     throw new Error('Invalid artist');
      //   }
      // },
    },

    selectedFile: {
      type: String,
      required: true,
      trim: true,
    },
    followersCount: {
      type: Number,
      required: true,
      trim: true,
    },

    rating: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
artistSchema.plugin(toJSON);
artistSchema.plugin(paginate);

// /**
//  * Check if artistName is taken
//  * @param {string} artistName - The artist's name
//  * @param {ObjectId} [excludeArtistId] - The id of the artist to be excluded
//  * @returns {Promise<boolean>}
//  */
// artistSchema.statics.isArtistNameTaken = async function (artistName, excludeArtistId) {
//   const artist = await this.findOne({ artistName, _id: { $ne: excludeArtistId } });
//   return !!artist;
// };

/**
 * @typedef Artist
 */
const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;
