import React from "react";
import { View, TextInput, Button, FlatList, Text, Image, SafeAreaView } from "react-native";
import styles from './styles';
import { Card, FAB } from 'react-native-elements';
import jsonData from '../../assets/data/articles.json';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

class ArticlePage extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            data: null
        }
    }

    
    submit(data){
        this.props.parentCallBack(data)
    }
    
    
    render(){
        return(
            <SafeAreaView style={styles.body}>
                {jsonData.map((item, i) => (
                    <Card key={i} containerStyle={styles.container} wrapperStyle={styles.innerContainer}>
                        <Card.Image source={{uri:item.image}} style={styles.image}></Card.Image>
                        
                        
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.price}>{item.price}$</Text>
                        
                        <View>
                        </View>

                        <FAB style={styles.button} size={"small"} color={"#5fbdba"} placement={"right"} icon={<FontAwesomeIcon icon={faCartPlus} style={styles.icon} />} onPress={() => this.submit({"name":item.name, "price":item.price, "image":item.image, "quantity":1})}></FAB>
                        
                        
                    </Card>
                ))}

            </SafeAreaView>
        )
    }
}

export default ArticlePage