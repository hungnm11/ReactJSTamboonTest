import ActionTypes from '../constants/action-types';
import request from '../utils';

const requestGiphyTrends = () => {
  return {
    type: ActionTypes.Giphy.getGiphyTrends,
  }
};

const receiveGiphyTrends = (data) => {
  return {
    type: ActionTypes.Giphy.getGiphyTrendsSuccess,
    data,
  }
};

const requestLoadMoreGiphyTrends = () => {
  return {
    type: ActionTypes.Giphy.getLoadMore,
  }
};

const receiveLoadMoreGiphyTrends = (data) => {
  return {
    type: ActionTypes.Giphy.getLoadMoreSuccess,
    data,
  }
};

export const getGiphyTrends = (limit, offset = 0) => (dispatch) => {
  if (offset === 0) {
    dispatch(requestGiphyTrends());
  } else {
    dispatch(requestLoadMoreGiphyTrends());
  }
  return request({
    method: 'GET',
    url: '/trending?',
    params: {
      limit,
      rating: 'G',
      offset,
    },
  }).then(respone => {
    if (offset === 0) {
      dispatch(receiveGiphyTrends(respone));
    } else {
      dispatch(receiveLoadMoreGiphyTrends(respone));
    }
  })
}
