import axios from "axios";
async function ApiRequest(endpoint, { verb = "get", params = {} } = {}) {
  //console.log(verb, reqParams);
  try {
    return await axios[verb](endpoint, params);
  } catch (e) {
    console.log(e);
    return e;
  }
}

export default ApiRequest;
