import React, { useEffect, useState } from 'react'

import HomePage from "./components/Home/HomePage"
import ArticleDetailsPage from "./components/Store/ArticleDetailsPage";
import LoginPage from "./components/Login/LoginPage";
import SigninPage from "./components/Signin/SigninPage";
import CartPage from "./components/Cart/CartPage";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Root(){
  return(
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home"
          component={HomePage}
          
        >
        </Stack.Screen>

        <Stack.Screen
          name="Details"
          component={ArticleDetailsPage}
          
        >
        </Stack.Screen>

    </Stack.Navigator>
  )
}

function logged(user){
  if(user.route.params.isLogged){
    console.log("user logged:", user)
    return(
      <Stack.Navigator>
        <Stack.Screen
          name="Cart"
          component={CartPage}
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
        >
        </Stack.Screen>
  
        <Stack.Screen
          name="Signin"
          component={SigninPage}
        >
        </Stack.Screen>
      </Stack.Navigator>
    )
  }
  
}

export default function App(){
  const [user, setUser] = useState(null)

  
    return(
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Main" component={Root} options={{ headerShown: false }}></Drawer.Screen>
          
          <Drawer.Screen name="Cart" component={logged} options={{ headerShown: false }}></Drawer.Screen>
            
          
        </Drawer.Navigator>
      </NavigationContainer>
      
    )
}
