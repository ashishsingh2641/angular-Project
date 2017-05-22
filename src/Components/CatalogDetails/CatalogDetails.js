import React, { Component} from 'react';
import Button from '../ButtonComponent/ButtonComponent';
import InputComponent from '../InputComponent/InputComponent';
//import cookie from 'react-cookie';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200,fullWhite} from 'material-ui/styles/colors';
import {Card,CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Toggle from 'material-ui/Toggle';
import PhoneSelectComponent from '../PhoneSelectComponent/PhoneSelectComponent';

class CatalogDetails extends Component {
	state = {
			counter: 0,
			ButtonText: "+",
			ButtonText1: "-",
			buyNow: "Addtocart", 
			buttonClass1:"btn btn-primary active btn-block buttonIcon",
			buttonClass2:"btn-default", 
			ComponentId: this.props.data.identifier,
			checkOut: "Checkout",
			buttonClass3: "btn btn-warning active btn-block",
			cartValue: "",
			imgItem: this.props.data.details.images,
			selectionImage: this.props.data.details.phoneImage,
			expanded: false,
			description: "Take your iPhone experience to the next level with iPhone 6. Featuring new camera systems, a better battery-life, an efficient processor and powerful stereo speakers, this smartphone will drastically enhance your iPhone experience. With a sharp and vibrant display, and a sleek water-resistant body, this phone is as powerful as it is attractive.",
			Isactive: 'capacity_0',
			imageSelector: 'selectedImage_0'
		};
		ImageSelector = (event) => {
			this.setState({imageSelector: 'selectedImage_'+event.target.id})
		};
		toggleCapacity =(event) => {
  				this.setState({Isactive: 'capacity_'+event.target.id})
  		};
		handleExpandChange = (expanded) => {
		    this.setState({expanded: expanded});
		};

		handleToggle = (event, toggle) => {
		    this.setState({expanded: toggle});
		};

		handleExpand = () => {
		    this.setState({expanded: true});
		  };

		handleReduce = () => {
		    this.setState({expanded: false});
		};
  		incrementCounter = () => {	
  			this.setState((prevState) => ({
  				counter: prevState.counter+1
  			}));

  		};
  		decrementCounter = (Event) => {
  				if(this.state.counter > 0 ){
  						this.setState((prevState) => ({
  						counter: prevState.counter-1
  					}));		
  				}else {
  					Event.stopImmediatePropagation
  				}
			};
			cartClick = () => {
				/*console.log(browserHistory.push('/Cart/' + this.state.counter))*/
			function setCookie(cname,cvalue,exdays) {
			    var d = new Date();
			    d.setTime(d.getTime() + (exdays*24*60*60*1000));
			    var expires = "expires=" + d.toGMTString();
			    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

			}

			function getCookie(cname) {var name = cname + "=";
			    var decodedCookie = decodeURIComponent(document.cookie);
			    var ca = decodedCookie.split(';');
			    for(var i = 0; i < ca.length; i++) {
			        var c = ca[i];
			        while (c.charAt(0) == ' ') {
			            c = c.substring(1);
			        }
			        if (c.indexOf(name) == 0) {
			            return c.substring(name.length, c.length);
			        }
			    }
			    return "";
			}
			function handleCookie(data) {
			    var orderCookie=getCookie("order");
			    if (orderCookie != "") {
			        setCookie("order", data, 30);
			    } else {
			        setCookie("order", data, 30);
			    }
			}
				var id; 
				id = this.state.ComponentId;
				var count; 
				count = this.state.counter;
				var data = "id:"+id+",quantity:"+count+"";
				var imageItem;
				imageItem = this.state.imgItem;
				var data = "id:"+id+",quantity:"+count+",imageList:"+imageItem;
				handleCookie(data);

				this.state.cartValue = getCookie("order");
				window.location.reload();
			};
  render() {
			let dialogVeriable = this.props.data;
			let numOfCircle = 3;
			let circles = [];
			let numberOfStars = 5;
			let stars = [];
			let i=0;
			let j=0;
			let elements = [];
			let specDetails;
			elements = dialogVeriable.specifications.map((specDetails) => {
				switch(specDetails.specificationType){
					case ("specifications.en_us") : return (
							<div>
								<ul className="">
									<li><b>Product ID:</b>{specDetails.specificationModel.sku}</li>
									<div><b>Warranty Duration:</b>{specDetails.specificationModel.warrantyDuration}</div>
									<div><b>Supported Vide Formats:</b>{specDetails.specificationModel.videoFormats}</div>
									<div><b>Whats In Box:</b>{specDetails.specificationModel.whatsInABox}</div>
									<div><b>Capacity:</b>{dialogVeriable.details.size}</div>
									<div><b>Price:</b>{dialogVeriable.details.price}</div>
								</ul>
							</div>	
					)
				}
			})
			for (i; i<numberOfStars;i++) {
				  stars.push(
				  	
						<label className="star" htmlFor={i} title="Rocks!"></label>
							)
			}
			for (j; j<numOfCircle;j++) {
				circles.push(
					<span key={j} className="circleImage"></span>
				)
			}
			let reviewFromCustomer = " rate and review from customer";
			let priceDetails = 3245;
			const compStyle = {
				'box-shadow':'0px 0px 0px 0px transprent !important',
				'background': 'red'
			}
		return (
		<MuiThemeProvider>
			<div className='container CatalogDetails' id={this.state.ComponentId}>
				<div className="row">
					<div className="col-lg-4">
						<Card>
							<div className="text-right">
							    <FloatingActionButton mini={true} className="IconButton">
							      <FontIcon className="material-icons fav">favorite</FontIcon>
							    </FloatingActionButton>
							    </div>
						    <CardMedia overlay={<CardTitle title={dialogVeriable.details.pageTitle} subtitle={dialogVeriable.details.displayName} />}>
						 		<img className="img-fluid mx-auto d-block ProductImage" src={dialogVeriable.details.images} alt={dialogVeriable.imageName}/>
							</CardMedia>
						</Card>
						<div className="row">
							<div className="col-6 v-p-small">
								<Button ref={this.cart= this.state.counter} onClickFunction={this.cartClick} buttonClass={this.state.buttonClass1 + " text-center cartButton"} ButtonLabel={this.state.buyNow}/>
							</div>
							<div className="col-6 v-p-small">
								<a href="./checkOut.html" onClick={this.CheckOut} className="btn btn-warning active btn-block anchor-button"><i className="fa fa-cart-plus" aria-hidden="true"></i> Checkout</a>
							</div>
						</div>
					</div>	
					<div className="col-lg-8">
						<h5 className="text-left">{dialogVeriable.details.pageTitle}</h5>
						<p className="v-p-large">{this.state.description}</p>
						<div>
							<FlatButton backgroundColor="#388E3C" hoverColor="#388E3C" className="reviewComponent" labelPosition="before" label="4.1" icon={<ActionGrade color={fullWhite} />}/><span>{reviewFromCustomer}</span>
						</div>
						<div className="Pricing v-p-small">
							<h3 className="phonePrice">RM {priceDetails}</h3><span className="line-through text-muted">RM 3566</span><span className="offerClass">&nbsp;20% off</span>
						</div>	
						<div>
							<h4>Add items</h4>
							<div className="CounterButton">
								<Button onClickFunction={this.decrementCounter} ButtonLabel={this.state.ButtonText1} buttonClass={this.state.buttonClass2 + " btn"}/>
									<InputComponent counter={this.state.counter}/>
								<Button onClickFunction={this.incrementCounter} ButtonLabel={this.state.ButtonText} buttonClass={this.state.buttonClass2 + " btn"}/>
							</div>
						</div>
						<div className="phonecolor">
							<span className="selectText">select color</span>
							<div>
              					<PhoneSelectComponent selectImage={this.state.imageSelector} circleImage={dialogVeriable.details.phoneImage} componentVal="colorImages" selectClick={this.ImageSelector.bind(this)}/>
            				</div>
						</div>
						<div>
							<div className="Capacity">
								<span className="text-muted colorSelect">SELCT SIZE</span>
								<PhoneSelectComponent active={this.state.Isactive} circleImage={this.props.data.details.size} componentVal="jhjhjhjh" selectClick={this.toggleCapacity.bind(this)}/>
							</div>
						</div>	
						<div className="ACCinfo">
							<Card className="override" containerStyle={{compStyle}} expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
					        <CardText>
					          <Toggle
					            toggled={this.state.expanded}
					            onToggle={this.handleToggle}
					            labelPosition="left"
					            label="More Details Apple Phone "
					          className="LabelText"/>
					        </CardText>
					        <CardMedia
					          expandable={true}>
					        </CardMedia>
					        <CardTitle className="cardTitle" title="More Info" subtitle="" expandable={true} />
					        <CardText expandable={true} actAsExpander={true}
					          showExpandableButton={true} className="cardText">
					          {elements}
					        </CardText>
					      </Card>
						</div>
					</div>
				</div>		
			</div>
		</MuiThemeProvider>
		);
	}
}

export default CatalogDetails;