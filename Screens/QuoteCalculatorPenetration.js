import React, {Component} from 'react';

import {
    StyleSheet, FlatList, Text, View, Alert, Image, ImageBackground, TextInput,
    Dimensions,
    AsyncStorage,
    TouchableOpacity,
    NetInfo,
    ScrollView
} from 'react-native';
import CheckBox from 'react-native-check-box'
const {width, height} = Dimensions.get('window');

export default class QuoteCalculatorPenetration extends Component {

    constructor(props) {
        super(props);
        this.state={
            isChecked:false,
            isAnother:false,
        };

        this.goBack = this.goBack.bind(this);
        this.showForm = this.showForm.bind(this);
    }

    static navigationOptions = {
        header: null
    };

    goBack()
    {
        this.props.navigation.pop();
    }
    showForm()
    {
        const {navigate} = this.props.navigation;
        navigate("QuoteCalculatorPenetration");

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
                            QUOTE CALCULATOR
                        </Text>

                    </View>

                    <View
                        style={{
                            position: 'absolute',
                            top: 80,
                            height: 60,
                            width: '100%',
                            flex:1,
                            flexDirection:'row',
                            backgroundColor: '#D9F3EE',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>


                        <Text style={{
                            fontWeight: '700',
                            color: '#015285',
                            alignSelf: 'flex-start',
                            height: 50,
                            fontSize:20,
                            width: width / 2,
                            marginTop: 20,
                            marginLeft:20
                        }}>
                            PENETRATION
                        </Text>
                        <TouchableOpacity onPress={this.submit}>
                            <View style={styles.buttonAdd}>
                                <Text style={styles.buttonTextAdd}>ADD +</Text>
                            </View>
                        </TouchableOpacity>


                    </View>

                    <View style={{flex:1,flexDirection:'column',marginTop:130}}>
                        <CheckBox
                            style={{padding:5,marginLeft:20,marginTop:30}}
                            onClick={()=>{
                                this.setState({
                                    isAnother:!this.state.isAnother
                                })
                            }}
                            isChecked={this.state.isAnother}
                            rightText={"Yes"}
                        />
                        <CheckBox
                            style={{padding:5,marginLeft:20,marginTop:10}}
                            onClick={()=>{
                                this.setState({
                                    isChecked:!this.state.isChecked
                                })
                            }}
                            isChecked={this.state.isChecked}
                            rightText={"No"}
                        />

                        <View style={{flex: 1, flexDirection: 'row',justifyContent:'space-between', height:60,borderRadius:8,borderColor:'#00CA9D',borderWidth:2,marginTop:20,marginLeft:20,marginRight:20}}>
                            <Text style={styles.item}> {'<-->'} Quantity</Text>
                            <TouchableOpacity onPress={this.submit}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>55 ft</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{flex: 1, flexDirection: 'row',justifyContent:'space-between', height:60,borderRadius:8,borderColor:'#00CA9D',borderWidth:2,marginTop:20,marginLeft:20,marginRight:20}}>
                            <Image source={require('../Images/AdLocationEditInput/biNormal1.png')} resizeMode="stretch" style={{width: 20, height: 20,alignSelf:'center',marginLeft:20}}/>
                            <Text style={styles.item2}>Height:</Text>
                            <TouchableOpacity onPress={this.submit}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>4 ft</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{justifyContent: 'flex-end', marginLeft: 15, marginRight: 15,marginBottom:20,marginTop:height/5}}>
                        <TouchableOpacity onPress={this.showForm}>
                            <View style={styles.buttonNext}>
                                <Text style={styles.buttonTextNext}>NEXT</Text>
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
        alignSelf:'flex-end',
        padding: 15,
        borderRadius: 5,
        width:100,
        height: '100%',
        backgroundColor:'#DEF2FF'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#00CA9D'
    },
    buttonTextNext: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF'
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
