import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { getStorage } from '../../localStorage/localStorage'
import styles from "./styles";
import { Card, FAB, Button, Header } from 'react-native-elements';
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrash, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => {dispatch(action)}
    }
}


class CartPage extends React.Component {

    constructor(props){
        super(props)
        this.state= {
            cart: [],
        }
        
    }

    
    deleteItem(data){
        this.setState({
            cart: this.state.cart.filter((item) => item.name !== data.name)
        })
        
        const action = { type: "DELETE_FROM_CART", value: data }
        this.props.dispatch(action)
    
    }

    componentDidMount() {
        this.willFocusSubscription = this.props.navigation.addListener(
            'focus',
            () => {
                this.setState({
                    cart: this.props.cartItems
                })
                console.log("cart cartpage:", this.state.cart)
            }
        );
    }

    componentWillUnmount(){
        this.willFocusSubscription()
    }

    componentDidUpdate(){
        
    }

    

    render(){
        console.log("cart item cart page:",this.props.cartItems)
        if(this.state.cart.length != 0){
            return(
                <SafeAreaView style={styles.root}>
                    <View style={styles.header}>
                    <Header 
                            containerStyle={styles.headerNoItemHeader}
                            rightComponent={
                                <TouchableOpacity><Text>Buy</Text></TouchableOpacity>
                            }
                            centerComponent={{ text:'Your cart' , style:{color:'#fff'}}}
                            leftComponent={
                                <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}> <FontAwesomeIcon icon={faArrowLeft} color={"#ffffff"}/></TouchableOpacity>
                            }

                        ></Header>
                    </View>
                <View style={styles.body}>
                    
                {this.state.cart.map((item, i) => (
                    <Card key={i} containerStyle={styles.container} wrapperStyle={styles.innerContainer}>
                        <Text style={styles.quantity}>Qty:{item.quantity}</Text>
                        <Card.Image source={{uri:item.image}} style={styles.image}></Card.Image>
                    
                    
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.price}>{item.price}$</Text>
                    
                    

                        <FAB style={styles.button} size={"small"} color={"#5fbdba"} placement={"right"} onPress={() => {this.deleteItem(item)}} icon={<FontAwesomeIcon icon={faTrash} color={"#ffffff"}/>}></FAB>
                    
                    
                    </Card>
                ))}
                
                </View>
                </SafeAreaView>
                
            )
        }else{
            return(
                <View style={styles.bodyNoItem}>
                    <View style={styles.headerNoItem}>
                        <Header 
                            containerStyle={styles.headerNoItemHeader}
                            rightComponent={
                                <TouchableOpacity><Text>Buy</Text></TouchableOpacity>
                            }
                            leftComponent={
                                <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}> <FontAwesomeIcon icon={faArrowLeft} color={"#ffffff"}/></TouchableOpacity>
                            }

                        ></Header>
                    </View>
                    <View style={styles.itemNoItem}>
                    
                        <Text style={styles.titleNoItem}>You have nothing in your cart</Text>
                    
                    </View>
                </View>
            )
        }
        
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(CartPage)