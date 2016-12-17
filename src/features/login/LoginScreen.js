/**
 * Created by gustavoferreira on 11/21/16.
 */

import React, {Component} from 'react'
import {
    Image,
    StyleSheet,
    StatusBar,
    Animated,
    View,
    Dimensions
} from 'react-native'

import LoginButton from '../../common/LoginButton'
import BeetButton from '../../common/BeetButton'
import BeetColors from '../../common/BeetColors'
import { Text } from '../../common/BeetText'

class LoginScreen extends Component {
    state = {
        anim: new Animated.Value(0),
    };

    constructor() {
        super();
    }

    navigate (routeName) {
        console.log(routeName);
        this.props.navigator.push({
            [routeName]: true
        })
    }

    render() {
        return(
            <Image
                style={styles.container}
                source={require('./img/login-background.png')}>
                <StatusBar barStyle="default" />
                <View style={styles.section}>
                    <Animated.Text style={styles.h1}>
                        Beet
                    </Animated.Text>
                </View>
                <Animated.View style={[styles.section, styles.last]}>
                    <BeetButton
                        style={[styles.button, styles.beetAccount]}
                        caption="Log in with Beet Account"
                        onPress={this.navigate.bind(this, 'loginModal')}
                    />
                    <Text style={styles.loginComment}>
                        Or use Facebook to access Beet.
                    </Text>
                    <LoginButton source="First screen" />
                </Animated.View>
            </Image>
        )
    }

    fadeIn(delay, from = 0) {
        const {anim} = this.state;
        return {
            opacity: anim.interpolate({
                inputRange: [delay, Math.min(delay + 500, 3000)],
                outputRange: [0, 1],
                // extrapolate: 'clamp',
            }),
            transform: [{
                translateY: anim.interpolate({
                    inputRange: [delay, Math.min(delay + 500, 3000)],
                    outputRange: [from, 0],
                    // extrapolate: 'clamp',
                }),
            }],
        };
    }
}

const scale = Dimensions.get('window').width / 375;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        padding: 26,
        // Image's source contains explicit size, but we want
        // it to prefer flex: 1
        width: undefined,
        height: undefined,
    },
    section: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    last: {
        justifyContent: 'flex-end',
    },
    h1: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: Math.round(74 * scale),
        color: BeetColors.darkText,
        backgroundColor: 'transparent',
    },
    h2: {
        textAlign: 'center',
        fontSize: 17,
        color: BeetColors.darkText,
        marginVertical: 20,
    },
    h3: {
        fontSize: 12,
        textAlign: 'center',
        color: BeetColors.lightText,
        letterSpacing: 1,
    },
    loginComment: {
        marginBottom: 14,
        fontSize: 12,
        color: BeetColors.darkText,
        textAlign: 'center',
    },
    beetAccount: {
        marginBottom: 12,
    },
    skip: {
        position: 'absolute',
        right: 0,
        top: 20,
        padding: 15,
    },
});

export default LoginScreen;