import { createAction, createReducer } from "@reduxjs/toolkit"

const initialState = {
    favs: []
}

export const addToFavorites = createAction("@artwork/add_to_favs")
export const removeFromFavorites = createAction("@artwork/remove_from_favs")

export const artworksReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addToFavorites, (state, action) => {
            state.favs = [...state.favs, action.payload]
        })
        .addCase(removeFromFavorites, (state, action) => {
            state.favs = state.favs.filter(fav => fav.accessionNumber !== action.payload.accessionNumber)
        })
})