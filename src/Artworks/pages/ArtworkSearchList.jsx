import { useContext, useEffect, useState } from "react"
import { useLocation } from "wouter"
import Button from "../../common/components/Button"
import TextField from "../../common/components/TextField"
import {SearchContext} from '../../common/contexts/SearchContext'
import {UserContext} from '../../common/contexts/UserContext'
import ArtworkList from "../components/ArtworkList"
import { useInitiniteArtworks } from "../hooks/useInitiniteArtworks"
import "./ArtworkSearchList.css"

const ArtworkSearchList = () => {
    const {searchText, setSearchText} = useContext(SearchContext)
    const {userLoggedIn} = useContext(UserContext)
    const [search, setSearch] = useState()
    const [location, setLocation] = useLocation()
    const [artworks, moreArtworks, loading] = useInitiniteArtworks(searchText)

    useEffect(() => {
        if (!userLoggedIn) {
            setLocation("/")
        }
    }, [])

    const handleSearchTextChange = (evt) => {
        setSearch(evt.target.value)
    }

    const handleSearchClick = (evt) => {
        evt.preventDefault()
        setSearchText(search)
    }

    return (
            <div className="ArtworkSearch">
                <h2>Artwork Search</h2>
                <form className="searchForm" onSubmit={handleSearchClick}>
                    <TextField id="searchByText" type="text" label="Search" onChange={handleSearchTextChange} className="searchForm_fields" />
                    <Button type="submit">Search</Button>
                </form>
                <ArtworkList artworks={artworks} moreArtworks={moreArtworks} loading={loading} />
            </div>
    )
}

export default ArtworkSearchList
