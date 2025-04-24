import axios from "axios";
import ApiContant from "../constants/ApiConstants";

const ShopService = {};

ShopService.getList = async function(param) {
    let url = ApiContant.shop;
    if (param && param.search) {
      url += `?filter=${encodeURIComponent(param.search)}`;
    }
    return await axios.get(url)
      .then((res) => { return res; })
      .catch(function(error) { console.log("( Shop Service ) : Catch Error : ", error) });
}
ShopService.getCategory = async function() {
    return await axios.get(ApiContant.category).then((res)=>{return res;})
    .catch(function(error){console.log("( Shop Service ) : Catch Error : ", error)})
}

export default ShopService;