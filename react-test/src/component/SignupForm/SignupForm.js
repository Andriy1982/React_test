import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Subscription = {
    FREE: 'free',
    PRO: 'pro',
    PREMIUM: 'premium',

}

export default class SignupForm extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    state = {
        // inputValue: '',
        email: '',
        password: '',
        agreed: false,
        subscription: '',
    };
    // handleInputValue = e => {
    //     this.setState({inputValue: e.target.value});
    // }
    // handleEmailChange = e => {
    //         this.setState({email: e.target.value});
    // };

    handleChange = e => {
        const {name, value} = e.target;
        console.log("name", name);
        console.log("pas", value);
        this.setState({
            [name]: value,
        })
    }

    handleSubscriptionChange = e => {
        const {value} = e.target;
        this.setState({
            subscription: value,
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log("Submit");
    }

    handleAgreedChange = e => {
        console.log(e.target.checked);
        this.setState({agreed: e.target.checked})
    }

    render() {
        const {email, password,agreed, subscription} = this.state;
        return (

            <form onSubmit={this.handleSubmit}>
                <label>Email
                <input type="email" 
                value= {email}
                name = "email"
                onChange={this.handleChange}/>
                </label>
                <label>Password
                <input type="password" 
                value= {password}
                name = "password" 
                onChange={this.handleChange}/>
                </label>
                <div role= "group">
                <label>
                    <input 
                    type="radio"
                    value={Subscription.FREE}
                    checked= {Subscription.FREE === subscription}
                    onChange = {this.handleSubscriptionChange}
                    />
                    Free
                </label>

                <label>
                    <input type="radio"
                    value={Subscription.PRO}
                    checked= {Subscription.PRO === subscription}
                    onChange = {this.handleSubscriptionChange}
                    />
                    Pro
                </label>

                <label>
                    <input type="radio"
                    value={Subscription.PREMIUM}
                    checked= {Subscription.PREMIUM === subscription}
                    onChange = {this.handleSubscriptionChange}
                    />
                    Premium
                </label>

                </div>
                <label>
                    <input type="checkbox" 
                    checked={agreed}
                    onChange= {this.handleAgreedChange}
                    />
                    Соглашаюсь
                </label>
                
                <button type="submit" disabled = {!agreed}>Register</button>
            </form>
            // <div>
            //    <input type="text" value= {this.state.inputValue} onChange={this.handleInputValue}/>
            // </div>
        )
    }
}
