import React, { Component } from 'react'; 
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
class Header extends  Component {
    state = {  }
    render() { 
        return ( 
				<div>
         	<div className="wrap">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-12 col-md d-flex align-items-center">
					<h1><p className="mb-0 phone"><i className="fa fa-phone"></i><a href="tel:8383049524">8383049524</a> or <i className="fa fa-envelope-o"></i> <a href="mailto:contact@digiwebsolutions.tech">contact@digiwebsolutions.tech</a></p></h1>

					</div>
					<div className="col-12 col-md d-flex justify-content-md-end">
						<div className="social-media">
							<p className="mb-0 d-flex">
								<a href="https://www.facebook.com/DigiWebco/
								" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"><i className="sr-only">Facebook</i></span></a>
								<a href="https://twitter.com/home" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter"><i className="sr-only">Twitter</i></span></a>
							
							</p>
							
						</div>
					<div class='pm-button'><a href='https://www.payumoney.com/paybypayumoney/#/327EE30D1D94189BABC1FAE28517538E'><img src='https://www.payumoney.com/media/images/payby_payumoney/new_buttons/21.png' /></a></div> 
					</div>
				</div>
			</div>
            
		</div>
		
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar" >
			<div className="container">
				<Link className="navbar-brand" to="/homes"><img src="images/imges.png" style={{height:'30px',width:'50px',marginLeft:'60%'}}/></Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="oi oi-menu"></span> Menu
				</button>
	
				<div className="collapse navbar-collapse" id="ftco-nav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item "><Link to="/homes" className="nav-link">Home</Link></li>
						<li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
						<li className="nav-item dropdown dmenu">
            <Link className="nav-link dropdown-toggle" to="/services" id="navbardrop" data-toggle="dropdown">
              Our Service
            </Link>
            <div className="dropdown-menu lg-menu">
           <h3><Link className="dropdown-item" to="/services"><b>Web Design & Development</b></Link></h3>
		   <h3><a className="dropdown-item" href="/services"><b>E-commerce Development</b></a></h3>
		   <h3><a className="dropdown-item" href="/services"><b>SEO</b></a></h3>
		   <h3><a className="dropdown-item" href="/services"><b>Digital Marketing</b></a></h3>
            </div>
          </li>
						<li className="nav-item"><Link to="/portfolios" className="nav-link">Portfolio</Link></li>
						<li className="nav-item"><Link to="/blogs" className="nav-link">Blog</Link></li>
						<li className="nav-item"><Link to="/contact" className="nav-link">Contact us</Link></li>
						<li className="nav-item cta"><a href="https://www.payumoney.com/paybypayumoney/#/E822165F42495553EEF844CA19ED356B" className="nav-link" style={{borderRadius:'5%'}}>Book A Demo</a></li>
	
					</ul>
				</div>
			</div>
		</nav>
		
		</div> 
		
         );
    }
}
 
export default Header;