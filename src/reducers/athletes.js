/**
 * Created by gustavoferreira on 12/10/16.
 */

'use strict';

export type Athlete = {
    id: string;
    url: ?string;
    text: string;
    time: number;
};

type State = {
    athletes: Array<Athlete>;
};

const initialState = {
    athletes: []
};

import type { Action } from '../actions/types';

function athletes(state: State = initialState, action: Action): State {
    switch (action.type) {
        case 'LOADED_ATHLETES':
            let list = action.list.map(fromParseObject);
            return {...state, athletes: list};

        case 'LOGGED_OUT':
            return {...state, athletes: []};

        default:
            return state;
    }
}

function fromParseObject(object: Object): Athlete {
    return {
        id: object._id,
        name: object.title,
        pic: "https://s3-us-west-2.amazonaws.com/upload.beet.com.br/person/53ac59caad8f889c0700000.png",
        // time: object.createdAt.getTime(),
        time: object.date,
    };
}

module.exports = athletes;