import axios from "axios";
import ApiContant from "../constants/ApiConstants";

const LoginService = {};

LoginService.login = async function(body) {
    return await axios.post(ApiContant.login, body).then((res)=>{return res;})
    .catch(function(error){console.log("Catch Error : ", error)})
}

export default LoginService;