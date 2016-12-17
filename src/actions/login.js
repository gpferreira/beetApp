/**
 * Created by gustavoferreira on 12/1/16.
 */

'use strict';

import axios from 'axios'
import { serverURL } from '../env'

export function loggedIn(user) {
    return {
        type: 'LOGGED_IN',
        user
    }
}

export function login(data) {
    let params = {
        username: data.email.toLowerCase(),
        password: data.password
    };

    return dispatch => {
        return axios.post(`${serverURL}/logon`, params).then(res => {
            console.log(res);
            dispatch(loggedIn(res.data.data))
        });
    }
}

export function logOut() {
    return dispatch => {
        return dispatch({
            type: 'LOGGED_OUT',
        });
    };
}