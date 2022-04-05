const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createAlbum = {
  body: Joi.object().keys({
    albumName: Joi.string().required(),
    artistName: Joi.string().required(),
    selectedFile: Joi.string().required(),
    releaseDate: Joi.number().integer().required(),
    numberOfTracks: Joi.number().integer().required(),
  }),
};

const getAlbums = {
  query: Joi.object().keys({
    albumName: Joi.string(),
    artistName: Joi.string(),
    selectedFile: Joi.string(),
    releaseDate: Joi.number().integer(),
    numberOfTracks: Joi.number().integer(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getAlbum = {
  params: Joi.object().keys({
    albumId: Joi.string().custom(objectId),
  }),
};

const updateAlbum = {
  params: Joi.object().keys({
    albumId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      albumName: Joi.string(),
      artistName: Joi.string(),
      selectedFile: Joi.string(),
      releaseDate: Joi.number().integer(),
      numberOfTracks: Joi.number().integer(),
    })
    .min(1),
};

const deleteAlbum = {
  params: Joi.object().keys({
    albumId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createAlbum,
  getAlbums,
  getAlbum,
  updateAlbum,
  deleteAlbum,
};
