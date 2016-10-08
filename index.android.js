/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
  Navigator
} from 'react-native';

import Screen from './components/Screen'

console.log('teste')

class demo extends Component {
  
  renderScene(route, navigator) {
    var globalNavigatorProps = { navigator }

    switch(route.ident) {
      
      default: 
        return (
          <Screen {...globalNavigatorProps} />
        )
    }

  }

  render() {
    return (
      <Navigator 
        initialRoute={{ident: "Screen"}}
        ref="appNavigator"
        style={styles.navigatorStyles}
        renderScene={ this.renderScene } 
        configureScene={ route => ({
          ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight
        })} />
    )
  }  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('demo', () => demo);
