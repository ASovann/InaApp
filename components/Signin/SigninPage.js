import React, { Component } from 'react';
import { Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import {firebase, db} from '../../firebase/config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import styles from '../Signin/styles';
import { collection, addDoc } from "firebase/firestore";
import { getStorage, setStorage } from "../../localStorage/localStorage";

export default class SigninPage extends Component {
  
  constructor() {
    super();
    this.state = { 
      displayName: '',
      email: '', 
      password: '',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  registerUser = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signup!')
    } else {
        this.setState({
            isLoading: true,
          })
        const auth = getAuth()
        console.log(this.state.email)
        createUserWithEmailAndPassword(auth, this.state.email, this.state.password)
        .then((res) => {
          console.log(res)
        
        console.log('User registered successfully!')
        const uid = res.user.uid
        this.setState({
          id: uid,
          isLoading: false,
          displayName: '',
          email: '', 
          password: ''
        })
        console.log("test")
        addDoc(collection(db, "users"),{
          id,
          displayName,
          email,
          password
        })
        console.log('User registered successfully!')
        this.props.navigation.navigate('Login')
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
          placeholder="Name"
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, 'displayName')}
        />      
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
          title="Signup"
          onPress={() => this.registerUser()}
        />

        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Login')}>
          Already Registered? Click here to login
        </Text>                          
      </View>
    );
  }
}