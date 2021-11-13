import { POST_ADD, POST_REMOVE, POSTS_UPDATE, USER_LOGIN, USER_LOGOUT } from "./actions";

const postReducer = (state, action) => {
  switch(action.type){
    case POST_ADD:
      return {
        ...state,
        data: state.data.concat(action.payload)
      };
    case POST_REMOVE:
      return {
        ...state,
        data: state.data.filter(post => post._id !== action.payload)
        // I had to use post._id, because this is the way this field is defined
      }
    case POSTS_UPDATE: 
        return {
          ...state,
          data: action.payload
        }
    default:
      return state
  }
}

const authReducer = (state, action) => {
  switch(action.type){
    case USER_LOGIN:
      return {
        ...state,
        token: action.payload.token,
        user: {
          email: action.payload.email,
          firstName: action.payload.firstName,
          id: action.payload.id,
          lastName: action.payload.lastName
        }
      }
    case USER_LOGOUT:
      return {
        ...state,
        token: null,
        user: null
      }
    default:
      return state
  }
}

export { postReducer, authReducer }