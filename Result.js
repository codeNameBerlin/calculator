import React, {Component} from 'react';

class Result extends Component {


	render() {
		let {total} = this.props;
		return (
			<div className="total">
			<p>{total}</p>
			</div>
	)
   		;
	}
}

export default Result;