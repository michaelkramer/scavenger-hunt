import React, { createContext, useEffect, useRef, useState } from "react";
import isEmpty from "lodash/isEmpty";
import { LOGOUT_PATH, USER_PATH } from "../viewConstants";
import ApiRequest from "../common/apiRequest";
import { navigate } from "hookrouter";
import Auth from "./../Auth";
interface $Props {
  children: any;
}

const auth = new Auth();

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
  // const [user, setUser] = useState(async () => {
  //   try {
  //     const response = await ApiRequest(USER_PATH, {
  //       verb: "get",
  //     });
  //     if (response.data) {
  //       return response.data;
  //     }
  //     // eslint-disable-next-line no-empty
  //   } catch (err) {}
  //   return {};
  // });
  const [user, setUser] = useState({});
  const [isAuth, setIsAuth] = useState(false);
  const [authCondition, setAuthCondition] = useState(false);
  // const authorization = (condition) => {
  //   setIsAuth(condition(user));
  // };
  const authorization = async (condition) => {
    console.log("Condition: ", user);
    console.log("isUser?", isEmpty(user));
    if (isEmpty(user)) {
      console.log("because no user");
      await fetchData();
    }
    return condition(user);
  };

  const fetchData = async () => {
    auth.handleAuthentication().then((res) => setUser(auth.getUser()));
  };

  async function logout() {
    await ApiRequest(LOGOUT_PATH, {
      verb: "get",
    });
    setUser({});
  }

  // function fetchData() {
  //   auth.handleAuthentication().then((res) => setUser(auth.getUser()));
  //   console.log("FetchData");
  //   try {
  //     const response = await ApiRequest(USER_PATH, {
  //       verb: "get",
  //     });
  //     console.log("response ==> ", response);
  //     const state = await makeRequest();
  //     console.log("state", state);
  //     if (state && state.response && state.response.data) {
  //       setUser(state.response.data);
  //     }
  //     console.log("fetchData:", status, response);
  //     if (response && response.failedLogin) {
  //       console.log("Go to home");
  //       //navigate("/");
  //     }
  //     if (response.data) {
  //       setUser(response.data);
  //     }
  //   } catch (err) {
  //     console.log("error", err);
  //   }
  // }

  async function updateUser(user) {
    const response = await ApiRequest(USER_PATH, {
      verb: "put",
      params: user,
    });
    if (response.data) {
      setUser(response.data);
    }
  }

  function updateAuthCondition(condition) {
    if (condition) {
      setAuthCondition(condition);
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
  // useEffect(() => {
  //   console.log("test authCondition");
  //   // if (authCondition) {
  //   //   console.log("exists authCondition");
  //   //   authorization(authCondition);
  //   // }
  // }, [authCondition]);
  useEffect(() => {
    console.log("useEffect");
    fetchData();

    return () => {};
  }, []);

  return (
    <context.Provider
      value={{
        user,
        logout,
        putPictureData,
        updateUser,
        updateAuthCondition,
        authorization,
        isAuth,
      }}
    >
      {children}
    </context.Provider>
  );
};

UserProvider.context = context;

export default UserProvider;
