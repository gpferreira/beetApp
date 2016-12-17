/**
 * Created by gustavoferreira on 12/8/16.
 */

'use strict';

import React, { Component } from 'react'
import {
    View,
    Platform,
    TouchableOpacity
} from 'react-native'

import { Text } from './BeetText'

let StyleSheet = require('./BeetStyleSheet');

class BeetSegmentedControl extends Component {
    props: {
        values: Array<string>;
        selectionColor: ?string;
        selectedIndex: number;
        onChange: (newIndex: number) => void;
        style?: any;
    };

    render() {
        let segments = this.props.values.map(
            (value, index) => (
                <Segment
                    key={value}
                    value={value}
                    isSelected={index === this.props.selectedIndex}
                    selectionColor={this.props.selectionColor || 'white'}
                    onPress={() => this.props.onChange(index)}
                />
            )
        );
        return (
            <View style={[styles.container, this.props.style]}>
                {segments}
            </View>
        );
    }
}

class Segment extends React.Component {
    props: {
        value: string;
        isSelected: boolean;
        selectionColor: string;
        onPress: () => void;
    };

    render() {
        let selectedButtonStyle;
        if (this.props.isSelected) {
            selectedButtonStyle = { borderColor: this.props.selectionColor };
        }
        let deselectedLabelStyle;
        if (!this.props.isSelected && Platform.OS === 'android') {
            deselectedLabelStyle = styles.deselectedLabel;
        }
        let title = this.props.value && this.props.value.toUpperCase();

        let accessibilityTraits = ['button'];
        if (this.props.isSelected) {
            accessibilityTraits.push('selected');
        }

        return (
            <TouchableOpacity
                accessibilityTraits={accessibilityTraits}
                activeOpacity={0.8}
                onPress={this.props.onPress}
                style={[styles.button, selectedButtonStyle]}>
                <Text style={[styles.label, deselectedLabelStyle]}>
                    {title}
                </Text>
            </TouchableOpacity>
        );
    }
}

const HEIGHT = 32;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        ios: {
            paddingBottom: 6,
            justifyContent: 'center',
            alignItems: 'center',
        },
        android: {
            paddingLeft: 60,
        },
    },
    button: {
        borderColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        ios: {
            height: HEIGHT,
            paddingHorizontal: 20,
            borderRadius: HEIGHT / 2,
            borderWidth: 1,
        },
        android: {
            paddingBottom: 6,
            paddingHorizontal: 10,
            borderBottomWidth: 3,
            marginRight: 10,
        },
    },
    label: {
        letterSpacing: 1,
        fontSize: 12,
        color: 'white',
    },
    deselectedLabel: {
        color: 'rgba(255, 255, 255, 0.7)',
    },
});

export default BeetSegmentedControl;
