import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
class Header extends Component {
    state = {  }
    render() { 
        return ( 
			
            <div>
				
         	<div className="wrap">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-12 col-md d-flex align-items-center">
					<h1><p className="mb-0 phone"><span className="text">Phone no:</span><a href="tel:8383049524">8383049524</a> or <span className="text">email us:</span> <a href="mailto:mf496860@gmail.com.com">mf496860@gmail.com.com</a></p></h1>
					</div>
					<div className="col-12 col-md d-flex justify-content-md-end">
						<div className="social-media">
							<p className="mb-0 d-flex">
								<a href="https://www.facebook.com/abcsolutionco" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"><i className="sr-only">Facebook</i></span></a>
								<a href="https://twitter.com/home" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter"><i className="sr-only">Twitter</i></span></a>
								<a href="https://www.linkedin.com/company/68905967/admin/" className="d-flex align-items-center justify-content-center"><span className="fa fa-linkldn"><i className="sr-only">Linkldn</i></span></a>
							</p>
						</div>
					</div>
				</div>
			</div>
            
		</div>
       
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
			<div className="container">
				<Link className="navbar-brand" to="index.html">Digi<span>Web</span></Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="oi oi-menu"></span> Menu
				</button>
	
				<div className="collapse navbar-collapse" id="ftco-nav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item "><Link to="/home" className="nav-link">Home</Link></li>
						<li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
						<li className="nav-item dropdown dmenu">
            <Link className="nav-link dropdown-toggle" to="/service" id="navbardrop" data-toggle="dropdown">
              Our Service
            </Link>
            <div className="dropdown-menu lg-menu">
           <h3><Link className="dropdown-item" to="/services"><b>Web Design & Development</b></Link></h3>
		   <h3><a className="dropdown-item" href="#"><b>E-commerce Development</b></a></h3>
		   <h3><a className="dropdown-item" href="#"><b>SEO</b></a></h3>
		   <h3><a className="dropdown-item" href="#"><b>Digital Marketing</b></a></h3>
            </div>
          </li>
						<li className="nav-item"><Link to="/portfolios" className="nav-link">Portfolio</Link></li>
						<li className="nav-item"><Link to="/blogs" className="nav-link">Blog</Link></li>
						<li className="nav-item"><Link to="/contact" className="nav-link">Contact us</Link></li>
						<li className="nav-item cta"><Link to="/contact" className="nav-link">Book a Demo</Link></li>
	
					</ul>
				</div>
			</div>
		</nav>
		
		</div> 
	
         );
    }
}
 
export default Header;