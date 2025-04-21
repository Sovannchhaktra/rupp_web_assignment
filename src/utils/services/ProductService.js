import axios from "axios";
import ApiContant from "../constants/ApiConstants";

const ProductsService = {};

ProductsService.getList = async function() {
    return await axios.get(ApiContant.products).then((res)=>{return res;})
    .catch(function(error){console.log("( Product Service ) : Catch Error : ", error)})
}

export default ProductsService;