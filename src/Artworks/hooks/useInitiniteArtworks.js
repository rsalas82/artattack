import { useEffect, useState } from "react"
import { adaptArtworksInfo } from "../adapters/artwork.adapter"
import { getArtworks } from "../services/getArtworks.service"

export const useInitiniteArtworks = (searchText) => {
    const [artworks, setArtworks] = useState(null)
    const [loading, setLoading] = useState(true)
    const [offset, setOffset] = useState(0)
  
    const moreArtworks = async () => {
        setLoading(true)
        const more_artworks = await getArtworks(searchText, offset + 12)
        setOffset(prev => prev + 12)
        setArtworks(prev => [...prev, ...adaptArtworksInfo(more_artworks.data)])
    }
  
    useEffect(() => {
      ;(async () => {
        setLoading(true)
        const artwork_response = await getArtworks(searchText, 0)
        setArtworks(adaptArtworksInfo(artwork_response.data))
      })()
    }, [searchText])

    useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }, [artworks])
  
    return [artworks, moreArtworks, loading]
  }