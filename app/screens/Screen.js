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

var colors = [
  {color: 'red'}, 
  {color: 'blue'}, 
  {color: 'green'}, 
  {color: 'yellow'}
]
var iterator = 0

class Screen extends Component {

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    iterator++
    this.state = {
      peopleDataSource: ds.cloneWithRows(colors),      
      colors: colors,
    }

  }

  render() {

    var { colors } = this.state
    iterator = iterator > colors.length - 1? 0 : iterator

    return (
      <ViewContainer style={{backgroundColor: colors[iterator].color }}>
        <StatusBarBackground style={{backgroundColor: 'skyblue'}} />
        <ListView
          style={{marginTop: 100}}
          dataSource={this.state.peopleDataSource}
          renderRow={ (person) =>  this._renderColor(person) }  />
      </ViewContainer>

    );
  }

  _renderColor(person) {
    return (
      <TouchableOpacity sytle={styles.personRow} onPress={event => this._navigateScreen(person)}>
      <View style={styles.personRow}>
        <Text style={[styles.personName, {backgroundColor: person.color === this.state.colors[iterator].color ? 'white' : this.state.colors[iterator].color}] } >{person.color}</Text>
      </View>
      </TouchableOpacity>
    )
  }

  _navigateScreen(person) {
    this.props.navigator.push({
      ident: 'Screen',
      person,
      // sceneConfig: Navigator.SceneConfigs.FloatFromBottom
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

  personRow: {
    flexDirection: 'row',
    justifyContent: 'center',

  },

  personName: {
    marginLeft: 25
  }

});

export default PeopleIndexScreen
