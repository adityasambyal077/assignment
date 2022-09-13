import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    button: {
      marginTop:50,
      height: 50,
      width: 150,
      backgroundColor: "#140078",
      justifyContent: "center",
      alignSelf:'center',
      borderRadius:20
    },
    text: {
      color: "white",
      fontWeight: "600",
      textAlign:'center'
    },
    container: {
      flex: 1,
      backgroundColor:'#bec2ce',
      paddingHorizontal:20,
      paddingTop:20
    },
    wrapper:{
        flexDirection:'row',
     justifyContent:'space-between'
    },
    realState:{
        marginTop:30,
        fontSize:25,
        color:'#565867'
    }
  });