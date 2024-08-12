import "./style.scss";
import ListItem from "../ListItem/ListItem";
import { useSearchBar } from "./useSearchBar";

const SearchBar = () => {
  const {
    onBlurHandler,
    setSearch,
    moviesData,
    blur,
    loading,
    setBlur,
    search,
  } = useSearchBar();

  return (
    <div
      className="searchbar-main"
      onBlur={onBlurHandler}
      onClick={() => setBlur(true)}
    >
      <span className="material-symbols-outlined looking-glass">search</span>
      <input
        className="searchbar"
        type="text"
        placeholder="Search Movies"
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && search.length > 0 ? (
        <div className="list-container">
          <div className="listed-movie-container">loading</div>
        </div>
      ) : (
        moviesData &&
        blur &&
        !loading && (
          <div className="list-container">
            {moviesData.length > 0
              ? moviesData.map((movie) => {
                  return <ListItem key={movie.title} movieData={movie} />;
                })
              : search.length > 0 &&
                !loading && (
                  <div className="list-container">
                    <div className="listed-movie-container">
                      Title not found
                    </div>
                  </div>
                )}
          </div>
        )
      )}
    </div>
  );
};

export default SearchBar;
