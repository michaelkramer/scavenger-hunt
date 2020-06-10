import React, {
  createContext,
  useEffect,
  useRef,
  useReducer,
  useState,
} from "react";

import isEmpty from "lodash/isEmpty";
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
  //const [state, dispatch] = useReducer(reducer, initialState);
  // const [fetchState, makeRequest] = useApiRequest(FETCHING, "/api/user", {
  //   verb: "get",
  // });

  // const [logoutState, logoutRequest] = useApiRequest(FETCHING, "/auth/logout", {
  //   verb: "get",
  // });

  async function logout() {
    await ApiRequest("/auth/logout", {
      verb: "get",
    });
    //logoutRequest();
    //console.log("state", state);
    setUser({});
  }

  async function fetchData() {
    const response = await ApiRequest("/api/user", {
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
    const response = await ApiRequest("/api/user", {
      verb: "put",
      params: user,
    });
    if (response.data) {
      setUser(response.data);
    }
  }

  async function putPictureData() {
    const response = await ApiRequest("/api/user/picture", {
      verb: "put",
      params: { provider: "facebook" },
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
