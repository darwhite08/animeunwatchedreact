import createPool  from "../database_connection.js";
const pool  = await createPool();

async function bestAnimelistData(animeType, ...params) {
    const result = await pool.query(`SELECT * FROM best_anime_list WHERE lower(anime_type) = $1  `, [animeType.toLowerCase()]);
    return (result.rows);
}

export default bestAnimelistData;