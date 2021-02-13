
import React, { useState } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import NewProduct from './Product';

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
    TouchableWithoutFeedback
} from 'react-native';

class Cart extends React.Component {

    render() {



    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.paddingview}>
                    <View style={{ flex: 1, flexDirection: 'row', paddingTop: 20, paddingBottom: 20 }}>
                        <Text style={{
                            marginLeft: 12, marginRight: 30, marginTop: -5,
                            fontWeight: 'bold', fontSize: 20,
                        }} >My Cart</Text>
                        <Text style={{ marginLeft: 90, marginRight: 2 }}  >Total Items(s):1 </Text>
                    </View>
                    <TouchableWithoutFeedback
                        onPress={() => {
                            this.redirectToChatConverstion(item);
                        }}>
                        <View style={styles.mainCardView}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={styles.subCardView}>
                                    <Image source={require('../assets/img/Rectangle.png')}
                                        resizeMode="contain"
                                        style={styles.proimg}
                                    />
                                </View>
                                <View style={{ marginLeft: 40 }}>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            color: 'Gray',
                                            fontWeight: 'bold',
                                            //   fontFamily: Fonts.nunitoBold,
                                            textTransform: 'capitalize',
                                        }}>
                                        Allow Rim Tyre
              </Text>
                                    <View
                                        style={{
                                            marginTop: 4,
                                            borderWidth: 0,
                                            // width: '85%',
                                        }}>
                                        <Text
                                            style={{
                                                color: 'gray',
                                                fontSize: 12,
                                            }}>
                                            Dummy Text
                </Text>
                                    </View>
                                    <View
                                        style={{
                                            marginTop: 4,
                                            borderWidth: 0,
                                            // width: '85%',
                                        }}>
                                        <Text
                                            style={{
                                                color: 'red',
                                                fontSize: 15,
                                            }}>
                                            Rs. 140
                </Text>
                                    </View>
                                    <View
                                        style={{
                                            marginTop: 4,
                                            borderWidth: 0,
                                            // width: '85%',
                                        }}>
                                        <Text
                                            style={{
                                                color: 'gray',
                                                fontSize: 12,
                                            }}>
                                            Rs.120
                </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{
                                marginLeft: -200, shadowColor: 'gray',
                                shadowOffset: { width: 0, height: 0 },
                                shadowOpacity: 1,
                                shadowRadius: 8,
                                elevation: 8,
                            }}>
                                <View style={{ flex: 1, flexDirection: 'row', paddingTop: 20, paddingBottom: 20, alignSelf: 'center', }}>
                                    <Text style={{ color: 'black', fontSize: 20, marginRight: 12 }}>
                                        -
                                 </Text>
                                    <Text style={{ color: 'black', fontSize: 18, marginRight: 12 }}> 1
                                     </Text>

                                    <Text style={{ color: 'black', fontSize: 20, marginRight: 12 }}>
                                        +
                                     </Text>
                                </View>

                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    <View>

                        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 190, paddingBottom: 20, alignSelf: 'center', }}>
                            <Text style={{ marginLeft: 12, color: 'black', fontSize: 20 }}>
                                Total:
                                     </Text>
                            <Text style={{ marginLeft: 12, color: 'red', fontSize: 20 }}>
                                Rs. 240
                                     </Text>
                        </View>

                        <TouchableOpacity  style={styles.button}  onPress={() => this.props.navigation.navigate('MynewProduct')}>
                            <Text style={styles.buttonText}>Check Out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
                        }
}

function Productgo(props) {
    return (
       <NewProduct />
    );
  }

const pNewAppNavigator = createStackNavigator({   
    Cart: {
        screen: Cart,
        navigationOptions: {
          title: "Home",
          header: null,
          tabBarLabel: <Text style={{ color: "white" }}>Home</Text>,
          barStyle: { backgroundColor: "#281b39" },
        }
      },
      MynewProduct: {
      screen: Productgo,
      navigationOptions: {
        title: "",
        // headerLeft : <MyActionBarImage />,
        header: null,
        tabBarLabel: <Text style={{ color: "white" }}>Cart</Text>,
        barStyle: { backgroundColor: "#281b39" },
      }
    },
  })
  
  // const AppContainer = createAppContainer(AppNavigator);  
  export default createAppContainer(pNewAppNavigator);
// export default Home;

// export default Cart;

const styles = StyleSheet.create({

    button: {
        backgroundColor: "#db3236",
        padding: 10,
        borderRadius: 10,
        width: 170,
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
        alignSelf: "center",
        fontSize:22

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