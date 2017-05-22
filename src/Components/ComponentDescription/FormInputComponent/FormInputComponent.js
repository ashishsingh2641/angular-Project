import React,{Component} from 'react';

class FormInputComponent extends Component {
	render (props) {
		let input;
		if(this.props.inputClass === "BasicFrom") {
			input = (
				<div className="row formInputComponent">
					<div className={"col-lg-12 "+ this.props.inputClass}>
						<input type="text" className="form-control" placeholder={this.props.PlaceholderText} value={this.props.Value} name={this.props.name} onChange={this.props.checkValidation}/>
						<span className={this.props.ValidationClass}>{this.props.messageText}</span>
					</div>
				</div>
			)
		} else {
			input = (
					<div className="row formInputComponent">
						<div className={"col-lg-12 FormInputComponentwithSearch"+ this.props.inputClass}>
							<input type="text" className="form-control" placeholder={this.props.PlaceholderText} value={this.props.Value} name={this.props.name} onInput={this.props.checkValidation}/>
							<i className="material-icons">search</i>
						</div>
					</div>
				)
		}
		return (
			<div>{input}</div>
		)
	}
}

export default FormInputComponent;