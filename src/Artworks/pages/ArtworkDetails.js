import { useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {SearchContext} from "../../common/contexts/SearchContext"
import { camelize } from "../../common/utilities/camelize.utility"
import { addToFavorites, removeFromFavorites } from "../reducer/artworks.reducer"
import {ReactComponent as FavIcon} from "./../../common/assets/favorite_black_24dp.svg"
import {ReactComponent as NoFavIcon} from "./../../common/assets/favorite_border_black_24dp.svg"

import "./ArtworkDetails.css"

const ArtworkDetails = (props) => {
    const {currentArtwork} = useContext(SearchContext)
    const favs = useSelector(state => state.artworks.favs)
    const dispatch = useDispatch()
    const [isFav, setIsFav] = useState(false)

    useEffect(() => {
        setIsFav(favs.filter(fav => fav.accessionNumber === currentArtwork.accessionNumber).length > 0)
    }, [favs, currentArtwork.accessionNumber])

    const handleAddFavClick = () => {
        dispatch(addToFavorites(currentArtwork))
    }

    const handleRemoveFavClick = () => {
        dispatch(removeFromFavorites(currentArtwork))
    }
    
    return (
        <div className="ArtworkDetails">
            <div className="ArtworkDetails__title">
                <h2>{currentArtwork.title} <span>({currentArtwork.creationDate})</span></h2>
                {isFav && (
                    <FavIcon onClick={handleRemoveFavClick} />
                )}
                {!isFav && (
                    <NoFavIcon onClick={handleAddFavClick} />
                )}
            </div>

            {currentArtwork.creators.length > 0 && (
                <div className="ArtworkDetails__creators">
                    {currentArtwork.creators.map(creator => creator.description).toString()}
                </div>
            )}

            <img src={currentArtwork.image} alt={currentArtwork.title} />

            <div className="ArtworkDetails__moreinfo">
                {currentArtwork.culture && (
                    <div className="ArtworkDetails__moreinfo__culture">
                        <h3>CULTURE</h3>
                        <div>{currentArtwork.culture.map((cult, index) => <p key={`cult_${index}`}>{cult}</p>)}</div>
                    </div>
                )}

                {currentArtwork.currentLocation && (
                    <div className="ArtworkDetails__moreinfo__location">
                        <h3>LOCATION</h3>
                        <p>{currentArtwork.currentLocation}</p>
                    </div>
                )}
                
                {currentArtwork.didYouKnow && (
                    <div className="ArtworkDetails__moreinfo__didyouknow">
                        <h3>DID YOU KNOW?</h3>
                        <p>{currentArtwork.didYouKnow}</p>
                    </div>
                )}
                
                <div className="ArtworkDetails__moreinfo__seealso">
                    <h3>SEE ALSO</h3>
                    {currentArtwork.collection && (
                        <p><strong>Collection: </strong> {currentArtwork.collection}</p>
                    )}
                    {currentArtwork.department && (
                        <p><strong>Department: </strong> {currentArtwork.department}</p>
                    )}
                    {currentArtwork.technique && (
                        <p><strong>Medium: </strong> {camelize(currentArtwork.technique)}</p>
                    )}
                    {currentArtwork.type && (
                        <p><strong>Type of artwork: </strong> {currentArtwork.type}</p>
                    )}
                </div>
            </div>
            
        </div>
    )
}

export default ArtworkDetails