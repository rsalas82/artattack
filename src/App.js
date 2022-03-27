import { useState } from "react";
import { Route, Switch } from "wouter";
import ArtworkDetails from "./Artworks/pages/ArtworkDetails";
import ArtworkSearchList from "./Artworks/pages/ArtworkSearchList";
import Footer from "./Footer/components/Footer";
import Header from "./Header/components/Header";
import Login from "./User/pages/Login";
import {SearchContext} from './common/contexts/SearchContext'
import {UserContext} from './common/contexts/UserContext'
import MyFavArtworks from "./Artworks/pages/MyFavArtworks";
import "./App.css"
import { ARTWORKS_URL, ARTWORK_DETAIL_URL, MYFAVS_URL } from "./common/utilities/constants.utility";

function App() {
    const [searchText, setSearchText] = useState("")
    const [userLoggedIn, setUserLoggedIn] = useState()
    const [currentArtwork, setCurrentArtwork] = useState(null)

  return (
    <UserContext.Provider value={{userLoggedIn, setUserLoggedIn}}>
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route path="/" component={Login} />
            <SearchContext.Provider value={{searchText, setSearchText, currentArtwork, setCurrentArtwork}}>
              <Route path={ARTWORKS_URL} component={ArtworkSearchList} />
              <Route path={ARTWORK_DETAIL_URL} component={ArtworkDetails} />
              <Route path={MYFAVS_URL} component={MyFavArtworks} />
            </SearchContext.Provider>
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </UserContext.Provider>
  );
}

export default App;
