import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RedHOC = (Props) => {
  return (
    <View style={{ margin:25}}>
     
      <Text style={{backgroundColor:"red"}} ><Props.cmp/></Text>
    </View>
  )
}

export default RedHOC

const styles = StyleSheet.create({})