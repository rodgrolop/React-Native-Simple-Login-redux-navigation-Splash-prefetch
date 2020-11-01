import { SET_USER, LOADING, USER_LOGOUT } from '../../actions/user.actions'

const userMiddleware = () => next => action => {  
  
  if (action.type === SET_USER) {
    next(action)
  }
  
  if (action.type === LOADING) {
    next(action)
  }
  
  if (action.type === USER_LOGOUT) {
    next(action)
  }
  
  else {
    next(action)
  }
}


export default userMiddleware