import React,{Component } from 'react';

class footerComponent extends Component {
	render() {
		return (
			<div className="footerComponent">
				<div className="container">
					<div className="row">
						<div className="col-lg-4">
							<ul className="footerMenu1">
								<li className="footer_submenu">@mail</li>
								<li className="footer_submenu">new places</li>
								<li className="footer_submenu">find us</li>
								<li className="footer_submenu">feedback</li>
							</ul>	
						</div>
						<div className="col-lg-4">
							<ul className="footerMenu1">
								<li className="footer_submenu">contact us</li>
								<li className="footer_submenu">Site Map</li>
								<li className="footer_submenu">mail us</li>
								<li className="footer_submenu">call us</li>
							</ul>	
						</div>
						<div className="col-lg-4">
							<ul className="footerMenu1">
								<li className="footer_submenu"><i className="fa fa-google-plus"></i>google</li>
								<li className="footer_submenu"><i className="fa fa-facebook"></i> facebook</li>
								<li className="footer_submenu"><i className="fa fa-twitter" aria-hidden="true"></i>&nbsp;twitter</li>
								<li className="footer_submenu">contact us</li>
							</ul>	
						</div>
					</div>
				</div>
			</div>
		)
	}	
}

export default footerComponent;