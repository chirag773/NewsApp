import React, { Component } from 'react'
import { Text, View,TouchableOpacity,AsyncStorage,ScrollView,Linking } from 'react-native'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "./Spinner";
import {  addNewsToFav ,removeFave,relodFav} from "../actions/addFavNewsAction";
import { Card, ListItem, Button } from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome"

export class FavScreen extends Component {



removeFromFav = (favarticle) => {
  const { favNews,loading } = this.props.favNews;
  this.props.removeFave(favarticle);
  // this.props.relodFav(favarticle)
  console.log(favarticle);
}


  render() {


    const { favNews,loading } = this.props.favNews;

    let favArticle;

    if (favArticle === null || loading) {
      favArticle = <Spinner/>;
    } else {
      if (favNews.length > 0) {
        favArticle = favNews.map(favarticle => (
          

          <Card
            title={favarticle.title}
            image={{ uri : favarticle.urlToImage}}>
            <Text style={{marginBottom: 10}}>
                {favarticle.description}
            </Text>
            <Text style={{marginBottom: 10}} note>
                {favarticle.content}
            </Text>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity style={{height:25, paddingLeft:10}} onPress={()=> Linking.openURL(favarticle.url)}>
                <Icon name="arrow-right" size={25}/>
              </TouchableOpacity>
              <TouchableOpacity  
                style={{height:25, paddingRight:10}} 
                onPress={()=>this.removeFromFav(favarticle)} >
                <Icon name="heart" size={25} style={{color:"red"}}/>
              </TouchableOpacity>
            </View>
            
        </Card>



        ))
      } else {
        favArticle = (
        
        <View>
          <Text>There is No articles</Text>
        </View>
        )
      }
    }



    return (
  
      
    <ScrollView
    style={{backgroundColor:"white"}}
  >
    {favArticle}
    
  </ScrollView>
      
    )
  }
}



FavScreen.propTypes = {
    addNewsToFav:PropTypes.func.isRequired,
    favNews:PropTypes.object.isRequired,
    removeFave:PropTypes.func.isRequired,
    relodFav:PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  favNews:state.favNews
})

export default connect(mapStateToProps,{addNewsToFav,removeFave,relodFav})(FavScreen);