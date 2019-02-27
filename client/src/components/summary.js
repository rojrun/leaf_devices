import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import '../assets/css/summary.css';
import {addToSummary, getSummary, updateSummary} from '../actions';

/* Child component of Cart component. Rerenders when quantity changes. */
class Summary extends Component {
    state =  {
        value: "standard"
    }

    componentDidMount() {
        this.instatnces = M.FormSelect.init(this.refs.dropdown);
        this.props.addToSummary();
        this.props.getSummary();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.summary !== this.props.summary) {
            this.instatnces = M.FormSelect.init(this.refs.dropdown);
        }      
    }

    shippingMethod = (event) => {
        this.setState({
            value: event.target.value
        }, 
            async () => {
                const summary_id = this.props.summary.id;
                await this.props.updateSummary(summary_id, this.state.value);
                this.props.getSummary();
            }
        );        
    }

    render() {
        const { total_quantity, subtotal, tax, shipping, total } = this.props.summary;

        return (
            <div className="summary col s12 center">
                <p><b>Total Quantity: </b>{total_quantity}</p>
                <p><b>Subtotal: </b>{subtotal/100}</p>
                <p><b>Tax: </b>{tax/100}</p>
                <div className="input-field row">
                    <select onChange={this.shippingMethod} ref="dropdown" defaultValue="standard" className="browser-default">
                        <option value="standard">Standard Shipping: </option>
                        <option value="expedited">Expedited Shipping: </option>
                    </select>
                    <div className="shipping">
                        {shipping/100}
                    </div>  
                </div> 
                <p><b>Total: ${total/100}</b></p>
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