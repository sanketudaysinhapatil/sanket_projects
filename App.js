import { View, Text } from 'react-native'
import React from 'react'

import Todo from './components/Todo'
import Header from './components/Headerss'



const App = () => {
  return (
    <View>
        <Header/>
      <Todo/>
    </View>
  )
}

export default App