import ArtworkList from "../components/ArtworkList"
import "./MyFavArtworks.css"

const MyFavArtworks = () => {
    return (
            <div className="MyFavArtworks">
                <h2>My Favorite Artworks</h2>
                <ArtworkList />
            </div>
    )
}

export default MyFavArtworks