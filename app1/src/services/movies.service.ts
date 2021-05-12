import http from '../utils/http';
import { omdApiKey } from '../key';

const movieService = {
  searchByName: async (name: string) => {
    try {
      const response = await (<any>http.get('http://www.omdbapi.com/', {
        apikey: omdApiKey,
        s: name,
      }));
      if (response?.Error) {
        console.log(response.Error);
        return null;
      } else {
        return {
          totalResults: parseInt(response.totalResults, 10),
          movies: response.Search.map((movie: any) => ({
            id: movie.imdbID,
            poster: movie.Poster,
            title: movie.Title,
            type: movie.Type,
            year: movie.Year,
          })),
        };
      }
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (id: string) => {},
};

export default movieService;
