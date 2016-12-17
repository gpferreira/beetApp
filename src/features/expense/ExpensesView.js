/**
 * Created by gustavoferreira on 12/6/16.
 */

'use strict';

import React, { Component } from 'react'
import {
    View,
    StyleSheet,
} from 'react-native'

import BeetListContainer from '../../common/BeetListContainer'

import { connect } from 'react-redux'

// var PureListView = require('../../common/PureListView');
// var MapView = require('../../common/MapView');

class ExpensesView extends Component {
    constructor() {
        super();
    }

    render() {
        // const {map1, map2} = this.props;

        return (
            <View style={styles.container}>
                <BeetListContainer
                    title="Expenses"
                    backgroundImage={require('./img/maps-background.png')}
                    backgroundColor={'#9176D2'}>
                </BeetListContainer>
            </View>


            /*<View style={styles.container}>
                <BeetListContainer
                    title="Maps"
                    backgroundImage={require('./img/maps-background.png')}
                    backgroundColor={'#9176D2'}>
                    <PureListView
                        title="Overview"
                        renderEmptyList={() => <MapView map={map1} />}
                    />
                    <PureListView
                        title="Developer Garage"
                        renderEmptyList={() => <MapView map={map2} />}
                    />
                </BeetListContainer>
            </View>
            */
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

module.exports = connect()(ExpensesView);
