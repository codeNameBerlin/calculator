import React, { Component } from 'react';
import './App.css';
import Result from '../components/Result';
import KeyPad from '../components/KeyPad';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			total: ''
		}
	}

	onClick = (button) => {

		if (button === '=') {
			this.calculate()
		} else if (button === 'C') {
			this.reset()
		} else if (button === 'CE') {
			this.backSpace()
		} 

		else {
			this.setState({
				total: this.state.total + button
			})
		}
	};

	calculate = () => {
		try {
			this.setState({
				 // eslint-disable-next-line
				total: (eval(this.state.total) || '') + ''
			})
		} catch (e) {
			this.setState({
			total: 'error'
			})
		}
  };

	reset = () => {
		this.setState({
			total: ''
		})
	};

	backSpace = () => {
		this.setState({
			total: this.state.total.slice(0, -1)
		})
	};

	render() {
		return(
			<div className="calculator-body">
			<h1>Simple Calculator</h1>
			<Result total={this.state.total} />
			<KeyPad onClick={this.onClick} />
			</div>
			)
		;
	}
}

export default App;