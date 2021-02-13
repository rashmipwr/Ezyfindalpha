
import React, { useState } from 'react';
import ImageSlider from 'react-native-image-slider';

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
    TouchableHighlight
} from 'react-native';


const Product = () => {



    return (
        // <ImageSlider images={[
        //     'http://placeimg.com/640/480/any',
        //     'http://placeimg.com/640/480/any',
        //     'http://placeimg.com/640/480/any'
        //   ]}/> 

        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.paddingview}>
                <Image
                        style={styles.tinyLogo}
                        source={require('../assets/img/Rectangle.png')}
                    />
                    <View style={{ marginTop:20}} >
                        <Text style={styles.dummyhead}>Allow Tyre</Text>
                    </View>
                    <View >
                        <Text style={{ color:'blue'}} >Dupor</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', paddingTop: 20, paddingBottom: 20}}>
                        <Image style={{ width: 15, height: 15, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                        <Image style={{ width: 15, height: 15, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                        <Image style={{ width: 15, height: 15, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                        <Image style={{ width: 15, height: 15, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                        <Image style={{ width: 17, height: 17, marginLeft: 2, marginRight: 2 }} source={require('../assets/starwhite.png')} />
                        <Text style={styles.prohead}>
                            204 Reviews
                     </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', paddingTop: 0, paddingBottom: 20}}>
                    <Text style={styles.dummyhead}>$450</Text>
                       <Text style={styles.prohead}>
                            $500
                     </Text>
                    </View>
                    <View >
                        <Text style={styles.newdummyhead}>Free Delivery</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', paddingTop: 0, paddingBottom: 20}}>
                    <Image source={require('../assets/img/Path182.png')}
                                        resizeMode="contain"
                                        style={{width:20,position:'relative', left:20}}
                                    />
                       
                      <Text style={{color:'red',fontSize:15}}>+</Text>
                                    <Image source={require('../assets/img/Rectangle51.png')}
                                        resizeMode="contain"
                                        style={{width:100, marginTop:28, position:'relative'}}
                                    />
                    <TouchableOpacity  style={styles.button}  onPress={() => this.props.navigation.navigate('MynewProduct')}>
                      <Text style={styles.buttonText}>Add To Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Product;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        padding: 10,
        borderRadius: 10,
        width: 170,
        marginTop: 20,
        alignSelf: "center"
    },
    dummyhead:{
        fontSize:25,
        fontWeight:'bold'
    },
    paddingview:{
     paddingLeft:30,
     paddingRight:30   
    },
    prohead:{
fontSize:9,
color:'gray',
marginLeft:10
    },
    tinyLogo:{
        marginTop: 20,
        alignSelf: "center"

    },
    button: {
        backgroundColor: "#db3236",
        padding: 10,
        borderRadius: 10,
        width: 170,
        marginTop: 20,
        marginLeft:10,
        alignSelf: "center"
    },
    newbutton: {
        backgroundColor: "#db3236",
        padding: 8,
        borderRadius: 20,
        width: 80,
        marginTop: 30,
        alignSelf: "center"
    },
    buttonText: {
        color: "white",
        alignSelf: "center",
        fontSize: 12

    },
    proimg: {
        width: 70,
        marginTop: -90
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    mainCardView: {
        height: 100,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 14,
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 16,
        marginRight: 16,
    },
    subCardView: {
        height: 90,
        width: 50,
        // borderRadius: 25,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderStyle: 'solid',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
}); 