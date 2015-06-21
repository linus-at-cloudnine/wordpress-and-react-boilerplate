import {mcFly, actionTypes} from '../flux/mcFly';
import wpFetch from '../utils/wpFetch.js';

var PageActions = mcFly.createActions({
  fetchIndex(){
    return wpFetch('/pages').then((data) => {
      return {
        actionType: actionTypes.PAGE_INDEX_RESET,
        data: data,
      }
    });
  },
  fetchPageBySlug(slug){
    return wpFetch(`/pages/${slug}`).then((data) => {
      if (data.get('ID')) {
        return {
          actionType: actionTypes.PAGE_ADD,
          data: data,
        }
      } else {
        // Very hacky error handling....
        return {
          actionType: actionTypes.PAGE_ADD,
          data: Immutable.fromJS({
            'slug': slug,
          }),
        }
      }
    });
  }
});

export default PageActions;
