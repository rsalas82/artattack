import { useContext, useState } from "react"
import Button from "../../common/components/Button"
import TextField from "../../common/components/TextField"
import ArtworkList from "../components/ArtworkList"
import SearchContext from '../../common/contexts/SearchContext'
import "./ArtworkSearchList.css"

const ArtworkSearchList = () => {
    const {setSearchText} = useContext(SearchContext)
    const [search, setSearch] = useState()

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
                <ArtworkList />
            </div>
    )
}

export default ArtworkSearchList