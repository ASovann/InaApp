import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    root:{
        backgroundColor: "#e1e1e1",
        display:"flex",
        flex:1,
        flexDirection:"column"
    },
    header:{
    },
    body:{
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
    quantity: {
        fontSize:"x-small",
        fontWeight:"bold"
    },
    name:{
        fontWeight:"bold"
    },
    button: {
        backgroundColor:  "#5fbdba",
        margin:0,
    },
    icon: {
        color: "#ffffff", 
    },



    bodyNoItem:{
        backgroundColor: "rgba(225, 225, 225, 0)",
        display:"flex",
        flex: 1,
        flexDirection:"column",
        
    },
    titleNoItem:{
        alignSelf:"center",
        fontWeight:"bold",
    },
    headerNoItem:{
        flex:1,
        
    },
    headerNoItemHeader:{
        
    },
    itemNoItem:{
        flex:2
    },
})