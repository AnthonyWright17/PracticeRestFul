const pool = require('../data/db');
const queries = require('./animeQueries')

const getAllAnime = async (req, res) => {
  try {
    const { rows } = await pool.query(queries.getAllAnime)

    const date = rows[0].release_date.toDateString().slice(4);
    rows[0].release_date = date

    res.json(rows)
  } catch (error) {
    console.log(error)
  }
}

const addAnime = async (req, res) =>{
  try {
    const {title, release_date, genre, seasons} = req.body

    await pool.query(queries.addAnime, [title, release_date, genre, seasons])
    res.json(`${title} added!`)

  } catch (error) {
    console.log(error)
  }
}

const getAnimeById = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const { rows } = await pool.query(queries.getAnimeById, [id])

    const date = rows[0].release_date.toDateString().slice(4);
    rows[0].release_date = date

    res.json(rows)
  } catch (error) {
    console.log(error)
  }
}

const deleteAnime = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await pool.query(queries.removeAnime, [id])
    res.json({message:`Anime delete at ${id}`})
  } catch (error) {
    console.log(error)
  }
}

// const updateAnime
// let keys = Object.keys(rows[0])
//     let setStr = "UPDATE SET "
//     let idStr = " WHERE anime_id = $5"
//     keys.forEach((ele,i) =>{
//       let propNameAndVar = `${ele}=$${i+1} `
//       setStr += `${propNameAndVar}`
//     })
//     console.log(`${setStr}${idStr}`)


module.exports ={
  getAllAnime,
  addAnime,
  deleteAnime,
  getAnimeById,
  // updateAnime
}