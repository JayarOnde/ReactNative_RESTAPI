import
    React, {Component} from 'react';
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
    TouchableHighlight, BackHandler, BackAndroid
} from 'react-native';
const {width, height} = Dimensions.get('window');
import FCM, { NotificationActionType } from "react-native-fcm";


export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            userEmail: '',
            userMobile: '',
            checked:true
        };


        this.submitCalculator = this.submitCalculator.bind(this);
        this.submitHistory = this.submitHistory.bind(this);
        this.submitProduct = this.submitProduct.bind(this);
        this.submitProfile = this.submitProfile.bind(this);

    }

    static navigationOptions = {
        header: null
    };


    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {return true});
        FCM.getFCMToken().then(token => {
            console.log("TOKEN (getFCMToken)", token);
           // Alert.alert("" + token);

        }).catch(err => console.log(err));

    }
    handleBackButton() {
        //ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
        return true;
    }
    componentWillMount()
    {
      //  BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    submitProfile()
    {
        const {navigate} = this.props.navigation;
        navigate("Profile");
    }
    submitCalculator()
    {
        const {navigate} = this.props.navigation;
        navigate("QuoteCalculator");
    }

    submitHistory()
    {
        const {navigate} = this.props.navigation;
        navigate("QuoteHistory");
    }

    submitProduct()
    {
        const {navigate} = this.props.navigation;
        navigate("Product");
    }

    render() {
        return (
            <ImageBackground
                style={styles.container}
                source={require('../Images/login/background_img.png')}>
                <View
                    style={{
                        position:'absolute',
                        top:0,
                        height:80,
                        width:'100%',
                    }}>

                    <Image source={require('../Images/Dashboard/menu.png')} resizeMode="center" style={{width: 100, height: 80,marginTop:20,marginLeft:20,alignSelf:'center'}}/>
                </View>
                <View style={{flex:1,flexDirection:'row',marginTop:150}}>
                    <TouchableOpacity onPress={this.submitProfile}>
                    <Image source={require('../Images/Dashboard/profile.png')} resizeMode="center" style={{width: 150, height: 150,marginTop:20,marginLeft:20,alignSelf:'center'}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.submitProduct}>
                    <Image source={require('../Images/Dashboard/product.png')} resizeMode="center" style={{width: 150, height: 150,marginTop:20,marginLeft:20,alignSelf:'center'}}/>
                    </TouchableOpacity>
                </View>

                <View style={{flex:1,flexDirection:'row'}}>
                    <TouchableOpacity onPress={this.submitCalculator}>
                    <Image source={require('../Images/Dashboard/calculator.png')} resizeMode="center" style={{width: 150, height: 150,marginLeft:20}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.submitHistory}>
                        <Image source={require('../Images/Dashboard/history.png')} resizeMode="center" style={{width: 150, height: 150,marginLeft:20}}/>
                    </TouchableOpacity>
                </View>

                <View style={{height:height/10}}>
                </View>

            </ImageBackground>

        );
    }
}

const
    styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#F5FCFF'
        },


    });