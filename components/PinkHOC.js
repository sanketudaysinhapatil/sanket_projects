import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PinkHOC = props => {
  return (
    <View style={{margin: 15}}>
      <Text style={{backgroundColor: 'pink'}}>
        <props.cmp />
      </Text>
    </View>
  );
};

export default PinkHOC;

const styles = StyleSheet.create({});
