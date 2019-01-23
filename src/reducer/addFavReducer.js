import {
    GET_NEWS, 
    NEWS_LOADING,
    GET_ERRORS,
    GET_FAV_NEWS,
    ADD_NEWS_TO_FAV
  } from "../actions/types";
  
  
  const initialState = {
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
        case ADD_NEWS_TO_FAV:
          return {
            ...state,
            favNews: [...state.favNews, action.payload],
            loading:false
          }
      default:
        return state;
    }
  }