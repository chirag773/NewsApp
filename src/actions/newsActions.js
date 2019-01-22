import axios from "axios";

import { Actions } from 'react-native-router-flux';
import {
  GET_NEWS, 
  NEWS_LOADING,
  GET_ERRORS
} from "./types.js";

const APIKEY = "apiKey=413275ea4e324ded857f94a070918c98";
const URL = "https://newsapi.org/v2/top-headlines?";
const COUNTRY = "us";
const CATEGORY = "business";

export const getNews = () => dispatch => {
  dispatch(setNewsLoading());
    axios.get(`${URL}country=${COUNTRY}&category=${CATEGORY}&${APIKEY}`)
      .then(res => 
        dispatch({
          type:GET_NEWS,
          payload:res.data.articles
        })        
      )
      .catch(err => 
        dispatch({
          type:GET_NEWS,
          payload:null
        })  
      )
  }
  


  export const setNewsLoading = () => {
    return{
      type:NEWS_LOADING
    }
  }
  