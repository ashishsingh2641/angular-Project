import React, { Component} from 'react';
class TextAndImage extends Component{
		state = {
			backgroundImage:this.props.data.BgImage,
			id : ''
		}
	render(){
  		let dialogVeriable = this.props.data;
  		let imageBackground = this.state.backgroundImage;
  		let styleImage;
  		if(this.state.backgroundImage === "") {
  			styleImage = {
  				background: this.props.data.bgColor
  			}
  		} else {
  			styleImage = {
  				background:`url(${imageBackground})`
  			}
  		}
  		let output;
			if(dialogVeriable.selectClass === "left") {
				output = (
					<div className="conatiner">
					<div className={dialogVeriable.bgColor+" row"} style={styleImage}>
						<div className="float-left col-lg-5">
						{	dialogVeriable.Diagimage === ''? 
							'' 
						:
						 	<div className="imageThumbnail1">
								<a><img className="cursor img-fluid mx-auto d-block" src={dialogVeriable.Diagimage} title={dialogVeriable.imageTitle} alt={dialogVeriable.imageAlt}/></a>
							</div>
					 	}
							
						</div>
						<div className="col-lg-7">
							<div className="imageDescription">
								<h1>{dialogVeriable.headerDetails}</h1>
								<p className="descrition">{dialogVeriable.textDescription}</p>
								<a href={dialogVeriable.clickLink}>{dialogVeriable.linkText}</a>
							</div>
						</div>
					</div>
					</div>
				)
			} else {
				output = (
					<div className="row rightImage" style={styleImage}>
						<div className="col-lg-7 float-left">
							<div className="imageDescription">
								<h1 className="text-left">{dialogVeriable.headerDetails}</h1>
								<p className="descrition">{dialogVeriable.textDescription}</p>
								<a href="#">{dialogVeriable.linkText}</a>
							</div>
						</div>
						<div className="float-right col-lg-5">
							<div className="imageThumbnail">
								<a href={dialogVeriable.clickLink}><img  className="cursor img-fluid" src={dialogVeriable.Diagimage} title={dialogVeriable.imageTitle} alt={dialogVeriable.imageAlt}/></a>
							</div>
						</div>						
					</div>
				)
			}
		return (
			<div>
				{output}
			</div>
		)
	}
}	

export default TextAndImage;