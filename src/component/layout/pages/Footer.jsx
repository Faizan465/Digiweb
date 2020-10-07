import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
class Footer  extends Component {
    state = {  }
    render() { 
        return (
            <div>
               <footer className="ftco-footer ftco-footer-2 ftco-section">
			<div className="container">
				<div className="row mb-5">
					<div className="col-md">
						<div className="ftco-footer-widget mb-4">
							<h2 className="ftco-footer-logo">DigiWeb<span>solution</span></h2>
							<ul className="ftco-footer-social list-unstyled mt-2">
								<li className="ftco-animate"><a href="#"><span className="fa fa-twitter"></span></a></li>
								<li className="ftco-animate"><a href="#"><span className="fa fa-facebook"></span></a></li>
								<li className="ftco-animate"><a href="#"><span className="fa fa-github"></span></a></li>
							</ul>
						</div>
					</div>
					<div className="col-md">
						<div className="ftco-footer-widget mb-4 ml-md-5">
							<h2 className="ftco-heading-2">Explore</h2>
							<ul className="list-unstyled">
								<li><Link to="/about" className="py-2 d-block">About</Link></li>
								<li><Link to="/contact" className="py-2 d-block">Contact</Link></li>
								<li><Link to="/services" className="py-2 d-block">What We Do</Link></li>
								
								
								<li><a href="" className="py-2 d-block">Call Us</a></li>
							</ul>
						</div>
					</div>
					<div className="col-md">
						<div className="ftco-footer-widget mb-4">
							<h2 className="ftco-heading-2">Legal</h2>
							<ul className="list-unstyled">
							
								<li><Link to="/blog" className="py-2 d-block">Blog</Link></li>
								<li><Link to="/home" className="py-2 d-block">Privacy &amp; Policy</Link></li>
								<li><Link to="/home" className="py-2 d-block">Terms &amp; Conditions</Link></li>
								
								<li><Link to="/contact" className="py-2 d-block">Contact</Link></li>
							</ul>
						</div>
					</div>
					<div className="col-md">
						<div className="ftco-footer-widget mb-4">
							<h2 className="ftco-heading-2">Have a Questions?</h2>
							<div className="block-23 mb-3">
								<ul>
									<li><span className="icon fa fa-map marker"></span><span className="text">D 15/219 Sigra Varanasi</span></li>
									<li> <a href="tel:8383049524"><span className="icon fa fa-phone"></span><span className="text">+91 8383049524</span></a></li>
									<li><a href="mailto:mf496860@gmail.com"><span className="icon fa fa-paper-plane pr-4"></span><span className="text">mf49686@gmail.com</span></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 text-center">
						<p>
							Copyright & copy;<script>document.write(new Date().getFullYear());</script> All rights reserved |Developed <i className="fa fa-heart" aria-hidden="true"></i>by  <a href="" target="_blank">DigiWeb Solution</a>
							</p>
						</div>
					</div>
				</div>
			</footer> 

			
            </div>
          );
    }
}
 
export default Footer ;