import React,{Component} from 'react';


class SelectBox extends Component {
	render (props) {
		return (
			<div className="reactSelectbox">
                <select className="form-control">
		            {this.props.OptionValue.map(function(val,i){
		            return 	<option key={i} value={val.value}>{val.text}</option>
		            })}
		        </select>
			</div>
		)
	}
}

export default SelectBox;
