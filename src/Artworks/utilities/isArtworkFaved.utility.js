export const isArtworkFaved = (artwork, favs) => {
    return favs.filter(fav => fav.accessionNumber === artwork.accessionNumber).length > 0
}