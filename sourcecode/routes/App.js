'use strict';

import React from 'react';
import {Link} from 'react-router';
import Immutable from 'immutable';
import PageStore from '../stores/PageStore';
import PageActions from '../actions/PageActions';
import Menu from '../components/Menu.js';
import Blog from '../routes/Blog.js';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      pages: PageStore.getIndex(),
    }
  }

  componentDidMount() {
    PageStore.on('change', this.onPageStoreChange.bind(this))
  }

  onPageStoreChange() {
    this.setState({
      pages: PageStore.getIndex(),
    });
  }

  render() {
    return (
      <div>
        <h1>Wordpess ❤ React</h1>
        <Menu pages={this.state.pages}/>
        {this.props.children || <Blog />}
      </div>
    )
  }
}

export default App;
