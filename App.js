import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Login from './Screens/Login.js';
import LoginOptions from './Screens/LoginOptions.js';
import Profile from './Screens/Profile.js';
import SignUp from './Screens/SignUp.js';
import Menu from './Screens/Menu.js';
import QuoteCalculator from './Screens/QuoteCalculator.js';
import QuoteHistory from './Screens/QuoteHistory.js';
import QuoteCalculatorCheckBox from './Screens/QuoteCalculatorCheckBox.js';
import QuoteCalculatorRemoval from './Screens/QuoteCalculatorRemoval.js';
import QuoteCalculatorPenetration from './Screens/QuoteCalculatorPenetration.js';
import CalculatorLocation from './Screens/CalculatorLocation.js';
import SplashScreen from './Screens/SplashScreen';

const APP = createStackNavigator({
    SplashScreen: {
        screen: SplashScreen
    },
    LoginOptions: {
        screen: LoginOptions
    },
    Login: {
        screen: Login
    },
    Profile: {
        screen: Profile
    },
    QuoteCalculator: {
        screen: QuoteCalculator
    },
    QuoteCalculatorRemoval: {
        screen: QuoteCalculatorRemoval
    },
    QuoteCalculatorPenetration: {
        screen: QuoteCalculatorPenetration
    },
    CalculatorLocation: {
        screen: CalculatorLocation
    },
    QuoteCalculatorCheckBox: {
        screen: QuoteCalculatorCheckBox
    },
    QuoteHistory: {
    screen: QuoteHistory
    },
    Menu: {
        screen: Menu
    },
    SignUp: {
        screen: SignUp
    }
});

export default APP;

// export default class App extends Component<{}> {   render() {     return(
// <NavigationAPP/> }); }