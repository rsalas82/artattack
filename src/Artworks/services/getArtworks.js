import axios from "axios"
import { URL_ENDPOINT_CLEVELAND_MUSEUM } from "../../common/utilities/constants.utility"

export const getArtworks = (query, offset) => {
    return axios.get(`${URL_ENDPOINT_CLEVELAND_MUSEUM}/api/artworks/?limit=12&skip=${offset}&has_image=1&q=${query}`, 
    { 
        headers: {
            "Content-Type":"application/json;charset=UTL-8",
            "Access-Control-Allow-Origin": "*",
            Accept: "application/json",
        }, 
        baseURL: `${URL_ENDPOINT_CLEVELAND_MUSEUM}`
    })
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.log("Error getting artwork data")
            return []
        })
}