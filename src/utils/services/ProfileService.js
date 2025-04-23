import axios from "axios";
import ApiContant from "../constants/ApiConstants";
import BaseService from "./BaseService";

const ProfileService = {};

ProfileService.getProfile = async function() {
    return await axios.get(ApiContant.profile, BaseService.headers()).then((res)=>{return res;})
    .catch(function(error){console.log("Catch Error : ", error)})
}

export default ProfileService;