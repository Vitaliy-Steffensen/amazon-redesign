const authReducer = (state, action) => {
  switch (action.type) {
    case "SET_AUTH":
      return {
        auth: {
          token: action.token,
          user: action.user,
        },
      };
    default:
      return state;
  }
};

export default authReducer;
