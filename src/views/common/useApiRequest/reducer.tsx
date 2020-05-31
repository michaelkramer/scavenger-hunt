import { FETCHING, SUCCESS, ERROR, SAVING, CREATE } from "./actionTypes";

export const initialState = {
  status: null,
  response: null,
};

const reducer = (
  state = initialState,
  { type, response = {}, exception = {} }
) => {
  switch (type) {
    case FETCHING:
      return { ...initialState, status: FETCHING };
    case CREATE:
      return { ...initialState, status: CREATE };
    case SUCCESS:
      return { ...state, status: SUCCESS, response };
    case ERROR:
      return { ...state, status: ERROR, response };
    case SAVING:
      //console.log("reducer", { ...state, status: SAVING, response });
      return { ...state, status: SAVING, response };
    default:
      return state;
  }
};

export default reducer;
