import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import "./app.scss";

const App = () => {
  return (
    <div className="main-container">
      <div className="container">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default App;
