import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    body:{
        backgroundColor: "#e1e1e1",
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-around"
    },
    container: {
        borderRadius:"5%",
        width:"40%",
        
    },
    innerContainer:{
        
    },
    image: {
        display:"block",
        margin: "auto",
        //width:"100%",
        borderRadius:"5%",
        maxWidth:"90%",
        maxHeight:"90%"
        
    },
    price: {
        color:"#cccccc",
        fontWeight: "bold",
    },
    description: {
    },
    name:{
        fontWeight:"bold"
    },
    button: {
        backgroundColor:  "#5fbdba",
        margin:0,
    },
    
})