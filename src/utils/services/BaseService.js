
const BaseService = {}

BaseService.headers = function () {
    let accessToken = sessionStorage.getItem("accessToken");
    if (accessToken) {
      let header = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      };
      return header;
    } else {
        BaseService.logout();
    }
};

BaseService.logout = function () {
    sessionStorage.clear();
    localStorage.clear();
    location.reload();
};
  
export default BaseService;