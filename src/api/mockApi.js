import axios from "axios";
import {message} from "antd";
const api = axios.create({
    baseURL: "https://68c7ac935d8d9f5147328860.mockapi.io/1123",
    headers: {"Content-Type": "application/json"},
    timeout: 10_000
});
api.interceptors.response.use(
    (response) => {
        // handle response
        return response;
    },
    (error) => {
        // handle response error
        const {status, data} = error.response;

        if (status === 404) {
             message.error(error.message.data(), 1000).then( r =>{});
            // alert(error.message);
            // console.log(error.response)
            // do something
        }
        return Promise.reject(error);
    }
);
export {api}