import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
class Footer  extends Component {
    state = {  }
    render() { 
        return (
			
				<div>
               <footer className="ftco-footer ftco-footer-2 ftco-section"  >
			<div className="container">
				<div className="row mb-5">
					<div className="col-md">
						<div className="ftco-footer-widget mb-4">
							<h2 className="ftco-footer-logo"><img src="images/imges.png" style={{height:'40px',width:'60px',marginLeft:'10%',zIndex:'0',backgroundColor:'#05091f'}}/></h2>
							<ul className="ftco-footer-social list-unstyled mt-2">
								<li className="ftco-animate"><Link to="https://twitter.com/home"><span className="fa fa-twitter"></span></Link></li>
								<li className="ftco-animate"><Link to="https://www.facebook.com/DigiWebco/"><span className="fa fa-facebook"></span></Link></li>
								<li className="ftco-animate"><Link to="https://github.com/Faizan465"><span className="fa fa-github"></span></Link></li>
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
								
								
								<li><Link to="" className="py-2 d-block">Call Us</Link></li>
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
									<li><span className="icon fa fa-map marker"></span><span className="text"> Sigra Varanasi</span></li>
									<li> <Link to="tel:8383049524"><span className="icon fa fa-phone"></span><span className="text">+91 8383049524</span></Link></li>
									<li><Link to="mailto:mf496860@gmail.com"><span className="icon fa fa-paper-plane pr-4"></span><span className="text">mf49686@gmail.com</span></Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 text-center">
						<p>
							Copyright & copy;<script>document.write(new Date().getFullYear());</script> All rights reserved |Developed <i className="fa fa-heart" aria-hidden="true"></i>by  <Link to="" target="_blank">DigiWeb Solution</Link>
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