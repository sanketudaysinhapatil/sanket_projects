import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppHeader from './components/AppHeader'
import Home from './components/Home'


const App = () => {
  return (
    <View>
      <Home cmp={AppHeader}/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})