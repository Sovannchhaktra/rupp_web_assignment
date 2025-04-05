import axios from "axios";
import BaseService from "./BaseService";
import ApiContant from "../constants/ApiConstants";

const AdvertisementService = {};

AdvertisementService.getList = async function() {
    return await axios.get(ApiContant.advertisement).then((res)=>{return res})
    .catch(function(error){console.log("Catch error: ", error)})
}

export default AdvertisementService;