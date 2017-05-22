import React, { Component} from 'react';
import data from '../TextAndImageComponent/moke';

class TextAndImage extends Component{
		state = {
			backgroundImage:data.BgImage,
			id : ''
		}
	render(){
  		let dialogVeriable = data;
  		let imageBackground = this.state.backgroundImage;
  		let styleImage;
  		if(this.state.backgroundImage === "") {
  			styleImage = {
  				background: data.bgColor
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
							<div className="imageThumbnail1">
								<a><img className="cursor img-fluid mx-auto d-block" src={dialogVeriable.Diagimage} title={dialogVeriable.imageTitle} alt={dialogVeriable.imageAlt}/></a>
							</div>
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
			} else if(dialogVeriable.selectClass === "right"){
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
			else if (dialogVeriable.selectClass === 'OverLayIcon') {
					output = (
					<div className="conatiner PaddingRight">	
						<div className="row">
							<div className="col-lg-12 no-padding">
								<div className="overLayImage">
									<img className="cursor img-fluid mx-auto d-block" src={dialogVeriable.Diagimage} title={dialogVeriable.imageTitle} alt={dialogVeriable.imageAlt}/>
									<div className={dialogVeriable.overLayIconClass}>
										<h2 className="textoutPut"><i className={"fa icon "+dialogVeriable.Icon} aria-hidden="true"></i></h2>
										<h4 className="TextImage text-center">{dialogVeriable.headerDetails}</h4>
										<a href={dialogVeriable.clickLink}><p className="productDetails text-center">{dialogVeriable.linkText}</p></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				)
			}
			else{
				output = (
					<div className="card ToutHeight">
					  <img className="card-img-top mx-auto d-block" src={dialogVeriable.Diagimage} alt={dialogVeriable.imageAlt} />
					  <div className="card-block">
					    <h4 className="card-title">{dialogVeriable.headerDetails}</h4>
					    <p className="card-text small">{dialogVeriable.textDescription}</p>
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