import { useQuery } from "@tanstack/react-query";
import { Carousel } from "../../components";
import { fetchData } from "../../Services";
import { MovieDataResponse } from "../../Interfaces/MovieData";
import "./style.scss";

export const MainPage = () => {
  const { data: nowData, isLoading: nowLoading } = useQuery<MovieDataResponse>({
    queryKey: ["nowPlaying"],
    queryFn: () => fetchData("api/movies?category=now_playing"),
  });

  const { data: popularData, isLoading: popularLoading } =
    useQuery<MovieDataResponse>({
      queryKey: ["popular"],
      queryFn: () => fetchData("api/movies?category=popular"),
    });

  if (nowLoading || popularLoading) {
    return <h1>LOADING</h1>;
  }

  return (
    <div className="carousel-container">
      <div className="main-title">
        <h2>Playing Now</h2>
      </div>

      <Carousel moviesData={nowData as MovieDataResponse} />
      <div className="main-title">
        <h2>Popular Movies</h2>
      </div>
      <Carousel moviesData={popularData as MovieDataResponse} />
    </div>
  );
};
