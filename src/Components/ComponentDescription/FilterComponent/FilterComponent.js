/* eslint-disable */
// eslint-disable-next-line

import React,{Component} from 'react';

class FilterComponent extends Component {
	render () {
		return (
			<div className="FilterComponent">
				<div className="row">
					<div className="col-6 filterText">
						<div className="filter">FilterBy</div>
						<div className="filter">Category</div>
					</div>
					<div className="col-6">
						<h5 className="clearAll">clear all</h5>
					</div>
					<div className="col-12 customCheckbox">
						<input type="checkbox"/>
						<label htmlFor="labelText"></label>
						<span className="small">Apple</span>
						<div className="checkmark"></div>
					</div>
					<div className="col-12 customCheckbox">
						<input type="checkbox"/>
						<label htmlFor="labelText"></label>
						<span className="small">Samsung</span>
					</div>
					<div className="col-12 customCheckbox">
						<input type="checkbox"/>
						<label htmlFor="labelText"></label>
						<span className="small">LG</span>
					</div>
					<div className="col-12 customCheckbox">
						<input type="checkbox"/>
						<label htmlFor="labelText"></label>
						<span className="small">One Plus</span>
					</div>
					<div className="col-12 customCheckbox">
						<input type="checkbox"/>
						<label htmlFor="labelText"></label>
						<span className="small">Asus</span>
					</div>
					<div className="col-12 customCheckbox">
						<input type="checkbox"/>
						<label htmlFor="labelText"></label>
						<span className="small">MI</span>
					</div>
				</div>
			</div>
		)
	}
}

export default FilterComponent;