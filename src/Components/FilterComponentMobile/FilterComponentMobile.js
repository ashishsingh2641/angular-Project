import React,{Component} from 'react';

class FilterComponentMobile extends Component {
	state = {
		displayClass: 'hidden',
		displayClass1:'hidden',
		count: 0
	}
	clickPopover = () => {
		this.setState((prevState) => ({
			count: prevState.count+1
		}));
		if(this.state.count %2 !== 0 ) {
			this.setState({
				displayClass: 'visible'
			})
		} else  {

			this.setState({
				displayClass: 'hidden'
			})
		}
	}
	clickPopover1 = () => {
		this.setState((prevState) => ({
			count: prevState.count+1
		}));
		if(this.state.count %2 !== 0 ) {
			this.setState({
				displayClass1: 'visible'
			})
		} else  {

			this.setState({
				displayClass1: 'hidden'
			})
		}
	}
	render(props) {	
		return (
			<div className="FilterComponentMobile">
				<div className="row">
					<div className="col-6">
						<div className="FilterContent popover__wrapper">
						<div className="clickPopover" onClick={this.clickPopover.bind(this)}>
							<i className="material-icons add">add</i>
							<span className="FilterLabel">Add filter</span>
						</div>	
							<div className={this.state.displayClass}>
						    <span className="btn-maxis-small">Apple</span>
						    <span className="btn-maxis-small">Samsung</span>
						    <span className="btn-maxis-small">LG</span>
						    <span className="btn-maxis-small">Asus</span>
						    <span className="btn-maxis-small">One Plus</span>
						    <span className="btn-maxis-small">MI</span>
						 </div>
						</div>
					</div>
					<div className="col-6 text-right">
						<div className="serachIcon">
							<div className="FilterContent1 popover__wrapper">
						<div className="clickPopover" onClick={this.clickPopover1.bind(this)}>
							<span className="sort">Sort</span>
						</div>	
							<div className={this.state.displayClass1}>
						    <span className="btn-maxis-small">Sort: Low to High</span>
						    <span className="btn-maxis-small">Sort: High to Low</span>
						    <span className="btn-maxis-small">Sort: Popular</span>
						 </div>
						</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default FilterComponentMobile;