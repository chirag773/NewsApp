import React, { Component } from 'react';
import * as firebase from "firebase";
import { 
   View, 
   FlatList,
   ScrollView,
   Image ,
   StyleSheet ,
   TouchableOpacity,
   Linking,
  } from 'react-native';
import PropTypes from "prop-types";
import {Actions} from "react-native-router-flux";
import Icon from "react-native-vector-icons/FontAwesome"
import { Card, ListItem, Button,  Text } from 'react-native-elements'

console.disableYellowBox = true;

var currentUser

class NewsItems extends Component {

addToFav = async(title,urlToImage,content) => {
  
  currentUser = await firebase.auth().currentUser

  var databaseRef = await firebase.database().ref
  (currentUser.uid).child("favourites").push()

  databaseRef.set({
    "name":title,
    "image":urlToImage,
    "content":content
  })
}

constructor() {
  super();
  console.ignoredYellowBox = [
  '2000'
  ];
  }

  render() {

    const { article } = this.props;

    return (

        <Card
            title={article.title}
            image={{ uri : article.urlToImage}} >
            <Text style={{marginBottom: 10}}>
                {article.description}
            </Text>
            <Text style={{marginBottom: 10}} note>
                {article.content}
            </Text>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity style={{height:25, paddingLeft:10}} onPress={()=> Linking.openURL(article.url)}>
                <Icon name="arrow-right" size={25}/>
              </TouchableOpacity>
              <TouchableOpacity  style={{height:25, paddingRight:10}} onPress={()=>this.addToFav(article.title,article.urlToImage,article.content)}>
                <Icon name="heart" size={25}/>
              </TouchableOpacity>
            </View>
        </Card>

    )
  }
}


NewsItems.propTypes = {
  article:PropTypes.object.isRequired
}


export default NewsItems

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'row'
  }
})
