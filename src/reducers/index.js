import { searchMovieInputChange } from "../actions";

const INITIAL_STATE = {
  article: null
};

const reducer = (state = {}, payload) => {
    switch (payload.type) {
      case 'GET_NEWS':
        return { ...state, loading: true };
      case 'NEWS_RECEIVED':
        state.article = payload.json;
        state.loading = false;
        return { ...state };
      case 'CLICK_NEWS':
        return {...state };
      default:
        return state;
    }
  };
  
  export default reducer;