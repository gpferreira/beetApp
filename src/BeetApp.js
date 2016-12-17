/**
 * Created by gustavoferreira on 11/20/16.
 */

'use strict';
import React, { Component } from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { connect } from 'react-redux'

import BeetNavigator from './BeetNavigator'

class BeetApp extends Component {

    render() {
        let initialRoute = this.props.isLoggedIn ? {} : {login: true};

        return (
            <View style={styles.container}>
                <StatusBar
                    translucent={true}
                    backgroundColor="rgba(0, 0, 0, 0.2)"
                    barStyle="light-content"
                />
                <BeetNavigator initialRoute={ initialRoute }/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});

function select(store) {
    return {
        isLoggedIn: store.user.isLoggedIn,
    };
}

export default connect(select)(BeetApp);