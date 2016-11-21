/**
 * Created by gustavoferreira on 11/20/16.
 */

'use strict';
import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import LoginScreen from './features/login/LoginScreen';

class BeetApp extends Component {
    render() {
        return (
            <LoginScreen />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10,
        paddingTop: 80
    }
});

export default BeetApp;