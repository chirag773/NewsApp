import axios from "axios";

import { Actions } from 'react-native-router-flux';
import {
  GET_NEWS, 
  NEWS_LOADING,
  GET_ERRORS,
  GET_FAV_NEWS,
  ADD_NEWS_TO_FAV,
  REMOVE_FAV
} from "./types.js";

  
export const addNewsToFav = (article) => {
    return{
      type:ADD_NEWS_TO_FAV,
      payload:article
    }
  }
  
  export const removeFave = (favarticle) => {
    return {
      type:REMOVE_FAV,
      payload:favarticle
    }
  }

  // export const relodFav = (favarticle) => {
  //   return{
  //     type:GET_FAV_NEWS,
  //     payload:favarticle
  //   }
  // }