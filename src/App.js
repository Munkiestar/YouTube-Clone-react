import "./App.scss";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import RecommendedVideos from "./components/RecommendedVideos/RecommendedVideos";
import SearchPage from "./components/SearchPage/SearchPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        {/* Header */}
        <Header />

        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              {/*  Sidebar  */}
              <Sidebar />

              {/*  SearchPage Section  */}
              <SearchPage />
            </div>
          </Route>

          <Route path="/">
            <div className="app__page">
              {/*  Sidebar  */}
              <Sidebar />

              {/*  VideoCard Section  */}
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
// 2:25:25
