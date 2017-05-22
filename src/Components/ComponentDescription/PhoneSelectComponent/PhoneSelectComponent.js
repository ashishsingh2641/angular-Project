/* eslint-disable */
// eslint-disable-next-line
import React,{Component} from 'react';
import circleImage from '../PhoneSelectComponent/moke';

class PhoneSelectComponent extends Component {
	state = {
		circleImage: circleImage,
		componentVal :'colorImages',
		selectImage: 'selectedImage_0',
		active: 'capacity_0'
	}
	render (props) {
		let test = this.state.circleImage;
		let compVal = this.state.componentVal;
		let imagesArray = [];
		let i;
		if(this.state.componentVal === compVal )
			for (i=0; i<test.length;i++) {
				if(this.state.selectImage === 'selectedImage_'+i.toString()){
				  	imagesArray.push(
				  		<div className="pushSelector v-p-large">
							<img id={i} src={test[i]} className="img-circle colorPicker" onClick={this.props.selectClick}/>
							<i className="material-icons colorSelector">check</i>
						</div>
					)
				} else {
					imagesArray.push(
						<img id={i} src={test[i]} className="img-circle colorPicker v-p-large" onClick={this.props.selectClick}/>
					)
				}	
			}
			else  {
				for (i=0; i<test.length;i++) {
				  	if(this.state.active === 'capacity_'+i.toString()){
				  		imagesArray.push(
							<span id={i} className="active capacity" onClick={this.props.selectClick}>{test[i]}</span>
				  		)
				  	}else{
				  		imagesArray.push(
							<span id={i} className="capacity" onClick={this.props.selectClick}>{test[i]}</span>
				  		)
				  	}
				}	
			}
		return(
			<div className={this.props.componentVal} >
				<div className="phoneColor_picker">
					{imagesArray}
				</div>	
			</div>
				
		)
		
	}
}

export default PhoneSelectComponent;