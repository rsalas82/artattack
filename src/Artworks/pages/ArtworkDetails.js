import { useContext } from "react"
import SearchContext from "../../common/contexts/SearchContext"

import "./ArtworkDetails.css"

const ArtworkDetails = (props) => {
    const {currentArtwork} = useContext(SearchContext)
    console.log(currentArtwork)
    return (
        <div className="ArtworkDetails">
            <h2>{currentArtwork.title}</h2>
            {currentArtwork.creators.length > 0 && (
                <div className="creators">
                    Created by {currentArtwork.creators.map(creator => creator.description).toString()}
                </div>
            )}
            
            <img src={currentArtwork.image} alt={currentArtwork.title} />

            <div className="artwork_info">
                <p>
                    {currentArtwork.tombstone}
                </p>
                <div>
                    <strong>Collection: </strong> {currentArtwork.collection}
                </div>
                <div>
                    <strong>Current location: </strong> {currentArtwork.currentLocation}
                </div>
                <div>
                    <strong>Creation date: </strong> {currentArtwork.creationDate}
                </div>
                <div>
                    <strong>Technique: </strong> {currentArtwork.technique}
                </div>
                <div>
                    <strong>Category: </strong> {currentArtwork.type}
                </div>
                <div>
                    <strong>Department: </strong> {currentArtwork.department}
                </div>
                <div>
                    <strong>External URL: </strong> <a href={currentArtwork.url}>{currentArtwork.url}</a>
                </div>
            </div>
            
        </div>
    )
}

export default ArtworkDetails

// tombstone: artwork.tombstone,
// currentLocation: artwork.current_location,
// title: artwork.title,
// creators: artwork.creators,
// collection: artwork.collection,
// creationDate: artwork.creation_date,
// technique: artwork.technique,
// department: artwork.department,
// type: artwork.type,
// url: artwork.url,
// image: artwork.images.web.url