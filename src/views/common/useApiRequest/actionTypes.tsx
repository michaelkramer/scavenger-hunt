const prefix = "useApiRequest/";

// export interface reducerPayload {
//   type: string;
//   response: any;
//   exception: Error;
// }

export const FETCHING = `${prefix}FETCHING`;
export const SUCCESS = `${prefix}SUCCESS`;
export const ERROR = `${prefix}ERROR`;
export const SAVING = `${prefix}SAVING`;
export const CREATE = `${prefix}CREATE`;

export const fetching = () => ({ type: FETCHING });
export const create = () => ({ type: CREATE });
export const success = (response) => ({
  type: SUCCESS,
  response,
});

export const saving = () => ({
  type: SAVING,
});
export const error = (response) => ({ type: ERROR, response });
