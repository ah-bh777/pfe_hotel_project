const actualState = {
  etatDeUtilisateur: {
    role: "ADMIN",
    log: false,
    room: [1,3,5]
  }
};

const reducer = (state = actualState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        etatDeUtilisateur: { ...state.etatDeUtilisateur, log: true }
      };
    case "LOGOUT":
      return {
        ...state,
        etatDeUtilisateur: { ...state.etatDeUtilisateur, log: false }
      };
    case "CLIENT":
      return {
        ...state,
        etatDeUtilisateur: { ...state.etatDeUtilisateur, role: "CLIENT" }
      };
    case "ADMIN":
      return {
        ...state,
        etatDeUtilisateur: { ...state.etatDeUtilisateur, role: "ADMIN" }
      };
    case "ADD_ROOM":
      return {
        ...state,
        etatDeUtilisateur: {
          ...state.etatDeUtilisateur,
          room: [...state.etatDeUtilisateur.room, action.payload]
        }
      };
    default:
      return state;
  }
};

export default reducer;
