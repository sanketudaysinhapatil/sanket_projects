import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import HomeBanner from './components/Homebanner';
import Counter from './components/Counter';
import HighOrderComponent from './components/HighOrderComponent';
import RedHOC from './components/RedHOC';
import BlueHOC from './components/BlueHOC';
import PinkHOC from './components/PinkHOC';

// import Products from './components/Products'

const App = () => {
  return (
    <View>
      <View style={styles.bgContainer}>
        <Text style={styles.text}>High Order Components</Text>
        <HighOrderComponent cmp={Counter} />
        <RedHOC cmp={Counter} />
        <BlueHOC cmp={Counter} />
        <PinkHOC cmp={Counter} />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  bgContainer: {
    display: 'flex',
    alignItems: 'center',
    top: 45,
  },
  text: {
    color: 'blue',
    fontSize: 22,
  },
});
