import React, { useEffect } from "react";
import ArticlePage from "../Store/ArticlePage";
import { View, TouchableOpacity } from "react-native";
import { setStorage, getStorage } from "../../localStorage/localStorage";
import styles from './styles';
import { Header, Button, Badge, Icon, withBadge } from'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
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

        this.get()
        this.state = {
            isLogged: false,
            count: 0
        }
    }

    

    componentDidMount() {
        this.willFocusSubscription = this.props.navigation.addListener(
            'focus',
            () => {
                this.get()
                this.setState({
                    count: this.props.cartItems.length
                })

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
        
        const action = { type: "ADD_TO_CART", value: childData }
        this.props.dispatch(action)
        this.setState({
            count: this.props.cartItems.length + 1
        })
        
        
    }
    get = async () => {
        await getStorage("Login").then((value) => {
            this.setState({
                isLogged: value.isLogged
            })
        })
       
    }


    render(){
        return(
            <View >
                <Header style={styles.header} 
                    rightComponent={
                        <TouchableOpacity style={styles.buttonCart} onPress={() => {this.props.navigation.navigate('Cart', {"isLogged": this.state.isLogged})}}>
                            <FontAwesomeIcon icon={faCartArrowDown} style={styles.buttonCartIcon} />
                            <Badge value={this.state.count} containerStyle={{ position: 'absolute', top: -4, right: 23 }}  />
                        </TouchableOpacity>
                    }
                    centerComponent={{ text:'Store' , style:{color:'#fff'}}}
                    >
                    
                    
                </Header>
                <ArticlePage parentCallBack = {this.handleCallBack} ></ArticlePage>
                
            </View>
        )
    }


}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)