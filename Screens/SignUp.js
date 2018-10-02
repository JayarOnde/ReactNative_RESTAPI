import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Image,
    Dimensions,
    Text,
    Alert,
    TextInput,
    AsyncStorage,
    TouchableOpacity,
    NetInfo,
    ScrollView,
    ActivityIndicator
} from 'react-native';
const {width, height} = Dimensions.get('window');
import URL from '../Url.js';
//import { CheckBox } from 'react-native-elements'
import CheckBox from 'react-native-check-box'

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            userFirstName:'',
            userLastName:'',
            userCompany:'',
            userPassword:'',
            userConfirmPassword:'',
            userEmail: '',
            userMobile: '',
        };

        this.performSignUp = this.performSignUp.bind(this);
        this.onSignUp = this.onSignUp.bind(this);

    }

    static navigationOptions = {
        header: null
    };

    performSignUp()
    {
        NetInfo.isConnected.fetch().then(isConnected => {
            if (isConnected) {
                if (this.state.userFirstName === '' || this.state.userLastName === '' || this.state.userCompany === '' || this.state.userMobile === '' || this.state.userEmail === '' || this.state.userPassword === '' || this.state.userConfirmPassword === '') {
                    Alert.alert("Kindly Enter All Credentials");
                }
                else if (this.state.userPassword !== this.state.userConfirmPassword) {
                    Alert.alert("Password Does not Match");
                }
                else {
                    this.onSignUp(this.state.userEmail, this.state.userMobile, this.state.userPassword, this.state.userCompany, this.state.userFirstName, this.state.userLastName);
                }
            }
            else {
                Alert.alert("Danosa Requires Internet Connection");
            }

        });
    }

    onSignUp(email, mobile, password, company, firstName, lastName) {
        console.log("email:" + email);
        console.log("password:" + password);
        console.log("company:" + company);
        console.log("first name:" + firstName);
        console.log("last name:" + lastName);
        console.log("company:" + company);

        this.setState({isLoading: true});
        fetch(URL.apiUrlRegister, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "fname": firstName,
                "lname": lastName,
                "email": email,
                "contactno": mobile,
                "company": company,
                "password": password
            })
        })
            .then((response) => response.json())
            .then((responseData) => {
console.log(JSON.stringify(responseData));
                this.setState({isLoading: false});
                if (responseData.message === "Successfully User Signup") {
                    Alert.alert("SingUp Successfully");
                    const {navigate} = this.props.navigation;
                    navigate("LoginOptions");
                }
                else {

                    Alert.alert("There is something wrong");
                }
            })
            .catch((error) => {
                console.log(error);
                Alert.alert("Please Check Your Internet Connection");
                this.setState({isLoading: false});

            });

    }



    componentDidMount() {}


    render() {
        return (
            <ImageBackground
                style={styles.container}
                source={require('../Images/login/background_img.png')}>
                <ScrollView>
                <View
                    style={{
                        position:'absolute',
                        top:0,
                        height:80,
                        width:'100%',
                        backgroundColor:'#DEF2FF',
                        justifyContent: 'center',
                        alignSelf: 'center'
                    }}>


                    <Text style={{fontWeight:'700',color:'#015285',alignSelf:'center'}}>
                        SIGN UP
                    </Text>
                </View>

               {/* <ImageBackground   style={styles.inputContainer} source={require('../Images/SignUp/profile_background.png')}>
                    <Image source={require('../Images/SignUp/profile_upload.png')} resizeMode="center" style={{width: 100, height: 100}}/>
                    <Image source={require('../Images/SignUp/plus.png')} resizeMode="center" style={{width: 30, height: 30,position:'absolute',top:100}}/>
                </ImageBackground>*/}
                <View style={{marginTop:120}}>
                </View>
                <ImageBackground   style={styles.inputContainer3} source={require('../Images/SignUp/profile_background.png')}>
                    <Image source={require('../Images/SignUp/username.png')} resizeMode="center" style={{width: 20, height: 20,marginTop:20,marginLeft:20}}/>
                    <TextInput
                        style={styles.input}
                        returnKeyType="go"
                        underlineColorAndroid='transparent'
                        onChangeText=
                            {(text) => this.setState({userFirstName: text})}
                        ref={(input) => {
                        }}
                        placeholder="First name"
                        placeholderTextColor='#015285'
                    />
                </ImageBackground>
                <ImageBackground   style={styles.inputContainer3} source={require('../Images/SignUp/profile_background.png')}>
                    <Image source={require('../Images/SignUp/username.png')} resizeMode="center" style={{width: 20, height: 20,marginTop:20,marginLeft:20}}/>
                    <TextInput
                        style={styles.input}
                        returnKeyType="go"
                        underlineColorAndroid='transparent'
                        onChangeText=
                            {(text) => this.setState({userLastName: text})}
                        ref={(input) => {
                        }}
                        placeholder="Last name"
                        placeholderTextColor='#015285'
                    />
                </ImageBackground>
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
                        placeholder="Email Address"
                        placeholderTextColor='#015285'
                    />
                </ImageBackground>


                <ImageBackground   style={styles.inputContainer3} source={require('../Images/SignUp/profile_background.png')}>
                    <Image source={require('../Images/SignUp/phone.png')} resizeMode="center" style={{width: 20, height: 20,marginTop:20,marginLeft:20}}/>
                    <TextInput
                        style={styles.input}
                        returnKeyType="go"
                        underlineColorAndroid='transparent'
                        onChangeText=
                            {(text) => this.setState({userMobile: text})}
                        ref={(input) => {
                        }}
                        placeholder="Contact Number"
                        placeholderTextColor='#015285'
                    />
                </ImageBackground>

                <ImageBackground   style={styles.inputContainer3} source={require('../Images/SignUp/profile_background.png')}>
                    <Image source={require('../Images/SignUp/company.png')} resizeMode="center" style={{width: 20, height: 20,marginTop:20,marginLeft:20}}/>
                    <TextInput
                        style={styles.input}
                        returnKeyType="go"
                        underlineColorAndroid='transparent'
                        onChangeText=
                            {(text) => this.setState({userCompany: text})}
                        ref={(input) => {
                        }}
                        placeholder="Company"
                        placeholderTextColor='#015285'
                    />
                </ImageBackground>

                    <ImageBackground   style={styles.inputContainer3} source={require('../Images/SignUp/profile_background.png')}>
                        <Image source={require('../Images/login/password.png')} resizeMode="center" style={{width: 20, height: 20,marginTop:20,marginLeft:20}}/>
                        <TextInput
                            style={styles.input}
                            returnKeyType="go"
                            underlineColorAndroid='transparent'
                            onChangeText=
                                {(text) => this.setState({userPassword: text})}
                            ref={(input) => {
                            }}
                            placeholder="Password"
                            placeholderTextColor='#015285'
                            secureTextEntry/>
                    </ImageBackground>
                    <ImageBackground   style={styles.inputContainer3} source={require('../Images/SignUp/profile_background.png')}>
                        <Image source={require('../Images/login/password.png')} resizeMode="center" style={{width: 20, height: 20,marginTop:20,marginLeft:20}}/>
                        <TextInput
                            style={styles.input}
                            returnKeyType="go"
                            underlineColorAndroid='transparent'
                            onChangeText=
                                {(text) => this.setState({userConfirmPassword: text})}
                            ref={(input) => {
                            }}
                            placeholder="Confirm Password"
                            placeholderTextColor='#015285'
                            secureTextEntry/>
                    </ImageBackground>


                <View style={{justifyContent: 'flex-end', marginLeft: 15, marginRight: 15,marginBottom:20}}>
                    {this.state.isLoading ?
                        <TouchableOpacity style={styles.button}>
                            <ActivityIndicator size="large" color="#ffffff"/>
                        </TouchableOpacity> :
                        <TouchableOpacity style={styles.button} onPress={() => this.performSignUp()}>
                            <Text style={styles.buttonText}>SIGN UP</Text>
                        </TouchableOpacity>}

                </View>
                   {/* <View style={styles.profilebutton}>
                    <Image source={require('../Images/SignUp/plus.png')} resizeMode="center" style={{width: 50, height: 50}}/>
                    </View>*/}
                </ScrollView>
            </ImageBackground>

        );
    }
}

const
    styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: '#F5FCFF'
        },
        inputContainer: {
            marginTop:100,
            width:100,
            height:100,
            borderRadius: 30,
            alignSelf:'center'
        },
        inputContainer3: {
            marginLeft:20,
            marginTop:20,
            flexDirection:'row',
            marginRight:20,
            justifyContent:'flex-start',
            backgroundColor: '#F5FCFF'
        },
        input: {
            marginLeft:10,
            height: 40,
            width:'100%',
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
        profilebutton: {
            justifyContent: 'center',
            alignItems: 'center',
            padding: 15,
            position:'absolute',
            top:140,
            left:width/1.85,
            width:30,
            height:30,
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
        buttonContainer: {
            backgroundColor: '#008000',
            paddingVertical: 14,
            marginBottom: 10,
            width: '40%',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            borderRadius: 10,
            borderWidth: 1,

        },
    });