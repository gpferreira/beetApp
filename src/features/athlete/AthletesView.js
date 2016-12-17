/**
 * Created by gustavoferreira on 12/6/16.
 */

'use strict';

import React, { Component } from 'react'
import {
    View
} from 'react-native'

import BeetEmptyData from '../../common/BeetEmptyData'
import BeetPureListView from '../../common/BeetPureListView'
import BeetListContainer from '../../common/BeetListContainer'
import AthleteCell from './AthleteCell'

import {loadAthletes} from '../../actions/athletes'
import { connect } from 'react-redux'

class AthletesView extends Component {

    componentWillMount() {
        this.props.dispatch(loadAthletes());
    }

    constructor(props) {
        super(props);

        (this: any).renderRow = this.renderRow.bind(this);
        (this: any).renderEmptyList = this.renderEmptyList.bind(this);
        (this: any).openAthlete = this.openAthlete.bind(this);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <BeetListContainer
                    title="Athletes"
                    backgroundImage={require('./img/maps-background.png')}
                    backgroundColor={'#E78196'}>
                    <BeetPureListView
                        data={this.props.athletes}
                        renderEmptyList={this.renderEmptyList}
                        renderRow={this.renderRow}
                    />
                </BeetListContainer>
            </View>
        );
    }

    renderRow(athlete) {
        return (
            <AthleteCell
                key={athlete.id}
                athlete={athlete}
                onPress={() => this.openAthlete(athlete)}
            />
        );
    }

    renderEmptyList() {
        return (
            <BeetEmptyData
                title="No Athletes Yet"
                text="Registered athletes will appear here"
            />
        );
    }

    openAthlete(athlete) {
    }
}

function select(state) {
    return {
        athletes: state.athletes
    };
}

function actions(dispatch) {
    return {
        dispatch,
    };
}

export default connect(select, actions)(AthletesView);
