import React from 'react';
import firebase from "firebase";
import { StyleSheet, Text, View } from 'react-native';
import { AsyncStorage } from "react-native"
import { Actions } from 'react-native-router-flux';
import { Provider } from "react-redux";
import store from "./src/store";
import Routers from "./src/Routers";

const firebaseConfig  = {
  apiKey: "AIzaSyCD7OatlliJEzAQ12fOK_Si1BB-bSEJeBM",
  authDomain: "newsapp-70732.firebaseapp.com",
  databaseURL: "https://newsapp-70732.firebaseio.com",
  projectId: "newsapp-70732",
  storageBucket: "newsapp-70732.appspot.com",
  messagingSenderId: "335749292064"
};
firebase.initializeApp(firebaseConfig);

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
