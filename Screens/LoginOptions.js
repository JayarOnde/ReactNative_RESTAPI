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
    TouchableOpacity

} from 'react-native';


const {width, height} = Dimensions.get('window');
export default class LoginOptions extends Component {
    constructor(props) {
        super(props);
        this.showLoginForm = this.showLoginForm.bind(this);
        this.showSignUpForm = this.showSignUpForm.bind(this);
    }

    static navigationOptions = {
        header: null
    };

    componentDidMount() {
    }


    showSignUpForm()
    {
        const {navigate} = this.props.navigation;
        navigate("SignUp");
    }
    showLoginForm()
    {
        const {navigate} = this.props.navigation;
        navigate("Login");
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

                <TouchableOpacity onPress={this.showSignUpForm}>
                    <View style={styles.button1}>
                        <Text style={styles.buttonText}>SIGN UP</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.showLoginForm}>
                    <View style={styles.button2}>
                        <Text style={styles.buttonText}>LOG IN</Text>
                    </View>
                </TouchableOpacity>
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
    button1: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginTop:30,
        marginLeft:width/10,
        marginRight:width/10,
        backgroundColor: '#015285',

        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#fff'
    },
    button2: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginLeft:width/10,
        marginRight:width/10,
        marginTop:30,
        backgroundColor: '#00CA9D',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#fff'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF'
    }

});
