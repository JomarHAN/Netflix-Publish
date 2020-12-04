const API_KEY = "4c3f9a5b3bcdbe1f3f5a08cee286cbf6"

const fetchMovie = {
    banner: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    genreName: `/genre/movie/list?api_key=${API_KEY}&language=en-US`

}

export default fetchMovie