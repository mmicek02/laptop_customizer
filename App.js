import React, { Component } from 'react';

{/*// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';*/}

import './App.css';
import Header from './Header/Header';
import List from './List/List';
import ListItem from './ListItem/ListItem';
import ShoppingCart from './shoppingCart/ShoppingCart';
import { tsConstructorType } from '@babel/types';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: ''
    };
  }
  
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  updateItem = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render () {
    return (
      <div className="App">
        <Header />
        <List files={this.props.files} />
        <ShoppingCart />
      </div>
    );
  }
};

export default App;