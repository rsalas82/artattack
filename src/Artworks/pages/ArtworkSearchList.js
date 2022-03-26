import { useContext } from "react"
import Button from "../../common/components/Button"
import TextField from "../../common/components/TextField"
import ArtworkList from "../components/ArtworkList"
import SearchContext from '../../common/contexts/SearchContext'
import "./ArtworkSearchList.css"

const ArtworkSearchList = () => {
    const {setSearchText} = useContext(SearchContext)

    const handleSearchTextChange = (evt) => {
        setSearchText(evt.target.value)
    }

    return (
            <div className="ArtworkSearch">
                <h2>Artwork Search</h2>
                <div className="searchForm">
                    <TextField id="searchByText" type="text" label="Search" onChange={handleSearchTextChange} className="searchForm_fields" />
                    <Button>Search</Button>
                </div>
                <ArtworkList />
            </div>
    )
}

export default ArtworkSearchList