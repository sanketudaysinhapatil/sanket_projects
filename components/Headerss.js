import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={[styles.shadow, styles.header]}>
      <Text style={styles.mainHeader}>Home</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 4,
    marginBottom: 30,
  },
  mainHeader: {
    fontSize: 22,
  },
});
