'use strict';

import React from 'react';
import {Link} from 'react-router';
import Immutable from 'immutable';
import PostStore from '../stores/PostStore.js';
import Post from '../components/Post.js';

class Blog extends React.Component {

  constructor(props) {
    super(props)
    this.state = this.getState(props);
  }

  componentDidMount() {
    PostStore.on('change', this.onPageStoreChange.bind(this))
  }

  componentWillReceiveProps(props) {
    this.setState(this.getState(props));
  }

  onPageStoreChange() {
    const props = this.props;
    this.setState(this.getState(props));
  }

  getState(props) {
    return {
      'posts': PostStore.getIndex(),
    };
  }

  render() {

    const posts = this.state.posts.map((post) => {
      const ID = post.get('ID');
      const props = post.toJSON();
      return (<Post key={ID} {...props} />)
    });

    return (
      <div>
        <h2>Blog</h2>
        {posts}
      </div>
    );
  }
}

export default Blog;
