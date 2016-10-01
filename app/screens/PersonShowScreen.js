/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
} from 'react-native';

import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'

class PersonShowScreen extends Component {

  constructor(props) {
    super(props); 
  }

  render() {
    return (
      <ViewContainer style={{backgroundColor:'yellow'}}>
        <StatusBarBackground style={{backgroundColor: 'skyblue'}} />
        <Text style={styles.personName}>{this.props.person.firstName}</Text>
      </ViewContainer>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  personRow: {
    flexDirection: 'row',
    justifyContent: 'center',

  },

  personName: {
    marginLeft: 25
  }

});

export default PersonShowScreen
