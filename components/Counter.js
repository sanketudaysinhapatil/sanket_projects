import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';


const Counter = () => {
  const [count, setCounter] = useState(0);
  const addCount = () => {
    setCounter(count + 1);
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Counter : {count}</Text>
      <TouchableOpacity style={styles.touchContainer} onPress={addCount}>
        <Text style={styles.button}>ADD COUNT</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  mainContainer: {
    top: 15,
    bottom:25,
    marginBottom:45
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  button: {
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'solid',
    padding: 10,
    borderRadius: 15,
    marginTop: 25,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  touchContainer:{
    marginBottom:25
  }
});
