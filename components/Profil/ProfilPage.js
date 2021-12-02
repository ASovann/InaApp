import React from "react";
import { View, TouchableOpacity, FlatList, SafeAreaView  } from "react-native";
import { Header, Avatar, Image, Text } from 'react-native-elements';
import styles from './styles';
import { setStorage, getStorage, updateStorage } from "../../localStorage/localStorage";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Item from './item'

 class ProfilPage extends React.Component {
    constructor(props){
        super(props)
        this.get();
        this.state= {
            login:'',
            orderList:[],
        }
    }

    componentDidMount() {
        this.willFocusSubscription = this.props.navigation.addListener(
            'focus',
            () => {
               this.get()
            }
        );
    }

    componentWillUnmount(){
        this.willFocusSubscription()
    }

    get = async () => {
        await getStorage("Login").then((value) => {
            this.setState({
                login: value.email
            })
        })
        await getStorage("orders").then((value) => {
            if(value != null){
                console.log(value.order)
                this.setState({
                    orderList: value.order
                })
            }
        })
       
    }

    set = async () => {
        await updateStorage("Login",{"isLogged":false})
        this.props.navigation.navigate("Main")
    }

    render(){
        return(
            <SafeAreaView style={styles.root}>
                <Header 
                    centerComponent={{ text:'Profil' , style:{color:'#fff'}}}
                    leftComponent={
                        <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}> <FontAwesomeIcon icon={faArrowLeft} color={"#ffffff"}/></TouchableOpacity>
                    }
                    rightComponent={<TouchableOpacity onPress={() => this.set()}>Logout</TouchableOpacity>}

                ></Header>

                <Avatar containerStyle={styles.avatar} rounded source={require('../../assets/images/user-icon-default.jpg')} activeOpacity={0.7} size="xlarge" onPress={() => console.log("Works!")} >
                </Avatar>
                <Text style={styles.email}>{this.state.login}</Text>
                <Text style={styles.ordersTitle}>Orders:</Text>

                {this.state.orderList.map((data, i) => (
                    <View key={i} style={styles.ordersList}>
                        <Text>#{i+1}</Text>
                        <FlatList  data={data} renderItem={({item}) => <Item items={item}/>} ></FlatList>
                    </View>
                ))}
                
            </SafeAreaView>
        )
    }


}
export default ProfilPage