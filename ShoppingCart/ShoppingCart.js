import React, { Component } from 'react';
import '../src/app.css';

class ShoppingCart extends Component {
    render() {
        <div className="App">
            <section className="main__summary">
                <h2>Your cart</h2>
                    {summary}
                    <div className="summary__total">
                        <div className="summary__total__label">Total</div>
                        <div className="summary__total__value">
                            {USCurrencyFormat.format(total)}
                        </div>
                    </div>
            </section>
        </div>

    }
  }
  export default ShoppingCart