
import axios from './../utils/axiosHelper.js';
import config from './../utils/config.js';

const baseUrl = config.baseUrl.url;
class MLServices {
    static getProducts(query, limit) {
        return axios
            .get(`${baseUrl}/sites/MLA/search?q=:${query}&limit=${limit}`)
            .then((response) => {
               return response.data;
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });
    }

    static getProductDetail(id) {
        return axios
            .get(`${baseUrl}items/${id}`)
            .then((response) => {
               return response.data;
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });
    }

    static getProductDescription(id) {
        return axios
            .get(`${baseUrl}items/${id}/descriptions`)
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
