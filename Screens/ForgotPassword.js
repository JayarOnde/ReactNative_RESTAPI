import React, {Component} from 'react';

import {
    StyleSheet, FlatList, Text, View, Alert, Image, ImageBackground, TextInput,
    Dimensions,
    AsyncStorage,
    TouchableOpacity,
    NetInfo,
    ScrollView,
    ActivityIndicator,
    Picker
} from 'react-native';
import CheckBox from 'react-native-check-box'
const {width, height} = Dimensions.get('window');
import URL from '../Url.js';
export default class ForgotPassword extends Component {

    constructor(props) {
        super(props);
        this.state={
           isLoading:false,
            userEmail:''
        };

        this.goBack = this.goBack.bind(this);
        this.submit = this.submit.bind(this);
        this.terminationSelected= this.terminationSelected.bind(this);
        this.installationSelected= this.installationSelected.bind(this);

    }

    static navigationOptions = {
        header: null
    };



        submit() {

        if (this.state.userEmail === '') {
            Alert.alert("Kindly Enter Your Email Address");
            return;
        }
        if (!this.state.userEmail.includes("@")) {
            Alert.alert("Kindly Enter Valid Email");
            return;
        }
        NetInfo.isConnected.fetch().then(isConnected => {
            if (isConnected) {
                this.setState({isLoading: true});
                fetch(URL.apiForgotPassword, {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "email": this.state.userEmail,
                    })
                })
                    .then((response) => response.json())
                    .then((responseData) => {
                        console.log("response is " + JSON.stringify(responseData));
                        if (responseData.message === "Password Reset email sent !") {
                            this.setState({isLoading: false});
                            Alert.alert("Password Reset Link Sent to your Email Address");
                        }
                        else {
                            this.setState({isLoading: false});
                            Alert.alert("Invalid Email");
                        }
                    })
                    .catch((error) => {
                        Alert.alert("Please Check Your Internet Connection");
                    });
            }
            else {
                Alert.alert("InstaXpress Requires Internet");
            }
        });
    }

    goBack()
    {
        this.props.navigation.pop();
    }

    terminationSelected()
    {
        this.setState({termSelected:!this.state.termSelected,installSelected:false});
        const {navigate} = this.props.navigation;
    }
    installationSelected()
    {
        this.setState({installSelected:!this.state.installSelected,termSelected:false});
        const {navigate} = this.props.navigation;
        navigate("InstalledMethod");
    }

    render() {
        return (
            <ImageBackground
                style={styles.container}
                source={require('../Images/login/background_img.png')}>
                <ScrollView>
                    <View
                        style={{
                            position: 'absolute',
                            top: 0,
                            height: 80,
                            width: '100%',
                            backgroundColor: '#DEF2FF',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center'
                        }}>


                        <Text style={{
                            fontWeight: '700',
                            color: '#015285',
                            alignSelf: 'center',
                            height: 50,
                            width: width / 2,
                            marginTop: 40,
                            marginLeft: width / 4
                        }}>
                            FORGOT PASSWORD
                        </Text>

                    </View>


                    <View style={{flex:1,flexDirection:'column',marginTop:height/2.5, marginLeft:30,marginRight:30,alignSelf:'center'}}>

                        <Text style={{color:'#015285',fontWeight:'bold',alignSelf:'center'}}>
                           RESET YOUR PASSWORD
                        </Text>
                        <ImageBackground   style={styles.inputContainer3} source={require('../Images/SignUp/profile_background.png')}>
                            <Image source={require('../Images/SignUp/email.png')} resizeMode="center" style={{width: 20, height: 20,marginTop:20,marginLeft:20}}/>
                            <TextInput
                                style={styles.input}
                                returnKeyType="go"
                                underlineColorAndroid='transparent'
                                onChangeText=
                                    {(text) => this.setState({userEmail: text})}
                                ref={(input) => {
                                }}
                                placeholder="Email address"
                                placeholderTextColor='#015285'
                            />
                        </ImageBackground>

                        <View style={{justifyContent: 'center', marginLeft: 15, marginRight: 15}}>
                            {this.state.isLoading ?
                                <TouchableOpacity style={styles.button}>
                                    <ActivityIndicator size="large" color="#ffffff"/>
                                </TouchableOpacity> :
                                <TouchableOpacity style={styles.button} onPress={() => this.submit()}>
                                    <Text style={styles.buttonText}>RESET PASSWORD</Text>
                                </TouchableOpacity>}
                        </View>
                    </View>
                    <View style={styles.profilebutton}>
                        <TouchableOpacity onPress={this.goBack}>
                            <Image source={require('../Images/ClientInfo/leftarrow.png')} resizeMode="stretch" style={{width: 20, height: 20}}/>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>

        );
    }
}

const styles = StyleSheet.create({

    MainContainer: {

// Setting up View inside content in Vertically center.
        justifyContent: 'center',
        marginTop: 20

    },

    item: {
        padding: 10,
        fontSize: 22,
        height: 50,
        color:'#015285',
        marginLeft: 10,
        alignSelf: 'center'
    },
    item2: {
        padding: 10,
        fontSize: 22,
        height: 50,
        color:'#015285',
        marginRight:80,
        alignSelf: 'center'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent:'center',
        backgroundColor: '#F5FCFF'
    },

    inputContainer: {
        height:50,
        width:50,
        borderRadius:25,
        borderColor:'#00CA9D',
        borderWidth:1,
        marginTop:100,
        marginLeft: 20,
        alignSelf:'center'
    },
    inputContainer3: {
        marginLeft: 20,
        marginTop: 20,
        flexDirection: 'row',
        marginRight: 20,
        justifyContent: 'flex-start',
        backgroundColor: '#F5FCFF'
    },
    input: {
        height: 40,
        width: '100%',

        margin: 10,
        padding: 10,
        color: '#000000'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
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
    },
    buttonTextNext: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },

    buttonTextSelected: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#00CA9D'
    },

    buttonTextAdd: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },

    buttonNext: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginLeft:20,
        marginRight:20,
        marginTop:20,
        backgroundColor: '#00CA9D',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#fff'
    },

    buttonSelected: {
        flex:1,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginLeft:20,
        marginRight:20,
        marginTop:20,
        backgroundColor: '#ffffff',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#00CA9D'
    },

    buttonAdd: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignSelf:'flex-end',
        width:80,
        padding:5,
        height:30,
        marginRight:30,
        marginTop:10,
        backgroundColor: '#015285',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff'
    },
    profilebutton: {
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute',
        left:20,
        width:30,
        height:30,
        marginTop:30
    },


});
