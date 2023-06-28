import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './components/Header'
import Todo from './components/Todo'

const App = () => {
  return (
    <View >
      <Header/>
      <Todo/>
    </View>
  )
}

export default App

