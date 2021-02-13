// import * as React from 'react';
// import React, { Component } from 'react';
// import CheckBox from '@react-native-community/checkbox';
import CheckBox from 'react-native-checkbox';
import React, { useState } from 'react';

import {
    Text,
    Image,
    View,
    StyleSheet,
    TextInput,
    Button,
    ScrollView,
    FlatList,
    Modal,
    SafeAreaView,
    TouchableOpacity,
    Alert,
} from 'react-native';


const Signup = () => {

    const [showModal, setShowModal] = useState(false);

    function changeBackground(e) {
        e.target.style.background = 'red';
    }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.paddingview}>
                    <Modal transparent={true} style={{ opacity: .2 }}
                        animationType="fade"
                        visible={showModal}
                        onRequestClose={() => {
                            console.log('Modal has been closed.');
                        }}>
                        <View style={styles.newmodal}>
                            <View style={styles.modalInner}>
                                <Text style={styles.text}>Select Account Type</Text>
                                <View style={{ flex: 1, flexDirection: 'row', padding: 20, alignSelf: 'center', backgroundColor: 'white' }} >
                                    <TouchableOpacity onMouseOver={changeBackground}>
                                        <View style={{ padding: 20, borderColor: 'red', borderWidth: 1, marginRight: 20, borderRadius: 10 }}>
                                            <Image style={{ width: 70, height: 90, marginBottom: 15 }} source={require('../assets/Group49.png')} />
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onMouseOver={changeBackground}>
                                        <View style={{ padding: 20, borderColor: 'red', borderWidth: 1, borderRadius: 10 }}>
                                            <Image style={{ width: 70, height: 90, marginBottom: 15 }} source={require('../assets/Group47.png')} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={styles.newbutton} onPress={() => {
                                    setShowModal(!showModal);
                                }} >
                                    <Text style={styles.newbuttonText}>Proceed</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                    <Image
                        style={styles.tinyLogo}
                        source={require('../assets/LoginIcon.png')}
                    />
                    <Text style={styles.header}> Sign Up </Text>

                    <TextInput style={styles.textinput}
                        underlineColorAndroid="blgrayack"
                        placeholder="EMAIL"
                        placeholderTextColor="gray" />

                    <TextInput style={styles.textinput}
                        underlineColorAndroid="gray"
                        placeholder="PASSWORD"
                        placeholderTextColor="gray"
                        autoCapitalize="none" />

                    <TextInput style={styles.textinput}
                        underlineColorAndroid="gray"
                        placeholder="REPEAT PASSWORD"
                        placeholderTextColor="gray"
                        autoCapitalize="none" />

                    <View style={styles.container}>
                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                style={styles.checklabel}
                                label='    I Agree With the Terms And Conditions'
                                onChange={(checked) => console.log('I am checked', checked)}
                            />
                            {/* <Text style={styles.label}>I Agree With the Terms And Conditions</Text> */}
                        </View>
                        {/* <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text> */}
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        setShowModal(!showModal);
                    }} >
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            marginTop: 50
                        }}
                    />

                    <Text style={styles.signup}> Sign Up With </Text>

                    <View style={{ flex: 1, flexDirection: 'row', padding: 20, alignSelf: 'center', }}>
                        <Image style={{ width: 40, height: 40, marginLeft: 20, marginRight: 20 }} source={require('../assets/facebook.png')} />
                        <Image style={{ width: 40, height: 40, marginLeft: 20, marginRight: 20 }} source={require('../assets/google.png')} />
                        <Image style={{ width: 40, height: 40, marginLeft: 20, marginRight: 20 }} source={require('../assets/link.png')} />
                        <Image style={{ width: 40, height: 40, marginLeft: 20, marginRight: 20 }} source={require('../assets/tweet.png')} />
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Signup;

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 100,
    },
    text: {
        color: '#3f2949',
        marginTop: 10,
    },
    headerWrapper: {
        borderBottomColor: 'gray',
        borderBottomWidth: 2,
        marginBottom: 30,
    },
    header: {
        fontSize: 35,
        // alignSelf: 'left',
        color: 'gray',
        marginBottom: 10,

    },
    signup: {
        marginTop: -12,
        alignSelf: 'center',
        fontSize: 15,
        color: 'gray',
        width: 100,
        backgroundColor: "#ffffff",

    },
    paddingview: {
        padding: 20,
    },
    box: {
        flexBasis: 75,
        borderWidth: 1,
        borderColor: 'black',
        height: 40,
        margin: 10,
    },
    forgetPass: {
        marginTop: 50,
        alignSelf: 'center',
        fontSize: 15,
        color: 'gray',
    },
    checkboxContainer: {
        marginTop: 20

    },
    checklable: {
        borderRadius: 20,
        borderColor: 'gray',
    },
    button: {
        backgroundColor: "#db3236",
        padding: 10,
        borderRadius: 20,
        width: 220,
        marginTop: 20,
        alignSelf: "center"
    },
    newbutton: {
        backgroundColor: "#db3236",
        padding: 8,
        borderRadius: 20,
        width: 180,
        marginTop: 30,
        alignSelf: "center"
    },
    buttonText: {
        color: "white",
        alignSelf: "center"

    },
    newbuttonText: {
        color: "white",
        alignSelf: "center",
        fontSize: 20

    },
    tinyLogo: {
        width: 170,
        height: 100,
        resizeMode: 'stretch',
        marginLeft: 70,
        marginRight: 70,
        marginBottom: 50,
        marginTop: 50
    },

    newOne: {
        width: 170,
        flex: 3
    },
    newsignup: {
        fontSize: 15,
        color: "gray",
    },
    dont: {
        fontSize: 14,
    },
    container: {
        backgroundColor: 'white'
    },
    newmodal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
    },

    modalInner: {
        height: 300,
        padding: 25,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FFF',
        shadowColor: '#000',
        borderRadius: 20,
        marginLeft: 40,
        marginRight: 40,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text: {
        fontSize: 20,
        color: 'black'
    }
}); 