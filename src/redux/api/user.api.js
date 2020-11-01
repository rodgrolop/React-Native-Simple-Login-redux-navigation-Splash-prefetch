import { setUser, setLoading } from '../actions/user.actions'
import store from '../store'

import * as RootNavigation from '../../navigation/RootNavigation'

export const userLogin = loginData => {
  
    store.dispatch(setLoading(true))
  
    setTimeout(function(){ 
      
        store.dispatch(setUser(loginData))
        RootNavigation.navigate('Home')
        
    }, 3000)

}