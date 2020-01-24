import {Action} from '@ngrx/store';
import { User } from './user.model';

export const SET_USER = 'AUTH_SET_USER'
export const UNSET_USER = 'AUTH_UNSET_USER'

export class SetUserAction implements Action {
    readonly type = SET_USER;
    constructor(public user: User){}
}

export class UnsetUserAction implements Action {
    readonly type = UNSET_USER;
}

export type authActions = SetUserAction | UnsetUserAction;