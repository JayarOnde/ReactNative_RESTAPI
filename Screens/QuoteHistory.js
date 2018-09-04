import React, { Component } from 'react';

import { StyleSheet, FlatList, Text, View, Alert,Image,ImageBackground,TextInput,
    Dimensions,
    AsyncStorage,
    TouchableOpacity,
    NetInfo,
    ScrollView
} from 'react-native';
const {width, height} = Dimensions.get('window');

export default class QuoteHistory extends Component {

    constructor(props)
    {
        super(props);

        this.state = { FlatListItems: [
                {key: '1',name:"Name of Quote"},
                {key: '2',name:"Name of Quote"},
                {key: '3',name:"Name of Quote"},
                {key: '4',name:"Name of Quote"},
                {key: '5',name:"Name of Quote"}
            ]}
    }
    static navigationOptions = {
        header: null
    };

    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#607D8B",
                }}
            />
        );
    }

    GetItem (item) {

        Alert.alert(item);

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
                        backgroundColor:'#DEF2FF',
                        justifyContent: 'center',
                        alignItems:'center',
                        alignSelf: 'center'
                    }}>


                    <Text style={{fontWeight:'700',color:'#015285',alignSelf:'center',height:50,width:width/2,marginTop:40,marginLeft:width/4}}>
                        QUOTE HISTORY
                    </Text>

                </View>
                <View style={styles.MainContainer}>

                    <FlatList

                        data={ this.state.FlatListItems }

                        ItemSeparatorComponent = {this.FlatListItemSeparator}

                        renderItem={({item}) =>
                            <View style={{flex:1,flexDirection:'row'}}>
                                <View style={{backgroundColor:'#F0F0F0',width:70,height:70,justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontSize:20,color:'#015285'}}>
                                        {item.key}
                                    </Text>
                                </View>
                            <Text style={styles.item} onPress={this.GetItem.bind(this, item.key)} > {item.name} </Text>
                                <TouchableOpacity onPress={this.submit}>
                                    <View style={styles.button}>
                                        <Text style={styles.buttonText}>OPEN</Text>
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

    MainContainer :{

// Setting up View inside content in Vertically center.
        flex:1,
        marginTop: 80

    },

    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        marginLeft:10,
        alignSelf:'center'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    },

    inputContainer: {
        marginLeft:20,
        marginRight:20,
        justifyContent:'center',
        backgroundColor: '#F5FCFF'
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
        borderRadius: 5,
        height:20,
        marginTop:20,
        marginLeft:width/10,
        borderWidth: 1,
        borderColor: '#00CA9D'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#00CA9D'
    }

});
