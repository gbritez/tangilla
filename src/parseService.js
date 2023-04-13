
import Axios from "axios"

export const getSynonyms = async (text) => {
    try {
        const response = await Axios.post('http://localhost:8080/post', { text });
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}
