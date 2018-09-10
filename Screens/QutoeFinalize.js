import React, { Component } from 'react';

import { StyleSheet, FlatList, Text, View, Alert,Image,ImageBackground,TextInput,
    Dimensions,
    AsyncStorage,
    TouchableOpacity,
    NetInfo,
    ScrollView
} from 'react-native';
const {width, height} = Dimensions.get('window');

export default class QutoeFinalize extends Component {

    constructor(props)
    {
        super(props);

        this.state = { FlatListItems: [
                {key: '1',name:"Glasdan AL 80-40",quantity:"10"},
                {key: '2',name:"Dan-o-Pads",quantity:"10"},
                {key: '3',name:"Chemcurbs",quantity:"6"},
                {key: '4',name:"Removals",quantity:"Yes"},
                {key: '5',name:"Standing Water",quantity:"Yes"},
                {key: '5',name:"Penetration",quantity:"Yes"}
            ]};

        this.goBack = this.goBack.bind(this);
    }
    static navigationOptions = {
        header: null
    };

    goBack()
    {
        this.props.navigation.pop();
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
                        height:50,
                        width:'100%',
                        backgroundColor:'#DEF2FF',
                        justifyContent: 'center',
                        alignItems:'center',
                        alignSelf: 'center'
                    }}>



                    <Text style={{fontWeight:'100',color:'#015285',alignSelf:'center',height:50,width:width/2,marginTop:20,marginLeft:width/4}}>
                    </Text>

                </View>
<ScrollView>
    <Text style={{fontWeight:'100',color:'#015285',alignSelf:'center',height:40,width:'100%',marginTop:70,marginLeft:20}}>
PRODUCTS NECESSARY TO COMPLETE PROJECT
    </Text>

    <Text style={{fontWeight:'500',color:'#015285',alignSelf:'center',height:50,width:'100%',marginLeft:50}}>
        TOTAL PROJECT SIZE 3, 000 SQ FT
    </Text>
    <View
        style={{
            position: 'absolute',
            top: 150,
            height: 60,
            width: '100%',
            flex:1,
            flexDirection:'row',
            backgroundColor: '#D9F3EE',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>

        <Text style={{
            fontWeight: '100',
            color: '#015285',
            alignSelf: 'flex-start',
            height: 20,
            fontSize:18,
            width: '50%',
            marginTop: 20,
            marginLeft:20
        }}>
            PRODUCTS
        </Text>
        <Text style={{
            fontWeight: '100',
            color: '#015285',
            alignSelf: 'flex-start',
            height: 20,
            fontSize:18,
            width: '50%',
            marginTop: 20,
            marginLeft:40
        }}>
            QUANTITY
        </Text>

    </View>

    <View style={styles.MainContainer}>

                    <FlatList

                        data={ this.state.FlatListItems }

                       // ItemSeparatorComponent = {this.FlatListItemSeparator}

                        renderItem={({item}) =>
                            <View style={{flex:1,flexDirection:'row'}}>
                                <Text style={styles.item} onPress={this.GetItem.bind(this, item.key)} > {item.name} </Text>
                                <Text style={{
                                    color:'#000000',
                                    height:30,
                                    position:'absolute',
                                    right:60,
                                    marginTop:10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    alignSelf:'flex-end',
                                    marginLeft:width/3

                                    }} onPress={this.GetItem.bind(this, item.key)} > {item.quantity} </Text>

                            </View>
                        }
                    />

        <TouchableOpacity onPress={this.submit}>
            <View style={styles.buttonAdd}>
                <Text style={styles.buttonTextAdd}>ADD NOTE +</Text>
            </View>
        </TouchableOpacity>

        <View
            style={{
                height: 100,
                width: '100%',
                flex:1,
                flexDirection:'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>

            <Image source={require('../Images/FinalizeQuote/download.png')}
                   resizeMode="stretch" style={{marginLeft:width/4,width: 40, height: 40}}/>
            <Image source={require('../Images/FinalizeQuote/share.png')}
                   resizeMode="stretch" style={{marginLeft:20,width: 40, height: 40,marginRight:width/6}}/>
        </View>

        <View
            style={{
                height: 100,
                width: '100%',
                flex:1,
                flexDirection:'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginRight:100
            }}>

            <Text style={{
                color: '#015285',
                alignSelf: 'flex-start',
                height: 50,
                fontSize:15,
                width: 300,
                marginLeft:width/5
            }}>
               SAVE AS PDF              SHARE VIA EMAIL
            </Text>
        </View>

        <View style={{position:'absolute',bottom:5,width:'100%'}}>
            <TouchableOpacity onPress={this.showForm}>
                <View style={styles.buttonNext}>
                    <Text style={styles.buttonTextNext}>DONE</Text>
                </View>
            </TouchableOpacity>

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

    MainContainer :{

// Setting up View inside content in Vertically center.
        flex:1,
        marginTop: 60

    },

    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        marginLeft:10,
        alignSelf:'center'
    },
    buttonTextNext: {
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
        backgroundColor: '#00CA9D',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#fff'
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
    },
    buttonTextAdd: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    buttonAdd: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        width:150,
        padding:5,
        height:40,
        marginRight:0,
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
        marginTop:10
    },

});
