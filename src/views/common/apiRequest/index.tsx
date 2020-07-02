import axios from "axios";
async function ApiRequest(endpoint, { verb = "get", params = {} } = {}) {
  //console.log(verb, reqParams);
  try {
    let response = await axios[verb](endpoint, params);
    return response;
  } catch (e) {
    //console.log(e);
    return { failedLogin: true };
  }
}

export default ApiRequest;
