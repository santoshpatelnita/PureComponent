import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ParentComp from './Src/ParentComp'
export class App extends Component {
  render() {
    return (
      <View>
        <ParentComp />
      </View>
    )
  }
}

export default App
