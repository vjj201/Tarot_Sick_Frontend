import axios, {AxiosInstance, AxiosResponse} from "axios";
import qs from "qs";
import ResponseWrapper from "@/type/base/RequestWrapper";

const http: AxiosInstance = axios.create({
    withCredentials: true,
    timeout: 1200000,
    baseURL: '/api',
    headers: {
        common: {
            Accept: "application/json;charset=utf-8",
        },
        Pragma: "no-cache",
        "Content-Type": "application/json;charset=utf-8",
    },
    paramsSerializer: {
        serialize: (params) => {
            return qs.stringify(params, { arrayFormat: 'repeat' })
        }
    }
});

http.interceptors.response.use(
    (response: AxiosResponse) => {
        return Object.assign(new ResponseWrapper<never>(), response.data);
    },
    async (error) => {
        switch (error.response.status) {
            case 500:
            case 404:
            case 408:
                alert(error.message);
                break;
            case 403:
                alert("無權限");
                break;
            case 401:
                alert("未登入");
                break;
        }
        return Promise.reject(error);
    }
);

export default http;
