import axios from "axios";
import ApiContant from "../constants/ApiConstants";

const ProductsService = {};

ProductsService.getList = async function(param) {
    let url = ApiContant.products;
    if (param && param.search) {
      url += `?search=${encodeURIComponent(param.search)}`;
    }
    return await axios.get(url)
      .then((res) => { return res; })
      .catch(function(error) { console.log("( Product Service ) : Catch Error : ", error) });
}

export default ProductsService;