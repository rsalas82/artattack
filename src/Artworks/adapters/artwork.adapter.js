export const adaptArtworksInfo = (artworks) => {
    return artworks.map(artwork => {
        return {
            id: artwork.id,
            accessionNumber: artwork.accession_number,
            tombstone: artwork.tombstone,
            currentLocation: artwork.current_location,
            title: artwork.title,
            creators: artwork.creators,
            collection: artwork.collection,
            creationDate: artwork.creation_date,
            technique: artwork.technique,
            department: artwork.department,
            type: artwork.type,
            url: artwork.url,
            image: artwork.images.web.url
        }
    })
}