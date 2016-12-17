/**
 * Created by gustavoferreira on 12/10/16.
 */

'use strict';

import {
    InteractionManager
} from 'react-native'

// import type { ThunkAction } from './types';
import axios from 'axios'
import { serverURL } from '../env'

export function loadedAthletes(type, list) {
    return {
        type,
        list
    }
}

export function loadAthletes() {
    return loadParseQuery('LOADED_ATHLETES');
}

function loadParseQuery(type: string) {
    return dispatch => {
        return axios.get(`${serverURL}/movie`).then(res => {
            dispatch(loadedAthletes(type, res.data.data));
            /*InteractionManager.runAfterInteractions(() => {
                dispatch(loadedAthletes(type, res.data.data));
            })*/
        });
    };
}