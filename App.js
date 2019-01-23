import React from 'react';
// import firebase from "firebase";
import { StyleSheet, Text, View } from 'react-native';
import { AsyncStorage } from "react-native"
import { Actions } from 'react-native-router-flux';
import { Provider } from "react-redux";
import store from "./src/store";
import Routers from "./src/Routers";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routers/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
