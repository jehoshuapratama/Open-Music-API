/* eslint-disable camelcase */
/* eslint linebreak-style: ["error", "windows"] */

const mapDBToModelAlbum = ({
  id,
  name,
  year,
  created_at,
  updated_at,
}) => ({
  id,
  name,
  year,
  createdAt: created_at,
  updatedAt: updated_at,
});

const mapDBToModelSong = ({
  id,
  title,
  year,
  genre,
  performer,
  duration,
  album_id,
  created_at,
  updated_at,
}) => ({
  id,
  title,
  year,
  genre,
  performer,
  duration,
  album_id,
  createdAt: created_at,
  updatedAt: updated_at,
});

module.exports = { mapDBToModelAlbum, mapDBToModelSong };
