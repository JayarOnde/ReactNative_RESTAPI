import React, {Component} from 'react';

import {
    StyleSheet, FlatList, Text, View, Alert, Image, ImageBackground, TextInput,
    Dimensions,
    AsyncStorage,
    TouchableOpacity,
    NetInfo,
    ScrollView,
    Picker
} from 'react-native';
import CheckBox from 'react-native-check-box'
const {width, height} = Dimensions.get('window');

export default class SinglePlyAluminium extends Component {

    constructor(props) {
        super(props);
        this.state={
            isChecked:false,
            isAnother:false,
            alumSelected:false,
            glasetSelected:false,
            glaswtSelected:false,
        };

        this.goBack = this.goBack.bind(this);
        this.submitDone = this.submitDone.bind(this);
        this.aluminiumSelected= this.aluminiumSelected.bind(this);
        this.glasseitSelected= this.glasseitSelected.bind(this);
        this.glasswitSelected= this.glasswitSelected.bind(this);

    }


    submitDone()
    {

        const {navigate} = this.props.navigation;
        navigate("Menu");

    }

    static navigationOptions = {
        header: null
    };

    goBack()
    {
        this.props.navigation.pop();
    }

    aluminiumSelected()
    {
        this.setState({alumSelected:!this.state.alumSelected,glassetSelected:false,glasswtSelected:false});
        //const {navigate} = this.props.navigation;
        //navigate("ProductTermination");
    }
    glasseitSelected()
    {
        this.setState({glasetSelected:!this.state.glasetSelected,alumSelected:false,glasswtSelected:false});
    }
    glasswitSelected()
    {
        this.setState({glaswtSelected:!this.state.glaswtSelected,alumSelected:false,glassetSelected:false});
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
                            {this.props.navigation.state.params.header}
                        </Text>

                    </View>


                    <View style={{flex:1,flexDirection:'column',marginTop:130}}>

                        <Text style={{color:'#015285',fontWeight:'bold',alignSelf:'center'}}>
                            ======= ALUMINIUM =========
                        </Text>

                        {this.state.alumSelected ?
                            <View style={{justifyContent: 'flex-end', marginBottom:5,marginTop:20}}>
                                <TouchableOpacity onPress={this.aluminiumSelected}>
                                    <View style={styles.buttonNext}>
                                        <Text style={styles.buttonTextNext}>ALUMINIO SA</Text>
                                        <TouchableOpacity onPress={this.submit}>
                                            <View style={{ justifyContent: 'flex-end',
                                                alignItems: 'center',
                                                alignSelf:'flex-end',
                                                marginLeft:80,
                                                width:100,
                                                padding:5,
                                                height:30,
                                                backgroundColor: '#015285',
                                                borderRadius: 10,
                                                borderWidth: 1,
                                                borderColor: '#fff'}}>
                                                <Text style={styles.buttonTextAdd}>DATA SHEET</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                                <Text style={{marginLeft:20,marginTop:20,fontSize:16,color:'#015285'}}>
                                    DESCRIPTION
                                </Text>
                                <Text style={{marginLeft:20,marginTop:20,fontSize:16,color:'#015285'}}>
                                    Aluminio SA is a self adhered waterproofing membrane. AluminioSA has a very heavy aluminium foil as a top surface protection. A specially formulated self adhesive blend and a release liner on the back side.
                                </Text>
                                <Text style={{marginLeft:20,marginTop:20,fontSize:16,color:'#015285'}}>
                                    INSTALLATION
                                </Text>
                                <Text style={{marginLeft:20,marginTop:20,fontSize:16,color:'#015285'}}>
                                    Peel of the release liner and apply the AluminioSA making sure that all the material is in full contact with the surface by applying uniform pressure throughout the surface material.
                                </Text>
                            </View>: <View style={{justifyContent: 'flex-end', marginBottom:5,marginTop:20}}>
                                <TouchableOpacity onPress={this.aluminiumSelected}>
                                    <View style={styles.buttonNext}>
                                        <Text style={styles.buttonTextNext}>ALUMINIO SA</Text>
                                        <Image source={require('../Images/Aluminium/dropdown.png')} resizeMode="stretch" style={{width: 15, height: 15,marginTop:10,marginLeft:20,marginRight:20,position:'absolute',right:20}}/>
                                    </View>
                                </TouchableOpacity>
                            </View>}
                        {this.state.glasetSelected ?
                            <View style={{justifyContent: 'flex-end', marginBottom:20,marginTop:10}}>
                                <TouchableOpacity onPress={this.glasseitSelected}>
                                    <View style={styles.buttonNext}>
                                        <Text style={styles.buttonTextNext}>GLASDAN AL 80-4</Text>
                                        <TouchableOpacity onPress={this.submit}>
                                            <View style={styles.buttonAdd}>
                                                <Text style={styles.buttonTextAdd}>DATA SHEET</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                                <Text style={{marginLeft:20,marginTop:20,fontSize:16,color:'#015285'}}>
                                    DESCRIPTION
                                </Text>
                                <Text style={{marginLeft:20,marginTop:20,fontSize:16,color:'#015285'}}>
                                    Aluminio SA is a self adhered waterproofing membrane. AluminioSA has a very heavy aluminium foil as a top surface protection. A specially formulated self adhesive blend and a release liner on the back side.
                                </Text>
                                <Text style={{marginLeft:20,marginTop:20,fontSize:16,color:'#015285'}}>
                                    INSTALLATION
                                </Text>
                                <Text style={{marginLeft:20,marginTop:20,fontSize:16,color:'#015285'}}>
                                    Peel of the release liner and apply the AluminioSA making sure that all the material is in full contact with the surface by applying uniform pressure throughout the surface material.
                                </Text>
                            </View>: <View style={{justifyContent: 'flex-end', marginBottom:5}}>
                                <TouchableOpacity onPress={this.glasseitSelected}>
                                    <View style={styles.buttonNext}>
                                        <Text style={styles.buttonTextNext}>GLASDAN AL 80-4</Text>
                                        <Image source={require('../Images/Aluminium/dropdown.png')} resizeMode="stretch" style={{width: 15, height: 15,marginTop:10,marginLeft:20,marginRight:20,position:'absolute',right:20}}/>
                                    </View>
                                </TouchableOpacity>
                            </View>}

                        {this.state.glaswtSelected ?
                            <View style={{justifyContent: 'flex-end', marginBottom:20,marginTop:10}}>
                                <TouchableOpacity onPress={this.glasswitSelected}>
                                    <View style={styles.buttonNext}>
                                        <Text style={styles.buttonTextNext}>GLASDAN AL PEARL WHITE</Text>
                                        <TouchableOpacity onPress={this.submit}>
                                            <View style={{ justifyContent: 'flex-end',
                                                alignItems: 'center',
                                                alignSelf:'flex-end',
                                                marginLeft:5,
                                                width:100,
                                                padding:5,
                                                height:30,
                                                backgroundColor: '#015285',
                                                borderRadius: 10,
                                                borderWidth: 1,
                                                borderColor: '#fff'}}>
                                                <Text style={styles.buttonTextAdd}>DATA SHEET</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                                <Text style={{marginLeft:20,marginTop:20,fontSize:16,color:'#015285'}}>
                                    DESCRIPTION
                                </Text>
                                <Text style={{marginLeft:20,marginTop:20,fontSize:16,color:'#015285'}}>
                                    Aluminio SA is a self adhered waterproofing membrane. AluminioSA has a very heavy aluminium foil as a top surface protection. A specially formulated self adhesive blend and a release liner on the back side.
                                </Text>
                                <Text style={{marginLeft:20,marginTop:20,fontSize:16,color:'#015285'}}>
                                    INSTALLATION
                                </Text>
                                <Text style={{marginLeft:20,marginTop:20,fontSize:16,color:'#015285'}}>
                                    Peel of the release liner and apply the AluminioSA making sure that all the material is in full contact with the surface by applying uniform pressure throughout the surface material.
                                </Text>
                            </View>: <View style={{justifyContent: 'flex-end', marginBottom:5}}>
                                <TouchableOpacity onPress={this.glasswitSelected}>
                                    <View style={styles.buttonNext}>
                                        <Text style={styles.buttonTextNext}>GLASDAN AL PEARL WHITE</Text>
                                        <Image source={require('../Images/Aluminium/dropdown.png')} resizeMode="stretch" style={{width: 15, height: 15,marginTop:10,marginLeft:20,marginRight:20,position:'absolute',right:20}}/>
                                    </View>
                                </TouchableOpacity>
                            </View>}

                        <View style={{justifyContent: 'flex-end', marginLeft: 15, marginRight: 15,marginBottom:20,marginTop:10}}>
                            <TouchableOpacity onPress={this.submitDone}>
                                <View style={styles.buttonDone}>
                                    <Text style={styles.buttonTextDone}>DONE</Text>
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
        fontSize: 18,
        fontWeight: 'bold',
        color: '#015285',
        marginLeft:10
    },

    buttonTextSelected: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#00CA9D'
    },

    buttonTextAdd: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },

    buttonNext: {
        flex:1,
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 15,
        marginTop:20,
        backgroundColor: '#DEF2FF',
    },

    buttonSelected: {
        flex:1,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginLeft:20,
        marginRight:20,
        marginTop:20,
        backgroundColor: '#ffffff',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#00CA9D'
    },

    buttonAdd: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignSelf:'flex-end',
        marginLeft:60,
        width:100,
        padding:5,
        height:30,
       backgroundColor: '#015285',
        borderRadius: 10,
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

    buttonTextDone: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    buttonDone: {
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

});
