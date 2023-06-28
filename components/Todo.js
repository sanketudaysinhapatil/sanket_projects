import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Todo = () => {
  return (
    <View style={styles.bgContaner}>
      <Text style={styles.mainHeading}>Todo List</Text>
    </View>
  )
}

export default Todo

const styles = StyleSheet.create({
    bgContaner:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
        

    }
    , mainHeading:{
        width:"50%",
        fontSize:22,
        borderWidth:2,
        color:"black",
        // borderBlockColor:"black",
        padding:10,
        borderRadius:15,
        textAlign:"center",
        paddingLeft:20,
        paddingRight:20,
        borderColor:"#d12de3"
    }

    
  })