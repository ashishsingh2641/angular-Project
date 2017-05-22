import React,{Component} from 'react';

class LabelComponent extends Component {
	render(props) {
		return (
			<div className="labelComponent">
				<label htmlFor={this.props.labelFor}>{this.props.labelText}</label>
			</div>
		)
	}
}

export default LabelComponent;