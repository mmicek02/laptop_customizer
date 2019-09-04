import React, { Component } from 'react';
import './App.css';
import ProductRow from './ProductRow/ProductRow';
import CustomLaptopOptions from './CustomLaptopOptions/CustomLaptopOptions';
import ProductTotal from './ProductTotal/ProductTotal';

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    //
    /*  
        const total = Object.keys(this.state.selected).reduce(
        (acc, curr) => acc + this.state.selected[curr].cost, 0
        );
    */
    return (
      // Displays the total of the all of the selected features of the laptop
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <CustomLaptopOptions 
              features = {this.props.features} 
              selected = {this.state.selected} />
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            <ProductRow
              summary = {this.state.summary} 
              selected = {this.state.selected} />
            <div className="summary__total">
            <ProductTotal 
              total = {this.state.total} />
            </div>
          </section>
        </main>
      </div>
    );
  }
  
}
export default App;
