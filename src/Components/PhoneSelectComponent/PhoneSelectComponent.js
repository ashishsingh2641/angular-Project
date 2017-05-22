import React,{Component} from 'react';

class PhoneSelectComponent extends Component {
	render (props) {
		let test = this.props.circleImage;
		let imagesArray = [];
		let i;
		if(this.props.componentVal === "colorImages" )
			for (i=0; i<test.length;i++) {
				if(this.props.selectImage === 'selectedImage_'+i.toString()){
				  	imagesArray.push(
				  		<div className="pushSelector">
							<img id={i} src={test[i]} className="img-circle colorPicker" onClick={this.props.selectClick}/>
							<i className="material-icons colorSelector">check</i>
						</div>
					)
				} else {
					imagesArray.push(
						<img id={i} src={test[i]} className="img-circle colorPicker" onClick={this.props.selectClick}/>
					)
				}	
			}
			else  {
				for (i=0; i<test.length;i++) {
				  	if(this.props.active === 'capacity_'+i.toString()){
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