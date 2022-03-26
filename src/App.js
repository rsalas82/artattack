import { useState } from "react";
import { Route, Switch } from "wouter";
import ArtworkDetails from "./Artworks/pages/ArtworkDetails";
import ArtworkSearchList from "./Artworks/pages/ArtworkSearchList";
import Footer from "./Footer/components/Footer";
import Header from "./Header/components/Header";
import Login from "./Login/components/Login";
import SearchContext from './common/contexts/SearchContext'

function App() {

    const users = [
        {
            username: "rsalas",
            name: "Rafa",
            surname: "Salas",
            password: "12345",
            avatar: "cerdito"
        },
        {
            username: "pcastro",
            name: "Pablo",
            surname: "Castro",
            password: "09876",
            avatar: "patito"
        }
    ]
    localStorage.setItem("users", JSON.stringify(users))

    const [searchText, setSearchText] = useState("")
    const [currentArtwork, setCurrentArtwork] = useState(null)

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Switch>
          <Route path="/" component={Login} />
          <SearchContext.Provider value={{searchText, setSearchText, currentArtwork, setCurrentArtwork}}>
            <Route path="/artworks" component={ArtworkSearchList} />
            <Route path="/artworks/:id" component={ArtworkDetails} />
          </SearchContext.Provider>
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
