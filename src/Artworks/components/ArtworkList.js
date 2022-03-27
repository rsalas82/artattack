import { useContext, useEffect, useState } from "react"
import { useInitiniteArtworks } from "./../hooks/useInitiniteArtworks"
import ArtworkCard from "./ArtworkCard"
import Spinner from "../../common/components/Spinner"
import {SearchContext} from "../../common/contexts/SearchContext"
import "./ArtworkList.css"
import { useLocation } from "wouter"
import { useSelector } from "react-redux"
import { MYFAVS_URL } from "../../common/utilities/constants.utility"

const ArtworkList = () => {
    const favs = useSelector(state => state.artworks.favs)
    const {searchText} = useContext(SearchContext)
    const [location, setLocation] = useLocation()
    const [artworks, moreArtworks, loading] = useInitiniteArtworks(searchText)
    const [showFavs, setShowFavs] = useState(false)

    useEffect(() => {
        setShowFavs(false)
        if (location.includes(MYFAVS_URL)) {
            setShowFavs(true)
        }
    }, [location])
    
    useEffect(() => {
    }, [searchText])

    return (
        <>  
            <div className="ArtworkList">
                {showFavs && !loading && favs?.map(fav => 
                    {return <ArtworkCard {...fav} key={fav.id} />}
                )}
                
                {!showFavs && !loading && artworks?.map(artwork => 
                    {return <ArtworkCard {...artwork} key={artwork.id} />}
                )}
            </div>
            
            <div className="ArtworkSpinner">
                {(loading) && <Spinner />}
                {!showFavs && (artworks && artworks.length > 0 && !loading) && <button onClick={moreArtworks}>Load more artworks</button>}
            </div>
            
            
            {((favs && favs.length <= 0) || (artworks && artworks.length <= 0)) && !loading && (
                <div className="ArtworkList_error">
                    {showFavs && favs && favs.length <= 0 && !loading 
                        && <p className="ArtworkList_noartworks">You haven't got any favorite artwork yet. 
                            You can add artworks to your favorite list from the artwork details view.</p>}

                    {!showFavs && (!artworks || artworks.length <= 0) && !loading 
                        && <p className="ArtworkList_noartworks">No artworks found. Please, try another search.</p>}
                </div>
            )}
            
        </>
    )
}

export default ArtworkList