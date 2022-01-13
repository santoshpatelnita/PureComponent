import React, {Component} from 'react';
import {Text, SafeAreaView, View} from 'react-native';

export class PureComponents extends Component {
  render() {
    console.log("Pure component Render=======>>>>>>>")
    return (
      <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 12, fontWeight: 'bold', marginTop: 10}}>{this.props.name}</Text>
      </SafeAreaView>
    );
  }
}

export default PureComponents;
