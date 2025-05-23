
const MOVIE_URL:string = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
const AXIOS_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODcwYjcyMGNmNmFmNTViZjI2ZTk5YjA0NjBkMjljMyIsIm5iZiI6MTc0NzM1OTAxMS44NDUsInN1YiI6IjY4MjY5NTIzZThhYjJlYzM4YjRiNThlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X5z6bQ_4d9d9MASFzAregzMaYJQWtmf2nnXlgZvz9NU',
    },
};