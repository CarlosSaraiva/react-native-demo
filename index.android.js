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
  Navigator
} from 'react-native';

import PeopleIndexScreen from './app/screens/PeopleIndexScreen'
import PersonShow from './app/screens/PersonShowScreen'

class demo extends Component {

  renderScene(route, navigator) {
    var globalNavigatorProps = { navigator }

    switch(route.ident) {
      
      case "PeopleIndex":
        return (
          <PeopleIndexScreen {...globalNavigatorProps} />
        )

      case "PersonShow":
        return (
          <PersonShow {...globalNavigatorProps} person={route.person} />
        )

      default: 
        return (
          <PeopleIndexScreen {...globalNavigatorProps} />
        )
    }

  }

  render() {
    return (
      <Navigator 
        initialRoute={{ident: "PeopleIndex"}}
        ref="appNavigator"
        style={styles.navigatorStyles}
        renderScene={ this.renderScene } 
        configureScene={ route => ({
          ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight
        })} />
    )
  }  

}
// <PeopleIndexScreen />
const styles = StyleSheet.create({

  navigatorStyles: {

  }

})


AppRegistry.registerComponent('demo', () => demo);
