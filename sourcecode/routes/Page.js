'use strict';

import React from 'react';
import {Link} from 'react-router';
import Immutable from 'immutable';
import PageStore from '../stores/PageStore';
import PageActions from '../actions/PageActions';

class Page extends React.Component {

  constructor(props) {
    super(props)
    this.state = this.getState(props);
  }

  componentDidMount() {
    PageStore.on('change', this.onPageStoreChange.bind(this))
  }

  componentWillReceiveProps(props){
    this.setState(this.getState(props));
  }

  onPageStoreChange() {
    const props = this.props;
    this.setState(this.getState(props));
  }

  getState(props){
    const slug = props.params.slug;
    return {
      'page': PageStore.getPageBySlug(slug),
    };
  }

  render() {

    const page = this.state.page;
    if(!page) return false;

    return (
      <div>
        <h2>{page.get('title')}</h2>
          <div dangerouslySetInnerHTML={{__html: page.get('content') }}>
            </div>
      </div>
    );
  }
}

export default Page;
