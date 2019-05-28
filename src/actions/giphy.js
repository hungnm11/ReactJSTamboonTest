import ActionTypes from '../constants/action-types';
import request from '../utils';

const requestGiphyTrends = () => {
  return {
    type: ActionTypes.Giphy.getGiphyTrends
  }
};

const receiveGiphyTrends = (data) => {
  return {
    type: ActionTypes.Giphy.getGiphyTrendsSuccess,
    data
  }
};

export const getGiphyTrends = (limit, offset = 0) => (dispatch) => {
  dispatch(requestGiphyTrends());
  return request({
    method: 'GET',
    url: '/trending?',
    params: {
      limit,
      rating: 'G',
      offset,
    },
  }).then(respone => {
    dispatch(receiveGiphyTrends(respone));
  })
}
