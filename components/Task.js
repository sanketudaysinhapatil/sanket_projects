import React from 'react';
import {View, Text, StyleSheet,Image, TouchableOpacity} from 'react-native';

const Task = props => {
  return (
    <View style={styles.taskCOntainer}>
      <View
        style={{
          width: '10%',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: 19,
            width: 19,
            borderWidth: 2,
            borderColor: 'black',
          }}></View>
      </View>
      <View style={styles.tastText}>
        <View style={styles.textCont}>
          <Text style={styles.taskName}>{props.text} </Text>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={props.deletItem}>
          <Image
            source={require('../Images/del.png')}
            style={{width: 29, height: 25}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  taskCOntainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    borderWidth: 2,
    borderColor: '#ff0000',
    borderRadius: 15,
    width: '90%',
    marginLeft: 15,
    marginTop: 15,
    padding: 10,
    // elevation:5
  },
  tastText: {
    display: 'flex',
    flexDirection: 'row',
    width: '70%',
  },
  taskName: {
    width: '60%',
    paddingLeft: 15,
    fontSize: 22,
    color: 'black',
  },
  textCont: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  },
});
export default Task;
