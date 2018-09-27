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
import QutoeFinalize from './Screens/QutoeFinalize.js';
import QuoteCalculatorPenetration from './Screens/QuoteCalculatorPenetration.js';
import CalculatorLocation from './Screens/CalculatorLocation.js';
import SplashScreen from './Screens/SplashScreen';
import Product from './Screens/Product.js';
import SinglePlyBrowseBy from './Screens/SinglePlyBrowseBy.js';
import ProductTermination from './Screens/ProductTermination.js';
import SinglePlyAluminium from './Screens/SinglePlyAluminium.js';
import LiquidDetails from './Screens/LiquidDetails.js';
import InstalledMethod from './Screens/InstalledMethod.js';
import ForgotPassword from './Screens/ForgotPassword.js';

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
    Product: {
        screen: Product
    },
    SinglePlyBrowseBy: {
        screen: SinglePlyBrowseBy
    },
    ProductTermination: {
        screen: ProductTermination
    },
    SinglePlyAluminium: {
        screen: SinglePlyAluminium
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
    QutoeFinalize: {
    screen: QutoeFinalize
    },
    InstalledMethod: {
    screen: InstalledMethod
    }, ForgotPassword: {
    screen: ForgotPassword
    },
    Menu: {
        screen: Menu
    },
    LiquidDetails: {
        screen: LiquidDetails
    },
    SignUp: {
        screen: SignUp
    }
});

export default APP;

// export default class App extends Component<{}> {   render() {     return(
// <NavigationAPP/> }); }