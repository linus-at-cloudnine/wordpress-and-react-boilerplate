import React from 'react';
import {Link} from 'react-router';

var MenuItem = React.createClass({
  render () {
    return (
      <li>
        <Link to={this.props.slug}>{this.props.title}</Link>
      </li>
    )
  }
});

export default MenuItem;
