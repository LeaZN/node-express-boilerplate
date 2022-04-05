const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createArtist = {
  body: Joi.object().keys({
    artistName: Joi.string().required(),
    selectedFile: Joi.string().required(),
    followersCount: Joi.number().integer().required(),
    rating: Joi.number().integer().required(),
  }),
};

const getArtists = {
  query: Joi.object().keys({
    artistName: Joi.string(),
    selectedFile: Joi.string(),
    followersCount: Joi.number().integer(),
    rating: Joi.number().integer(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getArtist = {
  params: Joi.object().keys({
    artistId: Joi.string().custom(objectId),
  }),
};

const updateArtist = {
  params: Joi.object().keys({
    artistId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      artistName: Joi.string(),
      selectedFile: Joi.string(),
      followersCount: Joi.number().integer(),
      rating: Joi.number().integer(),
    })
    .min(1),
};

const deleteArtist = {
  params: Joi.object().keys({
    artistId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createArtist,
  getArtists,
  getArtist,
  updateArtist,
  deleteArtist,
};
