export const CLIENT_ROLE = () => {
    return { type: "CLIENT" };
  };
  
  export const ADMIN_ROLE = () => {
    return { type: "ADMIN" };
  };


  export const ADD_ROOM = (id) => {
    return { type: "ADD_ROOM" , payload : id }
  }
  
  export const LOGIN_STATE = () => {
    return { type: "LOGIN" };
  };
  
  export const LOGOUT_STATE = () => {
    return { type: "LOGOUT" };
  };
  