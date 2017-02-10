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

} from 'react-native';

import HTMLView from 'react-native-htmlview';


export default class rnathtml extends Component {
  render() {
    //return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Welcome to React Native!
      //   </Text>
      //   <Text style={styles.instructions}>
      //     To get started, edit index.android.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     Double tap R on your keyboard to reload,{'\n'}
      //     Shake or press menu button for dev menu
      //   </Text>
      // </View>
    htmlContent = '<p><a href="http://jsdf.co">&hearts; nice job!</a></p>'

    return (
      <HTMLView
        value={htmlContent}
        stylesheet={styles}
      />
    );
  }
}


/*export default class ContentView extends Component{
  render() {
    return (
      <HTMLView
        value={this.props.htmlContent}
        onLinkPress={(url) => console.log('clicked link: ', url)}
      />
    )
  }
}*/

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
  a: {
   fontWeight: '300',
   color: '#FF3366', // pink links
 },
});

AppRegistry.registerComponent('rnathtml', () => rnathtml);
