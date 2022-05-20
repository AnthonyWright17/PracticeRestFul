const getAllAnime = "SELECT * FROM anime";

const addAnime = "INSERT INTO anime(title, release_date, genre, seasons) VALUES($1, $2, $3, $4)";

const getAnimeById = "SELECT * FROM anime WHERE anime_id = $1";

const removeAnime = "DELETE FROM anime WHERE anime_id = $1";



module.exports = {
  getAllAnime,
  addAnime,
  getAnimeById,
  removeAnime,
}