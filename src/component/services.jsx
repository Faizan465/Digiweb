import React, { Component } from 'react';
import './service.css';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';
class Services extends Component {
    state = {}
    render() { 
        return ( 
           <div className="wrap">
		<div >
		<div >
<section className="hero-wrap hero-wrap-2" style={{backgroundImage: 'url(images/img.png)'}}>

  <div className="container">
    <div className="row no-gutters slider-text align-items-end justify-content-center">
      <div className="col-md-9 ftco-animate pb-5 text-center">
        <h1 className="mb-3 bread"  style={{color:'black'}}>Services</h1>
        <p className="breadcrumbs"><span className="mr-2"><Link  style={{color:'black'}}  to="/homes">Home <i className="fa fa-chevron-right" style={{color:'black'}}></i></Link></span> <span style={{color:'black'}}>Services <i className="fa fa-chevron-right" style={{color:'black'}}></i></span></p>
		<br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

      </div>
    </div>
  </div>
</section>

<section className="ftco-section">
		<div className="container">
			<div className="row justify-content-center pb-5">
				<div className="col-lg-6 heading-section text-center ftco-animate">
					<h2 className="mb-4"> <span>Our Services</span></h2>
					<p>With an experience of more than 5+ years and caliber of qualified developers we have
been able to provide best services for our customers.</p>
				</div>
			</div>
			<div className="row">
				<div className="col-md-4">
					<div className="services-2 text-center">
						<div className="icon">
							<span className="flaticon-web-programming"></span>
						</div>
						<div className="text">
							<h3 style={{color:'white'}}>WebSite Development</h3>
							<p>Let's define a website that can be rated as user friendly what it needs to have
 Perfect look and feel
 Ease of navigation
 Interactive
 Easy and fast opening pages web pages</p>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<img src="images/services.svg" className="img-fluid" alt=""/>
				</div>
				<div className="col-md-4">
					<div className="services-2 text-center">
						<div className="icon">
							<span className="flaticon-secure"></span>
						</div>
						<div className="text">
							<h3 style={{color:'white'}}> Web & E-commerce Solutions</h3>
							<p>We help create customer-centric online store using the right platform to power your eCommerce website. We understand this and develop the right design and deployment strategy.</p>
						</div>
					</div>
				</div>
            <div className="col-md-4">
					<div className="services-2 text-center">
						<div className="icon">
							<span className="flaticon-secure"></span>
						</div>
						<div className="text">
							<h3 style={{color:'white'}}>Enterprise Solutions</h3>
							<p>We implement solutions to help enterprise bring process, people, and data on one platform. We integrate various information flowing channels to one common platform within an enterprise.</p>
						</div>
					</div>
				</div>
            <div className="col-md-4">
					<div className="services-2 text-center">
						<div className="icon">
							<span className="flaticon-secure"></span>
						</div>
						<div className="text">
							<h3 style={{color:'white'}}>SEO</h3>
							<p> SEO services is leading search engine marketing Company providing quality Search Engine Optimization, Social media, Google sponsor listing and various internet marketing Solutions.</p>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="services-2 text-center">
						<div className="icon">
							<span className="flaticon-secure"></span>
						</div>
						<div className="text">
							<h3 style={{color:'white'}}>Logo Design</h3>
							<p>Logo design is the process of designing a logo. Branding is the process of building a brand. To be more specific, it is a strategy designed by companies to help people to quickly identify their products .</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

                <div className="container">
	<div className="row">
	<ul>
		<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 Services-tab  item">
			<div className="folded-corner service_tab_1">
				<div className="text">
					<i className="fa fa-image fa-5x fa-icon-image"></i>
						<p className="item-title">
								<h3 style={{color:'rgba(31,181,172,.9)'}}> Designing</h3>
							</p>
					<p>
               We create designs that are attractive and functional. After all, the website represents you and your business on the internet. 
					</p>
				</div>
			</div>
	    </div>
		
		<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 Services-tab item">
			<div className="folded-corner service_tab_1">
				<div className="text">
					<i className="flaticon-web-programming fa-5x fa-icon-image"></i>
						<p className="item-title">
                            <h3 style={{color:'rgba(31,181,172,.9)'}}>Crazy Coding</h3>
						</p>
					<p>
               We strive to create the best digital content out there for all platforms such as the web, mobile, tablets, digital screens.
					</p>
				</div>
			</div>
		</div>
		<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 Services-tab item">
			<div className="folded-corner service_tab_1">
				<div className="text">
					<i className="flaticon-stats fa-5x fa-icon-image"></i>
						<p className="item-title">
							<h3 style={{color:'rgba(31,181,172,.9)'}} >We're Passionate</h3>
						</p>
					<p>
               We believe to produce top notch quality work which please our clients and help them to meet their business goals.
					</p>
				</div>
			</div>
		</div>
		<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 Services-tab item">
			<div className="folded-corner service_tab_1">
			<div className="text">
				<i className="fa fa-line-chart fa-5x fa-icon-image"></i>
					<p className="item-title">
						<h3 style={{color:'rgba(31,181,172,.9)'}}>We're Cool Nerds</h3>
					</p>
					<p>
               Team With loads of experience, checklists, and quality control procedures, we can handle the scariest media plan.
					</p>
				</div>
			</div>
		</div>
		<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 Services-tab item">
			<div className="folded-corner service_tab_1">
				<div className="text">
					<i className="fa fa-mobile fa-5x fa-icon-image"></i>
						<p className="item-title">
							<h3 style={{color:'rgba(31,181,172,.9)'}}>Branding</h3>
						</p>
					<p>
               We work with the world's top Development agencies to create flawless Design contents with super-slick .
					</p>
				</div>
			</div>
		</div>
		<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 Services-tab item">
				<div className="folded-corner service_tab_1">
					<div className="text">
						<i className="fa fa-money fa-5x fa-icon-image"></i>
							<p className="item-title">
								<h3 style={{color:'rgba(31,181,172,.9)'}}>Web Optimization</h3>
							</p>


                     
						<p>
                  If you can imagine it, we can build it. We use lightweight code libraries, tricks, hacks, secret work-arounds.
						</p>
				</div>
			</div>
		</div>
		<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 Services-tab item">
			<div className="folded-corner service_tab_1">
				<div className="text">
					<i className="fa fa-bullhorn fa-5x fa fa-briefcase"></i>
						<p className="item-title">
							<h3 style={{color:'rgba(31,181,172,.9)'}}> Experts</h3>
						</p>
					<p>
					With an experience of more than 5+ years,Having experts on Website design, Development , E-Commerce .
					</p>
				</div>
			</div>
		</div>
		<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 Services-tab item">
			<div className="folded-corner service_tab_1">
				<div className="text">
					<i className="fa fa-bullhorn fa-5x fa-icon-image"></i>
						<p className="item-title">
							<h3 style={{color:'rgba(31,181,172,.9)'}}> Support</h3>
						</p>
					<p>
               In today’s modern business environment keeping up to date is essential. Dotsquares offers a range of IT support .
					</p>
				</div>
			</div>
		</div>
	   </ul>
	</div>
</div>

<div className="center"></div>
                 <center >    <img src="http://www.flyaway.co.in/images/web-design.png" className="img-responsive"/></center>
                      <div className="space"></div>
<div>
</div>
	<center>
        <div className="col-lg-4"> 
		
            <div className="product ">
                 <div className="gradient"></div>
                 <img src="data:image/png;base64,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" className="img-fluid" alt=""/>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="product ">
                 <div className="gradient"></div>
                 <img src="data:image/png;base64,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"   className="img-fluid" alt=""/>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="product ">
                 <div className="gradient"></div>
                 <img src=" https://www.cbronline.com/wp-content/uploads/2016/06/sql-server.png" className="img-fluid"  alt=""  style={{marginBottom:"100px"}}/>
            </div>
			
        </div>
        <div className="col-12 text-center mt-5">
            <Button to="/home" className="btn btn-primary text-center" >Know More</Button>
        </div>
		<br/>
		<br/>
		</center>
		<footer className="ftco-footer ftco-footer-2 ftco-section"  >
			<div className="container">
				<div className="row mb-5">
					<div className="col-md">
						<div className="ftco-footer-widget mb-4">
							<h2 className="ftco-footer-logo"><img src="images/imges.png" style={{height:'40px',width:'60px',marginLeft:'10%',zIndex:'0',backgroundColor:'#05091f'}}/></h2>
							<ul className="ftco-footer-social list-unstyled mt-2">
								<li className="ftco-animate"><a href="https://twitter.com/home"><span className="fa fa-twitter"></span></a></li>
								<li className="ftco-animate"><a href="https://www.facebook.com/DigiWebco/"><span className="fa fa-facebook"></span></a></li>
								<li className="ftco-animate"><a href="https://github.com/Faizan465"><span className="fa fa-github"></span></a></li>
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
									<li><Link to="mailto:contact@digiwebsolutions.tech"><span className="icon fa fa-paper-plane pr-4"></span><span className="text">contact@digiwebsolutions.tech</span></Link></li>
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
	 </div>
	</div>
         );
    }
}
 
export default Services;