import express from 'express';
import bestAnimelistData from '../../../database/bal_operations/balFetch.js';
const bestAnimeListRouter = express.Router();

// Define routes
const animeRoute = [
  { id: 1, anime_type: 'isekai', anime_category: 'reincarnation' },
  { id: 2, anime_type: 'isekai', anime_category: 'summoning' },
  { id: 3, anime_type: 'isekai', anime_category: 'transmigration' },
  { id: 4, anime_type: 'idol', anime_category: 'lovely' },
  { id: 5, anime_type: 'idol', anime_category: 'pop' },
  { id: 6, anime_type: 'idol', anime_category: 'celeb' },
  { id: 7, anime_type: 'ecchi', anime_category: 'action' },
  { id: 8, anime_type: 'ecchi', anime_category: 'romance' },
  { id: 9, anime_type: 'ecchi', anime_category: 'comedy' },
  { id: 10, anime_type: 'harem', anime_category: 'action' },
  { id: 11, anime_type: 'harem', anime_category: 'romance' },
  { id: 12, anime_type: 'harem', anime_category: 'adventure' },
  { id: 13, anime_type: 'yuri', anime_category: 'supernatural' },
  { id: 14, anime_type: 'yuri', anime_category: 'school of life' },
  { id: 15, anime_type: 'yuri', anime_category: 'romance' },
  { id: 16, anime_type: 'yaoi', anime_category: 'fantasy' },
  { id: 17, anime_type: 'yaoi', anime_category: 'everyday tales' },
  { id: 18, anime_type: 'yaoi', anime_category: 'drama' },
  { id: 19, anime_type: 'mahou shouju', anime_category: 'classic & traditional' },
  { id: 20, anime_type: 'mahou shouju', anime_category: 'dark & Deconstructive' },
  { id: 21, anime_type: 'slice of life', anime_category: 'school life' },
  { id: 22, anime_type: 'slife of life', anime_category: 'romance' },
  { id: 23, anime_type: 'slife of life', anime_category: 'comedy' },
  { id: 24, anime_type: 'slice of life', anime_category: 'coming-of-age' },
  { id: 25, anime_type: 'mecha', anime_category: 'war' },
  { id: 26, anime_type: 'mecha', anime_category: 'super robot' },
  { id: 27, anime_type: 'mecha', anime_category: 'real robot' },
  { id: 28, anime_type: 'mecha', anime_category: 'dystopain' },
  { id: 29, anime_type: 'shonen', anime_category: 'action' },
  { id: 30, anime_type: 'shonen', anime_category: 'supernatural/fantasy' },
  { id: 31, anime_type: 'shonen', anime_category: 'sci-fiction' },
  { id: 32, anime_type: 'shonen', anime_category: 'sports' },
  { id: 33, anime_type: 'josei', anime_category: 'romance' },
  { id: 34, anime_type: 'josei', anime_category: 'everyday life' },
  { id: 35, anime_type: 'josei', anime_category: 'psychological' },
  { id: 36, anime_type: 'josei', anime_category: 'supernatural' },
  { id: 37, anime_type: 'shoujo', anime_category: 'romance' },
  { id: 38, anime_type: 'shoujo', anime_category: 'fantasy' },
  { id: 39, anime_type: 'shoujo', anime_category: 'slice of life' },
  { id: 40, anime_type: 'shoujo', anime_category: 'drama' },
  { id: 41, anime_type: 'seinen', anime_category: 'adventure' },
  { id: 42, anime_type: 'seinen', anime_category: 'thriller' },
  { id: 43, anime_type: 'seinen', anime_category: 'drama' },
  { id: 44, anime_type: 'seinen', anime_category: 'sci-fiction' },
  { id: 45, anime_type: 'kodomomuke', anime_category: 'adventure' },
  { id: 46, anime_type: 'kodomomuke', anime_category: 'comedy' },
  { id: 46, anime_type: 'kodomomuke', anime_category: 'educational' },
];
for (let index = 0; index < animeRoute.length; index++) {
  console.log("working")
  bestAnimeListRouter.get(`/bestanimelist/${animeRoute[index]["anime_type"]}`, async (req, res) => {
    const animeList = await bestAnimelistData(animeRoute[index]["anime_type"]);
    console.log(animeList)
    res.json({
      animeList: animeList
    });
  }

  );
}

export default bestAnimeListRouter;
