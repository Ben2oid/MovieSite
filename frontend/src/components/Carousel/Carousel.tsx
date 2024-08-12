import { FC, useState } from "react";
import Card from "../Card/Card";
import { MovieDataResponse } from "../../Interfaces/MovieData";
import "./style.scss";

interface CarouselProps {
  moviesData: MovieDataResponse;
}

export const Carousel: FC<CarouselProps> = ({ moviesData }) => {
  const [count, setCount] = useState(0);
  const [moveLeft, setMoveLeft] = useState(0);
  const amountOfData = moviesData.results.length ?? 0;
  const numOfDataToDisplay = 5;

  const backArrowHandler = () => {
    count === 0
      ? setCount(amountOfData / numOfDataToDisplay - 1)
      : setCount(count - 1);
  };

  return (
    <div className="carousel-main-container">
      <button onClick={backArrowHandler}>
        <span className="material-symbols-outlined arrow">arrow_back</span>
      </button>
      {moviesData?.results.map((movie, i) => {
        if (
          i >= count * numOfDataToDisplay &&
          i < numOfDataToDisplay + count * numOfDataToDisplay
        ) {
          return (
            <div
              style={{
                transition: "0.3s",
                transform: `translateX(${0}px)`,
              }}
              className="card-container"
              key={movie.title}
            >
              <Card movieData={movie} index={i} />
            </div>
          );
        }
      })}
      <button
        onClick={() =>
          amountOfData / numOfDataToDisplay - 1 > count
            ? setCount(count + 1)
            : setCount(0)
        }
      >
        <span className="material-symbols-outlined arrow">arrow_forward</span>
      </button>
    </div>
  );
};
