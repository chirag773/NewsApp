import {
    GET_NEWS, 
    NEWS_LOADING,
    GET_ERRORS,
    GET_FAV_NEWS,
    ADD_NEWS_TO_FAV
  } from "../actions/types";
  
  
  
  const initialState = {
    news:[],
    loading:false,
    favNews:[]
  }
  
  export default function(state = initialState , action ){
    switch (action.type) {
      case NEWS_LOADING:
        return {
          ...state,
          loading:true
        }
      case GET_NEWS:
        return {
          ...state,
          news: action.payload,
          loading:false
        }
      default:
        return state;
    }
  }