import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AppHeader = () => {
  const [bar, setBar] = useState('Open');

  const handleState = ()=>{
    if (bar==="Close"){
      setBar("Open")
    }else{
    setBar("Close")}
  }

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={handleState}>
        <Text style={styles.mainTitle}>{bar}</Text>
      </TouchableOpacity>

      <Text style={styles.mainTitle}>AppHeader</Text>
      {/* <AntDesign name={'home'} color={'red'} size={30} /> */}
      {/* <StepBackwardOutlined /> */}
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#5d87a8',
    height: 60,
    display: 'flex',
    justifyContent: 'start',
    elevation: 15,
    flexDirection:"row",
    padding:15
    
    
  },
  mainTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 15,
    // padding:20
  },
});
