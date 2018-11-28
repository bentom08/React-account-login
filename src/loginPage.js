import React, {Component} from 'react'
import { URL } from './constants.js'
import axios from 'axios'

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			account: '',
			prize: 0
		}
	}


	handleClick = () => {
		axios.post(URL, 
		{
			firstName: document.getElementById('firstName').value,
			lastName: document.getElementById('lastName').value
		}).then( (response) => {
			this.setState({
				account: response.data[0],
				prize: response.data[1]
			})
		})
	}

	render() {
		return(<div>
				<h3>Account Creation</h3>
				First Name: <input id = 'firstName' type = 'text' /><br/>
				Last Name: <input id = 'lastName' type = 'text' /><br/>
				<button onClick = {this.handleClick}>Submit</button>
				</div>);
	}
}

export default Login;