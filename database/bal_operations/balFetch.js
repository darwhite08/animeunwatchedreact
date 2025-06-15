import createPool  from "../database_connection.js";
const pool  = await createPool();

console.log("pool triggered")
async function bestAnimelistData(animeType) {
    const result = await pool.query(`SELECT * FROM best_anime_list WHERE lower(anime_type) = $1  `, [animeType.toLowerCase()]);
    console.log(result)
    return (result.rows);
}

export default bestAnimelistData;