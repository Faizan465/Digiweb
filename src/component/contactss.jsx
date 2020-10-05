import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";

class Contact extends React.Component {
	
	constructor(props){
super(props);
this.state={


};


	}
	
	
	
	 async submit(){
		const data = { name: 'faiz',email: 'mf496860@gmail.com',subject: 'hi',message: 'hii' };

 await fetch('https://localhost:44327/api/Submit', {
  method: 'POST', // or 'PUT'
  headers: {
	'mode':'no-cors',
	 'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
	}
	
    render() { 

		function onChange(value) {
			console.log("Captcha value:", value);
		  }
        return ( 
            <div>
            
			<section className="hero-wrap hero-wrap-2" style={{backgroundImage: 'url(images/image_5.jpg)'}} >
		
		<div className="container">
			<div className="row no-gutters slider-text align-items-end justify-content-center">
				<div className="col-md-9 ftco-animate pb-5 text-center">
					<h1 className="mb-3 bread">Contact us</h1>
					<p className="breadcrumbs"><span className="mr-2"><Link to="/home">Home <i className="fa fa-chevron-right"></i></Link></span> <span>Contact us <i className="fa fa-chevron-right"></i></span></p>
					<br/>
					<br/>
					<br/>
				</div>
			</div>
		</div>
	</section>

	
	<section className="ftco-section bg-light">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-12">
					<div className="wrapper px-md-4">
						<div className="row mb-5">
							<div className="col-md-3">
								<div className="dbox w-100 text-center">
									<div className="icon d-flex align-items-center justify-content-center">
										<span className="fa fa-map-marker"></span>
									</div>
									<div className="text">
										<p><span>Address:</span> Sigra, Varanasi</p>
									</div>
								</div>
							</div>
							<div className="col-md-3">
								<div className="dbox w-100 text-center">
									<div className="icon d-flex align-items-center justify-content-center">
										<span className="fa fa-phone"></span>
									</div>
									<div className="text">
										<p><span>Phone:</span> <a href="tel:8383049524">+ 91 8383049524</a></p>
									</div>
								</div>
							</div>
							<div className="col-md-3">
								<div className="dbox w-100 text-center">
									<div className="icon d-flex align-items-center justify-content-center">
										<span className="fa fa-paper-plane"></span>
									</div>
									<div className="text">
										<p><span>Email:</span> <a href="mailto:mf496860@gmail.com.com">mf496860@gmail.com</a></p>
									</div>
								</div>
							</div>
							<div className="col-md-3">
								<div className="dbox w-100 text-center">
									<div className="icon d-flex align-items-center justify-content-center">
										<span className="fa fa-globe"></span>
									</div>
									<div className="text">
										<p><span>Website</span> <a href="#">www.digiweb.com</a></p>
									</div>
								</div>
							</div>
						</div>
						<div className="row no-gutters">
							<div className="col-md-7">
								<div className="contact-wrap w-100 p-md-5 p-4">
									<h1 className="mb-4">Contact Us</h1>
								
										<div className="row">
											<div className="col-md-6">
												<div className="form-group">
													<label className="label" for="name">Full Name</label>
													<input type="text" className="form-control" name="name" id="name" placeholder="Name"/>
												</div>
											</div>
											<div className="col-md-6"> 
												<div className="form-group">
													<label className="label" for="email">Email Address</label>
													<input type="email" className="form-control" name="email" id="email" placeholder="Email"/>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<label className="label" for="subject">Subject</label>
													<input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"/>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<label className="label" for="#">Message</label>
													<textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
												</div>
											</div>
											<div className="col-md-12">
											<ReCAPTCHA
    sitekey="6LdweNMZAAAAAMfFhQV6b7eT4J4YWR6smicuw6Zi"
	onChange={onChange}
	
  />,
  </div>
											<div className="col-md-12">
												<div className="form-group">
													<button onClick={()=> this.submit()}  className="btn btn-danger">Submit</button>
													<div className="submitting"></div>
												</div>
											</div>
										</div>
									
								</div>
							</div>
							
							<div className="col-md-5 order-md-first d-flex align-items-stretch">
								<div id="map" className="map"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    <div className="col-md-5 order-md-first d-flex align-items-stretch">
    <div  className="map">
    <Map google={this.props.google} zoom={14}>
 
 <Marker onClick={this.onMarkerClick}
         name={'Current location'} />
<div>
           
            </div>
 <InfoWindow onClose={this.onInfoWindowClose}>
     
 </InfoWindow>
</Map>		
							</div>
                            </div>
							 <div style={{position: 'fixed' ,right: '3px', bottom: '180px' ,cursor: 'pointer',fontFamily: 'Arial,Helvetica,sans-serif', zIndex: '999'}}><a href="whatsapp://send?phone=+918383049524&amp;text=Hi, I contacted you through your website mobins Clinic."><p className="wa__btn_popup_icon"><img src="https://www.apollofertility.com/international-patient/img/whatsapp-icon.png" alt="" width='50' height='50' /></p></a></div>
                            </div>
           
            
            
         );
    }
}
 

export default GoogleApiWrapper({
    apiKey: ("AIzaSyA0GBb8m4yW_64vZf0-AN9wSvr6cPaog5Y")
  })(Contact)
