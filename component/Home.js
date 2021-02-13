// import * as React from 'react';
// import React, { Component } from 'react';
// import CheckBox from '@react-native-community/checkbox';
// import CheckBox from 'react-native-checkbox';
import React, { useState } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import NewCart from './Cart';

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
    Icon,
    SafeAreaView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Alert,
} from 'react-native';


class Home extends React.Component {

    render() {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.textinput}>
                    {/* <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/> */}
                    <Image
                        source={require('../assets/search.png')}
                        resizeMode="contain"
                        style={{
                            height: 20,
                            width: 20,
                            marginTop: 10,
                            marginLeft: 10
                        }}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Search Here"
                        underlineColorAndroid="transparent"
                    />
                </View>
                <TouchableWithoutFeedback>
                   <View >
                   <TouchableOpacity onPress={() => this.props.navigation.navigate('MynewCart',{headerShown: false})}  >
              
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.mainCardView}>
                                <View style={styles.subCardView}>
                                    <Image source={require('../assets/img/Rectangle.png')}
                                        resizeMode="contain"
                                        style={styles.proimg}
                                    />
                                    <View >
                                        <Text style={styles.dummyhead}>Dummy Product</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row', paddingTop: 20, paddingBottom: 20, alignSelf: 'center', }}>
                                        <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 12, height: 12, marginLeft: 2, marginRight: 2 }} source={require('../assets/starwhite.png')} />
                                        <Text style={styles.prohead}>
                                            $145
                                     </Text>
                                    </View>
                                    <View >
                                        <Text style={styles.newdummyhead}>Dummy Text</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row', paddingTop: 0, paddingBottom: 20, alignSelf: 'center', }}>
                                        <Image style={{ width: 20, height: 20, marginLeft: 2, marginRight: 30 }} source={require('../assets/img/Path17.png')} />
                                        <Image style={{ width: 20, height: 20, marginLeft: 30, marginRight: 2 }} source={require('../assets/img/cart.png')} />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.mainCardView}>
                                <View style={styles.subCardView}>
                                    <Image source={require('../assets/img/Rectangle.png')}
                                        resizeMode="contain"
                                        style={styles.proimg}
                                    />
                                    <View >
                                        <Text style={styles.dummyhead}>Dummy Product</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row', paddingTop: 20, paddingBottom: 20, alignSelf: 'center', }}>
                                        <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 12, height: 12, marginLeft: 2, marginRight: 2 }} source={require('../assets/starwhite.png')} />
                                        <Text style={styles.prohead}>
                                            $145
                                     </Text>
                                    </View>
                                    <View >
                                        <Text style={styles.newdummyhead}>Dummy Text</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row', paddingTop: 0, paddingBottom: 20, alignSelf: 'center', }}>
                                        <Image style={{ width: 20, height: 20, marginLeft: 2, marginRight: 30 }} source={require('../assets/img/Path17.png')} />
                                        <Image style={{ width: 20, height: 20, marginLeft: 30, marginRight: 2 }} source={require('../assets/img/cart.png')} />
                                    </View>
                                </View>
                            </View>
                        </View>
                     </TouchableOpacity>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.mainCardView}>
                                <View style={styles.subCardView}>
                                    <Image source={require('../assets/img/Rectangle.png')}
                                        resizeMode="contain"
                                        style={styles.proimg}
                                    />
                                    <View >
                                        <Text style={styles.dummyhead}>Dummy Product</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row', paddingTop: 20, paddingBottom: 20, alignSelf: 'center', }}>
                                        <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 12, height: 12, marginLeft: 2, marginRight: 2 }} source={require('../assets/starwhite.png')} />
                                        <Text style={styles.prohead}>
                                            $145
                                     </Text>
                                    </View>
                                    <View >
                                        <Text style={styles.newdummyhead}>Dummy Text</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row', paddingTop: 0, paddingBottom: 20, alignSelf: 'center', }}>
                                        <Image style={{ width: 20, height: 20, marginLeft: 2, marginRight: 30 }} source={require('../assets/img/Path17.png')} />
                                        <Image style={{ width: 20, height: 20, marginLeft: 30, marginRight: 2 }} source={require('../assets/img/cart.png')} />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.mainCardView}>
                                <View style={styles.subCardView}>
                                    <Image source={require('../assets/img/Rectangle.png')}
                                        resizeMode="contain"
                                        style={styles.proimg}
                                    />
                                    <View >
                                        <Text style={styles.dummyhead}>Dummy Product</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row', paddingTop: 20, paddingBottom: 20, alignSelf: 'center', }}>
                                        <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 12, height: 12, marginLeft: 2, marginRight: 2 }} source={require('../assets/starwhite.png')} />
                                        <Text style={styles.prohead}>
                                            $145
                                     </Text>
                                    </View>
                                    <View >
                                        <Text style={styles.newdummyhead}>Dummy Text</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row', paddingTop: 0, paddingBottom: 20, alignSelf: 'center', }}>
                                        <Image style={{ width: 20, height: 20, marginLeft: 2, marginRight: 30 }} source={require('../assets/img/Path17.png')} />
                                        <Image style={{ width: 20, height: 20, marginLeft: 30, marginRight: 2 }} source={require('../assets/img/cart.png')} />
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.mainCardView}>
                                <View style={styles.subCardView}>
                                    <Image source={require('../assets/img/Rectangle.png')}
                                        resizeMode="contain"
                                        style={styles.proimg}
                                    />
                                    <View >
                                        <Text style={styles.dummyhead}>Dummy Product</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row', paddingTop: 20, paddingBottom: 20, alignSelf: 'center', }}>
                                        <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 12, height: 12, marginLeft: 2, marginRight: 2 }} source={require('../assets/starwhite.png')} />
                                        <Text style={styles.prohead}>
                                            $145
                                     </Text>
                                    </View>
                                    <View >
                                        <Text style={styles.newdummyhead}>Dummy Text</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row', paddingTop: 0, paddingBottom: 20, alignSelf: 'center', }}>
                                        <Image style={{ width: 20, height: 20, marginLeft: 2, marginRight: 30 }} source={require('../assets/img/Path17.png')} />
                                        <Image style={{ width: 20, height: 20, marginLeft: 30, marginRight: 2 }} source={require('../assets/img/cart.png')} />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.mainCardView}>
                                <View style={styles.subCardView}>
                                    <Image source={require('../assets/img/Rectangle.png')}
                                        resizeMode="contain"
                                        style={styles.proimg}
                                    />
                                    <View >
                                        <Text style={styles.dummyhead}>Dummy Product</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row', paddingTop: 20, paddingBottom: 20, alignSelf: 'center', }}>
                                        <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 12, height: 12, marginLeft: 2, marginRight: 2 }} source={require('../assets/starwhite.png')} />
                                        <Text style={styles.prohead}>
                                            $145
                                     </Text>
                                    </View>
                                    <View >
                                        <Text style={styles.newdummyhead}>Dummy Text</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row', paddingTop: 0, paddingBottom: 20, alignSelf: 'center', }}>
                                        <Image style={{ width: 20, height: 20, marginLeft: 2, marginRight: 30 }} source={require('../assets/img/Path17.png')} />
                                        <Image style={{ width: 20, height: 20, marginLeft: 30, marginRight: 2 }} source={require('../assets/img/cart.png')} />
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.mainCardView}>
                                <View style={styles.subCardView}>
                                    <Image source={require('../assets/img/Rectangle.png')}
                                        resizeMode="contain"
                                        style={styles.proimg}
                                    />
                                    <View >
                                        <Text style={styles.dummyhead}>Dummy Product</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row', paddingTop: 20, paddingBottom: 20, alignSelf: 'center', }}>
                                        <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 12, height: 12, marginLeft: 2, marginRight: 2 }} source={require('../assets/starwhite.png')} />
                                        <Text style={styles.prohead}>
                                            $145
                                     </Text>
                                    </View>
                                    <View >
                                        <Text style={styles.newdummyhead}>Dummy Text</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row', paddingTop: 0, paddingBottom: 20, alignSelf: 'center', }}>
                                        <Image style={{ width: 20, height: 20, marginLeft: 2, marginRight: 30 }} source={require('../assets/img/Path17.png')} />
                                        <Image style={{ width: 20, height: 20, marginLeft: 30, marginRight: 2 }} source={require('../assets/img/cart.png')} />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.mainCardView}>
                                <View style={styles.subCardView}>
                                    <Image source={require('../assets/img/Rectangle.png')}
                                        resizeMode="contain"
                                        style={styles.proimg}
                                    />
                                    <View >
                                        <Text style={styles.dummyhead}>Dummy Product</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row', paddingTop: 20, paddingBottom: 20, alignSelf: 'center', }}>
                                        <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 12, height: 12, marginLeft: 2, marginRight: 2 }} source={require('../assets/starwhite.png')} />
                                        <Text style={styles.prohead}>
                                            $145
                                     </Text>
                                    </View>
                                    <View >
                                        <Text style={styles.newdummyhead}>Dummy Text</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row', paddingTop: 0, paddingBottom: 20, alignSelf: 'center', }}>
                                        <Image style={{ width: 20, height: 20, marginLeft: 2, marginRight: 30 }} source={require('../assets/img/Path17.png')} />
                                        <Image style={{ width: 20, height: 20, marginLeft: 30, marginRight: 2 }} source={require('../assets/img/cart.png')} />
                                    </View>
                                </View>
                            </View>
                        </View>


                    </View>
                    
                </TouchableWithoutFeedback>
            </ScrollView>
        </SafeAreaView>
    );
                    }
}

function MyActionBarImage(props) {
 
    return (
 
      <View style={{flexDirection: 'row'}}>
 
        <Image
          source={require('../assets/blacksearch.png')}
          style={{ width: 20, height: 20, marginLeft: 15, marginTop:12}}
        />
      <Image
          source={require('../assets/share.png')}
          style={{ width: 80, height: 40, marginLeft: 85}}
        />
        <Image
            source={require('../assets/share.png')}
            style={{ width: 80, height: 40, marginLeft: 85}}
          />
      </View>
    
    );
}

function Cart(props) {
    return (
       <NewCart />
    );
  }

const NewAppNavigator = createStackNavigator({   
    Home: {
        screen: Home,
        navigationOptions: {
          title: "Home",
          header: null,
          tabBarLabel: <Text style={{ color: "white" }}>Home</Text>,
          barStyle: { backgroundColor: "#281b39" },
        }
      },
    MynewCart: {
      screen: Cart,
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
  export default createAppContainer(NewAppNavigator);
// export default Home;

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 100,
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    searchIcon: {
        padding: 1,
    },
    input: {
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
        marginLeft: 50,
        marginTop: -35,
        width: '80%',
        height: 40,
        
    },
    textinput: {
        borderRadius: 10,
        fontSize: 12,
        borderColor: '#9f1d20',
        borderWidth: 1,
        margin: 20,
        padding: 5,
        height: 50,
        

    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    mainCardView: {
        // height: 90,
        width: '40%',
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
        paddingLeft: 2,
        paddingRight: 2,
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 16,
        marginRight: 16,
    },
    subCardView: {
        // height: 50,
        marginLeft: 16,
        borderRadius: 25,
        backgroundColor: 'white',
        borderColor: '#eeeeee',
        borderWidth: 1,
        borderStyle: 'solid',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    prohead: {
        fontSize: 10,
        marginLeft: 10,
        color: '#9f1d20',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        flexDirection: 'row', justifyContent: 'flex-end',
        marginTop: -3

    },
    dummyhead: {

        marginTop:10,
        width:100,
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        flexDirection: 'row', justifyContent: 'flex-end'

    },
    newdummyhead: {
        fontSize: 12,
        color: 'gray',
        textTransform: 'capitalize',
        flexDirection: 'row', 
        justifyContent: 'flex-start',
        marginBottom:10,
        marginTop:-10

    },
    proimg: {
        height: 90,
        width: 90,
        alignSelf: 'center',
        padding: 10
    }

}); 