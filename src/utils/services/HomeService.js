import axios from "axios";
import ApiContant from "../constants/ApiConstants";

const HomeService = {};

// HomeService.getList = async function() {
//     return await axios.get(ApiContant.productsType).then((res)=>{return res;})
//     .catch(function(error){console.log("Catch Error : ", error)})
// }

HomeService.getNewProducts = async function() {
    return await axios.get(ApiContant.productsType +'/latest').then((res)=>{return res;})
    .catch(function(error){console.log("Catch Error : ", error)})
}

HomeService.getTopRateProducts = async function() {
    return await axios.get(ApiContant.productsType +'/top-rated').then((res)=>{return res;})
    .catch(function(error){console.log("Catch Error : ", error)})
}

HomeService.getPromotionProducts = async function() {
    return await axios.get(ApiContant.productsType +'/promotions').then((res)=>{return res;})
    .catch(function(error){console.log("Catch Error : ", error)})
}

export default HomeService;