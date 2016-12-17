/**
 * Created by gustavoferreira on 12/6/16.
 */

import React, { Component } from 'react'
import {
    TabBarIOS,
    TabBarItemIOS,
    Navigator
} from 'react-native'

import { connect } from 'react-redux'
import BeetColors from '../common/BeetColors'

import DashboardView from '../features/dashboard/DashboardView'
import AthletesView from '../features/athlete/AthletesView'
import ExpensesView from '../features/expense/ExpensesView'
import ContractsView from '../features/contract/ContractsView'
import NotificationsView from '../features/notification/NotificationsView'

import { switchTab } from '../actions/navigation';
import type { Tab } from '../reducers/navigation';

class BeetTabsView extends Component {
    props: {
        tab: Tab;
        onTabSelect: (tab: Tab) => void;
        navigator: Navigator;
    };

    onTabSelect(tab: Tab) {
        if (this.props.tab !== tab) {
            this.props.onTabSelect(tab);
        }
    }

    render() {
        return (
            <TabBarIOS tintColor={BeetColors.darkText}>
                <TabBarIOS.Item
                    title="Dashboard"
                    selected={this.props.tab === 'dashboard'}
                    onPress={this.onTabSelect.bind(this, 'dashboard')}
                    icon={require('../features/dashboard/img/ic_dashboard.png')}
                    selectedIcon={require('../features/dashboard/img/ic_dashboard_active.png')}>
                    <DashboardView navigator={this.props.navigator} />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="Athletes"
                    selected={this.props.tab === 'athletes'}
                    onPress={this.onTabSelect.bind(this, 'athletes')}
                    icon={require('../features/athlete/img/ic_directions_run.png')}
                    selectedIcon={require('../features/athlete/img/ic_directions_run_active.png')}>
                    <AthletesView navigator={this.props.navigator} />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="Expenses"
                    selected={this.props.tab === 'expenses'}
                    onPress={this.onTabSelect.bind(this, 'expenses')}
                    icon={require('../features/expense/img/ic_shopping_cart.png')}
                    selectedIcon={require('../features/expense/img/ic_shopping_cart_active.png')}>
                    <ExpensesView navigator={this.props.navigator} />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="Contracts"
                    selected={this.props.tab === 'contracts'}
                    onPress={this.onTabSelect.bind(this, 'contracts')}
                    icon={require('../features/contract/img/ic_description.png')}
                    selectedIcon={require('../features/contract/img/ic_description_active.png')}>
                    <ContractsView navigator={this.props.navigator} />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="Notifications"
                    selected={this.props.tab === 'notifications'}
                    onPress={this.onTabSelect.bind(this, 'notifications')}
                    icon={require('../features/notification/img/ic_notifications.png')}
                    selectedIcon={require('../features/notification/img/ic_notifications_active.png')}>
                    <NotificationsView navigator={this.props.navigator} />
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

function select(store) {
    return {
        tab: store.navigation.tab,
        // notificationsBadge: unseenNotificationsCount(store) + store.surveys.length,
    };
}

function actions(dispatch) {
    return {
        onTabSelect: (tab) => dispatch(switchTab(tab)),
    };
}

export default connect(select, actions)(BeetTabsView)