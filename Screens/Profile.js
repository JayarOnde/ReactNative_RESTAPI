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
    ScrollView
} from 'react-native';
const {width, height} = Dimensions.get('window');
//import { CheckBox } from 'react-native-elements'
import CheckBox from 'react-native-check-box'

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            userEmail: '',
            userMobile: '',
            checked:true
        }

    }

    static navigationOptions = {
        header: null
    };


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


                        <Image source={require('../Images/EditProfile/profileHeader.png')} resizeMode="center" style={{width: 100, height: 80,marginTop:20,marginLeft:20,alignSelf:'center'}}/>
                    </View>

                    <TouchableOpacity   style={styles.inputContainer}>
                        <Image source={require('../Images/EditProfile/editprofileimg.png')} resizeMode="center" style={{width: 100, height: 100}}/>
                    </TouchableOpacity>
                    <ImageBackground   style={styles.inputContainer3} source={require('../Images/SignUp/profile_background.png')}>
                        <Image source={require('../Images/SignUp/username.png')} resizeMode="center" style={{width: 20, height: 20,marginTop:40,marginLeft:20}}/>
                        <View style={{flex:1,flexDirection:'column'}}>
                            <Text style={{marginLeft:10,marginTop:10,maxHeight:20}}>
                                First name
                            </Text>
                        <TextInput
                            style={styles.input}
                            returnKeyType="go"
                            underlineColorAndroid='transparent'
                            onChangeText=
                                {(text) => this.setState({userPassword: text})}
                            ref={(input) => {
                            }}
                            placeholder="Will"
                            placeholderTextColor='#015285'
                        />
                        </View>
                    </ImageBackground>
                    <ImageBackground   style={styles.inputContainer3} source={require('../Images/SignUp/profile_background.png')}>
                        <Image source={require('../Images/SignUp/username.png')} resizeMode="center" style={{width: 20, height: 20,marginTop:40,marginLeft:20}}/>
                        <View style={{flex:1,flexDirection:'column'}}>
                            <Text style={{marginLeft:10,marginTop:10,maxHeight:20}}>
                                Last name
                            </Text>
                            <TextInput
                                style={styles.input}
                                returnKeyType="go"
                                underlineColorAndroid='transparent'
                                onChangeText=
                                    {(text) => this.setState({userPassword: text})}
                                ref={(input) => {
                                }}
                                placeholder="Smith"
                                placeholderTextColor='#015285'
                            />
                        </View>
                    </ImageBackground>
                    <ImageBackground   style={styles.inputContainer3} source={require('../Images/SignUp/profile_background.png')}>
                        <Image source={require('../Images/SignUp/email.png')} resizeMode="center" style={{width: 20, height: 20,marginTop:40,marginLeft:20}}/>
                        <View style={{flex:1,flexDirection:'column'}}>
                            <Text style={{marginLeft:10,marginTop:10,maxHeight:20}}>
                                Email
                            </Text>
                            <TextInput
                                style={styles.input}
                                returnKeyType="go"
                                underlineColorAndroid='transparent'
                                onChangeText=
                                    {(text) => this.setState({userPassword: text})}
                                ref={(input) => {
                                }}
                                placeholder="Will@gmail.com"
                                placeholderTextColor='#015285'
                            />
                        </View>
                    </ImageBackground>

                    <ImageBackground   style={styles.inputContainer3} source={require('../Images/SignUp/profile_background.png')}>
                        <Image source={require('../Images/SignUp/phone.png')} resizeMode="center" style={{width: 20, height: 20,marginTop:40,marginLeft:20}}/>
                        <View style={{flex:1,flexDirection:'column'}}>
                            <Text style={{marginLeft:10,marginTop:10,maxHeight:20}}>
                                Contact Number
                            </Text>
                            <TextInput
                                style={styles.input}
                                returnKeyType="go"
                                underlineColorAndroid='transparent'
                                onChangeText=
                                    {(text) => this.setState({userPassword: text})}
                                ref={(input) => {
                                }}
                                placeholder="011-99922"
                                placeholderTextColor='#015285'
                            />
                        </View>
                    </ImageBackground>
                    <ImageBackground   style={styles.inputContainer4} source={require('../Images/SignUp/profile_background.png')}>
                        <Image source={require('../Images/SignUp/company.png')} resizeMode="center" style={{width: 20, height: 20,marginTop:40,marginLeft:20}}/>
                        <View style={{flex:1,flexDirection:'column'}}>
                            <Text style={{marginLeft:10,marginTop:10,maxHeight:20,color:'#015285'}}>
                                Company
                            </Text>
                            <TextInput
                                style={styles.input}
                                returnKeyType="go"
                                underlineColorAndroid='transparent'
                                onChangeText=
                                    {(text) => this.setState({userPassword: text})}
                                ref={(input) => {
                                }}
                                placeholder="EduSoft"
                                placeholderTextColor='#015285'
                            />
                        </View>
                    </ImageBackground>
                    <View style={styles.profilebutton}>
                        <Image source={require('../Images/EditProfile/editbtn.png')} resizeMode="center" style={{width: 50, height: 50}}/>
                    </View>
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
        inputContainer4: {
            marginLeft:20,
            marginTop:20,
            flexDirection:'row',
            marginRight:20,
            marginBottom:20,
            justifyContent:'flex-start',
            backgroundColor: '#F5FCFF'
        },
        input: {
            marginLeft:10,
            height: 40,
            marginBottom:10,
            width:'100%',
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
            top:60,
            right:20,
            width:80,
            height:40,
            backgroundColor: '#00CA9D',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#fff'
        },
        buttonText: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#FFFFFF'
        }
    });