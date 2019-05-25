import ActionTypes from '../constants/action-types';

const initialState = {
  isFetching: false,
  data: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.Giphy.getGiphyTrends:
      return {
        ...state,
        isFetching: true
      };
    case ActionTypes.Giphy.getGiphyTrendsSuccess:
      return {
        ...state,
        isFetching: false,
        data: action.data
      };
    default:
      return state;
  }
}
