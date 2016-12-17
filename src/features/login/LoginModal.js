/**
 * Created by gustavoferreira on 11/30/16.
 */

'use strict';

import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    TextInput,
    Image,
    StatusBar,
    TouchableOpacity,
    ActivityIndicatorIOS,
    Dimensions,
    Animated
} from 'react-native'

import { connect } from 'react-redux'
import { login } from '../../actions/login'

import BeetButton from '../../common/BeetButton'
import BeetColors from '../../common/BeetColors'

class LoginModal extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {},
            isLoading: false,
        }
    }

    redirect(routeName){
        this.props.navigator.push({
            [routeName]: true
        });
    }

    isValid() {
        return true;
    }

    onLoginPressed() {
        console.log('onLoginPressed');
        if(this.isValid()) {
            this.setState({errors: {}, isLoading: true});
            this.props.login(this.state).then(
                (res) => {
                    this.redirect('home');
                    console.log(res)
                },
                (err) => this.setState({errors: err.response.data.errors, isLoading: false})
            );
        }
    }

    render() {
        return (
            <Image
                style={styles.container}
                source={require('./img/login-background.png')}>
                <StatusBar barStyle="default" />
                <TouchableOpacity
                    accessibilityLabel="Skip login"
                    accessibilityTraits="button"
                    style={styles.skip}>
                    <Animated.Image
                        source={require('./img/x.png')}
                    />
                </TouchableOpacity>
                <View style={styles.section}>
                    <Animated.Text style={[styles.h1]}>
                        Beet
                    </Animated.Text>
                </View>
                <View style={styles.section}>
                    <TextInput
                        onChangeText={ (text)=> this.setState({email: text}) }
                        style={styles.input} placeholder="Email">
                    </TextInput>
                    <TextInput
                        onChangeText={ (text)=> this.setState({password: text}) }
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={true}>
                    </TextInput>
                    <BeetButton
                        style={[styles.button, styles.buttonLogIn, this.props.style]}
                        caption="Entrar"
                        onPress={this.onLoginPressed.bind(this)}
                    />
                </View>
                <View style={styles.section}>
                    <Animated.Text>
                        Sign up
                    </Animated.Text>
                </View>
            </Image>
        )
    }
}

const scale = Dimensions.get('window').width / 375;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        padding: 26,
    },
    section: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    h1: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: Math.round(74 * scale),
        color: BeetColors.darkText,
        backgroundColor: 'transparent',
    },
    input: {
        height: 50,
        marginTop: 10,
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#d9dadc'
    },
    buttonLogIn: {
        height: 50,
        alignSelf: 'stretch',
        justifyContent: 'center',
        padding: 5,
    },
    loader: {
        marginTop: 20
    },
    skip: {
        position: 'absolute',
        right: 0,
        top: 20,
        padding: 15,
    },
});

LoginModal.propTypes = {
    login: React.PropTypes.func.isRequired
};

export default connect(null, { login })(LoginModal)