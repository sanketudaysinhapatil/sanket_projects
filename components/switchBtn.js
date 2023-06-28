import React, {useState} from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';

const SwitchBtn = ({name}) => {
    const [selectedtab, setSelectedTab] = useState(true);
  
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'black',
        }}>
        <Text  style={{padding:10}}>Switch {name}</Text>
        <View
          style={{
            width: '90%',
            borderWidth: 0.5,
            borderRadius: 15,
            height: 60,
            paddingLeft: 5,
            paddingRight: 5,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <TouchableOpacity
            style={{
              width: '50%',
              height: '96%',
              backgroundColor: selectedtab ? 'blue' : 'white',
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 18,
            }}
            onPress={
              (changeTab = () => {
                setSelectedTab(true);
              })
            }>
            <Text
              style={{
                color: !selectedtab ? '#000' : '#fff',
                fontSize: 18,
                fontWeight: 600,
              }}>
              Movie Show
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '50%',
              height: '96%',
              backgroundColor: !selectedtab ? 'blue' : 'white',
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 18,
            }}
            onPress={
              (changeTab = () => {
                setSelectedTab(false);
              })
            }>
            <Text
              style={{
                color: selectedtab ? '#000' : '#fff',
                fontSize: 18,
                fontWeight: 600,
              }}>
              TV Show
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{color:"red", fontSize:30}}>{selectedtab ? "Watch Movie Show" : "Watch TV Show" }</Text>
  
      </View>
    );
  };

  export default SwitchBtn;