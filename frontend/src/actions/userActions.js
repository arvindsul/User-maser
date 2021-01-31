const actionType =  { USER_SIGNIN_REQUEST:'login', USER_SIGNIN_SUCCESS:'login_success', USER_SIGNIN_FAIL:'login_fail', USER_REGISTER_REQUEST:'register', USER_REGISTER_SUCCESS:'register_success', USER_REGISTER_FAIL:'register_fail' } ;

const signin = (email, password) => async (dispatch) => {
  dispatch({ type: actionType.USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    //const { data } = await Axios.post("/api/users/signin", { email, password });
    //dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
   // Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
   // dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
  }
}

const register = (userData) => async (dispatch) => {
  console.log('user data'+userData );
  dispatch({ type: actionType.USER_REGISTER_REQUEST, payload: { userData } });
  try {
    //const { data } = await Axios.post("/api/users/register", { name, email, password });
    //dispatch({ type: actionType.USER_REGISTER_SUCCESS, payload: data });
    //Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    //dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
  }
}

const logout = () => (dispatch) => {
 // Cookie.remove("userInfo");
  dispatch({ type: actionType.USER_LOGOUT })
}
export { signin, register, logout };