import React,{Component} from 'react';
import FilterComponent from '../FilterComponent/FilterComponent';
import FilterComponentMobile from '../FilterComponentMobile/FilterComponentMobile';
class PhoneList extends Component {
	render () {
		let diagVal = this.props.listOfModels;
		let dataFun;
		let numberOfStars = 5;
		let stars = [];
		let PhonePrice = "9000" ;
		let i = 0;
		let j=0;
		let phoneIcons = [];
		let clickHandler = () => {};
		for (i; i<numberOfStars;i++) {
			      stars.push(
			        <span className="glyphicon glyphicon-star-empty"></span>
			    )
			}
		for (j; j<3; j++) {
			phoneIcons.push(
				<span className="CircleIcon"></span>
			)
		}	
		return(
			<div className="PhoneList v-p-large">
			   <div className="row">
			   <div className="col-12 hidden-sm-up">
			   		<FilterComponentMobile/>
			   </div>
			   	<div className="col-lg-2 hidden-lg-down">
	   				<FilterComponent/>
			   	</div>
			   	<div className="col-lg-10">
			   	<div className="row">
			      {diagVal.map((dataFun) =>
			      <div className="col-lg-4 text-center">
			        <div className="card">
						<h5 className="text-muted PhoneBrandTitle text-center">{dataFun.details.displayName}</h5>
 					<div className="ImageIcon">
						<img src={dataFun.details.images} className="img-fluid mx-auto d-block"/>
					</div>
  					<div className="card-block">
    					<h5 className="PhoneName">{dataFun.details.displayName}</h5>
    				<p className="card-text">
    					<div><span className="capacity">{dataFun.details.size}</span></div>
    					<h6 className="Price">RM{dataFun.details.price}</h6>
    				</p>
    					<div className="form-group" id="Comparecheck">
							<input type="checkbox"/>
							<label htmlFor="checkbox-2-1" className="Compare">Compare</label>
						</div>
							<div className="ButtonMargin row">
								<div className="col-3">
									<i className="fa fa-thumbs-up" aria-hidden="true"></i>
								</div>
								<div className="col-6">
									<a className="btn smallText btn-primary active btn-block" href="/PhoneDetail.html">Buy Now</a>
								</div>
								<div className="col-3 float-right">
									<i className="fa fa-heart-o"></i>
								</div>
							</div>
  						</div>
					</div>
				</div>
			      )}
			      </div>
			  </div>    
			</div>
		</div>	
		)
	}
}

export default PhoneList;