/**
 * Created by gustavoferreira on 12/1/16.
 */

'use strict';

import type {Action} from '../actions/types';

export type State = {
    isLoggedIn: boolean;
    _id: ?string;
    local: ?Object;
};

const initialState = {
    isLoggedIn: false,
    _id: null,
    local: {}
};

function user(state: State = initialState, action: Action): State {
    switch (action.type) {
        case 'LOGGED_IN': {
            let {_id, local} = action.user;
            return {
                isLoggedIn: true,
                _id,
                local
            };
        }
        case 'LOGGED_OUT': {
            return initialState;
        }
    }

    return state;
}

module.exports = user;
