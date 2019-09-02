    
import React, {Component} from 'react';
import '../App.css';

class ProductRow extends Component {
    render () {
        console.log(this.props);
        //This code displays the user selected options for each feature of the laptop
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
    
            return (
            <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                {this.props.USCurrencyFormat.format(selectedOption.cost)}
                </div>
            </div>
            );
        });

        return (
            <div>
                {summary}
            </div>

        );
    }
}

export default ProductRow;