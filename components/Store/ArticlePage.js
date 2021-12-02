import React from "react";
import { View, TextInput, Button, FlatList, Text, Image, SafeAreaView } from "react-native";
import styles from './styles';
import { Card, FAB } from 'react-native-elements';
import jsonData from '../../assets/data/articles.json';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { TouchableOpacity } from "react-native-gesture-handler";

class ArticlePage extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            data: null
        }
        console.log("your props:",this.props)
    }

    
    submit(data){
        this.props.parentCallBack(data)
    }
    
    
    render(){
        return(
            <SafeAreaView style={styles.body}>
                {jsonData.map((item, i) => (
                    <Card key={i} containerStyle={styles.container} wrapperStyle={styles.innerContainer} >
                        <Card.Image source={{uri:item.image}} style={styles.image} onPress={() => {this.props.navigation.navigate('Details',{itemDetails: item})}}></Card.Image>
                        
                        
                        <Text style={styles.name} >{item.name}</Text>
                        <Text style={styles.price}>{item.price}$</Text>
                        
                        <View>
                        </View>

                        <FAB style={styles.button} size={"small"} color={"#5fbdba"} placement={"right"} icon={<FontAwesomeIcon icon={faCartPlus} color='#ffffff' />} onPress={() => this.submit({"name":item.name, "price":item.price, "image":item.image, "description":item.description, "quantity":1})}></FAB>
                        
                        
                    </Card>
                ))}

            </SafeAreaView>
        )
    }
}

export default ArticlePage