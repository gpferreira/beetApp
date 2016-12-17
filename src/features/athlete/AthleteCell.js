/**
 * Created by gustavoferreira on 12/9/16.
 */

'use strict';

import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Image,
    TouchableHighlight
} from 'react-native'

import BeetColors from '../../common/BeetColors'
import { Text } from '../../common/BeetText'

class AthleteCell extends Component {
    render() {
        let athlete = this.props.athlete;
        return (
            <TouchableHighlight onPress={this.props.onPress}>
                <View style={[styles.cell, !this.props.isSeen && styles.unseen]}>
                    <Text style={styles.text}>
                        {athlete.name}
                    </Text>

                    <View style={styles.footer}>
                        <Text style={styles.time}>
                            {athlete.time}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>

            /*<View style={styles.row}>
                <Image style={styles.picture} source={{uri: athlete.pic}} />
                <View style={styles.info}>
                    <Text style={styles.name}>{athlete.name}</Text>
                    <Text style={styles.title}>{athlete.title}</Text>
                </View>
            </View>*/
        );
    }
}

const SIZE = 76;
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        paddingBottom: 14,
        alignItems: 'center',
    },
    picture: {
        width: SIZE,
        height: SIZE,
        borderRadius: SIZE / 2,
    },
    info: {
        paddingLeft: 20,
        flex: 1,
    },
    name: {
        fontSize: 15,
        marginBottom: 2,
        color: BeetColors.darkText,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 12,
        lineHeight: 16,
        color: BeetColors.darkText,
    },
    cell: {
        padding: 15,
        backgroundColor: 'white',
    },
    unseen: {
        paddingLeft: 12,
        borderLeftWidth: 3,
        borderLeftColor: '#4D99EF',
    },
    text: {
        fontSize: 15,
        lineHeight: 22,
        marginBottom: 10,
    },
    session: {
        paddingVertical: undefined,
        paddingHorizontal: undefined,
        paddingLeft: undefined,
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: BeetColors.cellBorder,
        // overflow: 'hidden',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#eee',
        shadowOpacity: 1,
    },
    footer: {
        flexDirection: 'row',
    },
    url: {
        flex: 1,
        color: BeetColors.actionText,
        fontSize: 12,
        marginBottom: 10,
    },
    time: {
        color: BeetColors.lightText,
        fontSize: 12,
    },
});

export default AthleteCell