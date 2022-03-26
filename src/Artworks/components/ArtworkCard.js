import { useContext } from "react"
import { Link } from "wouter"
import { camelize } from "../../common/utilities/camelize.utility"
import "./ArtworkCard.css"
import SearchContext from "../../common/contexts/SearchContext"

const ArtworkCard = (props) => {
    const {accessionNumber, title, technique, type, image } = props
    const {setCurrentArtwork} = useContext(SearchContext)

    const handleArtworkClick = () => {
        setCurrentArtwork(props)
    }

    return (
        <article className="Artwork">
            <Link href={`/artworks/${accessionNumber}`} onClick={handleArtworkClick}>
                <h3>{title}</h3>
                <img src={image} alt={title} />
                <div className="info">
                    <p>
                        {`${type}. ${camelize(technique)}.`}
                    </p>
                </div>
            </Link>
        </article>
    )
}

export default ArtworkCard