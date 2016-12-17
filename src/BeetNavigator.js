/**
 * Created by gustavoferreira on 11/30/16.
 */

import React, { Component } from 'react'
import {
    Navigator,
    StyleSheet,
    Platform
} from 'react-native'

import LoginScreen from './features/login/LoginScreen'
import LoginModal from './features/login/LoginModal'
import BeetTabView from './tabs/BeetTabsView'

class BeetNavigator extends Component {
    // _handlers: ([]: Array<() => boolean>)

    /*componentDidMount {
        BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton);
    }*/

    /*componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.handleBackButton);
    }*/

    /*getChildContext() {
        return {
            addBackButtonListener: this.addBackButtonListener,
            removeBackButtonListener: this.removeBackButtonListener,
        };
    }*/

    /*addBackButtonListener(listener) {
        this._handlers.push(listener);
    }*/

    /*removeBackButtonListener(listener) {
        this._handlers = this._handlers.filter((handler) => handler !== listener);
    }*/

    /*handleBackButton() {
        for (let i = this._handlers.length - 1; i >= 0; i--) {
            if (this._handlers[i]()) {
                return true;
            }
        }

        const {navigator} = this.refs;
        if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop();
            return true;
        }

        if (this.props.tab !== 'schedule') {
            this.props.dispatch(switchTab('schedule'));
            return true;
        }
        return false;
    }*/

    render(){
        return (
            <Navigator
                ref="navigator"
                style={styles.container}
                configureScene={(route) => {
                    if (Platform.OS === 'android') {
                        return Navigator.SceneConfigs.FloatFromBottomAndroid;
                    }
                    // TODO: Proper scene support
                    if (route.shareSettings || route.friend) {
                        return Navigator.SceneConfigs.FloatFromRight;
                    } else {
                        return Navigator.SceneConfigs.FloatFromBottom;
                    }
                }}
                initialRoute={ this.props.initialRoute }
                renderScene={this.renderScene}
            />
        );
    }

    renderScene(route, navigator) {
        console.log(route);
        if(route.login) {
            return <LoginScreen navigator={navigator} />
        }
        if(route.loginModal) {
            return <LoginModal navigator={navigator} />
        }

        return <BeetTabView navigator={navigator} />
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    }
});

export default BeetNavigator