import React, {Component} from 'react';

import {
    StyleSheet, FlatList, Text, View, Alert, Image, ImageBackground, TextInput,
    Dimensions,
    AsyncStorage,
    TouchableOpacity,
    NetInfo,
    ScrollView
} from 'react-native';

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
        }
    }

    static navigationOptions = {
        header: null
    };

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


    render() {
        return (
            <ImageBackground
                style={styles.container}
                source={require('../Images/login/background_img.png')}>
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
                            <View style={{flex: 1, flexDirection: 'row',height:60,borderRadius:5,borderColor:'#000000',borderWidth:1,marginTop:20,marginLeft:20,marginRight:20}}>
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
        padding: 15,
        borderRadius: 5,
        marginTop:10,
        height: 20,
        marginLeft: width / 10,
        borderWidth: 1,
        borderColor: '#00CA9D'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#00CA9D'
    }

});
