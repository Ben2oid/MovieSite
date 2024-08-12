import "./style.scss";
import SearchBar from "../SearchBar/SearchBar";
import { useQueryClient } from "@tanstack/react-query";

const Header = () => {
  const queryClient = useQueryClient();

  return (
    <div className="header-main">
      <div className="button-container">
        <button className="logo">My Movie DB</button>
        <SearchBar />
        <button>All Movies</button>
        <button>My List</button>
        {queryClient.getQueryData(["sessionToken"]) ? (
          <button>LOGIN</button>
        ) : (
          <button>LOGOUT</button>
        )}
      </div>
    </div>
  );
};

export default Header;
