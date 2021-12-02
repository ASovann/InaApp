import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Header, Avatar, Image, Text } from 'react-native-elements';
import styles from './styles';
import { setStorage, getStorage } from "../../localStorage/localStorage";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


 class ProfilPage extends React.Component {
    constructor(props){
        super(props)
        this.get();
        this.state= {
            login:''
        }
    }

    get = async () => {
        await getStorage("Login").then((value) => {
            this.setState({
                login: value.email
            })
        })
       
    }

    render(){
        return(
            <View style={styles.root}>
                <Header 
                    centerComponent={{ text:'Profil' , style:{color:'#fff'}}}
                    leftComponent={
                        <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}> <FontAwesomeIcon icon={faArrowLeft} color={"#ffffff"}/></TouchableOpacity>
                    }

                ></Header>

                <Avatar containerStyle={styles.avatar} rounded source={require('../../assets/images/user-icon-default.jpg')} activeOpacity={0.7} size="xlarge" onPress={() => console.log("Works!")} >
                </Avatar>
                <Text style={styles.email}>{this.state.login}</Text>
            </View>
        )
    }


}
export default ProfilPage