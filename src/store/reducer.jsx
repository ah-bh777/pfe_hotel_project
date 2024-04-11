const actualState = {
    etatDeUtilisateur : {
        role : "ADMIN",
        log : false
    }
}

const reducer = (state = actualState, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
        ...state, etatDeUtilisateur: {...state.etatDeUtilisateur , log: true }
        };
        case "LOGOUT":
            return {
        ...state, etatDeUtilisateur: {...state.etatDeUtilisateur , log: false }
            };
        case "CLEINT":
                return {
        ...state, etatDeUtilisateur: {...state.etatDeUtilisateur , role : "CLEINT" }
                };
        case "ADMIN":
            return {
        ...state, etatDeUtilisateur: {...state.etatDeUtilisateur , role : "ADMIN" }
            };
       default:
            return state;
    }
  };
  
export default reducer