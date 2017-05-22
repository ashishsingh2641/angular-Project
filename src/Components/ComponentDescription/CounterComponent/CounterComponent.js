import React,{Component} from 'react';
import ButtonComponents from '../ButtonComponent/ButtonComponent';
import InputComponent from '../InputComponent/InputComponent';

class CounterComponent extends Component {
	state = {counter: 0, ButtonText: "+",ButtonText1: "-"};
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
			}
	render () {
		return (
			<div className="CounterComponent">
				<ButtonComponents onClickFunction={this.decrementCounter} ButtonLabel={this.state.ButtonText1}/>	
					<InputComponent counter={this.state.counter}/>
				<ButtonComponents onClickFunction={this.incrementCounter} ButtonLabel={this.state.ButtonText}/>
			</div>	
		)
	}
}

export default CounterComponent;