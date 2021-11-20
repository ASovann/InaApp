import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator,SafeAreaView  } from 'react-native';
import {firebase, db} from '../../firebase/config';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import styles from './styles';
import { getStorage, setStorage } from "../../localStorage/localStorage";

export default class LoginPage extends Component {
  
  constructor() {
    super();
    this.state = { 
      email: '', 
      password: '',
      isLoading: false,
      isLogged: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  userLogin = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!')
    } else {
      this.setState({
        isLoading: true,
      })
      const auth = getAuth()
      signInWithEmailAndPassword(auth, this.state.email, this.state.password)
      .then((res) => {
        console.log(res)
        console.log('User logged-in successfully!')
        this.setState({
          isLoading: false,
          email: '', 
          password: '',
          isLogged: true
        })
        setStorage("Login", {"isLogged":this.state.isLogged})
        this.props.navigation.navigate('Cart', {"isLogged": this.state.isLogged})
      })
      .catch(error => this.setState({ errorMessage: error.message }))
    }
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <View style={styles.container}>  
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />   
        <Button
          color="#3740FE"
          title="Login"
          onPress={() => this.userLogin()}
        />   

        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Signin')}>
          Don't have account? Click here to signup
        </Text>
        <Text style={styles.backButton}  onPress={() => this.props.navigation.navigate('Home')}>Back</Text>
      </View>
    );
  }
}