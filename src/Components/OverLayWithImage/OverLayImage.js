import React,{Component} from 'react';

class OverLayImage extends Component {
	render () {
		let dialogVeriable = this.props.data;
		return(
			<div className="PaddingRight OverLayIcon">	
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
}
export default OverLayImage;