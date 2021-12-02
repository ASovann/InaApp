import React, { useEffect } from "react";
import ArticlePage from "../Store/ArticlePage";
import { View, TouchableOpacity } from "react-native";
import { setStorage, getStorage } from "../../localStorage/localStorage";
import styles from './styles';
import { Header, Button, Badge, Icon, withBadge, Avatar } from'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCartArrowDown, faBars } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux'

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

class HomePage extends React.Component {

    constructor(props){
        super(props);
        this.get();
        this.cart = [];
        this.state = {
            isLogged: false,
            count: 0
        };
    }

    

    componentDidMount() {
        this.willFocusSubscription = this.props.navigation.addListener(
            'focus',
            () => {
                this.get()
                this.cartCount()
            }
        );
    }

    componentWillUnmount(){
        this.willFocusSubscription()
    }

    componentDidUpdate() {
        console.log("props:",this.props.cartItems)
    }
    handleCallBack = (childData) => {

        if(this.props.cartItems.length != 0){
            if(this.cart.includes(childData.name)){
                const action = { type: "QTY_CART_ITEM", value: childData }
                this.props.dispatch(action)
                console.log("added quantity")
                this.setState({
                    count: this.state.count += 1
                })
            }else{
                this.cart.push(childData.name)
                const action = { type: "ADD_TO_CART", value: childData }
                this.props.dispatch(action)
                console.log("added to cart non empty")
                this.setState({
                    count: this.state.count += 1
                })
            }
            
        }else{
            this.cart.push(childData.name)
            const action = { type: "ADD_TO_CART", value: childData }
            this.props.dispatch(action)
            console.log("added to cart")
            this.setState({
                count: this.state.count += 1
            })
        }
        console.log("state count",this.state.count)
    }
    get = async () => {
        await getStorage("Login").then((value) => {
            this.setState({
                isLogged: value.isLogged
            })
        })
       
    }

    cartCount = () =>{
        let count = 0
        if(this.props.cartItems.length !=0){
            this.props.cartItems.map((item) => {
                console.log("item qty:",item.quantity)
                count += item.quantity

            })
            
        }
        this.setState({
            count: count
        })
        console.log("state count",this.state.count)
    }

    render(){
        return(
            <View >
                <Header style={styles.header} 
                    rightComponent={
                        <TouchableOpacity style={styles.buttonCart} onPress={() => {this.props.navigation.navigate('Cart', {"isLogged": this.state.isLogged, "direction": 'Cart'})}}>
                            <FontAwesomeIcon icon={faCartArrowDown} style={styles.buttonCartIcon} />
                            <Badge value={this.state.count} containerStyle={{ position: 'absolute', top: -4, right: 23 }}  />
                        </TouchableOpacity>
                    }
                    centerComponent={{ text:'Store' , style:{color:'#fff'}}}
                    leftComponent={
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Profil',{"isLogged": this.state.isLogged, "direction": 'Profil'})}>
                            <Avatar  rounded  source={{ uri:'../../assets/adaptive-icon.png',}}/>
                        </TouchableOpacity>
                    }
                    >
                    
                    
                </Header>
                <ArticlePage parentCallBack = {this.handleCallBack} ></ArticlePage>
                
            </View>
        )
    }


}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)