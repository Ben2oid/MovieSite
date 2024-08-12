import axios from "axios";

const baseURL = "https://api.themoviedb.org/3/";
const headers = {
  Authorization: "Bearer " + process.env.ACCESS_TOKEN_AUTH,
};

export const getMovies = async (req, res) => {
  const { category, page, title } = req.query;
  let reqPage = page ?? 1;
  let reqTitle = title ?? null;
  if (title == null) {
    try {
      const movies = await axios({
        url: `${baseURL}/movie/${category}?language=en-US&page=${reqPage}`,
        headers,
      });
      res.json(movies.data);
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: "Something went wrong on our side" });
    }
  } else {
    try {
      console.log(encodeURI(title));
      const movie = await axios({
        url: `${baseURL}/search/movie?query=${encodeURI(
          title
        )}&include_adult=false&language=en-US&page=1`,
        headers,
      });
      res.json(movie.data);
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: "Something went wrong on our side" });
    }
  }
};

export const getMovieById = async (req, res) => {
  const ID = req.params.id;
  try {
    const movies = await axios({
      url: `${baseURL}3/movie/${ID}?language=en-US&page=1`,
      headers,
    });
    res.json(movies.data);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Something went wrong on our side" });
  }
};

export const getTrailer = async (req, res) => {
  const ID = req.params.id;
  try {
    const movies = await axios({
      url: `${baseURL}3/movie/${ID}/videos?language=en-US&page=1`,
      headers,
    });
    res.json(movies.data);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Something went wrong on our side" });
  }
};
