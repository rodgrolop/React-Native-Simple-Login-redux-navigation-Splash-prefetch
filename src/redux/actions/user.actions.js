export const SET_USER = 'SET_USER'
export const LOADING = 'LOADING'
export const USER_LOGOUT = 'USER_LOGOUT'

export const setUser = userData => ({
    type: SET_USER,
    payload: userData,
})

export const setLoading = loading => ({
    type: LOADING,
    payload: loading
})

export const userLogout = () => ({
    type: USER_LOGOUT,
    payload: null,
})