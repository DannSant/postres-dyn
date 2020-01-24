import { User } from './user.model';
import { authActions, SET_USER, UNSET_USER } from './auth.actions';


export interface AuthState  {
    user: User
}

const initState: AuthState = {
    user: null
}

export function authReducer(state=initState, action: authActions): AuthState {
    switch( action.type){
        case SET_USER:
            return {...state, user:action.user}
        case UNSET_USER:
            return {...state, user:null}
        default:
            return state;
    }
}