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

import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'

var screenColorsView = [
  {color: 'red'}, 
  {color: 'blue'}, 
  {color: 'green'}, 
  {color: 'yellow'}
]

var iterator = 0

class Screen extends Component {

  constructor (props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    iterator++
    
    this.state = {
      screenColorsViewDataSource: ds.cloneWithRows(screenColorsView),      
      screenColorsView: screenColorsView,
    }

  }

  render () { 
    var { screenColorsView } = this.state

    iterator = iterator > screenColorsView.length - 1? 0 : iterator

    return (
      <ViewContainer style={{backgroundColor: screenColorsView[iterator].color }}>
        <ListView
          style={{marginTop: 100}}
          dataSource={this.state.screenColorsViewDataSource}
          renderRow={ (color) =>  this._renderColor(color) }  />
      </ViewContainer>

    );
  }

  _renderColor (color) {
    return (
      <TouchableOpacity style={styles.row} onPress={event => this._navigateScreen(color)}>
      <View style={styles.row}>
        <Text style={[styles.name, {backgroundColor: color.color === this.state.screenColorsView[iterator].color ? 'white' : this.state.screenColorsView[iterator].color}] } >{color.color}</Text>
      </View>
      </TouchableOpacity>
    )
  }

  _navigateScreen(color) {
    this.props.navigator.push({
      ident: 'Screen',
      color      
    })
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

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  name: {
    marginLeft: 25
  }

});

export default Screen