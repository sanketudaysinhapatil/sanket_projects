import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BlueHOC = props => {
  return (
    <View>
      <Text style={{backgroundColor: 'blue'}}>
        <props.cmp />
      </Text>
    </View>
  );
};

export default BlueHOC;

const styles = StyleSheet.create({});
