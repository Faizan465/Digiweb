import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';
import GooglePayButton from '@google-pay/button-react';
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
						<div className="ftco-footer-widget mb-4">uy76
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
									<li> <a href="tel:8383049524"><span className="icon fa fa-phone"></span><span className="text">+91 8383049524</span></a></li>
									<li><a href="mailto:contact@digiwebsolutions.tech"><span className="icon fa fa-paper-plane pr-4"></span><span className="text">contact@digiwebsolutions.tech</span></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="container"  >
	<div class="row"  style={{marginRight:'200px'}}>
		<div class="paymentCont">
						
						<div class="paymentWrap">
							<div class="btn-group paymentBtnGroup btn-group-justified" data-toggle="buttons">
					            <label class="btn paymentMethod active">
					            	<div class="method visa"></div>
					                <input type="radio" name="options" checked/> 
					            </label>
					            <label class="btn paymentMethod">
					            	<div class="method master-card"></div>
					                <input type="radio" name="options"/> 
					            </label>
					            <label class="btn paymentMethod">
				            		<div class="method amex"></div>
					                <input type="radio" name="options"/>
					            </label>
					             <label class="btn paymentMethod">
				             		<div class="method vishwa"></div>
					                <input type="radio" name="options"/> 
					            </label>
					            <label class="btn paymentMethod">
				            		<div class="method ez-cash"></div>
					                <input type="radio" name="options"/> 
					            </label>
					         
					        </div>        
						</div>
						
					</div>
		
	</div>
</div>
<GooglePayButton
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'gateway name',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: 'BCR2DN6TWPJJRSJT',
      merchantName: 'DigiWeb Solutions',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'RS',
      countryCode: 'IND',
    },
  }}
  onLoadPaymentData={paymentRequest => {
    console.log('Success', paymentRequest);
  }}
/>
				<div className="row">
					<div className="col-md-12 text-center">
						<p>
						Copyright ©  2020 DigiWeb Solutions  <script>document.write(new Date().getFullYear());</script>All Rights Reserved. |Developed <i className="fa fa-heart" aria-hidden="true"></i>by  <Link to="" target="_blank">DigiWeb Solution</Link>
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