import { SET_USER, USER_LOGOUT, LOADING } from '../actions/user.actions'

export const userInitialState = {
    loading: false,
    isLoggedIn: false,
    error: '',
    user: {},
}

const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case SET_USER: {
            return {
                ...state,
                isLoggedIn: true,
                loading: false,
                user: action.payload,
            }
        }
        case USER_LOGOUT: {
            return {
                ...initialState
            }
        }
        case LOADING: {
            return {
                ...state,
                loading: action.payload,                
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default userReducer