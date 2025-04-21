import axios from "axios";
import ApiContant from "../constants/ApiConstants";

const ShopService = {};

ShopService.getList = async function() {
    return await axios.get(ApiContant.shop).then((res)=>{return res;})
    .catch(function(error){console.log("( Shop Service ) : Catch Error : ", error)})
}

export default ShopService;