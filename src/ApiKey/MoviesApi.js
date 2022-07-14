const apiKey = "https://api.themoviedb.org/3";
const apiDomin = "https://api.themoviedb.org/3";

export const getPopulerMovies = async (page = 1) => {
    try {
        const response = await fetch(`
		${apiDomin}/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
        return false;
    }
};

export const getGenres = async () => {
    try {
        const response = await fetch(`
		${apiDomin}/3/genre/movie/list?api_key=${apiKey}&language=en-US`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
        return false;
    }
};

export const getMovieImages = async (id) => {
    try {
        const response = await fetch(`
		${apiDomin}/movie/${id}/images?api_key=${apiKey}&language=en-US`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
        return false;
    }
};

export const getMoviesDetails = async (id) => {
    try {
        const response = await fetch(`
		${apiDomin}/3/movie/${id}?api_key=${apiKey}&language=en-US`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
        return false;
    }
};

export const getSimilarMovies = async (id, page = 1) => {
    try {
        const response = await fetch(`
		${apiDomin}/3/movie/${id}/similar?api_key=${apiKey}&language=en-US&page=${page}`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
        return false;
    }
};

export const getMoviesWithGenresId = async (id, page = 1) => {
    try {
        const response = await fetch(`
		${apiDomin}/discover/movie?api_key=${apiKey}&with_genres=${id}&sort_by=popularity.desc&page=${page}`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
        return false;
    }
};

export const searchMovies = async (query) => {
    try {
        const response = await fetch(`
		${apiDomin}/search/movie?api_key=${apiKey}&query=${query}
		`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
        return false;
    }
};
