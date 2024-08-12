import { useEffect, useState } from "react";
import { fetchData } from "../../Services";
import { MovieData, MovieDataResponse } from "../../Interfaces/MovieData";

export const useSearchBar = () => {
  const [search, setSearch] = useState("");
  const [moviesData, setMoviesData] = useState<MovieData[] | []>([]);
  const [blur, setBlur] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (search.length === 0) {
      setMoviesData([]);
    }
    setLoading(true);
    const delayDebounce = setTimeout(() => {
      fetchData<MovieDataResponse>(`api/movies?title=${search}`)
        .then((data: MovieDataResponse) => {
          const movies: MovieData[] = data.results.filter(
            (movie) => movie.poster_path
          );
          setMoviesData([]);
          setMoviesData(movies.sort((a, b) => b.popularity - a.popularity));
          setLoading(false);
        })
        .catch((err) => console.error("Error fetching data:", err));
    }, 300);
    return () => clearTimeout(delayDebounce);
  }, [search]);

  const onBlurHandler = () => {
    setTimeout(() => {
      setBlur(false);
    }, 200);
  };

  return {
    onBlurHandler,
    setSearch,
    moviesData,
    blur,
    loading,
    setBlur,
    search,
  };
};
