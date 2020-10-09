import React, { Component } from 'react'; 
import {Link} from 'react-router-dom';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";


class Contact extends Component {
	
	constructor(props){
super(props);
this.state={
	id:'',
	name: '',
	email: '',
	message: '',
	subject: ''


}




	}

	changeHandler = (e) => {
this.setState( {[e.target.name]: e.target.value})

	}

	submit = e => {
e.preventDefault()
console.log(this.state)
axios.post('https://localhost:5001/api/Submit',this.state).then(response => {
console.log(response)

})
.catch(error => {
	console.log(error)
})		

	}
	
    render() { 
const { name, email, subject, message} = this.state
		
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
						<div className="row no-gutters" >
							<div className="col-md-7">
								<div className="contact-wrap w-100 p-md-5 p-4">
									<h1 className="mb-4">Contact Us</h1>
								<form onSubmit={this.submit}>
										<div className="row">
											<div className="col-md-6">
												<div className="form-group">
													<label className="label" for="name">Full Name</label>
													<input type="text" className="form-control" name="name" id="name" placeholder="Name"  value={name} onChange={this.changeHandler}/>
												</div>
											</div>
											<div className="col-md-6"> 
												<div className="form-group">
													<label className="label" for="email">Email Address</label>
													<input type="email" className="form-control" name="email" id="email"  value={email}  placeholder="Email" onChange={this.changeHandler}/>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<label className="label" for="subject">Subject</label>
													<input type="text" className="form-control" name="subject" id="subject" value={subject} placeholder="Subject" onChange={this.changeHandler}/>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<label className="label" for="#">Message</label>
													<textarea name="message" name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Message" value={message} onChange={this.changeHandler}></textarea>
												</div>
											</div>
											
											<div className="col-md-12">
												<div className="form-group">
													<button  type="submit"   className="btn btn-primary  px-5 py-4"><h4>Submit</h4></button>
													<div className="submitting"></div>
												</div>
											</div>
										</div>
										</form>
								</div>
							</div>
							
							<div className="col-md-5 order-md-first d-flex align-items-stretch">
							<div id="map" class="map">
							<iframe width="450" height="530" id="gmap_canvas" src="https://maps.google.com/maps?q=SIGRA%20VARANASI&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.whatismyip-address.com/nordvpn-coupon/" style={{position:'relative',textAlign:'right',height:'150px',width:'50px',overflow:'hidden',background:'none!important',height:'500px',width:'600px'}}></a>
							</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    <div className="col-md-5 order-md-first d-flex align-items-stretch">
   
                            </div>
							 <div style={{position: 'fixed' ,right: '3px', bottom: '180px' ,cursor: 'pointer',fontFamily: 'Arial,Helvetica,sans-serif', zIndex: '999'}}><a href="whatsapp://send?phone=+918383049524&amp;text=Hi, I contacted you through your website DigiWeb Solution."><p className="wa__btn_popup_icon"><img src="https://www.apollofertility.com/international-patient/img/whatsapp-icon.png" alt="" width='50' height='50' /></p></a></div>
                            </div>
           
            
            
         );
    }
}



 

export default GoogleApiWrapper({
    apiKey: ("6LddL9QZAAAAAAhy_B0lZEzhZXSiqLSgFmhAnRrp")
  })(Contact)
