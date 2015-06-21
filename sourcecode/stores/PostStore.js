import {mcFly, actionTypes} from '../flux/mcFly';
import Immutable from 'immutable';
import PostActions from '../actions/PostActions';

let index = Immutable.fromJS([]);

function resetIndex(data) {
  index = data;
}

const PostStore = mcFly.createStore({
  getIndex: function () {
    if (index.size === 0) {
      PostActions.fetchIndex();
    }
    return index;
  },
}, function (payload) {
  switch (payload.actionType) {
    case actionTypes.POST_INDEX_RESET:
      resetIndex(payload.data);
      break;
    default:
      return true;
  }
  PostStore.emitChange();
  return true;
});

export default PostStore;
