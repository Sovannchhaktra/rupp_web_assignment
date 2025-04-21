import axios from "axios";
import ApiContant from "../constants/ApiConstants";

const ProductsDetailService = {};

ProductsDetailService.getDetail = async function(id) {
    return await axios.get(ApiContant.productsDetail + "/" + id).then((res)=>{return res;})
    .catch(function(error){console.log("( Product Service ) : Catch Error : ", error)})
}

export default ProductsDetailService;