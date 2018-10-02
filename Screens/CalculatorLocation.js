import React, {Component} from 'react';
import PopupDialog, {SlideAnimation, DialogTitle} from 'react-native-popup-dialog';
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
popupDialog = null;
itemData=null;
    constructor(props) {
        super(props);

        this.state = {
            title:'',
            width:'',
            height:'',
            FlatListItems: [
                {key: '1', name: "Master Bedroom",width:"",height:"",showData:false},
                {key: '2', name: "Bathroom 1",width:"",height:"",showData:false},
                {key: '3', name: "Bathroom 2",width:"",height:"",showData:false},
                {key: '4', name: "Bathroom 3",width:"",height:"",showData:false}
            ]
        };

        this.goBack = this.goBack.bind(this);
        this.showForm = this.showForm.bind(this);
        this.openDialog = this.openDialog.bind(this);
        this.setValues = this.setValues.bind(this);
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

    setValues()
    {
        // 1. Make a shallow copy of the items
        let recipesCopy = JSON.parse(JSON.stringify(this.state.FlatListItems))
        //make changes to ingredients
        recipesCopy[0].width = this.state.width;//whatever new ingredients are
        recipesCopy[0].height = this.state.height;//whatever new ingredients are
        recipesCopy[0].showData = true//whatever new ingredients are
            this.setState({
                FlatListItems:recipesCopy
            });
      this.popupDialog.dismiss();

    }

    openDialog(item)
    {
        this.setState({title:item.name});
        this.itemData = item;
        this
            .popupDialog
            .show();
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
                    <Image source={require('../Images/Home/locationPin.png')} resizeMode="stretch" style={{width: 50, height: 50}}/>
                </View>
                <View   style={styles.inputContainer1}>
                    <Text style={{color:'#015285',fontWeight:'500',alignSelf:'center',marginTop:20}}>LOCATION</Text>
                </View>
                <View style={styles.MainContainer}>

                    <FlatList

                        data={this.state.FlatListItems}

                        renderItem={({item}) =>
                            <View style={{flex: 1, flexDirection: 'row',justifyContent:'space-between', height:90,borderRadius:5,borderColor:'#000000',borderWidth:1,marginTop:20,marginLeft:20,marginRight:20}}>
                               <View style={{flex:1,flexDirection:'column'}}>
                                <Text style={styles.item}
                                      onPress={this.GetItem.bind(this, item.key)}> {item.key}{"."} {item.name} </Text>
                                {item.showData ? <View style={{flex:1,flexDirection:'column',marginLeft:40}}><Text style={{color:'#015285'}}>Width: {item.width}</Text><Text style={{color:'#015285'}}>Height: {item.height}</Text></View>:<Text></Text>}
                               </View>
                                <TouchableOpacity onPress={() => this.openDialog(item)}>
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

                <PopupDialog
                    ref=
                        {(popupDialog) => {
                            this.popupDialog = popupDialog;
                        }}
                    height={300}
                    dialogAnimation={slideAnimation}
                    dialogTitle=
                        {<DialogTitle title={this.state.title}/>}>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center'
                        }}>
                        <View style={{flex: 1, flexDirection: 'row',justifyContent:'center', height:60,marginTop:20,marginLeft:20,marginRight:20}}>
                            <Text style={styles.item}> {'<-->'} Width:</Text>
                            <TouchableOpacity>
                                <View style={{justifyContent: 'center',
                                    flex:1,
                                    flexDirection:'row',
                                    alignItems: 'center',
                                    alignSelf:'flex-end',
                                    padding: 15,
                                    marginTop:20,
                                    width:80,
                                    marginLeft:40,
                                    height: 20,
                                    marginRight:30,
                                    backgroundColor: "#DEF2FF"}}>
                                    <TextInput style={styles.buttonTextOther}  onChangeText=
                                        {(text) => this.setState({width: text})} placeholder={""}></TextInput>
                                    <Text style={{marginLeft:10}}>ft</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{flex: 1, flexDirection: 'row',justifyContent:'center', height:60,marginTop:10,marginLeft:30,marginRight:20}}>
                            <Image source={require('../Images/AdLocationEditInput/biNormal1.png')} resizeMode="stretch" style={{width: 20, height: 20,alignSelf:'center',marginLeft:20}}/>
                            <Text style={{marginTop:30,marginLeft:20}}>Height:</Text>
                            <TouchableOpacity>
                                <View style={{justifyContent: 'center',
                                    flex:1,
                                    flexDirection:'row',
                                    alignItems: 'center',
                                    alignSelf:'flex-end',
                                    padding: 15,
                                    marginTop:20,
                                    width:80,
                                    marginLeft:40,
                                    height: 20,
                                    marginRight:30,
                                    backgroundColor: "#DEF2FF"}}>
                                    <TextInput style={styles.buttonTextOther}  onChangeText=
                                        {(text) => this.setState({height: text})} placeholder={""}></TextInput>
                                    <Text style={{marginLeft:10}}>ft</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.setValues}>
                            <Text style={styles.buttonText1}>SAVE CHANGES</Text>
                        </TouchableOpacity>

                    </View>
                </PopupDialog>
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
        flexDirection:'column',
        height: 45,
        marginLeft: 10,
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

    buttonText1: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff'
    },

    buttonOther: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'flex-end',
        padding: 15,
        marginTop:20,
        width:80,
        marginLeft:40,
        height: 20,
        marginRight:30,
        backgroundColor: "#DEF2FF"
    },
    buttonTextOther: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#00CA9D',
        height:50
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
    buttonContainer: {
        backgroundColor: '#00CA9D',
        paddingVertical: 5,
        marginLeft:30,
        marginRight:30,
        marginBottom:20,
    marginTop:20,
        width:250,
        height:50,
        alignSelf:'center',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 10,
        borderWidth: 1,

    },

});
const
    slideAnimation = new SlideAnimation({slideFrom: 'bottom'});