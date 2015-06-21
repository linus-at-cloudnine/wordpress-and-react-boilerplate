import 'whatwg-fetch';
import {wordpress} from '../config.js';
import Immutable from 'immutable';

function wpFetch(endpoint){
  const url = wordpress.api + endpoint;
  return new Promise((resolve) => {
    fetch(url)
      .then((response) => {
        return response.json()
      }).then((json) => {
        resolve(Immutable.fromJS(json));
      })
  })
}

export default wpFetch
