const baseUrl = process.env.VUE_APP_BASE_URL;
const type = "/api";

const ApiContant = {
    home: baseUrl + type + "",
    products: baseUrl + type + "/products",
    advertisement: baseUrl + type + "/advertisements",
    productsType: baseUrl + type + "/product/type",
    productsDetail: baseUrl + type + "/products",
    shop: baseUrl + type + "/product/shop",
    country: baseUrl + type + "/countries",
    register: baseUrl + type + "/register",
    login: baseUrl + type + "/login",
}

export default ApiContant;