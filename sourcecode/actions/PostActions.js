import {mcFly, actionTypes} from '../flux/mcFly';
import wpFetch from '../utils/wpFetch.js';

var PostActions = mcFly.createActions({
  fetchIndex(){
    return wpFetch('/posts').then((data) => {
        return {
          actionType: actionTypes.POST_INDEX_RESET,
          data: data,
        }
      });
  }
});

export default PostActions;
