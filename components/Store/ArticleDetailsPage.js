import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

class ArticleDetailsPage extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            item: this.props.route.params.itemDetails
        }
        console.log(this.state.item.image)
    }

    render(){
        
        return(
            <View style={styles.container}>
                
                <Image style={styles.image} source={{uri: this.state.item.image}}></Image>
                <Text style={styles.name}>{this.state.item.name}</Text>
                <Text style={styles.description}>{this.state.item.description}</Text>
                <Text style={styles.price}>Price: {this.state.item.price}$</Text>
                <TouchableOpacity onPress={() => this.props.navigation.goBack(null)} style={styles.return}>Back</TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: 35,
        backgroundColor: '#fff'
    
    },
    image:{
        alignSelf: "center",
        width:160,
        height:180,
        marginBottom:10
    },
    name:{
        alignSelf: "center",
        fontWeight:'bold',
        margin:10,
        fontSize:"20px"

    },
    description:{
        alignSelf: "center",
        fontStyle:"italic",
        fontSize:"15",
        marginTop:10,
        marginLeft:15
    },
    price:{
        alignSelf: "center",
        color:"#cccccc",
        fontWeight: "bold",
        marginTop:30,
        marginLeft:15
    },
    return:{
        alignSelf: "center",
        position:"absolute",
        bottom:20
    }
})

export default ArticleDetailsPage