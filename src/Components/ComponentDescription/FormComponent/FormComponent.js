import React,{Component} from 'react';
import LabelComponent from '../Label/label';
import FormInputComponent from '../FormInputComponent/FormInputComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import cookie from 'react-cookie';
import CircularProgress from 'material-ui/CircularProgress';
import data2 from '../FormComponent/moke';
//import SelectBox from '../SelectBox/SelectBox';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';/*
import ImageUpload from '../FileUploader/FileUploader';*/

class FormComponent extends Component {
			state = {
				OptionVal: data2.optionVal,
				messagetext:'',
				value:'',
				newvalue: '',
				newvalue2: '',
				newvalue3: '',
				finished: false,
    			stepIndex: 0,
    			ValidationClassInput: '',
    			displayFirstForm: 'Displayblock',
    			displaySecForm: 'hidden',
    			newvalue5: '',
    			newvalue6: '',
    			cartItem: cookie.load("order"),
    			clickCount: 0,
    			displayItems: 'hidden'
			}
			componentWillMount = () => {
				injectTapEventPlugin();
				this.setState ({
					localVar:this.state.cartItem
					
				})
			}
			checkValidation = (e) => {
					this.setState({value: e.target.value})
				}
			checkValidation1 = (e) => {
						this.setState({newvalue: e.target.value})
				}
			checkValidation2 = (e) => {
				this.setState({newvalue2: e.target.value})
			}
			checkValidation3 = (e) => {
				this.setState({newvalue3: e.target.value})
			}
			checkValidation5 = (e) => {
				this.setState({
					newvalue5: e.target.value
				})
			}
			checkValidation6 = (e) => {
				this.setState({
					newvalue6: e.target.value
				})
			}
			handleNext = (e) => {

					const {stepIndex} = this.state;
		    	if(stepIndex === 0) {
		    			if(this.state.value === '' || this.state.newvalue === '') {
		    				this.setState({
								messagetext1:'please enter required field',								
								messagetext2:'please enter required field',
								messagetext3:'please enter required field',
								messagetext4:'please enter required field',
								ValidationClassInput: 'error',
								stepIndex: 0,
							})
						e.preventDefault();
						}
						else  {
							this.setState({
		      					stepIndex: 1,
								messagetext1:'',
								messagetext2:'',
								messagetext3:'',
								messagetext4:'',
								ValidationClassInput: '',
								displayFirstForm: 'hidden',
								displaySecForm: 'Displayblock'
							})
						}
		    		}
		    		else if (stepIndex === 1) {
		    			if(this.state.newvalue5 === '') {
		    				this.setState({
		    					messagetext5: "please enter the required fields",
		    					messagetext6: "please enter the required fields",
		    					ValidationClassInput:'error',
		    					displaySecForm: 'Displayblock'
		    				})
		    			} else {
		    				this.setState({
		      					stepIndex: 2,
								messagetext5:'',
								messagetext6:'',
								displayFirstForm: 'hidden',
								displaySecForm: 'hidden',
								displayItems: 'block'
							})
		    			}
		    		}
		    		else {
		    			this.setState({
		    				stepIndex: stepIndex + 1,
      						finished: stepIndex >= 2,
      						displayItems: 'hidden'
		    			})
		    			setTimeout(function () {
       						window.location.href = "./index.html"; 
    					}, 5000);
		    		}
		  		};

			handlePrev = () => {
			    const {stepIndex} = this.state;
			    if (stepIndex > 0) {
			      this.setState({
			      	stepIndex: stepIndex - 1,
				    value:'',
					newvalue: '',
					newvalue2: '',
					newvalue3: '',
			      	displayFirstForm: 'Displayblock',
					displaySecForm: 'hidden',

			      });
			    }

			  };
			getStepContent = (stepIndex) => {
			    switch (stepIndex) {
			      case 0:
			        return 'Please log or sinup... ';
			      case 1:
			        return 'Delivery Address ...?';
			      case 2:
			        return 'Order succesfull';
			      default:
			        return 'You\'re a long way from home sonny jim!';
			    }
			  }
	render() { 
		if (!this.props.data) {
            return null;

        }
        var details = this.state.localVar;
		let id;
		let val;
		let actualID;
		let actualQuantity;
		let newID ;
		let img;
		var splitVal
        if(null!=details && details != ""){
					splitVal = details.split(",");
					console.log(splitVal);
					id = splitVal[0].toString();
					val = splitVal[1].substr(splitVal[1].indexOf(":")+1,splitVal[1].length);
					img = splitVal[2].substr(splitVal[2].indexOf(":")+1,splitVal[2].length);
				}
		const {finished, stepIndex} = this.state;
    	const contentStyle = {margin: '0 16px'};
		return(
			<MuiThemeProvider>
			<div className="container cartPage">
				<div className="row">
					<div className="col-lg-12">
					<div className="step">
						<div style={{width: '100%', maxWidth: "100%", margin: 'auto'}}>
					        <Stepper activeStep={stepIndex} >
					          <Step>
					            <StepLabel>login or sign-up</StepLabel>
					          </Step>
					          <Step>
					            <StepLabel>Delivery Address ...</StepLabel>
					          </Step>
					       	  <Step>
					            <StepLabel>registration done!</StepLabel>
					          </Step>
					        </Stepper>
					        <div style={contentStyle}>
					          {finished ? (
					          	<div className="text-center">
					          		<h6 className="text-muted">{"your order " +id+ " is succesfully Generated"}</h6>
					            	<p className="redirectionPage"><i className="material-icons checkIcon">card_giftcard</i><span>you order has been succesfull</span></p>
					            	<CircularProgress className="spinnerTag" size={70} thickness={5} />
					            </div>
					          ) : (
		<div className="container">
			<div className="row">
				<div className="col-lg-12 noPadding">
					<p>{this.getStepContent(stepIndex)}</p>
					<Divider className="divider"/>
				<div className="row" style={{marginTop: 12}}> 
					<div className={"col-lg-6 "+this.state.displayFirstForm}>
						<div>	
							<LabelComponent labelFor="childComponent1" labelText="FirstName"/>
							<FormInputComponent inputClass="BasicFrom" PlaceholderText="FirstName" Value={this.state.value} checkValidation={this.checkValidation} messageText={this.state.messagetext1} ValidationClass={this.state.ValidationClassInput}/>
						</div>
						<div>
							<LabelComponent labelFor="childComponent2" labelText="Email"/>
							<FormInputComponent inputClass="BasicFrom" PlaceholderText="email" Value={this.state.newvalue} checkValidation={this.checkValidation1} messageText={this.state.messagetext2} ValidationClass={this.state.ValidationClassInput}/>
						</div>
					</div>
					<div className={"col-lg-6 "+this.state.displayFirstForm}>
						<div>
							<LabelComponent labelFor="childComponent3" labelText="LastName"/>
							<FormInputComponent inputClass="BasicFrom" PlaceholderText="LastName" Value={this.state.newvalue2} checkValidation={this.checkValidation2} messageText={this.state.messagetext3} ValidationClass={this.state.ValidationClassInput}/>
						</div>
						<div>
							<LabelComponent labelFor="childComponent4" labelText="PhoneNumber"/>
							<FormInputComponent inputClass="BasicFrom" PlaceholderText="+91-xxxxxxx" Value={this.state.newvalue3} checkValidation={this.checkValidation3} messageText={this.state.messagetext4} ValidationClass={this.state.ValidationClassInput}/>
						</div>
					</div>
						<div className={"col-lg-6 "+ this.state.displaySecForm}>
							<LabelComponent labelFor="childComponent5" labelText="Address" />
							<FormInputComponent inputClass="BasicFrom" PlaceholderText="Address" Value={this.state.newvalue5} checkValidation={this.checkValidation5} messageText={this.state.messagetext5} ValidationClass={this.state.ValidationClassInput}/>
						</div>
						<div className={"col-lg-6 "+ this.state.displaySecForm}>
							<LabelComponent labelFor="childComponent6" labelText="Address-optional" />
							<FormInputComponent inputClass="BasicFrom" PlaceholderText="more" Value={this.state.newvalue6} checkValidation={this.checkValidation6} messageText={this.state.messagetext6} ValidationClass={this.state.ValidationClassInput}/>
						</div>
						<div className={"col-lg-6 "+ this.state.displaySecForm}>
							<LabelComponent labelFor="DatePicker" labelText="Plase select Delivery date"/>
							<DatePicker hintText="Please select Date" mode="landscape" className="datePicker"/>
						</div>
						<div className={"col-lg-6 "+ this.state.displaySecForm}>
							<LabelComponent labelFor="DatePicker" labelText="Plese give some comment"/>
							<TextField hintText="The hint text can be as long as you want, it will wrap." className="TextFieldComponent"/>
						</div>
						<div className="col-lg-12">
						<div className={"orderSummery row "+ this.state.displayItems}>
								<div className="col-2 FinalSummarycart">
									<img src={img} alt="imgList" className="ImageCard img-fluid mx-auto d-block img-rounded img-thumbnail"/>
								</div>
								<div className="col-6 text-center">
									<h5 className="text-muted">yourdetails</h5>

									<div className="text-muted">Name:- {this.state.value} {this.state.newvalue2}</div>
									<div className="text-muted">email Address:- {this.state.newvalue}</div>
									<div className="text-muted">Phone number:- {this.state.newvalue3}</div> 
									<div className="text-muted">Address  :-{this.state.newvalue5}&nbsp;{this.state.newvalue6}</div>
								</div>
								<div className="col-4">	
									<h5 className="Bagde">{"Numberofitems:- " +val}</h5>
									<h6 className="card-title">{"Product-Id " +id}</h6>
									<p className="card-text small">{"selecteditem:- "+ val}</p>
								</div>
							</div>	
					</div>
				</div>
		<div className="row">	
					<div className="col-6">  	
						<FlatButton label="login" disabled={stepIndex === 0} onClick={this.handlePrev}
						style={{marginRight: 12}}/>
					</div>
					<div className="col-6">
						<RaisedButton label={stepIndex === 2 ? 'Finish' : 'Next'} primary={true}
						onClick={this.handleNext.bind(this)} className="primaryButton"/>
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
				</div>
			</div>
		</MuiThemeProvider>	
		)
	}
}

export default FormComponent;