/**
 * Created by gustavoferreira on 12/1/16.
 */

'use strict';

import { combineReducers } from 'redux'

module.exports = combineReducers({
    // config: require('./config'),
    // notifications: require('./notifications'),
    // maps: require('./maps'),
    // sessions: require('./sessions'),
    user: require('./user'),
    // schedule: require('./schedule'),
    // topics: require('./topics'),
    // filter: require('./filter'),
    navigation: require('./navigation'),
    athletes: require('./athletes'),
    // friendsSchedules: require('./friendsSchedules'),
    // surveys: require('./surveys'),
});
