
import Axios from "axios"

export const getSynonyms = async (formData) => {
    try {
        const response = await Axios.post('http://localhost:8080/post', { formData });
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}
