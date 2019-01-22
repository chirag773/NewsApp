import React, { Component } from 'react';
import * as firebase from "firebase";
import { 
  Text, 
  View, 
  RefreshControl, 
  ScrollView , 
  FlatList
} from 'react-native';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../Spinner";
import { getNews } from "../../actions/newsActions";
import NewsItems from './NewsItems';
import { Actions } from 'react-native-router-flux';

class News extends Component {


  componentWillMount = () => {
    firebase.auth().signInWithEmailAndPassword
    ("chiragprajapati781@gmail.com", "password")
  };
  


  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  componentDidMount() {
    this.props.getNews()
  }

_onRefresh(){
  this.setState({refreshing:true})
  this.props.getNews()
  setTimeout(() => {
    this.setState({refreshing: false});
  }, 1000);
}



  render() {

    const { news, loading } = this.props.news;

    let newsArticles;

    if (newsArticles === null || loading) {
      newsArticles = <Spinner/>;
    } else {
      if (news.length > 0) {
        newsArticles = news.map(article => (
          <NewsItems key={article.title} article={article}/>
        ))
      } else {
        newsArticles = <Text>There is No articles</Text>
      }
    }

   
    return (
        
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }
        style={{backgroundColor:"white"}}
      >
        {newsArticles}
        
      </ScrollView>
    
    )
  }
}


News.propTypes = {
    getNews:PropTypes.func.isRequired,
    news:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    news:state.news
})

export default connect(mapStateToProps,{getNews})(News);


