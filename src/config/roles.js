const allRoles = {
  user: [
    'getUsers',
    'manageUsers',
    'manageAlbums',
    'manageArtists',
    'createAlbum',
    'getAlbums',
    'getAlbum',
    'updateAlbum',
    'deleteAlbum',
    'createArtist',
    'getArtists',
    'getArtist',
    'updateArtist',
    'deleteArtist',
  ],
  admin: [
    'getUsers',
    'manageUsers',
    'manageAlbums',
    'manageArtists',
    'createAlbum',
    'getAlbums',
    'getAlbum',
    'updateAlbum',
    'deleteAlbum',
    'createArtist',
    'getArtists',
    'getArtist',
    'updateArtist',
    'deleteArtist',
  ],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
