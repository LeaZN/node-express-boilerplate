const httpStatus = require('http-status');
const { Album } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create an album
 * @param {Object} albumBody
 * @returns {Promise<Album>}
 */
// const createAlbum = async (albumBody) => {
//   if (await Album.isNameTaken(albumBody.albumName)) {
//     throw new ApiError(httpStatus.BAD_REQUEST, 'Album already exists');
//   }
//   return Album.create(albumBody);
// };

const createAlbum = async (albumBody) => {
  return Album.create(albumBody);
};

/**
 * Query for albums
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */

// const queryAlbums = async (filter, options) => {
//   const albums = await Album.paginate(filter, options);
//   return albums;
// };
const queryAlbums = async () => {
  return Album.find();
};

/**
 * Get album by id
 * @param {ObjectId} id
 * @returns {Promise<Album>}
 */
const getAlbumById = async (id) => {
  return Album.findById(id);
};

/**
 * Get album by artistName
 * @param {string} artistName
 * @returns {Promise<Album>}
 */
const getAlbumByArtistName = async (artistName) => {
  return Album.find({ artistName });
};

/**
 * Update album by id
 * @param {ObjectId} albumId
 * @param {Object} updateBody
 * @returns {Promise<Album>}
 */
const updateAlbumById = async (albumId, updateBody) => {
  const album = await getAlbumById(albumId);
  if (!album) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Album not found');
  }
  // if (updateBody.albumName && (await Album.isAlbumNameTaken(updateBody.albumName, albumId))) {
  //   throw new ApiError(httpStatus.BAD_REQUEST, 'Album already exists');
  // }
  Object.assign(album, updateBody);
  await album.save();
  return album;
};

/**
 * Delete user by id
 * @param {ObjectId} albumId
 * @returns {Promise<Album>}
 */
const deleteAlbumById = async (albumId) => {
  const album = await getAlbumById(albumId);
  if (!album) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Album not found');
  }
  await album.remove();
  return album;
};

module.exports = {
  createAlbum,
  queryAlbums,
  getAlbumById,
  getAlbumByArtistName,
  updateAlbumById,
  deleteAlbumById,
};
