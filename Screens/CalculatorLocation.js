import React, {Component} from 'react';

import {
    StyleSheet, FlatList, Text, View, Alert, Image, ImageBackground, TextInput,
    Dimensions,
    AsyncStorage,
    TouchableOpacity,
    NetInfo,
    ScrollView
} from 'react-native';
import QuoteCalculatorCheckBox from "./QuoteCalculatorCheckBox";

const {width, height} = Dimensions.get('window');

export default class CalculatorLocation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            FlatListItems: [
                {key: '1', name: "Master Bedroom"},
                {key: '2', name: "Bathroom 1"},
                {key: '3', name: "Bathroom 2"},
                {key: '4', name: "Bathroom 3"}
            ]
        };

        this.goBack = this.goBack.bind(this);
        this.showForm = this.showForm.bind(this);
    }

    static navigationOptions = {
        header: null
    };

    showForm()
    {
        const {navigate} = this.props.navigation;
        navigate("QuoteCalculatorCheckBox");

    }


    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 0,
                    width: "100%",
                    backgroundColor: "#607D8B",
                }}
            />
        );
    }

    GetItem(item) {

        Alert.alert(item);

    }

    goBack()
    {
        this.props.navigation.pop();
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

                <View  style={styles.inputContainer}>
                    <Image source={require('../Images/AddLocation/locationTag.png')} resizeMode="stretch" style={{marginLeft:10,marginTop:10,width: 25, height: 25}}/>
                </View>
                <View   style={styles.inputContainer1}>
                    <Text style={{color:'#015285',fontWeight:'500',alignSelf:'center',marginTop:20}}>LOCATION</Text>
                </View>
                <View style={styles.MainContainer}>

                    <FlatList

                        data={this.state.FlatListItems}

                        renderItem={({item}) =>
                            <View style={{flex: 1, flexDirection: 'row',justifyContent:'space-between', height:60,borderRadius:5,borderColor:'#000000',borderWidth:1,marginTop:20,marginLeft:20,marginRight:20}}>
                                <Text style={styles.item}
                                      onPress={this.GetItem.bind(this, item.key)}> {item.key}{"."} {item.name} </Text>
                                <TouchableOpacity onPress={this.submit}>
                                    <View style={styles.button}>
                                        <Text style={styles.buttonText}>EDIT</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        }
                    />


                </View>

                <TouchableOpacity onPress={this.submit}>
                    <View style={styles.buttonAdd}>
                        <Text style={styles.buttonTextAdd}>ADD +</Text>
                    </View>
                </TouchableOpacity>

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
        marginTop:30,
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
