import axios from "axios";
import ApiContant from "../constants/ApiConstants";

const HomeService = {};

HomeService.getList = async function() {
    return await axios.get(ApiContant.productsType).then((res)=>{return res;})
    .catch(function(error){console.log("Catch Error : ", error)})
}

export default HomeService;