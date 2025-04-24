import axios from "axios";
import ApiContant from "../constants/ApiConstants";

const ShopService = {};

ShopService.getList = async function() {
    return await axios.get(ApiContant.shop +`/by-category?category_id=3`).then((res)=>{return res;})
    .catch(function(error){console.log("( Shop Service ) : Catch Error : ", error)})
}
ShopService.getCategory = async function() {
    return await axios.get(ApiContant.category).then((res)=>{return res;})
    .catch(function(error){console.log("( Shop Service ) : Catch Error : ", error)})
}

export default ShopService;