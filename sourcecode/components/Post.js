import React from 'react';
import {Link} from 'react-router';
import createMarkup from '../utils/createMarkup.js';

var Post = React.createClass({
  render () {

    const title = this.props.title;
    const content = createMarkup(this.props.content)

    return (
      <div>
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={content}></div>
      </div>
    )
  }
});

export default Post;
