/**
 * Created by gustavoferreira on 11/20/16.
 */

'use strict';

import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
import { Provider } from 'react-redux';
import BeetApp from './BeetApp';
// import configureStore from './store/configureStore';

class Setup extends Component {
    state: {
        isLoading: boolean;
        store: any;
    };

    constructor() {
        super();
        this.state = {
            isLoading: true,
            // store: configureStore(() => this.setState({isLoading: false}))
        };
    }
    render() {
        /*if (this.state.isLoading) {
            return null;
        }*/
        return (
            <BeetApp />
        );
    }
}

export default Setup;