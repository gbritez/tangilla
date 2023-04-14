
import Axios from "axios"

export const getSynonyms = async (text) => {
    try {
        const response = await Axios.post('https://healthy-colt-suit.cyclic.app/post', { text });
        return response.data;
    }
    catch (error) {
        console.error("Error en el servidor: ", error);
    }
}
