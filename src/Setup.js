/**
 * Created by gustavoferreira on 11/20/16.
 */

'use strict';

import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import BeetApp from './BeetApp';

class Setup extends Component {
    state: {
        isLoading: boolean;
        store: any;
    };

    constructor() {
        super();
        this.state = {
            isLoading: true,
            store: configureStore(() => this.setState({isLoading: false}))
        };
    }

    render() {
        if (this.state.isLoading) {
            return null;
        }
        return (
            <Provider store={this.state.store}>
                <BeetApp />
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});

export default Setup;