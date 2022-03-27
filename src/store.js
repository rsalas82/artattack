import { configureStore } from "@reduxjs/toolkit";
import { artworksReducer } from "./Artworks/reducer/artworks.reducer";

const store = configureStore({
    reducer: {
        artworks: artworksReducer
    }
})

export default store