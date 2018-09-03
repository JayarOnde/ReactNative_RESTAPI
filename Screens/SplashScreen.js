import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Image,
    Dimensions,
    Text,
    ActivityIndicator,
    Alert,
    AsyncStorage,

} from 'react-native';


const {width, height} = Dimensions.get('window');
export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.decisionToNavigate = this.decisionToNavigate.bind(this);
    }

    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        setTimeout(() => {

            this.decisionToNavigate();

        }, 3000);
    }

    decisionToNavigate() {
        const {navigate} = this.props.navigation;
        // AsyncStorage.getItem("userData").then((value) => {
        //     if (value) {
        //         if (JSON.parse(value).user.carDetail === true) {
        //             navigate("MyMap");
        //         }
        //         else {
        //             const {navigate} = this.props.navigation;
        //             navigate("CarBasicInfoAttempt");
        //         }
        //     }
        //     else {
        //         navigate("LoginOptions");
        //     }
        // }).catch(function (err) {
        //     Alert.alert(err.toString())
        // }).done();

        navigate("LoginOptions");
    }

    render() {
        return (
            <ImageBackground
                style={styles.container}
                source={require('../Images/SplashScrene/background_img.png')}>
                <View
                    style={{
                        justifyContent: 'center',
                        alignSelf: 'center'
                    }}>
                    <Image source={require('../Images/SplashScrene/app_logo.png')} resizeMode="center" style={{width: width/2, height: height/3}}/>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    },
    input: {
        height: 40,

        margin: 10,
        padding: 10,
        color: '#ffffff'
    },
    buttonContainer: {
        backgroundColor: '#008000',
        paddingVertical: 14,
        flex: 1,
        margin: 10,
        maxHeight: 50,
        flexDirection: 'row',
        justifyContent: 'center'

    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
        alignSelf: 'center',
        fontSize: 18,
        marginTop: 3
    }

});
