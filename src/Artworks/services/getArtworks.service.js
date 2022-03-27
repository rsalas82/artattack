import axios from "axios"
import { URL_ENDPOINT_CLEVELAND_MUSEUM } from "../../common/utilities/constants.utility"

export const getArtworks = (query, offset) => {
    return axios.get(`${URL_ENDPOINT_CLEVELAND_MUSEUM}/api/artworks/?limit=12&skip=${offset}&has_image=1&q=${query}`)
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.log("No artwork found")
            return []
        })
}