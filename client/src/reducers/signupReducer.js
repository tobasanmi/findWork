import { GET_USER_INPUT } from "../actions/signupActions";


const initialState = {
   signupFormDetails : {}
}

const userReducer = (state = initialState, action) => {
  const newState = {...state};
  if(action.type === GET_USER_INPUT){
    Object.assign(newState.signupFormDetails, action.values)
  }
  return state;
}


export default userReducer;