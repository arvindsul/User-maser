const actionType =  { USER_SIGNIN_REQUEST:'login', USER_SIGNIN_SUCCESS:'login_success', USER_SIGNIN_FAIL:'login_fail', USER_REGISTER_REQUEST:'register', USER_REGISTER_SUCCESS:'register_success', USER_REGISTER_FAIL:'register_fail' } ;
function userSigninReducer(state = {}, action) {
  switch (action.type) {
    case actionType.USER_SIGNIN_REQUEST:
      return { loading: true };
    case actionType.USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case actionType.USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case actionType.USER_LOGOUT:
      return {};
    default: return state;
  }
}
function userRegisterReducer(state = {}, action) {
  switch (action.type) {
    case actionType.USER_REGISTER_REQUEST:
       console.log('user reducer'+ action.payload);
      return { loading: true };
    case actionType.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case actionType.USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export {
  userSigninReducer, userRegisterReducer
}