import React from 'react';
import MenuItem from './MenuItem.js';

var Menu = React.createClass({
  render () {
    const items = this.props.pages.map((page) => {
      return (
        <MenuItem
          key={page.get('slug')}
          slug={page.get('slug')}
          title={page.get('title')} />
      )
    }).toArray();

    return (
      <ul>
        {items}
      </ul>
    )
  }
});

export default Menu;
