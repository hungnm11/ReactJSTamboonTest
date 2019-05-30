import ActionTypes from '../constants/action-types';

const initialState = {
  isFetching: false,
  isLoadingMore: false,
  data: [],
  pagination: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.Giphy.getGiphyTrends:
      return {
        ...state,
        isFetching: true,
      };
    case ActionTypes.Giphy.getGiphyTrendsSuccess:
      return {
        ...state,
        isFetching: false,
        data: action.data.data,
        pagination: action.data.pagination,
      };
    case ActionTypes.Giphy.getLoadMore:
      return {
        ...state,
        isLoadingMore: true,
      }
    case ActionTypes.Giphy.getLoadMoreSuccess:
      return {
        ...state,
        isLoadingMore: false,
        data: [...state.data, ...action.data.data],
        pagination: action.data.pagination,
      }
    default:
      return state;
  }
}
