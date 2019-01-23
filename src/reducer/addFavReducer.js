import {
    GET_NEWS, 
    NEWS_LOADING,
    GET_ERRORS,
    GET_FAV_NEWS,
    ADD_NEWS_TO_FAV,
    REMOVE_FAV
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
        // case REMOVE_FAV:
        //   return {
        //     ...state,
        //     favNews: [
        //       ...state.favNews.slice(0, action.payload),
        //       ...state.favNews.slice(action.payload + 1)
        //   ],
        //     loading:false
        //   }
      default:
        return state;
    }
  }