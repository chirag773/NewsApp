import {
    GET_NEWS, 
    NEWS_LOADING,
    GET_ERRORS
  } from "../actions/types";
  
  
  
  const initialState = {
    news:[],
    loading:false,
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