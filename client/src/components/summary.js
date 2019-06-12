import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import '../assets/css/summary.css';
import {addToSummary, getSummary, updateSummary} from '../actions';

/* Child component of Cart component. Rerenders when quantity changes. */
class Summary extends Component {
    state =  {
        value: "Standard",
        shippingCost: 0
    }

    async componentDidMount() {
        this.instances = M.FormSelect.init(this.refs.dropdown);
        await this.props.addToSummary();
        
        this.props.getSummary();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.summary !== this.props.summary) {
            this.instances = M.FormSelect.init(this.refs.dropdown);
        }      
    }

    shippingMethod = (event) => {
        let shippingCost = null;
        let { value } = event.target;
        if(value === "Expedited") {
            shippingCost = 375;
        } else {
            shippingCost = 0;
        }

        this.setState({
            value,
            shippingCost
        }, 
            async () => {
                const summary_id = this.props.summary.id;
                await this.props.updateSummary(summary_id, this.state.value, this.state.shippingCost);
                this.props.getSummary();
            }
        );        
    }

    addZeroes(num) {
        return num.toLocaleString("en", {useGrouping: false, minimumFractionDigits: 2});
    }

    render() {
        const { total_quantity, subtotal, tax, total } = this.props.summary;
       
        return (
            <div className="summary col s12 center">
                <p><b>Total Quantity: </b>{total_quantity}</p>
                <p><b>Subtotal: </b>{this.addZeroes(subtotal/100)}</p>
                <p><b>Tax: </b>{this.addZeroes(tax/100)}</p>
                <div className="input-field row">
                    <select onChange={this.shippingMethod} ref="dropdown" defaultValue="Standard" className="browser-default">
                        <option value="Standard">Standard Shipping: </option>
                        <option value="Expedited">Expedited Shipping: </option>
                    </select>
                    <div className="shipping">
                        {this.addZeroes(this.state.shippingCost/100)}
                    </div>  
                </div> 
                <p><b>Total: ${this.addZeroes(total/100)}</b></p>
                <Link className="checkoutButton waves-effect waves-light btn" to="/guest-checkout">checkout</Link>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        summary: state.summary.single
    }
}

export default connect(mapStateToProps, { addToSummary, getSummary, updateSummary })(Summary);