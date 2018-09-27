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

export default class QuoteCalculatorCheckBox extends Component {

    constructor(props) {
        super(props);
        this.state={
            singlePlyChecked:false,
            doublePlyChecked:false,
            liquidChecked:false,
            aluminiumChecked:false,
            granuleChecked:false,
            baseChecked:false,
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
        navigate("QuoteCalculatorRemoval");

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
                            backgroundColor: '#D9F3EE',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center'
                        }}>


                        <Text style={{
                            fontWeight: '700',
                            color: '#015285',
                            alignSelf: 'flex-start',
                            height: 50,
                            fontSize:20,
                            width: width / 2,
                            marginTop: 30,
                            marginLeft: 20
                        }}>
                           SYSTEM
                        </Text>

                    </View>

      <View style={{flex:1,flexDirection:'column',marginTop:130}}>
          <CheckBox
              style={{padding:5,marginLeft:20,marginTop:30}}
              onClick={()=>{
                  this.setState({
                      singlePlyChecked:!this.state.singlePlyChecked
                  })
              }}
              isChecked={this.state.singlePlyChecked}
              rightText={"Single Ply"}
          />
          <CheckBox
              style={{padding:5,marginLeft:20,marginTop:10}}
              onClick={()=>{
                  this.setState({
                      doublePlyChecked:!this.state.doublePlyChecked
                  })
              }}
              isChecked={this.state.doublePlyChecked}
              rightText={"Double Ply"}
          />
          <CheckBox
              style={{padding:5,marginLeft:20,marginTop:10}}
              onClick={()=>{
                  this.setState({
                      liquidChecked:!this.state.liquidChecked
                  })
              }}
              isChecked={this.state.liquidChecked}
              rightText={"Liquid Product"}
          />
      </View>
                    <View
                        style={{
                            position: 'absolute',
                            top: 300,
                            height: 60,
                            width: '100%',
                            backgroundColor: '#D9F3EE',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center'
                        }}>


                        <Text style={{
                            fontWeight: '700',
                            color: '#015285',
                            alignSelf: 'flex-start',
                            height: 50,
                            fontSize:20,
                            width: width / 2,
                            marginTop: 30,
                            marginLeft: 20
                        }}>
                            TERMINATION
                        </Text>

                    </View>

                    <View style={{flex:1,flexDirection:'column',marginTop:60}}>
                        <CheckBox
                            style={{padding:5,marginLeft:20,marginTop:30}}
                            onClick={()=>{
                                this.setState({
                                    aluminiumChecked:!this.state.aluminiumChecked
                                })
                            }}
                            isChecked={this.state.aluminiumChecked}
                            rightText={"Aluminium"}
                        />
                        <CheckBox
                            style={{padding:5,marginLeft:20,marginTop:10}}
                            onClick={()=>{
                                this.setState({
                                    granuleChecked:!this.state.granuleChecked
                                })
                            }}
                            isChecked={this.state.granuleChecked}
                            rightText={"Granule"}
                        />
                        <CheckBox
                            style={{padding:5,marginLeft:20,marginTop:10}}
                            onClick={()=>{
                                this.setState({
                                    baseChecked:!this.state.baseChecked
                                })
                            }}
                            isChecked={this.state.baseChecked}
                            rightText={"Base with finish coat"}
                        />
                    </View>


                    <View style={{justifyContent: 'flex-end', marginLeft: 15, marginRight: 15,marginBottom:20}}>
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
        fontSize: 18,

        height: 44,
        marginLeft: 10,
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
        marginTop:10,
        height: 20,
        marginRight:30,
        borderWidth: 1,
        borderColor: '#00CA9D'
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
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },

    buttonNext: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginLeft:20,
        marginRight:20,
        marginTop:50,
        backgroundColor: '#00CA9D',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#fff'
    },

    buttonAdd: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignSelf:'flex-end',
        padding: 15,
        width:120,
        height:50,
        marginRight:20,
        marginTop:30,
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
