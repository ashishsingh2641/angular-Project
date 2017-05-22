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
				OptionVal: this.props.data.optionVal,
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
			        return 'Please Login or Signup... ';
			      case 1:
			        return 'Please provide Delivery Address';
			      case 2:
			        return 'Order Successful';
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
    	return(
			<MuiThemeProvider>
			<div className="container cartPage">
				<div className="row">
					<div className="col-lg-12">
					<div className="step">
						<div style={{width: '100%', maxWidth: "100%", margin: 'auto'}}>
					        <div className="FormSteps">
					        <Stepper activeStep={stepIndex}>
					          <Step>
					            <StepLabel>Login or Signup</StepLabel>
					          </Step>
					          <Step>
					            <StepLabel>Delivery Address ...</StepLabel>
					          </Step>
					       	  <Step>
					            <StepLabel>Registration Completed!</StepLabel>
					          </Step>
					        </Stepper>
					        </div>
					        <div>
					          {finished ? (
					          	<div className="text-center">
					          		<h6 className="text-muted">{"your order " +id+ " is succesfully Generated"}</h6>
					            	<p className="redirectionPage"><i className="material-icons checkIcon">card_giftcard</i><span>you order has been succesfull</span></p>
					            	<CircularProgress className="spinnerTag" size={70} thickness={5} />
					            </div>
					          ) : (
		<div className="">
			<div className="row">
				<div className="col-lg-12 noPadding">
					<p>{this.getStepContent(stepIndex)}</p>
					<Divider className="divider"/>
				<div className="row" style={{marginTop: 12}}> 
					<div className={"col-lg-6 "+this.state.displayFirstForm}>
						<div>	
							<LabelComponent labelFor="childComponent1" labelText="First Name"/>
							<FormInputComponent inputClass="BasicFrom" PlaceholderText="Please enter your first name" Value={this.state.value} checkValidation={this.checkValidation} messageText={this.state.messagetext1} ValidationClass={this.state.ValidationClassInput}/>
						</div>
						<div>
							<LabelComponent labelFor="childComponent3" labelText="Last Name"/>
							<FormInputComponent inputClass="BasicFrom" PlaceholderText="Please enter your last name" Value={this.state.newvalue2} checkValidation={this.checkValidation2} messageText={this.state.messagetext3} ValidationClass={this.state.ValidationClassInput}/>
						</div>
					</div>
					<div className={"col-lg-6 "+this.state.displayFirstForm}>
						<div>
							<LabelComponent labelFor="childComponent2" labelText="Email"/>
							<FormInputComponent inputClass="BasicFrom" PlaceholderText="Your Email ID" Value={this.state.newvalue} checkValidation={this.checkValidation1} messageText={this.state.messagetext2} ValidationClass={this.state.ValidationClassInput}/>
						</div>
						<div>
							<LabelComponent labelFor="childComponent4" labelText="Mobile Number"/>
							<FormInputComponent inputClass="BasicFrom" PlaceholderText="+91-xxxxxxxxxx" Value={this.state.newvalue3} checkValidation={this.checkValidation3} messageText={this.state.messagetext4} ValidationClass={this.state.ValidationClassInput}/>
						</div>
					</div>
						<div className={"col-lg-6 "+ this.state.displaySecForm}>
							<LabelComponent labelFor="childComponent5" labelText="Address" />
							<FormInputComponent inputClass="BasicFrom" PlaceholderText="Address" Value={this.state.newvalue5} checkValidation={this.checkValidation5} messageText={this.state.messagetext5} ValidationClass={this.state.ValidationClassInput}/>
						</div>
						<div className={"col-lg-6 "+ this.state.displaySecForm}>
							<LabelComponent labelFor="childComponent6" labelText="Address(Optional)" />
							<FormInputComponent inputClass="BasicFrom" PlaceholderText="Additional Lines" Value={this.state.newvalue6} checkValidation={this.checkValidation6} messageText={this.state.messagetext6} ValidationClass={this.state.ValidationClassInput}/>
						</div>
						<div className={"col-lg-6 "+ this.state.displaySecForm}>
							<LabelComponent labelFor="DatePicker" labelText="Plase Select Delivery Date"/>
							<DatePicker hintText="Please Select Date" mode="landscape" className="datePicker"/>
						</div>
						<div className={"col-lg-6 "+ this.state.displaySecForm}>
							<LabelComponent labelFor="DatePicker" labelText="Please provide instructions if any"/>
							<TextField hintText="Example: Please deliver my product between 2:00pm to 4:00pm" className="TextFieldComponent"/>
						</div>
						<div className="col-lg-12">
						<div className={"orderSummery row "+ this.state.displayItems}>
								<div className="col-2 FinalSummarycart">
									<img src={img} alt="imgList" className="ImageCard img-fluid mx-auto d-block img-rounded img-thumbnail"/>
								</div>
								<div className="col-6 text-center">
									<h5 className="text-muted">Please Verify Your Details</h5>

									<div className="text-muted">Name: {this.state.value} {this.state.newvalue2}</div>
									<div className="text-muted">Email ID: {this.state.newvalue}</div>
									<div className="text-muted">Contact Number: {this.state.newvalue3}</div> 
									<div className="text-muted">Delivery Address: {this.state.newvalue5}&nbsp;{this.state.newvalue6}</div>
								</div>
								<div className="col-4">	
									<h5 className="Bagde">{"Total Number of Items: " +val}</h5>
									<h6 className="card-title">{"Product " +id}</h6>
								</div>
							</div>	
					</div>
				</div>
		<div className="row">	
					<div className="col-12 col-lg-6 mx-auto">  	
						<FlatButton label="login" disabled={stepIndex === 0} onClick={this.handlePrev}
						style={{marginRight: 12}}/>
					</div>
					<div className="col-12 col-lg-6 mx-auto">
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