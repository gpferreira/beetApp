/**
 * Created by gustavoferreira on 12/6/16.
 */

import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'

import {logOut} from '../../actions/login'

import { connect } from 'react-redux'

class Contract extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    This is the Contract view
                </Text>
                <Button
                    title='Logout'
                    onPress={() => {return this.props.logOut();}}
                    color='#841584'
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        padding: 80,
        alignItems: 'center'
    }
});

Contract.PropTypes = {
    logOut: React.PropTypes.func.isRequired
};

export default connect(null, {logOut} )(Contract)
