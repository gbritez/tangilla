
import Axios from "axios"

export function getSynonyms() {
    Axios.post('/parse', {})
        .then((response) => {

        })
        .catch((error) => {

        })
}

export function helloWorld() {
    Axios.get('http://localhost:3000/', {})
        .then((response) => {
            console.log(response.data)
            return response.data
        })
        .catch((error) => {
            console.log(error)
        })
}