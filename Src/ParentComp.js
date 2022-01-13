import React, {Component, PureComponent} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import RegularCom from './RegularCom';
import PureComponents from './PureComponent'
export class ParentComp extends PureComponent  {
  constructor(props) {
    super(props);
    this.state = {
        name: "Santosh Patel"
    };
  }

  componentDidMount(){
      setInterval(()=>{
          this.setState({
               name: "Santosh Patel"
          }) 
      },2000)
  } 

  render() {
    console.log("Parent Component Render=======>>>>>>>")
    return (
      <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 12, fontWeight: 'bold'}}>Parent Component</Text>
        <View style={{marginTop: 30}}>
            <Text>Regular Component</Text>
            <RegularCom name={this.state.name} /> 
        </View>
        <View style={{marginTop: 30}}>
            <Text>Pure Component</Text>
            <PureComponents name={this.state.name} />
        </View>
       
      </SafeAreaView>
    );
  }
}

export default ParentComp;
