import React from "react";
import { View, TextInput, Button, FlatList, Text, Image, SafeAreaView } from "react-native";

import { Card } from 'react-native-elements';
import jsonData from '../../assets/data/articles.json'


class ArticlePage extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            data: null
        }
    }

    
    submit(data){
        console.log(data)
        this.props.parentCallBack(data)
        
        
    }
    
    
    render(){
        return(
            <SafeAreaView>
                {jsonData.map((item, i) => (
                    <Card key={i}>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Divider/>
                        <Card.Image source={{uri:item.image}}></Card.Image>
                        
                            <Text>{item.price}$</Text>
                        
                        <View>
                            <Text>-{item.description}</Text>
                        </View>
                        <Button title="Add to Cart" onPress={() => this.submit({"name":item.name, "price":item.price})}></Button>
                    </Card>
                ))}

            </SafeAreaView>
        )
    }
}

export default ArticlePage