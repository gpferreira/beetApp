/**
 * Created by gustavoferreira on 11/21/16.
 */

'use strict';

import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    StatusBar
} from 'react-native';

class LoginScreen extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <Image
                style={styles.container}
                source={require('./img/login-background.png')}>
                <StatusBar barStyle="default" />

            </Image>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default LoginScreen;