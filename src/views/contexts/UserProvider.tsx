import React, { createContext, useEffect, useRef, useState } from "react";
import { LOGOUT_PATH, USER_PATH } from "../viewConstants";
import ApiRequest from "../common/apiRequest";

interface $Props {
  children: any;
}

const context = createContext(null);

const useEffectOnce = (cb) => {
  const didRun = useRef(false);

  useEffect(() => {
    if (!didRun.current) {
      cb();
      didRun.current = true;
    }
  }, []);
};

const initialState = {
  user: {},
};

const UserProvider = ({ children }: $Props) => {
  const [user, setUser] = useState({});
  async function logout() {
    await ApiRequest(LOGOUT_PATH, {
      verb: "get",
    });
    setUser({});
  }

  async function fetchData() {
    const response = await ApiRequest(USER_PATH, {
      verb: "get",
    });
    //const state = await makeRequest();
    // console.log("state", state);
    // if (state && state.response && state.response.data) {
    //   setUser(state.response.data);
    // }
    //console.log("fetchData:", status, response);
    if (response.data) {
      setUser(response.data);
    }
  }

  async function updateUser(user) {
    const response = await ApiRequest(USER_PATH, {
      verb: "put",
      params: user,
    });
    if (response.data) {
      setUser(response.data);
    }
  }

  async function putPictureData(provider) {
    const response = await ApiRequest(`${USER_PATH}/picture`, {
      verb: "put",
      params: { provider },
    });
    if (response.data) {
      setUser(response.data);
    }
  }

  useEffectOnce(() => {
    //dispatch({ type: "reset" });
    //fetchData();
  });

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <context.Provider value={{ user, logout, putPictureData, updateUser }}>
      {children}
    </context.Provider>
  );
};

UserProvider.context = context;

export default UserProvider;
