import React,{Component} from 'react';

class ToutComponent extends	Component {
	render () {
		let dialogVeriable = this.props.data;
		return (
			<div className="card ToutHeight">
				<img className="card-img-top mx-auto d-block" src={dialogVeriable.Diagimage} alt={dialogVeriable.imageAlt} />
					<div className="card-block">
					<h4 className="card-title">{dialogVeriable.headerDetails}</h4>
					<p className="card-text small">{dialogVeriable.textDescription}</p>
					</div>
			</div>
		)
	}
}
export default ToutComponent; 