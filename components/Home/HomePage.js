import React from "react";
import ArticlePage from "../Store/ArticlePage";
import { View, Button } from "react-native"


class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.cart=[]
        this.state = {
            isLogged: false,
            data: null
        }
    }

    handleCallBack = (childData) => {
        
        this.cart.push(childData)
        //this.forceUpdate()
        console.log(this.cart)
        
    }

    render(){
        return(
            <View>
                <ArticlePage parentCallBack = {this.handleCallBack}></ArticlePage>
                <Button 
                    onPress={() => this.props.navigation.navigate('Cart', {"isLogged": this.state.isLogged})}
                ></Button>
            </View>
        )
    }


}
export default HomePage