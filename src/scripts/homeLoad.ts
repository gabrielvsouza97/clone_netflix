import { GetHomeList } from "../types/TMDBTypes";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "61e21e0a2ff8b1129a01a9bbe881c950";
const AUTH_LANGUAGE = `api_key=${API_KEY}&language=pt-BR`;
const NETFLIX_NETWORK = "with_networks=213";

async function getListFilms (endpoint:string) {
    const request = await fetch(`${BASE_URL}${endpoint}`);
    const response = await request.json();
    return response;
}

export const homeLoad = {
    getHomeList: async () : Promise<GetHomeList []> => {
        return [
            {
                englishName: "toprated",
                brazilianName: "Mais vistos",
                items: await getListFilms(`/trending/all/day?${AUTH_LANGUAGE}`),
            },
            {
                englishName: "originals",
                brazilianName: "Originais Netflix",
                items: await getListFilms(`/discover/movie?with_networks=213&${AUTH_LANGUAGE}`),
            },
            {
                englishName: "action",
                brazilianName: "Ação",
                genreId:28,
                items: await getListFilms(`/discover/movie?${NETFLIX_NETWORK}&with_genres=28&${AUTH_LANGUAGE}`)
            },
            {
                englishName: "comedy",
                brazilianName: "Comédia",
                genreId:35,
                items: await getListFilms(`/discover/movie?${NETFLIX_NETWORK}&with_genres=35&${AUTH_LANGUAGE}`)
            },
            {
                englishName: "documentary",
                brazilianName: "Documentário",
                genreId:35,
                items: await getListFilms(`/discover/movie?${NETFLIX_NETWORK}&with_genres=28&${AUTH_LANGUAGE}`)
            },
            {
                englishName: "drama",
                brazilianName: "Drama",
                genreId:18,
                items: await getListFilms(`/discover/movie?${NETFLIX_NETWORK}&with_genres=18&${AUTH_LANGUAGE}`)
            }
        ]
    }
}