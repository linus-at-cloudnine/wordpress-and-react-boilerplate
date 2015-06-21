import {mcFly, actionTypes} from '../flux/mcFly';
import Immutable from 'immutable';
import PageActions from '../actions/PageActions';

let index = Immutable.fromJS([]);
let pages = Immutable.fromJS({});

function resetIndex(data) {
  index = data;
}

function addPage(page) {
  const slug = page.get('slug');
  pages = pages.set(slug, page);
}

function resetPages(data) {
  pages = data
}

const PageStore = mcFly.createStore({
  getIndex: function () {
    if (index.size === 0) {
      PageActions.fetchIndex();
    }
    return index;
  },
  getPageBySlug: function (slug) {
    const page = pages.get(slug);
    if (!page) {
      PageActions.fetchPageBySlug(slug);
    }
    return page;
  },
}, function (payload) {
  switch (payload.actionType) {
    case actionTypes.PAGE_INDEX_RESET:
      resetIndex(payload.data);
      break;
    case actionTypes.PAGE_ADD:
      addPage(payload.data);
      break;
    default:
      return true;
  }
  PageStore.emitChange();
  return true;
});

export default PageStore;
