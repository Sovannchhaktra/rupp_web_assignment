import axios from "axios";
import ApiContant from "../constants/ApiConstants";

const CreateAccountService = {};

CreateAccountService.getListContries = async function() {
    console.log(ApiContant.country)
    return await axios.get(ApiContant.country).then((res) => {return res;})
    .catch(function(error){console.log("Catch Error : ", error)})
}

CreateAccountService.getListProvince = async function(country) {
    return await axios.get(ApiContant.country + "/" + country).then((res) => {return res;})
    .catch(function(error) {
        console.log("Catch error: ", error);
    });
}

CreateAccountService.create = async function(body) {
    return await axios.post(ApiContant.register, body).then((res)=>{return res;})
    .catch(function(error){console.log("Catch Error : ", error)})
}

export default CreateAccountService;