import React, {Component} from 'react';
import {Text, SafeAreaView} from 'react-native';

export class RegularCom extends Component {
  render() {
    console.log("Regular Component Render=======>>>>>>>")
    return (
      <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 12, fontWeight: 'bold', marginTop: 10}}>{this.props.name}</Text>
      </SafeAreaView>
    );
  }
}

export default RegularCom;
