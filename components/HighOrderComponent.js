import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Counter from './Counter'

const HighOrderComponent = (Props) => {
  return (
    <View>
      
      <Text><Props.cmp/></Text>
    </View>
  )
}

export default HighOrderComponent

const styles = StyleSheet.create({})