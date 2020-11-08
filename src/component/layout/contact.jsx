import React, { Component } from 'react'; 
import {Link} from 'react-router-dom';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import axios from 'axios';
import Recaptcha from 'react-recaptcha';

class Contact extends Component {
	
	constructor(props){
super(props);
this.state={
	id:'',
	email: '',
	first_name: '',
	last_name: '',
	avatar: ''


}

	}
	recapchaloaded(){
		console.log('recaptcha successfully loaded')
	}

	changeHandler = (e) => {
this.setState( {[e.target.name]: e.target.value})

	}

	submit = e => {
e.preventDefault()
console.log(this.state)
axios.post('https://reqres.in/api/users',this.state).then(response => {
console.log(response)

})
.catch(error => {
	console.log(error)
})		

	}
	
    render() { 
const { id, email, first_name, last_name,avatar} = this.state
		
        return ( 
            <div>
            
			<section className="hero-wrap hero-wrap-2" style={{backgroundImage: 'url(images/conta.jpg)'}} >
		
		<div className="container">
			<div className="row no-gutters slider-text align-items-end justify-content-center">
				<div className="col-md-9 ftco-animate pb-5 text-center">
					<h1 className="mb-3 bread">Contact us</h1>
					<p className="breadcrumbs"><span className="mr-2"><Link to="/home">Home <i className="fa fa-chevron-right"></i></Link></span> <span>Contact us <i className="fa fa-chevron-right"></i></span></p>
				
       
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
									<br/>
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
									<br/>
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
							<br/>
										<p><span>Email:</span> <a href="mailto:contact@digiwebsolutions.tech">contact@digiwebsolutions.tech</a></p>
									</div>
								</div>
							</div>
							<div className="col-md-3">
								<div className="dbox w-100 text-center">
									<div className="icon d-flex align-items-center justify-content-center">
										<span className="fa fa-globe"></span>
									</div>
									<div className="text">
									<br/>
										<p><span>Website</span> <a href="http://www.digiwebsolutions.tech/">www.digiwebsolutions.tech</a></p>
									</div>
								</div>
							</div>
						</div>
						<div className="row no-gutters"  >
							<div className="col-md-6">
								<div className="contact-wrap w-100 p-md-5 p-4">
									<h1 className="mb-4">Contact Us</h1>
								<form onSubmit={this.submit}>
										<div className="row">
										<div className="col-md-12"> 
								
											<div className="col-md-12">
												<div className="form-group">
								      					<label className="label" for="name">Name</label>
													<input type="text" className="form-control" name="email" id="email"  placeholder="Name"  value={email} onChange={this.changeHandler}/>
												</div>
											</div>
											<div className="col-md-12"> 
												<div className="form-group">
													<label className="label" for="email">email</label>
													<input type="text" className="form-control" name="first_name" id="firstname"  value={first_name}  placeholder="Email" onChange={this.changeHandler}/>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<label className="label" for="subject">Subject</label>
													<input type="text" className="form-control" name="last_name" id="last_name" value={last_name} placeholder="Subject" onChange={this.changeHandler}/>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<label className="label" for="#">Message</label>
													<textarea name="text" name="avatar" className="form-control" id="avatar" cols="30" rows="4" placeholder="Message" value={avatar} onChange={this.changeHandler}></textarea>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
												<Recaptcha
    sitekey="6LeQatwZAAAAAIvoWk-IkT9NwMVkcymyRUalRYK3"
    render="explicit"
    onloadCallback={this.recapchaloaded()}
  />,
												</div>
											</div>
										
											
											<div className="col-md-12">
												<div className="form-group">
													<button  type="submit"   className="btn btn-primary  px-2py-3"><h4>Submit</h4></button>
													<div className="submitting"></div>
												</div>
											</div>
										</div>
										</div>
										</form>
								</div>
							</div>
							
							<div className="col-md-5 order-md-first d-flex align-items-stretch" >
							<div id="map" class="map" >
							<iframe width="350" height="550" id="gmap_canvas" src="https://maps.google.com/maps?q=SIGRA%20VARANASI&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" ></iframe><a href="https://www.whatismyip-address.com/nordvpn-coupon/" style={{position:'relative',textAlign:'right',height:'150px',width:'50px',overflow:'hidden',background:'none!important',height:'500px',width:'600px'}}></a>
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
