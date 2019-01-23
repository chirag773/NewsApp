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
   AsyncStorage
  } from 'react-native';
  import PropTypes from "prop-types";
  import { connect } from "react-redux";
import {Actions} from "react-native-router-flux";
import Icon from "react-native-vector-icons/FontAwesome"
import { Card, ListItem, Button,  Text } from 'react-native-elements';
import {addNewsToFav} from "../../actions/addFavNewsAction";

console.disableYellowBox = true;


class NewsItems extends Component {

addToFav = (article) => {
  this.props.addNewsToFav(article)
  console.log(article);
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
              <TouchableOpacity  
                style={{height:25, paddingRight:10}} 
                onPress={()=>this.addToFav(article)}>
                <Icon name="heart" size={25}/>
              </TouchableOpacity>
            </View>
            
            
        </Card>

    )
  }
}



NewsItems.propTypes = {
  article:PropTypes.object.isRequired,
  addNewsToFav:PropTypes.func.isRequired,
}


const mapStateToProps = state => ({
  favNews:state.favNews
})


export default connect(mapStateToProps,{addNewsToFav})(NewsItems);

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'row'
  }
})
