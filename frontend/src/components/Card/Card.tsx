import { FC, useState } from "react";
import "./style.scss";
import { CardProps } from "./Card.d";

const Card: FC<CardProps> = ({ movieData, index }) => {
  const [clicked, setClicked] = useState(false);

  const imageBaseUrl = "https://image.tmdb.org/t/p/w200/";
  return (
    <div className="card-main">
      <div
        style={clicked ? { backgroundColor: "yellow", color: "black" } : {}}
        className="ribbon"
        onClick={() => setClicked(!clicked)}
      >
        <span className="material-symbols-outlined sign">
          {clicked ? "check" : "add"}
        </span>
      </div>
      <img src={imageBaseUrl + movieData.poster_path} alt={movieData.title} />
      <div className="rating">
        <span className="material-symbols-outlined star">star_rate</span>
        <p>{movieData.vote_average.toFixed(1)}</p>
      </div>
      <div className="textbox">
        <h4>{`${index + 1}. ${movieData.title}`}</h4>
      </div>
      <div className="trailer">
        <button>
          <span className="trailer-text">Trailer</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
