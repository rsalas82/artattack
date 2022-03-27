import { useContext } from "react"
import { Link } from "wouter"
import { camelize } from "../../common/utilities/camelize.utility"
import {SearchContext} from "../../common/contexts/SearchContext"
import { isArtworkFaved } from "../utilities/isArtworkFaved.utility"
import { useSelector } from "react-redux"
import {ReactComponent as FavIcon} from "./../../common/assets/favorite_black_24dp.svg"
import "./ArtworkCard.css"

const ArtworkCard = (props) => {
    const {accessionNumber, title, technique, type, image, creationDate } = props
    const favs = useSelector(state => state.artworks.favs)
    const {setCurrentArtwork} = useContext(SearchContext)

    const handleArtworkClick = () => {
        setCurrentArtwork(props)
    }

    return (
        <article className="Artwork">
            <Link href={`/artworks/${accessionNumber}`} onClick={handleArtworkClick}>
                <h3>{title} <span>({creationDate})</span></h3>
                
                <img src={image} alt={title} />
                <div className="info">
                    <p>
                        {`${type}. ${camelize(technique)}.`}
                    </p>
                    
                    {isArtworkFaved({accessionNumber}, favs) && (
                        <FavIcon />
                    )}
                </div>
            </Link>
        </article>
    )
}

export default ArtworkCard