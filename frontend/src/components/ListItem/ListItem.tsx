import { FC } from "react";
import "./style.scss";
import { ListItemProps } from "../../Interfaces/MovieData";
const imageBaseUrl = "https://image.tmdb.org/t/p/w200/";

const ListItem: FC<ListItemProps> = ({ movieData }) => {
  return (
    <div className="listed-movie-container">
      <div className="item">
        <img
          src={`${imageBaseUrl}/${movieData.poster_path}`}
          alt={movieData.title}
        />
        <div className="item-text">
          <p> {movieData.title}</p>
          <p>{new Date(movieData.release_date).getFullYear()}</p>
          <p>{movieData.vote_average.toFixed(1)}</p>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
