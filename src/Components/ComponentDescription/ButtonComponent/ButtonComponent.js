import React,{Component} from 'react';

class ButtonComponents extends Component {
	render (props) {
		return (
			<div className="reactButton">
				<button type="button" className={this.props.buttonClass} onClick={this.props.onClickFunction}>{this.props.ButtonLabel}</button>
			</div>
		)
	}
}

export default ButtonComponents;
