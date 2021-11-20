import React, { useEffect, useState } from 'react'
import 'react-native-gesture-handler';
import HomePage from "./components/Home/HomePage"
import ArticleDetailsPage from "./components/Store/ArticleDetailsPage";
import LoginPage from "./components/Login/LoginPage";
import SigninPage from "./components/Signin/SigninPage";
import CartPage from "./components/Cart/CartPage";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { getStorage, setStorage } from './localStorage/localStorage';
import configureStore from './StoreRedux/configureStore';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Store = configureStore()

function Root(){
  return(
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home"
          component={HomePage}
          options={{ headerShown: false }}
        >
        </Stack.Screen>

        <Stack.Screen
          name="Details"
          component={ArticleDetailsPage}
          options={{ headerShown: false }}
        >
        </Stack.Screen>

    </Stack.Navigator>
  )
}

function logged(user){
  if(user.route.params.isLogged){
    return(
      <Stack.Navigator>
        <Stack.Screen
          name="yourCart"
          component={CartPage}
          options={{ headerShown: false }}
        >
        </Stack.Screen>
      </Stack.Navigator>
    )
  }else{
    return(
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        >
        </Stack.Screen>
  
        <Stack.Screen
          name="Signin"
          component={SigninPage}
          options={{ headerShown: false }}
        >
        </Stack.Screen>
      </Stack.Navigator>
    )
  }
  
}

export default class App extends React.Component{

  render(){
    return(
      <Provider store={Store}>
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="Main" component={Root} options={{ headerShown: false }}></Drawer.Screen>
          
            <Drawer.Screen name="Cart" component={logged} options={{ headerShown: false }}></Drawer.Screen>
            
          
          </Drawer.Navigator>
        </NavigationContainer>
        </Provider>
      
    )
  }
}
