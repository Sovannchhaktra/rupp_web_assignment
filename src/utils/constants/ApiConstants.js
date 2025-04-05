const baseUrl = process.env.VUE_APP_BASE_URL;
const type = "/api";

const ApiContant = {
    home: baseUrl + type + "",
    products: baseUrl + type + "/products",
    advertisement: baseUrl + type + "/advertisements"
}

export default ApiContant;