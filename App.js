/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import {
  counterClear,
  counterDecrement,
  counterIncrement,
  counterSet,
} from './src/actions';

class App extends Component {
  constructor(props){
    super(props);

    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText(number) {
    const count = parseInt(number);
    this.props.counterSet(count);
  }

  render() {
    const { container, countViewStyle, welcome } = styles;

    // console.log('Props: ', this.props);

    return (
      <View style={container}>
        <TextInput          
          style={{width: 40, height: 40, borderWidth: 1}}
          onChangeText={this.onChangeText}
          value={this.props.count.toString()}
          />

        <View style={countViewStyle}> 
          <Button onPress={this.props.counterIncrement} title="+" />

          <Text style={welcome}>
            {this.props.count}
          </Text>

          <Button onPress={this.props.counterDecrement} title="-" />
        </View>

        <Button onPress={this.props.counterClear} title="Clear" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  countViewStyle: {
    flexDirection: "row"
  }
});

const mapStateToProps = state => ({
  count: state.counter,
  meta: state.meta,
});

export default connect(
  mapStateToProps,
  { counterClear, counterDecrement ,counterIncrement, counterSet },
)(App);
