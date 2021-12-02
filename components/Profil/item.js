import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class Item extends React.Component {
    render(){
        const items = this.props.items
        return (
            <View style={styles.main_container}>
                <Image style={styles.image} source={{uri:items.image}}></Image>
                <View style={styles.content_container}>
                    <View style={styles.header_container}>
                        <Text style={styles.title_text}>{items.name}</Text>
                        <Text style={styles.price_text}>Price: {items.price}$</Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.description_text} numberOfLines={3}>{items.description}</Text>
                    </View>
                    <View style={styles.quantity_container}>
                        <Text style={styles.quantity_text}>Qty: {items.quantity}</Text>
                    </View>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
      height: 100,
      flexDirection:'row',
      margin:5
    },
    image:{
        width:60,
        height:90,
        margin:5,
        backgroundColor: 'gray'
    },
    content_container: {
        flex: 1,
        margin: 5
    },
    header_container: {
        flex: 3,
        flexDirection: 'row'
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 10,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    price_text:{
        flex: 1,
        fontWeight: 'bold',
        fontSize: 10,
        color: '#666666'
    },
    description_container: {
        flex: 6
      },
      description_text: {
        fontStyle: 'italic',
        color: '#666666',
        fontSize: 10,
      },
      quantity_container:{
          flex:1
      },
      quantity_text: {
          fontSize:9,
      }

  })
  
  export default Item