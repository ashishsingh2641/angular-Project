import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 
import CatalogDetails from './CatalogDetails/CatalogDetails';
import PhoneList from './PhoneList/PhoneList';
import FooterComponent from './FooterComponent/FooterComponent';
import FormComponent from './FormComponent/FormComponent';
import stickyHeader from './stickyHeader/stickyHeader';
import TextAndImage from './TextAndImageComponent/TextAndImage';
import Banner from './Banner/Banner';
import PhoneSelectComponent from './PhoneSelectComponent/PhoneSelectComponent';
 
class ComponentDescription extends Component {
	render(){
		return (
	<div className="compDescription">
	<Router>
    	<div className="row">
      		<div className="col-lg-3">
	      		<ul className="list-group text-center">
	        		<li className="list-group-item"><Link to="/" className="">CatalogDetails</Link></li>
	        		<li className="list-group-item"><Link to="/PhoneList">PhoneList</Link></li>
	     	 		<li className="list-group-item"><Link to="/FooterComponent">FooterComponent</Link></li>
					<li className="list-group-item"><Link to="/PhoneSelectComponent">PhoneSelectComponent</Link></li>     	 	
					<li className="list-group-item"><Link to="/stickyHeader">stickyHeader</Link></li>
					<li className="list-group-item"><Link to="/TextAndImage">TextAndImage</Link></li>
					<li className="list-group-item"><Link to="/Banner">Banner</Link></li>
	     	 	</ul>
	     	</div>
	     	<div className="col-lg-9">
	      		<Route exact path="/" component={CatalogDetails}/>
	      		<Route path="/PhoneList" component={PhoneList}/>
	      		<Route path="/FooterComponent" component={FooterComponent}/>
	      		<Route path="/PhoneSelectComponent" component={PhoneSelectComponent}/>
	      		<Route path="/stickyHeader" component={stickyHeader}/>
	      		<Route path="/TextAndImage" component={TextAndImage}/>
	      		<Route path="/Banner" component={Banner}/>
	    	</div>
    	</div>
	</Router>
	</div>
		)
	}
}
export default ComponentDescription;