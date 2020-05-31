import { useReducer, useCallback } from "react";
import axios from "axios";
import reducer, { initialState } from "./reducer";
import {
  FETCHING,
  SUCCESS,
  ERROR,
  SAVING,
  saving,
  CREATE,
  create,
  fetching,
  success,
  error,
} from "./actionTypes";

export {
  FETCHING,
  SUCCESS,
  ERROR,
  SAVING,
  CREATE,
  create,
  saving,
  fetching,
  success,
  error,
};

const useApiRequest = (
  action,
  endpoint,
  { verb = "get", params = {} } = {}
) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const makeRequest = useCallback(
    async (reqParams = params) => {
      //console.log(verb, reqParams);
      try {
        switch (action) {
          case SAVING:
            dispatch(saving());
            break;
          case FETCHING:
            dispatch(fetching());
            break;
        }

        const response = await axios[verb](endpoint, reqParams);
        dispatch(success(response));
      } catch (e) {
        console.log(e);
        dispatch(error(e));
      }
    },
    [action, endpoint, verb, params]
  );

  return [state, makeRequest];
};

export default useApiRequest;
