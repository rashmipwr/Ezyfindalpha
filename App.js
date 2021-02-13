import * as React from 'react';
// import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import NewSignup from './component/Signup';
import NewHome from './component/Home';
import NewCart from './component/Cart';
// import { createBottomTabNavigator } from 'react-navigation-tabs';


import {
  Text,
  Image,
  View,
  StyleSheet,
  TextInput,
  Button,
  // SearchBar,
  ScrollView,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';


class App extends React.Component {

  constructor(){  
    super();  
    this.state={  
    isVisible : true,  
   }  
 }  
  Hide_Splash_Screen=()=>{  
   this.setState({   
     isVisible : false   
   });  
 }  
  
 componentDidMount(){  
   var that = this;  
   setTimeout(function(){  
     that.Hide_Splash_Screen();  
   }, 5000);  

  }  
  
  render() {
    let Splash_Screen = (  
      <View style={styles.SplashScreen_RootView}>  
          <View style={styles.SplashScreen_ChildView}>  
                <Image source={require('./assets/Splash.png')}  
             style={{width:500,height:500,marginTop:-90, resizeMode: 'contain'}} />  
         </View>  
      </View> )  

       return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.paddingview}>
            <Image
              style={styles.tinyLogo}
              source={require('./assets/LoginIcon.png')}
            />
            <Text style={styles.header}> Sign In </Text>

            <TextInput style={styles.textinput}
              underlineColorAndroid="gray"
              placeholder="EMAIL"
              placeholderTextColor="gray"
              onChangeText={this.handleName} />

            <TextInput style={styles.textinput}
              underlineColorAndroid="gray"
              placeholder="PASSWORD"
              placeholderTextColor="gray"
              autoCapitalize="none"
              onChangeText={this.handleEmail} />

            <Text style={styles.forgetPass}> Forgot Your Password? </Text>
            {/* <Button style={styles.submit}
          onPress={this.onPressButton}
          title="Continue"
        /> */}

            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('MyProfile')}  >
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
              <Image style={{ width: 40, height: 40, marginLeft: 20, marginRight: 20 }} source={require('./assets/facebook.png')} />
              <Image style={{ width: 40, height: 40, marginLeft: 20, marginRight: 20 }} source={require('./assets/google.png')} />
              <Image style={{ width: 40, height: 40, marginLeft: 20, marginRight: 20 }} source={require('./assets/link.png')} />
              <Image style={{ width: 40, height: 40, marginLeft: 20, marginRight: 20 }} source={require('./assets/tweet.png')} />
            </View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Spage')}  >
              <View style={{ flex: 1, flexDirection: 'row', padding: 20, alignSelf: 'center', }}>
                <Text style={styles.dont}> Don't have an account? </Text>
                <Text style={styles.newsignup}> SIGN UP</Text>
              </View>
            </TouchableOpacity>

            {  
          (this.state.isVisible === true) ? Splash_Screen : null  
        }  
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

function ActionBarImage(props) {
 
    return (
 
      <View style={{flexDirection: 'row'}}>
 
        <Image
          source={require('./assets/burgermenu.png')}
          style={{ width: 20, height: 20, marginLeft: 15, marginTop:12}}
        />
      <Image
          source={require('./assets/LoginIcon.png')}
          style={{ width: 80, height: 40, marginLeft: 85}}
        />
      </View>
    
    );
}
 

function Profile(props) {
  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , marginTop:20}}>
     
      <NewHome /> 
    // </View>
  );
}
function Signup(props) {
  return (
   <View>
     <NewSignup />
   </View>
  );
}


function Cart(props) {
  return (
     <NewCart />
  );
}


const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
    navigationOptions: {
      title: "Home",
      header: null,
      tabBarLabel: <Text style={{ color: "white" }}>Home</Text>,
      barStyle: { backgroundColor: "#281b39" },
    }
  },
  MyProfile: {
    screen: Profile,
    navigationOptions: {
      title: "",
      headerLeft : <ActionBarImage />,
      // header: null,
      tabBarLabel: <Text style={{ color: "white" }}>Home</Text>,
      barStyle: { backgroundColor: "#281b39" },
    }
  },
  MyCart: {
    screen: Cart,
    navigationOptions: {
      title: "",
      // headerLeft : <ActionBarImage />,
      header: null,
      tabBarLabel: <Text style={{ color: "white" }}>Home</Text>,
      barStyle: { backgroundColor: "#281b39" },
    }
  },
  Spage: {
    screen: Signup,
    navigationOptions: {
      title: "Signup",
      // header: null,
      tabBarLabel: <Text style={{ color: "gray" }}>Signup</Text>,
      barStyle: { backgroundColor: "transparent" },
      headerStyle: {
        position: 'absolute',
        backgroundColor: 'transparent',
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
        backgroundColor: 'white',
      }
    }
  },
})

// const AppContainer = createAppContainer(AppNavigator);  
export default createAppContainer(AppNavigator);


const styles = StyleSheet.create({
  MainContainer:  
  {  
      // flex: 1,  
      justifyContent: 'center',  
      alignItems: 'center',  
      paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0  
  },  
 
  SplashScreen_RootView:  
  {  
      justifyContent: 'center',  
      // flex:1,  
      margin: 1,  
      position: 'absolute',  
      width: '100%',  
      height: '100%',  
    },  
 
  SplashScreen_ChildView:  
  {  
      justifyContent: 'center',  
      alignItems: 'center',  
      backgroundColor: '#ffffff',  
      flex:1,  
  },  
  headerWrapper: {
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
    marginBottom: 30,
  },
  header: {
    fontSize: 35,
    // alignSelf: 'left',
    fontWeight: '100',
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
  button: {
    backgroundColor: "#db3236",
    padding: 10,
    borderRadius: 20,
    width: 220,
    marginTop: 20,
    alignSelf: "center"
  },
  buttonText: {
    color: "white",
    alignSelf: "center"
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
  container:{
    backgroundColor:'white'
  }
}); 