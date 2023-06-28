import React, {useState} from 'react';
import {Text, View, Button, TouchableOpacity, StyleSheet} from 'react-native';
import SwitchBtn from './components/switchBtn';




const App = () => {
  let name = "Buttons"
  return (
    <View>
      <Text style={{fontSize: 30}}>Hi It's Sanket Patil</Text> 
      <Text style={{padding:10}}>Different types of button</Text>
      <Text style = {styles.textBox}>Different type of button</Text>
      <SwitchBtn name={name} />
   
    </View>
  );
};

const styles = StyleSheet.create({
  textBox:{
    color:"green",
    fontSize:30
  }
})



export default App;
