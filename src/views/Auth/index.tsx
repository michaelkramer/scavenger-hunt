import isEmpty from "lodash/isEmpty";
import ApiRequest from "../common/apiRequest";
import { USER_PATH } from "../viewConstants";

interface $InitialState {
  isAuthenticated: boolean;
  profile: any;
}

export enum AUTH_TYPES {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  ADD_USER,
}

export const initialState = {
  isAuthenticated: false,
  profile: null,
};

export const AuthReducer = (
  state: $InitialState = initialState,
  action: any
) => {
  switch (action.type) {
    case AUTH_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case AUTH_TYPES.LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
      };
    case AUTH_TYPES.ADD_USER:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};

export default class Auth {
  constructor() {
    console.log("constructor");
    //this.user = {};
    this.handleAuthentication = this.handleAuthentication.bind(this);
  }
  user = {};
  getUser() {
    if (this.user === {}) {
      this.handleAuthentication();
      // const user = async () => {
      //   const r = await ApiRequest(USER_PATH, {
      //     verb: "get",
      //   });
      //   this.user = r.data;
      //   return this.user;
      // };
    }
    return this.user;
  }

  handleAuthentication() {
    console.log("handlerAuth");
    if (isEmpty(this.user)) {
      console.log("Handler - is empty");
      return ApiRequest(USER_PATH, {
        verb: "get",
      }).then((response) => {
        this.user = response.data;
      });
    }
    return {};
  }
}
