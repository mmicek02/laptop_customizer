
import React, { Component } from 'react';
import '../src/app.css';
import slugify from 'slugify';
// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
style: 'currency',
currency: 'USD'
});
  
class ListItem extends Component {

    render() {
        const summary = Object.keys(this.state.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.state.selected[feature];
            const total = Object.keys(this.state.selected).reduce(
                (acc, curr) => acc + this.state.selected[curr].cost,
                0
            );
        return (
            <div className="App">
                <div className="summary__option" key={featureHash}>
                    <div className="summary__option__label">{feature} </div>
                    <div className="summary__option__value">{selectedOption.name}</div>
                    <div className="summary__option__cost">
                    {USCurrencyFormat.format(selectedOption.cost)}
                    </div>
                </div>
            </div>
            );
        });

        return (
            <div key={itemHash} className="feature__item">
              <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(feature)}
                checked={item.name === this.state.selected[feature].name}
                onChange={e => this.updateFeature(feature, item)}
              />
              <label htmlFor={itemHash} className="feature__label">
                {item.name} ({USCurrencyFormat.format(item.cost)})
              </label>
            </div>
          );s
    }
}

export default ListItem