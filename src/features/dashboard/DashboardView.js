/**
 * Created by gustavoferreira on 12/6/16.
 */

import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

class DashboardView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    This is the Dashboard view
                </Text>
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

export default DashboardView
