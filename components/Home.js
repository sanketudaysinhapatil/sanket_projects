import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = (props) => {
  return (
    <View>
      <props.cmp/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})