import { useContext, useEffect, useState } from "react"
import ArtworkCard from "./ArtworkCard"
import Spinner from "../../common/components/Spinner"
import {SearchContext} from "../../common/contexts/SearchContext"
import "./ArtworkList.css"
import { useLocation } from "wouter"
import { useSelector } from "react-redux"
import { MYFAVS_URL } from "../../common/utilities/constants.utility"

const ArtworkList = ({artworks, moreArtworks, loading}) => {
    const favs = useSelector(state => state.artworks.favs)
    const {searchText} = useContext(SearchContext)
    const [location, setLocation] = useLocation()
    
    const [showFavs, setShowFavs] = useState(false)

    const hasNoFavs = () => {
        return showFavs && (!favs || (favs && favs.length <= 0)) && !loading
    }

    const hasNoArtworks = () => {
        return !showFavs && (!artworks || (artworks && artworks.length <= 0)) && !loading
    }

    const hasMoreArtworks = () => {
        return !showFavs && artworks && artworks.length > 0 && !loading 
    }

    useEffect(() => {
        setShowFavs(location.includes(MYFAVS_URL) ? true : false)
    }, [location])
    
    useEffect(() => {
    }, [searchText])

    return (
        <>  
            <div className="ArtworkList">
                {showFavs && !loading && favs?.map(fav => 
                    {return <ArtworkCard {...fav} key={fav.id} />}
                )}
                
                {!showFavs && artworks?.map(artwork => 
                    {return <ArtworkCard {...artwork} key={artwork.id} />}
                )}
            </div>
            
            <div className="ArtworkSpinner">
                { loading && <Spinner />}
                { !showFavs && hasMoreArtworks && <button onClick={moreArtworks}>Load more artworks</button>}
            </div>

            { hasNoFavs() && (
                <div className="ArtworkList_error">
                    <p className="ArtworkList_noartworks">
                        You haven't got any favorite artwork yet. 
                        You can add artworks to your favorite list from the artwork details view.
                    </p>
                </div>
            )}
            
            {hasNoArtworks() &&  (
                <div className="ArtworkList_error"> 
                    <p className="ArtworkList_noartworks">No artworks found. Please, try another search.</p>
                </div>
            )}
            
        </>
    )
}

export default ArtworkList