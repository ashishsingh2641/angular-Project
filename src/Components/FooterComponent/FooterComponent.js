import React,{Component } from 'react';

class footerComponent extends Component {
	render() {
		return (
			<div className="footerComponent container-fluid">
				<div className="row">
					<div className="col-lg-12">
						<div className="container">
							<div className="row">
							<div className="col-12 siteMap">
								<div className="float-left">
									Site Map | Site Feedback
								</div>
							</div>
								<div className="col-lg-2">
									<ul className="footerMenu1">
										<li className="footer_submenu"><h4>SIM Related</h4></li>
										<li className="footer_submenu"><a href="#">Account</a></li>
										<li className="footer_submenu small"><a href="#">Do Not Disturb</a></li>
										<li className="footer_submenu small"><a href="#">VAS Services</a></li>
										<li className="footer_submenu small"><a href="#">Blackout Days</a></li>
										<li className="footer_submenu small"><a href="#">CAF Documentation</a></li>
									</ul>	
								</div>
								<div className="col-lg-2">
									<ul className="footerMenu1">
										<li className="footer_submenu"><h4>Our Policies</h4></li>
										<li className="footer_submenu small"><a href="#">ISMS</a></li>
										<li className="footer_submenu small"><a href="#">Terms Of Use</a></li>
										<li className="footer_submenu small"><a href="#">Data Privacy Policy</a></li>
										<li className="footer_submenu small"><a href="#">Bill Rounding Off</a></li>
										<li className="footer_submenu small"><a href="#">Telecom Charter</a></li>
										<li className="footer_submenu small"><a href="#">Mobile Etiquettes</a></li>
									</ul>	
								</div>
								<div className="col-lg-2">
									<ul className="footerMenu1">
										<li className="footer_submenu"><h4>Looking For Us</h4></li>
										<li className="footer_submenu small"><a href="#">Brand Stores</a></li>
										<li className="footer_submenu small"><a href="#">Customer Care Addresses</a></li>
										<li className="footer_submenu small"><a href="#">Our Offices</a></li>
									</ul>	
								</div>
								<div className="col-lg-2">
									<ul className="footerMenu1">
										<li className="footer_submenu"><h4>Quick Links</h4></li>
										<li className="footer_submenu small"><a href="#">My Account</a></li>
										<li className="footer_submenu small"><a href="#">FAQs</a></li>
										<li className="footer_submenu small"><a href="#">Switch to us (MNP)</a></li>
										<li className="footer_submenu small"><a href="#">Ex-Employee Helpdesk</a></li>
										<li className="footer_submenu small"><a href="#">Vendor Helpdesk</a></li>
									</ul>	
								</div>
								<div className="col-lg-4">
									<div className="social">
										<div className="social-icons text-right">
											<span>FOLLOW US:</span>
											<i className="fa fa-facebook facebookIcon" aria-hidden="true"></i>
											<i className="fa fa-google" aria-hidden="true"></i>
											<i className="fa fa-twitter" aria-hidden="true"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>	
				</div>
			</div>
		)
	}	
}

export default footerComponent;