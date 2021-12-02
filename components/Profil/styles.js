import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    root:{
        display:"flex",
        flex:1,
        flexDirection:"column",
    },
    avatar:{
        
        alignSelf: "center",
        top:"200px",
        fontSize:"20px"
    },
    email:{
        position:"relative",
        alignSelf: "center",
        top:"239px",
        fontSize:"20px"
    },
    ordersTitle:{
        position:"relative",
        top:"313px",
        left:"27px",
        fontSize:"15px"
    },
    ordersList:{
        position:"relative",
        top:"320px",
        left:"37px",
        paddingBottom:"10px",
    }
})