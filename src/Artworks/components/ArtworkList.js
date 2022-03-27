import { useContext, useEffect } from "react"
import { useInitiniteArtworks } from "./../hooks/useInitiniteArtworks"
import ArtworkCard from "./ArtworkCard"
import Spinner from "../../common/components/Spinner"
import SearchContext from "../../common/contexts/SearchContext"
import "./ArtworkList.css"

const ArtworkList = () => {
    const {searchText} = useContext(SearchContext)
    const [artworks, moreArtworks, loading] = useInitiniteArtworks(searchText)
    

    useEffect(() => {
    }, [searchText])

    return (
        <>
            <div className="ArtworkList">
                {artworks.map(artwork => 
                    {return <ArtworkCard {...artwork} key={artwork.id} />}
                )}
                {(loading || artworks.length <= 0) && <Spinner />}
                {!loading && <button onClick={moreArtworks}>Load more artworks</button>}
            </div>
        </>
    )
}

export default ArtworkList