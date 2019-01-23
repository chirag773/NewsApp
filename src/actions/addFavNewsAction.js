import axios from "axios";

import { Actions } from 'react-native-router-flux';
import {
  GET_NEWS, 
  NEWS_LOADING,
  GET_ERRORS,
  GET_FAV_NEWS,
  ADD_NEWS_TO_FAV
} from "./types.js";

const APIKEY = "apiKey=413275ea4e324ded857f94a070918c98";
const URL = "https://newsapi.org/v2/top-headlines?";
const COUNTRY = "us";
const CATEGORY = "business";

  
export const addNewsToFav = (article) => {
    return{
      type:ADD_NEWS_TO_FAV,
      payload:article
    }
  }
  
  export const getFavNews = () => {
    return {
      type:GET_FAV_NEWS
    }
  }