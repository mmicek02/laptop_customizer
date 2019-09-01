    
import React, {Component} from 'react';
import '../App.css';

class ProductRow extends Component {
    render () {
        //This code displays the user selected options for each feature of the laptop
        const summary = Object.keys(this.state.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.state.selected[feature];
    
            return (
            <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                {USCurrencyFormat.format(selectedOption.cost)}
                </div>
            </div>
            );
        });
    }
}

export default ProductRow;