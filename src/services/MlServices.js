
import axios from './../utils/axiosHelper.js';
import config from './../utils/config.js';

const baseUrl = config.baseUrl.url;
class MLServices {
    static getProducts(query) {
        return axios
            .get(`${baseUrl}/sites/MLA/search?q=:${query}`)
            .then((response) => {
               return response.data;
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });
    }
}

export default MLServices;
