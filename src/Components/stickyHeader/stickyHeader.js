import React,{Component} from 'react';
import cookie from 'react-cookie';
//import classie from './classie';
import SubMenu from './SubMenu';
import logo from './logo-placeholder1.png';

class stickyHeader extends Component {
	/*state = {
		headerText: '',
		headerLink: '',
		count:0
	}*/
		componentWillMount = () => {
				this.state = {cartItem: cookie.load("order")};
					this.state.localVar = this.state.cartItem;
					this.state.displayToggle = "displayClassHidden";
					this.state.clickCount = 0;
					/*var x = this.state.count 
					for(x =0;x <this.props.data.length;x++) {
						this.setState({
							headerText: this.props.data[x].submenu[x].subchildlink[x].subChildText,
							headerLink: this.props.data[x].submenu[x].subchildlink[x].submenuChildlink
						})
					}*/
				}
	render () {
		//var localData = this.props.data;
		var details = this.state.localVar;
		let id;
		let val;
		let actualID;
		let actualQuantity;
		let newID ;
		let img;
		let CloseNav;
		let OpenNav;
		CloseNav = () => {
			document.getElementById("mySidenav").style.width = "0";
		}
		OpenNav = () => {
			document.getElementById("mySidenav").style.width = "100%";
		}
		//{id:12509401,quantity:0,imageList:./iphone1.png}
		if(null!=details && details != ""){
					var splitVal = details.split(",");
					id = splitVal[0];
					val = splitVal[1].substr(splitVal[1].indexOf(":")+1,splitVal[1].length);
					img = splitVal[2].substr(splitVal[2].indexOf(":")+1,splitVal[2].length);
				}
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
		let cartCick = () => {
			this.setState({clickCount : this.state.clickCount + 1});
			if(this.state.clickCount %2 ===0 ) {
				this.setState({displayToggle: "displayClassVisible"});				
			} else {
				this.setState({displayToggle: "displayClassHidden"});
			}
		}
		//alert(this.props.data[0].submenu[0].subchildlink[1].sublink)
		return (
			<div className="continer-fluid topnav">
			    <div className="row">
			    <div className="fixedMenu col-6 hidden-lg-down">
			    	<li className="linkMenuImage float-left"><a href="/index.html"><img className="logoIcon img-fluid d-block"src={logo} role="logo"/></a></li>
			    </div>
			    <div className="col-6">    	
			        	<ul className="menu hidden-lg-down">
			        		<li>
			        			<div className="search-container">
									<i className="material-icons searchIconHeader">search</i>
						    	</div>
			        		</li>
			        		<li><a className="myacc" href="#">Home</a></li>
			        		<li><a className="myacc" href="#">Business</a></li>
			        		<li><a className="myacc" href="#">Aboutus</a></li>
			        	</ul>
			        </div>
			        <div className="container">
			        <div className="row">
			        	<div className="col-lg-8 hidden-lg-down">
			        		<div className="nav">
			        			<ul className="navBar">
			        				{this.props.data.map((el,index)=>
			            			<li key={index} className="linkMenu text-center">
			            				<a className="links" href={el.link}>{el.linkText}</a>
							    		<div className="submenuLink">  	
			      						  	<SubMenu subMenuData={this.props.data[index].submenu} />
			      						</div>  	
			            			</li>
			            			)}
			            		</ul>	
			        		</div>
			        	</div>
			        <div className="col-lg-4">
			        	<div className="flexModel rightMenu hidden-lg-down float-right">
			        		<div className="top-bar" id="top-bar float-left">
								<div className="avatarIcon">
									<i className="material-icons person">perm_identity</i>
								</div>	
							</div>
			        		<div className="CartButton hidden-lg-down">
								<div className="cartIcon">
									<div id="cartIcon">
										<i className="fa fa-shopping-cart hidden-lg-down" onClick={cartCick } aria-hidden="true"></i>
										<span className="bagde hidden-lg-down">{val}</span>
									</div>
									<div className={this.state.displayToggle }>
										<div className="card positionCard hidden-lg-down">
											<img src={img} alt="imgList" className="ImageCard mx-auto d-block img-fluid"/>
											<div className="card-block">
											    <h6 className="card-title">{"Product  " +id}</h6>
											    <p className="card-text small">{"Total  "+ val +" items"}</p>
											    <a href="./checkOut.html" className="btn btn-warning btn-block no-border"><i className="fa fa-cart-plus" aria-hidden="true"></i>Check Out</a>
											  </div>
											</div>
										</div>
									</div>
								</div>		
							</div>
			        	</div>		
			    	</div>	
			    </div>
			<div className="col-12 hidden-xl-up mobileMenu">
				<div className="row">	
					<div  className="col-4 float-left"onClick={OpenNav}><i className="material-icons menuMobile">menu</i></div>
			        	<div className="col-4 text-center"><a href="/index.html"><img className="mx-auto logoIcon img-fluid d-block"src={logo} role="logo"/></a></div>
			      		<div className="cartIconMobile col-4">
							<i className="fa fa-shopping-cart mobileCart float-right" aria-hidden="true"></i>				
						</div>
			      	</div>
			      	<div id="mySidenav" className="sidenav">
  						<a href="javascript:void(0)" className="closebtn" onClick={CloseNav}>&times;</a>			
						<ul className="navBar">
			        		{this.props.data.map((el,index)=>
				            		<li key={index} className="linkMenu text-center"><a className="links" href={el.link}>{el.linkText}</a>
								    	<div className="submenuLink hidden-xs-up">  	
				      						<SubMenu subMenuData={this.props.data[index].submenu} />
				      					</div>  	
				            		</li>
			            		)}
			            </ul>
					</div>
			    </div>    
			</div>
		</div>	
		)
	}
}
export default stickyHeader;