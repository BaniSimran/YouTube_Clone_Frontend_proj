import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import RecommendedVideos from './components/RecommendedVideos/RecommendedVideos';
import SearchPage from './components/SearchPage/SearchPage';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useAppContext } from './appContext';

function App() {
  const { appState } = useAppContext();

  return (
    <div className="app">
      <Router>
        <Switch>
          {appState === 'home' && (
            <div className="app">
              <Header />

              <Route exact path="/">
                <div className="app__mainpage">
                  <SideBar />
                  <RecommendedVideos />
                </div>
              </Route>

              <Route path="/video/:videoId">
                <div className="app__mainpage">
                  <VideoPlayer />
                </div>
              </Route>

              <Route exact path="/search/:searchQuery">
                <div className="app__mainpage">
                  <SideBar />
                  <SearchPage />
                </div>
              </Route>
            </div>
          )}

          {appState === 'login' && <Login />}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
