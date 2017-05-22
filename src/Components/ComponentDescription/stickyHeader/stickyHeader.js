import React,{Component} from 'react';
import cookie from 'react-cookie';
//import classie from './classie';
import data1 from '../stickyHeader/moke';
import SubMenu from './SubMenu';
class stickyHeader extends Component {
		/*componentWillMount = () => {}*/
				/*this.state = {cartItem: cookie.load("order")};
					this.state.localVar = this.state.cartItem;
					this.state.displayToggle = "displayClassHidden";
					this.state.clickCount = 0;
				}*/
	render () {
		let data = data1; 
		//var localData = this.props.data;
		//var details = this.state.localVar;
		//let id;
		//let val;
		//let actualID;
		//let actualQuantity;
		//let newID ;
		//let img;
		//{id:12509401,quantity:0,imageList:./iphone1.png}
		/*if(null!=details && details != ""){
					var splitVal = details.split(",");
					id = splitVal[0];
					val = splitVal[1].substr(splitVal[1].indexOf(":")+1,splitVal[1].length);
					img = splitVal[2].substr(splitVal[2].indexOf(":")+1,splitVal[2].length);
				}*/
		/*let scrolloader = () => {
		    window.addEventListener('scroll', function(e){
		        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
		            shrinkOn = 300,
		            header = document.querySelector("header");
		            var toggelClass = document.getElementById("top-bar");
		            var cartToggle = document.getElementById("cartIcon");
		        if (distanceY > shrinkOn) {
		            classie.add(header,"smaller");
		            classie.add(toggelClass,"margin-Class");
		            classie.add(cartToggle,"margin-Class1");
		        } else {
		            if (classie.has(header,"smaller")) {
		                classie.remove(header,"smaller");
		                classie.remove(toggelClass,"margin-Class");
		                classie.remove(cartToggle,"margin-Class1");
		            }
		        }
		    });
		}
		window.onLoad = scrolloader();*/
		/*let cartCick = () => {
			this.setState({clickCount : this.state.clickCount + 1});
			if(this.state.clickCount %2 ===0 ) {
				this.setState({displayToggle: "displayClassVisible"});				
			} else {
				this.setState({displayToggle: "displayClassHidden"});
			}
		}*/		
		return (
			<div className="continer-fluid" id="myTopnav">
			    <div className="row topnav">
			    <div className="fixedMenu col-12 text-right">
			        	<ul className="menu">
			        		<li><a className="myacc" href="#">Home</a></li>
			        		<li><a className="myacc" href="#">Business</a></li>
			        		<li><a className="myacc" href="#">Aboutus</a></li>
			        	</ul>
			        </div>
			        <div className="container">
			        <div className="row">
			        	<div className="col-lg-8">
			        		<div className="nav">
			        			<ul className="navBar float-left">
			        				{data.map((el,index)=> 
			            			<li key={index} className="linkMenu"><a className="links" href={el.link}>{el.linkText}</a>
			      						  	<SubMenu subMenuData={data[index].submenu}/>				
			            			</li>
			            			)}
			            		</ul>	
			        		</div>
			        	</div>
			        <div className="col-lg-4">
			        <div className="flexModel rightMenu">
			        <div className="top-bar" id="top-bar float-left">
							<div className="search-container">
								<i className="fa fa-search" aria-hidden="true"></i>
						    	</div>
							</div>
			        		<div className="CartButton">
								<div className="cartIcon">
									<div id="cartIcon">
										<i className="fa fa-shopping-cart" aria-hidden="true"></i>
										<span className="bagde"></span>
									</div>
								</div>
							</div>
								<div className="button">
									<div className="avatarIcon">
										<i className="material-icons person">perm_identity</i>
									</div>
								</div>		
							</div>
			        	</div>		
			    	</div>
			    </div>
			</div>
		</div>	
		)
	}
}
export default stickyHeader;