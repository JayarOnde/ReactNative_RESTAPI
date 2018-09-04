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

export default class QuoteCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            userEmail: '',
            userMobile: '',
            checked:true
        };


        this.goBack=this.goBack.bind(this);
        this.showForm=this.showForm.bind(this);

    }

    static navigationOptions = {
        header: null
    };


    componentDidMount() {}

    goBack()
    {
        this.props.navigation.pop();
    }
showForm()
    {
        const {navigate} = this.props.navigation;
        navigate("CalculatorLocation");

    }

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
                            alignItems:'center',
                            alignSelf: 'center'
                        }}>


                        <Text style={{fontWeight:'700',color:'#015285',alignSelf:'center',height:50,width:width/2,marginTop:40,marginLeft:width/4}}>
                            QUOTE CALCULATOR
                        </Text>
                    </View>

                    <View   style={styles.inputContainer}>
                        <Text style={{width: 30, height: 30,alignSelf:'center',marginLeft:20,marginTop:5,fontSize:40,fontWeight:'700',color:'#00CA9D'}}>i</Text>
                    </View>
                    <View   style={styles.inputContainer1}>
                       <Text style={{color:'#015285',fontWeight:'500'}}>RESIDENT INFORMATION</Text>
                    </View>
                    <ImageBackground   style={styles.inputContainer3} source={require('../Images/SignUp/profile_background.png')}>
                        <Image source={require('../Images/SignUp/username.png')} resizeMode="center" style={{width: 20, height: 20,marginTop:20,marginLeft:20}}/>
                        <TextInput
                            style={styles.input}
                            returnKeyType="go"
                            underlineColorAndroid='transparent'
                            onChangeText=
                                {(text) => this.setState({userPassword: text})}
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
                                {(text) => this.setState({userPassword: text})}
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
                                {(text) => this.setState({userPassword: text})}
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
                                {(text) => this.setState({userPassword: text})}
                            ref={(input) => {
                            }}
                            placeholder="Contact Number"
                            placeholderTextColor='#015285'
                        />
                    </ImageBackground>

                    <ImageBackground   style={styles.inputContainer3} source={require('../Images/SignUp/profile_background.png')}>
                        <Image source={require('../Images/ClientInfo/homeTag.png')} resizeMode="stretch" style={{width: 20, height: 20,marginTop:20,marginLeft:20}}/>
                        <TextInput
                            style={styles.input}
                            returnKeyType="go"
                            underlineColorAndroid='transparent'
                            onChangeText=
                                {(text) => this.setState({userPassword: text})}
                            ref={(input) => {
                            }}
                            placeholder="Home Address"
                            placeholderTextColor='#015285'
                        />
                    </ImageBackground>


                    <View style={{justifyContent: 'flex-end', marginLeft: 15, marginRight: 15,marginBottom:20}}>
                        <TouchableOpacity onPress={this.showForm}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>SAVE CHANGES</Text>
                            </View>
                        </TouchableOpacity>

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
            width:50,
            height:50,
            borderRadius: 25,
            borderWidth:1,
            borderColor:'#00CA9D',
            alignSelf:'center'
        },
        inputContainer1: {
            width:'100%',
            height:50,
            justifyContent:'center',
            alignItems:'center'

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
            position:'absolute',
            left:20,
            width:30,
            height:30,
            marginTop:30
        },
        buttonText: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#FFFFFF'
        }
    });