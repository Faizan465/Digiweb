import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import axios from 'axios';
import { Circle } from 'google-maps-react';
class Home extends Component {
	constructor(props){
		super(props);
		this.state={
			name: '',
			email: '',
			service:'',
			message: '',
		}
		
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
		const { name, email, service, message} = this.state
        return (	

	<div>
		
		<center>
	<div className="hero-wrap js-smallheight" style={{backgroundImage: 'url(images/image_4.jpg)'}} data-stellar-background-ratio="1.0">
		<div className ="overlay"></div>
		<div className="container">
			<div className="row no-gutters slider-text js-smallheight align-items-center" data-scrollax-parent="true">
				<div className="col-md-8 ftco-animate mt-5 pt-md-5" data-scrollax=" properties: { translateY: '70%' }">
					<div className="row">
						<div className="col-md-7">
							<br/>
							<br/>
							<br/>
							<br/>
						<h1><p className="mb-4 pl-md-5 line" data-scrollax="properties: { translateY: '30%', opacity: 0 }">An service <span>  For Services</span> </p></h1>
						</div>
					</div>
					<h1 className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 0 }">Welcome To DigiWeb Solution</h1>
					<p style={{marginRight:'40%'}}>< Link  to="/about"><button className="button px-1 py-1"><span> Read </span></button></Link></p>

					
				</div>
			</div>
		</div>
	</div>
	</center>
	<section className="ftco-intro">
		<div className="container">
			<div className="row justify-content-end">
				<div className="col-md-7">
					<div className="row no-gutters d-flex align-items-stretch">
						<div className="col-md-4 d-flex align-self-stretch ftco-animate">
							<div className="services-1">
								<div className="line"></div>
								<div className="icon"><span className="flaticon-bolt"></span></div>
								<div className="media-body">
									<h3 className="heading mb-3">Information Technology Services</h3>
								</div>
							</div>      
						</div>
						<div className="col-md-4 d-flex align-self-stretch ftco-animate">
							<div className="services-1 color-1">
								<div className="line"></div>
								<div className="icon"><span className="flaticon-light-bulb"></span></div>
								<div className="media-body">
									<h3 className="heading mb-3"> Enterprise Solution</h3>
								</div>
							</div>      
						</div>
						<div className="col-md-4 d-flex align-self-stretch ftco-animate">
							<div className="services-1 color-2">
								<div className="line"></div>
								<div className="icon"><span className="flaticon-web-programming"></span></div>
								<div className="media-body">
									<h3 className="heading mb-3"> Web Design &amp;  Development </h3>
								</div>
							</div>      
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section className="ftco-section">
		<div className="container">
			<div className="row justify-content-center pb-5">
				<div className="col-lg-6 heading-section text-center ftco-animate">
					<h2 className="mb-4"> <span>Our Services</span> </h2>
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
							<h3>WebSite Design & Development</h3>
							<p>Web Development is one term that encompasses every aspect of inculcating a presence on the World Wide Web. From the planning to implementation.</p>
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
							<h3>Web & Ecommerce Solutions</h3>
							<p>We help create customer-centric online store using the right platform to power your eCommerce website. We understand this and develop the right design and deployment strategy.</p>
						</div>
					</div>
					
				</div>
				
			</div>

			
			<div className="col-md-4">
					<div className="services-2 text-center">
						<div className="icon">
							<span className="flaticon-secure"></span>
						</div>
						<div className="text">
							<h3>Enterprises Solutions</h3>
							<p>We implement solutions to help enterprise bring process, people, and data on one platform. We integrate various information flowing channels to one common platform within an enterprise..</p>
						</div>
						
					</div>
					
				</div>
				
		</div>
		
	</section>

	<section className="ftco-counter ftco-section ftco-no-pt img" id="section-counter">
 <div className="container">
  <div className="row no-gutters d-flex">
   <div className="col-md-6 d-flex">
    <div className="img d-flex align-self-stretch" style={{backgroundImage: 'url(react/images/about.jpg)'}}></div>
  </div>
  <div className="col-md-6 p-3 pl-md-5 py-5 bg-primary">
    <div className="row justify-content-start pb-3">
      <div className="col-md-12 heading-section heading-section-white ftco-animate">
        <h2 className="mb-4">Why Choose Us? <span>DigiWeb</span></h2>
        <p>With an experience of more than 5+ years and caliber of qualified developers we have
been able to provide best services for our customers.</p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
        <div className="block-18 mb-4">
          <div className="text">
            <strong className="number" data-number="50">0</strong>
            <span>Project Complete</span>
          </div>
        </div>
      </div>
      <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
        <div className="block-18 mb-4">
          <div className="text">
            <strong className="number" data-number="100">0</strong>
            <span>Happy Clients</span>
          </div>
        </div>
      </div>
      <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
        <div className="block-18 mb-4">
          <div className="text">
            <strong className="number" data-number="5">0</strong>
            <span>Business Partners</span>
          </div>
        </div>
      </div>
      <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
        <div className="block-18 mb-4">
          <div className="text">
            <strong className="number" data-number="5">0</strong>
            <span>IT Consultant</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</section>

		<section className="ftco-section services-section">
			<div className="container">
				<div className="row justify-content-center pb-5">
					<div className="col-md-6 heading-section text-center ftco-animate">
						<h2 className="mb-4">Our Exclusive <span>DigiWeb Solution</span> Services</h2>
					</div>
				</div>
				<div className="row d-flex no-gutters">
					<div className="col-md-3 d-flex align-self-stretch ftco-animate">
						<div className="media block-6 services d-block">
							<div className="line"></div>
							<div className="icon"><span className="flaticon-web-programming"></span></div>
							<div className="media-body">
								<h3 className="heading mb-3"> Web Development </h3>
								<p>	Web Development is one term that encompasses every aspect of inculcating a presence on the World Wide Web. From the planning to implementation.</p>
							</div>
						</div>      
					</div>
					 
					<div className="col-md-3 d-flex align-self-stretch ftco-animate">
						<div className="media block-6 services d-block">
							<div className="line"></div>
							<div className="icon"><span className="flaticon-stats"></span></div>
							<div className="media-body">
								<h3 className="heading mb-3">E-commerce </h3>
								<p>We implement solutions to help enterprise bring process, people, and data on one platform. We integrate various information flowing channels to one common platform within an enterprise.</p>
							</div>
						</div>    
					</div>

					<div className="col-md-3 d-flex align-self-stretch ftco-animate">
						<div className="media block-6 services d-block">
							<div className="line"></div>
							<div className="icon"><span className="flaticon-secure"></span></div>
							<div className="media-body">
								<h3 className="heading mb-3">Web Design</h3>
								<p>We create designs that are attractive and functional. After all, the website represents you and your business on the internet. It is important to have a website that is professional yet creative.</p>
							</div>
						</div>      
					</div>
					
					<div className="col-md-3 d-flex align-self-stretch ftco-animate">
						<div className="media block-6 services d-block">
							<div className="line"></div>
							<div className="icon"><span className="flaticon-presentation"></span></div>
							<div className="media-body">
								<h3 className="heading mb-3">Digital Marketing</h3>
								<p>SEO services is leading search engine marketing Company providing quality Search Engine Optimization, Social media, Google sponsor listing and various internet marketing Solutions.</p>
							</div>
						</div>      
					</div>
				</div>
			</div>
		</section>
	
		<section className="ftco-section ftco-no-pt">
			<div className="container">
				<div className="row justify-content-center pb-5">
					<div className="col-md-12 heading-section text-center ftco-animate">
						<h2 className="mb-4">Our Strategic <span>Work</span></h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6 col-lg-3 ftco-animate">
						<div className="project">
							<div className="img">
								<img src="react/images/work-1.jpg" className="img-fluid" alt="Colorlib Template"/>
							</div>
							<div className="text text-center">
								
								<h3><Link to="/service">Best Solution for Information Technology</Link></h3>
							</div>
							<Link to="react/images/work-1.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
								<span className="fa fa-expand"></span>
							</Link>
						</div>
					</div>
					<div className="col-md-6 col-lg-3 ftco-animate">
						<div className="project">
							<div className="img">
								<img src="react/images/work-2.jpg" className="img-fluid" alt="Colorlib Template"/>
							</div>
							<div className="text text-center">
								
								<h3><Link to="/service">Creative Idea Build Up</Link></h3>
							</div>
							<Link to="react/images/work-2.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
								<span className="fa fa-expand"></span>
							</Link>
						</div>
					</div>
					<div className="col-md-6 col-lg-3 ftco-animate">
						<div className="project">
							<div className="img">
								<img src="react/images/work-3.jpg" className="img-fluid"/>
							</div>
							<div className="text text-center">
								
								<h3><Link to="/services">Web Design Concept &amp; Web Analysis</Link></h3>
							</div>
							<Link to="react/images/work-3.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
								<span className="fa fa-expand"></span>
							</Link>
						</div>
					</div>
					<div className="col-md-6 col-lg-3 ftco-animate">
						<div className="project">
							<div className="img">
								<img src="react/images/work-4.jpg" className="img-fluid" alt="Colorlib Template"/>
							</div>
							<div className="text text-center">
								
								<h3><Link to="/Service">Strategy for Enduring Customer Relationships</Link></h3>
							</div>
							<Link to="react/images/work-4.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
								<span className="fa fa-expand"></span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	

		<section className="ftco-section bg-light ftco-faqs">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 order-md-last">
						<div className="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-center mb-4 mb-sm-0" style={{backgroundImage: 'url(react/images/about.jpg)'}}>
						</div>
						<div className="d-flex mt-3">
							<div className="img img-2 mr-md-2 w-100" style={{backgroundImage: 'url(react/images/about-1.jpg)'}}></div>
							<div className="img img-2 ml-md-2 w-100" style={{backgroundImage: 'url(react/images/about-2.jpg)'}}></div>
						</div>
					</div>
	
					<div className="col-lg-6">
						<div className="heading-section mb-5 mt-5 mt-lg-0">
							<h2 className="mb-3">Frequently Asks Questions</h2>
						</div>
						<div id="accordion" className="myaccordion w-100" aria-multiselectable="true">
							<div className="card">
								<div className="card-header p-0" id="headingOne">
									<h2 className="mb-0">
									<button href="#collapseOne" className="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link" data-parent="#accordion" data-toggle="collapse" aria-expanded="false" aria-controls="collapseFour">
											<p className="mb-0">What benefits can you guarantee?</p>
											<i className="fa" aria-hidden="true"></i>
										</button>
									</h2>
								</div>
								<div className="collapse show" id="collapseOne" role="tabpanel" aria-labelledby="headingOne">
									<div className="card-body py-3 px-0">
										<ol>
											<li>Confidentiality guarantee: All client details will be kept confidential</li>
											<li>Price guarantee: Minimum 50% cost-saving over on-site development</li>
											<li>Results guarantee: Progress-linked payments weighted toward the end.</li>
											
										</ol>
									</div>
								</div>
							</div>
	
							<div className="card">
								<div className="card-header p-0" id="headingTwo" role="tab">
									<h2 className="mb-0">
									<button href="#collapseTwo" className="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link" data-parent="#accordion" data-toggle="collapse" aria-expanded="false" aria-controls="collapseFour">
											<p className="mb-0">How do you assure confidentiality?</p>
											<i className="fa" aria-hidden="true"></i>
										</button>
									</h2>
								</div>
								<div className="collapse" id="collapseTwo" role="tabpanel" aria-labelledby="headingTwo">
									<div className="card-body py-3 px-0">
										<ol>
											<li>We sign NDA and Confidentiality Agreements as required by you.</li>
											<li>All our employees are full-time employees, and are bound by the company’s Confidentiality and Non-Disclosure clauses.</li>
											<li>Additionally, for sensitive projects, we create isolated cells disconnected from any public network.</li>
										
											
										</ol>
									</div>
								</div>
							</div>
	
							<div className="card">
								<div className="card-header p-0" id="headingThree" role="tab">
									<h2 className="mb-0">
									<button href="#collapseThree" className="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link" data-parent="#accordion" data-toggle="collapse" aria-expanded="false" aria-controls="collapseFour">
											<p className="mb-0">Why should you trust Solution Analysts?</p>
											<i className="fa" aria-hidden="true"></i>
										</button>
									</h2>
								</div>
								<div className="collapse" id="collapseThree" role="tabpanel" aria-labelledby="headingTwo">
									<div className="card-body py-3 px-0">
										<ol>
											<li>We have completed projects for 50+  clients.</li>
											<li>We have been 5+ years in business, dedicated to the off-shore execution model.</li>
											<li>We are here for the long run; our CEO has global experience with leading technology companies and has started up with a long-term vision.</li>
											<li>Our list of references/ testimonials.</li>
											
										</ol>
									</div>
								</div>
							</div>
	
							<div className="card">
								<div className="card-header p-0" id="headingFour" role="tab">
									<h2 className="mb-0">
										<button href="#collapseFour" className="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link" data-parent="#accordion" data-toggle="collapse" aria-expanded="false" aria-controls="collapseFour">
											<p className="mb-0">Do you offer any discount?</p>
											<i className="fa" aria-hidden="true"></i>
										</button>
									</h2>
								</div>
								<div className="collapse" id="collapseFour" role="tabpanel" aria-labelledby="headingTwo">
									<div className="card-body py-3 px-0">
										<p>Our pricing is based on a long term relationship aimed at giving maximum benefits to our customers.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		

	
		<section className="ftco-section ftco-no-pb testimony-section" style={{backgroundImage: 'url(react/images/bg_1.jpg)'}}>
			<div className="overlay-1"></div>
			<div className="container-fluid">
				<div className="row justify-content-center mb-5 pb-3">
					<div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
						<h2 className="mb-4">What Our Clients Say</h2>
					</div>
				</div>
				<div className="row ftco-animate">
					<div className="col-md-12 testimonial">
						<div className="carousel-testimony owl-carousel ftco-owl">
							<div className="item">
								<div className="testimony-wrap d-flex align-items-stretch" style={{backgroundImage: 'url(react/images/testimony-5.jpg)'}}>
									<div className="overlay"></div>
									<div className="text">
										<div className="line"></div>
										<p className="mb-4">Team with X-gen excellent knowledge and skill in Developed  program and strategies .This company can achieve optimal level of performance and accomplissement </p>
										<p className="name">Er Mohammad Faizan</p>
										<span className="position">Software Developer</span>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="testimony-wrap d-flex align-items-stretch" style={{backgroundImage: 'url(react/images/testimony-2.jpg)'}}>
									<div className="overlay"></div>
									<div className="text">
										<div className="line"></div>
										<p className="mb-4">Nice work environment. Always get a Recognition to the good work.Good opportunities for self -Development. </p>
										<p className="name">Faisal Farooqui</p>
										<span className="position">CEO(FlyAway Corporation)</span>
									</div>
								</div>
							</div>
							
							<div className="item">
								<div className="testimony-wrap d-flex align-items-stretch" style={{backgroundImage: 'url(react/images/testimony-4.jpg)'}}>
									<div className="overlay"></div>
									<div className="text">
										<div className="line"></div>
										<p className="mb-4">I declare a standing ovation!...I hope you know that I think you are fantastic, and I feel extremely lucky to have you as my DigiWeb!... I can't tell you how much I have enjoyed working with you."

</p>
										<p className="name">Shruti Pandey</p>
										<span className="position">Bussiness Analysts</span>
									</div>
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</section>
	

		<section className="ftco-section bg-light">
			<div className="container">
				<div className="row justify-content-center mb-5 pb-3">
					<div className="col-md-7 heading-section text-center ftco-animate">
						<h2>Read our latest blog</h2>
					</div>
				</div>
				<div className="row d-flex">
					<div className="col-md-4 d-flex ftco-animate">
						<div className="blog-entry justify-content-end">
							<Link to="/blog" className="block-20" style={{backgroundImage: 'url(https://st2.depositphotos.com/1038076/8152/i/450/depositphotos_81528890-stock-photo-lead-generation.jpg)'}}>
							</Link>
							<div className="text mt-3 float-right d-block">
								<div className="d-flex align-items-center pt-2 mb-4 topp">
									<div className="one">
										<span className="day">15</span>
									</div>
									<div className="two pl-1">
										<span className="yr">2019</span>
										<span className="mos">August</span>
									</div>
								</div>
								<h3 className="heading"><a href="https://www.youtube.com/watch?v=5tcOQJ9E11I">Why Lead Generation is Key for Business Growth</a></h3>
							</div>
						</div>
					</div>
					<div className="col-md-4 d-flex ftco-animate">
						<div className="blog-entry justify-content-end">
							<Link to="blob:https://www.youtube.com/fc733362-df5f-45a4-ba2f-b189a15b9941" className="block-20" style={{backgroundImage:  'url(data:image/jpeg;base64,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)'}}>
							</Link>
							<div className="text mt-3 float-right d-block">
								<div className="d-flex align-items-center pt-2 mb-4 topp">
									<div className="one">
										<span className="day">29</span>
									</div>
									<div className="two pl-1">
										<span className="yr">2020</span>
										<span className="mos">June</span>
									</div>
								</div>
								<h3 className="heading"><a href="https://www.youtube.com/watch?v=9-NV-ekfaCo">Why is Marketing Is Important For Bussiness</a></h3>
							</div>
						</div>
					</div>


					<div className="col-md-4 d-flex ftco-animate">
						<div className="blog-entry">
							<Link to="/blog" className="block-20" style={{backgroundImage:  'url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSERMWFRUWGB0YFxgYFxgbIBwbFRgYHh8hIBggISghHx0lHxsaIT0hJykrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGzUlICUtLS0vLS01LS0yMjUtLS8tLS8tLS0tLS0vLS0tLS0tNS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALEBHAMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcBAgj/xABGEAACAQMCBAQFAgQCBgcJAAABAgMABBESIQUGEzEiQVFhBxQycYEjkUJSobFiwTNygpLh8SQ0Q4Ois9EVFjVzdKOywvD/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAwQCBQYBB//EADYRAAIBAwIDBgQFBAMBAQAAAAABAgMEERIhBTFBEyJRYXGRMoHB0QYUobHwI0JS4RUz8ZIk/9oADAMBAAIRAxEAPwDuNAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoDXvb6KFdcrqi+rED+/n7UJKVKpVlppxbfkV2T4g8PBx1WPuI3x/avdLNrHgF+1nR+q+5IcL5qs7ghYp1LHsrZUn7BgM/imGVbnhl1brNSDx4817omq8KAoDzNAe0AoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgIrinMlpbusc86JI/0pnLH7IMnzHl50Bh4LzbZXTaLeYO38pV0OwBOAyjOAQfyKAkOJ8Tht4zLcSpEg7s7BR9snz9qAgo/iHwtn6Yu0zkDJDBcsMjxkaRkep86AsyOCAQQQRkEeYPvQEJx7m+ys5EiupxG7rqUFXOwOMkqCAM+uPOgJ2gKXL8SbJoZZbdjIYyFCkFdTNqA7748LZOPI+depZL3D7Gd5WVOPq34I5Xxfi01zIZZ3LHy9FHoo7AVKlg+jWtpRtKemmsLq/HzbIWTi0IONecegJ7/AN/xWOpFWfGrKDxrz6b/APvyNqKVWGVOR2rJPJeoXFOvDXTeUdI+HvOj61tbltSttG7HcN5KT5g9ge4O3Y7YSicvxzgsFB3FBYx8SX7r6l55muXSHwEjUwUkeQwT/litLxqvUpW/c2y8ZOcsKcZ1e903K3we5dZk0k+JgCPUE4rmuHXNWncR0t7tJr1Ntd0oSpSyuSL2K7w5wUB8u4AJJAA3JPl+aJZPG0llmK0vY5RmJ1cDYlWBx+1ZShKO0lgwp1YVFmDT9DPWJIafEeKwQDVPKkYPbUcE/Ydz+KYJ6FtVrvFKLfoQ8fPnDicC4/eOQD9yuK90svy4HfpZ7P8AVfcnrS7jlUPE6up7MpBH7ivDWVKc6ctM1h+DM1DAUAoBQCgFAKAUAoBQCgFAKAjOZuJ/K2k9wBkxRs6j1YA6R+TgfmgORcg8Bk4pJLJdyNojI1OuA8hZnOknBKE/U4ViCDGo0hSKA6RwLkKws7gXFrGYn0lSodipBGM6WJ377jH1H1oCic3l+I8Q+VTH+mMALKraI4gDKVzgqzEnxrviMLkHOANvm34V2sVpLPE0heFHlbqEOHABZhgAFSQDjTjv2oCW+C9w/wAo1u5JMRBUMCCqyjIGCBsCGG22x3oDmHxKuzd8QvZV/UjgTogLsVC4XJJUgL1GJLZGxxQHdORuK/M2FvKSC3TCyYOf1I/A+/pqU7+Ywd6A/O3C2HUnwMEPhuxydTnOR32I79qzgdj+FUsVX6fUz8URjEwXv/lnespcjecXhUnaTjT5/TqQXC2gACzLh8bOSd/Ly7f8qjWOpynDp2Kjouo4l0lv/ET9jAqKdLagWJB28/tUkVg63h1vTo02qctUW28/+GyDjcbGvS+0msM7/wAFuBc2kTyAHqRqWHvjf+oNVqtKFSLhNZTPll1TdtczhH+1vH0Asbe3BlOFCjJZiTj7e/l61VteF0KU80o7+5Dc303Tbqy7qKvxLn184t4wB/M+ST/sgjH7muip8OWMzfscrccelnFGO3i/satvz3cA+NI2HoAVP75P9jWcuHU2tmyCHHq6feimvYsFxeLxC0kSBtMm2VbYjBBwfY4xmqag7aqnNbG2lWjxC2lGk8Pwf86mDkngE9u0jzYXUAoUEHO+cnG3/M1ne3EKqSiQ8JsK1vKUqm2dsG7zrzGLODUuDK50xg+vmx9h/cgedUUsnX8K4e72tpe0Vu39PVnDuK8Sdi887s7d2Y7n/l7DapHsfQJujY27ko4jHojRfiSCLrblftv9WP701bZIJcUoq0/Nb6f154/c2+XeeRayiSJ2XJ8SMDpYehH+fcVi2mae74lw2+hoqZT6PG6O9QczQNYm/XLRCIykLgt4AdSgZALAgj71gcfWp9lNwznz8fBr1KpafGC0lfRFDKTgMdTRLhc7lstgADc5OwoRlrHNNt8ulw7FFeETYIyQrJq3xkA496ilWhGSi3uyWFCpOLlFbIw8m84W/Eo3ktxIuggMsgUMNQyDgE7H/KpSI1+bOfbLh7BJ2YvgEqozpDE4LHyGxOBk7dtxkDJypznBfMyRxyxuq6tMigZXVpzsT5+RwfUCgLLQCgFAKAUAoBQEbzHw83FrNCp0u8bBG9HxlD+GAP4oDlXwk5mSz61rfEwlpWKFxjxgnWpx/ENv3H8ylgIbhyqOPhbacSxmVH1hlGcurHOMFiAxjzvkYJz5ATt2V4bx7qzKRDMWMb+WZ2y3nk4ZjsBnsfPcC1c8c7WAs5UW5ikaaNo1SORSTrXffOFwpzkkeXrQFX+F07WvD7/iEm6qgCbkhhbrIVwdTDfqKmxwCunupoCn8scCv5oHltYZZVkYiUhoUDlm1OrFm1NsUIIV9LZwTigLh8B+KsjXPD5QFIxNGBjthUcbeYHTPqdRJ75IHODMkNzcIzYGrOyt3+2/od+327VlF4Ol/D97St3PtXhPHj9DOeIoVZky2ggH+HuceeO1ZajpJcWoulOpS72nGenN46mld3Nq6kt3x5Ag+vl9q8bizV3d3wu4ptyXe8lh/psecuFvF/Ltg5HcFhnb1AH7UgPw2599f24X7tfsTVZnVHe+S4Cljbqe/TB/3vF/nULPl/FJqd5Vkv8AJ/psVj4i8RJkWAHwqNTe7N2/Yf8A5VtuH0lpc2cRx24bmqK5LdlG4hCHjYHUNs+FipyNxuN6vVY6oNGntajhVi/lvuVic4t7Vi5PUOpjJM6gnpnu2dht2G2fvWul/wBUHnnzy8dDoKe9xWio/CkliKb5+HUlbLmBra9tp42YwwaFlKkspWfZsnzwulgT51jcvXhLkkv1MrCPZKUpbTk3s9nheXnuWe/uL+Rb+WN82nzMkhfclfk3RdIXuQ4wcDzhJ88HXG+MnxUu9d1GAcoIVK/7ZYk/kY/apIHd/himlayl1cv2SKDxQfov/q/2r2XI2fFlmzqehFaf+gtn0z/4hWH9poIxzwSWf53iRlsUeEKQD4Bg489O29ZYyjbSsKNexjFxWdCw+vItfwqv3bhXFYSSViQyIc9meN8jOdjmMH7sajPn1ToaXJ/OD20CRvYx3IkLOZmI8yAVAK7kYPbOWO2dWayjFy5IgnUhD4ngt3xdMa2fUt2VluGSBVQgAZ2OCNgNK437Z96qTtGq+t+xco30ZW2iG6fVEP8ACW7W04ibbWrJcwoEK6R4o1LgE7Fm8UoJxthfUVZKxN83csX0HEW4pZKJsr4kK6ycBQV05zgqMZXcYHpQEnyPzRaXN0Q1p8pe6ChHbUqnURjCkkYz4lyNxnuKA6DQCgFAKAUAoBQCgIjjHLNndHNxbxyNjTrK4fBGMCQYYDHoaAj+Fch2NvIssMbKUxpBkdhlRgbMSTgep8ge4GAJbjnBYLuPpTqSPIhirKSMZVgQQaAq8fwssdlleeVFIIRnVVAHZcRqnhHpQFl4pwC3ntjaSJ+gQF0KSowvYeEjagNnhfD44IxFGDpBJySSSWJYkk9ySSaAh05d4db3JuwqRTuWYt1WXUXyCSmrSfqPcbajjvQFR58+H1oY2mt1/VyXZDIx1q2ScKW7g7gD3A8hXqNpwqpbqr2dwu7LrlrDOYi2iVSNgpxnLbbdt87VnhI7hWdnRpSjyi+eX7b5NePhFuTqADeedWd/vTSipT4Nw+o9UN/nk34Y1UaVwMeVerCNtQp0aK7Ont5E3ytwI3k3T1aEG8j5Gw9Bn+I/8fKkmUuKcThZ0W08yeyX39DqfBOZleGNJXjjmVmjn3VVU27aHIz2DnGkej5/hNQRlk+czjh5KrzrKj3TPG6yKyrgowYZAwRkee3b3Fb2wknSx4M4vjcGrnPil9ivhx6j9xVzUvE1Wia3weYUjyI/GK87rXke5qRl1yfcMOohVAJYgADG5Owo3FRb6HqVSU1HfPL3O2QwKq6ABjG4wMH12965lvc+hJYWDmnxc4UQ8Vyo8JXpN6AqSV/cEj/ZrODOy/C90tM6D5/Ev2f0OaX6ExuBkkg9u9ZS5HQ8RhKdrUjHm0+RofKt8oYwG1YOA2M/Xnf3xWOO6adWtV8JdFRerfZ8/iz+xiX5pk0aQowBq7H+58vTNed7kV4f8rUpdgo6VjGeX18PBM6/yLys8HBblUTVJdJI6r5kFNKjf177/wA1eNYOb4hSp0avZQedOzfn19uXyOeycO4pYolu1sowPCScg57kb477kd9/er1tVrKGKaOWv7e0lV1V5NNr5bfI2rvhl3MLd5VKwqTk4GlpGwHABOQdC/Vvvtg5OM68ZVakYvnjchta1K0oVKkHmLl3U+uxo8X4JKskc9qzl0fX9YXB2OQNgM4wcYz5msatppadPcwteMKpGUbh48Gs/QsS81cWgmPRZpY5CvhlYMF8KDZjkqO+w77n74V7eWpuMdizw/iNLslGpPflv67foWbk/lniEt8OIcRUROpDBVYbnpPHuFONg+MkE+HY75NI3Z0+gFAKAUAoBQCgFAKAUAoBQCgFAcc5h4C1td3V5f2hvbeRy6zRuRJAuwGFyAQoGNwPpG57UBr85y8PuLET2/UE0aQxI7kgmNWC5KglSRk52z7VNOhKEVN8mVKN5Tq1ZUl8S8foY+fuT7SHhUd5bo0buYZJMFmB6mCTpOcYznw4FQm0p3U4UnS/tbT9iB5V5Plu7mX5TQixrplEmUOpsFfBgnBGd+232rJNJ5Nza8VtaF12tODjFxw0sPf3I/gVjGb+Np5B0pJzA2g76RhFbUdgjNjfv7DUDXmd8lWpxaavJXNLm8pZ8OXj8/UunxO5XtLWS0EEegTyMJAWdgwAXYgk99RPrnG4xkR1ZuMJS8E2a2U5V6uqo8uT3KzzfwWGBrRIYmbU0mV1MWfToOPcncemD9q0fDL+pXVSdRpYx6LmX7yhCGiMV4lm5tjC8Jgkjtms3lnVSskjtpDKRjLbhW0qcbeZ+/RU6ziu69maOtbU6kk5rePIgbjg8FlcpDKjJPjwk6sMDkbfwY79u2/vW0o/llKOndnPXX5+dObmsRXT08PuRdxaSrI1lCcLOQUxuVBJ1gD0wCP29awqRlCTop7Pf08SahUhWhG6msyhtjxfQ6/yTykYQssq6dC/pRnvsO7e/t671HdXMVDsqfIl4dw+bq/mK/N7pfVmnNcuza2Y6u+c9vt6Vxsqk5S1N7n0WFKEY6Uti5W9ut1aBLhdQdcMD54Ox9jsDn1reW85SpqT5minN21y5UXhp7fz9DmnHvh1cxMTb/rx+W4Dj7g4B+4/YVaUjsLL8R0KscV+7L9P9fP3IFOWb0nSLWbPvGwH7kYr3UjaPilnGOe1j7/TmXDlf4cPqEl7gKN+kDkn/WYbY9hnPtWLkc/xL8RxcXTtv/rl7L6stvFeb7S2lEEhbUMatK5CZG2fxg4ANROaRy0aE5rUjPzHMrRxRjSxnljRc75XOtyP+6WQ5+1e6muRFoUviWceJCfEhMJDjAALDH4Xy9Bj+o9a2FjJammc9x6D7KDXJMolbM5Y9VCSABknYD1JrxvCyzKMXJpI7bApCgHuAAf2rn3zPosViKTPuvDIUAoBQCgFAKAUAoBQCgFAKAUBQuL/AA7kmebTxCeKGZmZ4UA0kyMWPnjuT5b7Zzvkng8ayYx8Lofl3tzMwBACFUA06XD5wScnI+25qzVuddNU0sI19vYdlXlXlLLfyJ3mPlb5qwFj1unhUXqBM/6PHZcjBOPXb3qsbEpvHLi1tr5poZJROYPl7goqlGIUANgsPGpAOxxtj1rBzSLFO2lNZ5G9w34f8OuuGxRRdxuJwgEgYNlgckkfy4ycAKQdgayTyQzg4PDLHzNyql4LbqzENbtq1YHjOADkeWcZ286xqKLi4y6nkW000c95o4U0/Frexid0aPLiYaTpV0yTpI7gKV+7CtTZ8OjbudPOqMsczZVq7q01U5NF8g5LD20ttfXEl2sjBgX8JTR9OnBIGMD2PmDk53CSSwjWN5NSDkAi4gmlvZbhbfPTSZUYgMBtrAH8o7r5fbHqeOR40msMq3InAWn4tc3ZdQlpdzqqack9QyIADnwqgwQN8n0wDWEZSk3lk9WnCCjpWNuiwdfrMhKpznFFBGt1oGBPEJR5Mksio23qNer3K+5qtUtqTepot0bmqloUuhMzcXhTwg5xthR2x/SrkabwUJVopnxHx6I99S+5H/oTXrpSMVXiSUUqsMqQR6isGmiVNPdH0zAd9q8PSjc2cnxy3CTdUoJnVHGkHfQdwc7ZCgdjufxUcorOS1SuHGOnHIK09xfabLpCGxQ24eQswEzhdRCLjqFECpgsuNbb03b26GGyh3ub3LMvBIzG6S5laQDqO+NTY7dsBQDuFUADv3JJlhJwepcyrWpxrQcJrZlTvOQZA36UqFf8eQf6Ag/0rYxvljvI5qrwCef6cljzJfl7k9YGEsrdRx9IAwqn19z77faoK926i0rZF+x4RC3l2k3mXTwRaaqG5FAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQHIeZeUrpbmRo4mkSR2dWXf6yTgjyIzjJ2qGUHk2VKvDSsvGC38u2klhZaZMdWRy2nvpLADGfPAXP3NUuIXbtKGpfE9l/PIp16inPKNKWQscsST6muKqVJ1ZapvL8yE+LSGNLiO5KDXHkahsdLAggnzG+cHzAq5Y387aaee71X2MlJ4x0LvcXaJpLHAZgobyy305Plk4A9yB5iu6Uk1kxxkh+N8LuFUy2EzLKvi6LnXFJj+Eq28efIoVGe9GnzRnGUeUlsc9+FnMSC94i0v6Kyhrllc/QUkYyAnA7GT0z4ahpS7zyWrim9Mcb9DpHK9+9zGbpgVSU5gQ+UQ+lm/xPu/sCo8iTNF53Ks46XpNXmO7DnpYBVSCcjPiG4/Y4P3+1WacFjLKdao86UQ9TFYUBtcPvWibI7fxD1H/rWEoqSM4TcXkwfEKxuLqGJoFZ4wzFkHc5xobT59m/3h+KVRM3NrOEW8leuLmaKzj4YAWvppA8CBt4FVlZXcjOkAqWx6E5GMisOS09SSWmU3P+1c/Mu/LUdtZ2yQRyawmepL3DSEkuS/YsWz4QSRsMYFJ1adGGqbwiu4zqz2W/gbX/ALywZx4/vp/45rWf87a5xv64LP8Ax1bGdiUtrhZF1IwYeoraUa0K0dcHlFOcJQemSwzLUpgKAUAoBQCgFAKAUAoBQCgFAKAUAoCL49xPooNP1t29sdzWs4pf/lafd+J8vuW7O27ae/JcypSX0rHJkfP+sR/QVx0724m9Upv3N7G3pRWFFEnwjjEupY2fYkAMRk/bPoa3PCuLVO0VKs8p7JvmULyygoucFjHQz/EriUtvw6eSAlZPCqFc5BZ1BO2+wydq6s0xz3iXOU9ybFQHUxSCK7AyD1MkEtj+EqhfG+Qx/lzVHiNGNShLUuSeAa/NfMMkN5CiNiKMK1wNsFZZFXcn+VQTtvlhWg4fYQrW05SXeedPyX3Bj5p4iVvem921rH8vrVlb+MOR9PYgjb8DFZWFBStdSpKctWHnw/0D2y+I/Wgsku2Pg6q3keBiaMRHQcAYOo4BG2Dk9t66eDj8K6Erpyjh+JEJzzfxWsxSeQiRk6RdtTRIrY0gknOQQCTk7d871LjCybeXCdNj+anLd9F5vBAaPmWaUzuS5HVbSctvljgkZJ/bK1g6MZPJdtuFQr0HKhVzjxWP56nUeW+J3r8Jub/51iqQSrHEIogI2iwVcOF1bKPpIP1HvgVkcu89SB4pzNcxNYysWdXg6s6hd3+jU2MEggMWx7VPqawVVBS1epkPMzxx3sysZVWZVhzuNLjORjuoG/uRXuvmzzs03FEvwmGaOZVuL4SOyHMBWMHPcEYwTjB7AA48sVlHOd2YSw1siwVmREbxDmniDv8A+z+GwZkUDXO26oHGR3GlSARu2e2ymqFaT1tRRtrWnDs1Ob+RMcu/Dm3hBkuS9zcPnquzyaX1YypTVh12/jBz+wGMaaXMzncSey2Rh50vun1NKjTBGSqDYeFNXl28h+K5Xis3cXsbfOEsL36m0soqnQdXq8v2KGvODlVIjiyZRHqEjumDF1MgqhbUPpK42PtvXj4PBSacnyzjCT546vHnzMvzssLZc8eXLPgT3AOcZIrqaHpowRZNShjqBigEoYjGNBPgz3yRtV/hNBUdMlJ4kuT5Zy/129irfVO0ymt0/wCfIsXDucbqaOIRW8Dzza2VetKqLHEseSzNEG1anC4VSNwc10BrDXi+IbvNbIkMf6yQsYzIepmWaSKQR4XS/S6Zc5xld9qA2eHc/dW5W2EBB+ZkiZt8CNeoI3B/xshHtob2oD4PxEHRuZVh19C6WEIrZZ43kCCQADuxD4Xz0jffYDPac4TXBVLOGKR3aZld5WWPowOih9YRiWfWuFA9d9twNzgfMks95cWxSNVgJXZpCxwEOfoCYywGNWfagLPQCgFAKAUBocejdradYtQkaJwmk4OooQMHyOcb0BReI8N4pm40NKyOk5jHUIZJPkwiaTq+lpDkdtLoT/FkAfUnDOIYlFz8xInUkx8vMY3crb26wuMOulCVlLJnAkbsV3oDOltxWN8EPIEhNwD1NmuGt0i6PfdBJ1JdxpGpfSgPvhXA7w/JrcmbVCZI5mS6lAdEBaFzhl1ZOASVySCCMUBVrrhl8htmmFwXC241NK5QBYo+uHUtu5bqeRzlCD3xpOLaVvUxp0tbrfPTD/2bGxy9o88r265MfKttdIT8yWP6MIUlsnUOqXB/xKWCk+YCmtFxGpbzS7H/ACln9MY8nz8tzY2sKiff8F9Sz2iFpEA7lh/eqNrBzrQjHnlFitJRpyb8Cc574G1/CLRZOll1kY4J1IuQwGCMHJXftvX0Y5U+uZuUo7mJkiIhdpVmZwM5ZBp/G223qfU140msMFU4h8OLa5muhNPieZi0QIddKqgUaRqXqADAOCR9s1Ujb9nojSemK6Yzn5nuOpmuvhYJnhFzOXRLYwOVBR2bfDg7gY2yDkE59qzoWsKKaj1bfuE8HP8Amf4fnh7wBpxNnUR4NOwIG+5zkH+lT06aUmzpOBWjup62/ga+eSCbhZ6bRBhpJBXbsAQcd9+1TadsG8fCKn5edup91tOO3LfODatY5BnqOGHkAuK9SZetaFzDPbTUljbCwXL4W2zmC74cGyJoXZScgBjhPLcZDDJG/hFYOOEcpxfhatLaEs5ak1nye69sEo/LJjuLcM6kWsBgdcE6tcabjPlt599/Spo97DOQn3crx3I+z5IiWC5tnYtFM4ZQNigUDAz54I/bavVDZo8dV5TM1vy5L83FczTrJ0VZF/T0MQwx4iCdRHr/AE3ooPOTxzWlpIswHkKkIy48PhEaKm2cb+5PeqcpJyL8ItRRtV4ZFQ5y4Tr1sQTHIuiTGRjI09xuMjzrl+MW1SlXV1T8vk0biwrRnTdGRV7zhUUgQNqHT3Qo7oRlSv1KQexI/NaOneVKcpNYernlJ9c8n5mxlQhJJPp8jKnCbeAG7kiZsllXxsCzSxdNvF/LoXfvuAe4rqPw9b3F1U1S2gltt5529Mv3wc/xy8o2dLOMyb/n7Fi4MltfxIuiSJrYBEKSurqjLjAlXDEMFGR6qD5A10lxbui0s5yaewv43cW0sNc0SS8n2Y0YjIEaxomHfw9CQyIQc51BiSW7tkg5BquXzPFy3bLGkSoQqSdVTqbUH6jyZ1ZyfE7nGceI0Bq2/JVjHo6cITQIgNJYZ+WcPGW38TBh9RyTuCcUB9PydZlOmI2Qa5HBjkkjZTOcuFdWBCsQPDnGw22FAbNjy9DFM08ZlDOSWHWlKEkKCekW0asKBnGdqAlqAUAoBQCgFAKAUAoBQGvfWayoUcbf1B9R71Bc20Lim6c1sSUqsqUtUSuycrvnwyKR7gg/51zk/wAPVM92ax5m1jxSOO9HcyXHJ0UsLRSu+psFXQlSjKQVZceYIB39K2ljwmnbd5vMvHw9CrWv51HssLw8fUieU+L3Pzxsr7HXghfEg2E6M8elwvrgHIHmD7gbKLerDK9SEdOqPJ/oXoOM4zuNyPvnH9j+1SEBp8X4XHcRmOTPqrKdLIw7MjDdWHqP7E141lGUZOLyiotzMbV/k+MZGf8AQ3ahlSUDsSV3ilHnjbudhjOGrG0ibs9S1U/YqXP93FIYmi4hFdqMqq6ozImrfcpgMu2MkAjzLZ2kpyWcZOl/DVbs6k6UljVjHy6FTqY7IUBZPhvxdIeIxxt/2yNHn0Jwy/uU0/kVDUqJSUTlvxNVUqUaS5p6n+31JH4mc5JDfItuqs8S6bhidmGciP7pknV/CXI/mFQyr9nPunJQtFVh3vkWiwtZpIY5uiy9RQ2k41LqGcEDz/8A72q/GrFo1dShKDa5+hmTh0p/gI++3f7165xXUwVKb6E1w/hHTBdsM4Gw8gf8zUFSo2tixSopPMimySszamJLE5J881zEpScsvmdfGEVHSlsX7hErNDGz/UV39/Q/kb1v6EnKnFy5nOXEYxqyUeWTBJxhGlMEQ6si/wCkAPhjz/O/YE/yjLHOcYyRm2nsR6WllkZfXFrFcSGXpxxwQq8hYAAtO7Bfuw6TbDv1BVR2dspanBeyJ1VrOOFJn0LJr5dU6NFB/wBjGfC//wAx/wCU42EfkCS25Cpfo1JU5aolG7tqVeHZz38/sSfBuCxWylYs7nJLHJOO37VnWrTqvMiK1s6dtHTTJGoi0KAUAoBQCgFAKAUAoBQCgFAKAUAoBQGnxCNQpkMjRaRksDsAPVTlT+2fSii5PCPJTUIuUuSOW8e4ubiaKbAWSAMscqBkYh9icajjbyycZbfetxQ4fCOJVN2crecbrTzCi9Mf1f2NI3kmdXUfPrqbP75q72UPBGo/MVeep+7Jrg3N08JAkYyp5hjlh9m759jt9qq1rKE13dmbG04vWpNKb1Lz5+/3LteILuHKJBcQuM9OUEA/d8Ngg/4O9aWpCUW4yR19CtCpFVIPZ9UUy9+HCSN+lY29vn/tGubl8H/DChRf3YfaoOzWdkXYXUotPU8r0/c9m+FgVBi78Q+ovGACfbDbf1qeMmlub63/ABPUisVYZ808P5/xFL5h5U4jbEj5ZpF8pIsyD/dA1D8io6lWa+FFuf4kU1inHD8yoSGaKRWYPHIpDqWUowKnwsAQOxXv6iqEnJPL5mmnN1G5Sec8y3/C7lFr2468wJt4m1OW36kncLnz38TfgfxVLRg5PUytcVdEcLmfoGrprSp8tX3ztzc3DE9K2la3gTy1IB1JSPNm1BQT9Kg4+ps4ReW2TTjoil47lja/hBwZYwfTWv8AbNZZRFhmnNaWhbqN089ydQwfuM4NQuhSb1Nbk8bitGOlN4KFzxz+plFjaXCwrnFxdDJ0KBusenJZ8bZHmQBg5Kp1F8KM6VB41yWfBGbg/NY6QtuBWMk4XOZZP049XmzO2C7k9wSpNe6tsRR5Klvmq8G3y/y5eNP87fwxS3GBjXNhY9OcBIkjZcgE+MsW3PbJz7GLzlmM6kcaY8i927OR41VT/hYt/UqtSlczUAoBQCgFAKAUAoBQCgFAc7545ovIb+O1tpYIw0PV/WHh2ZwctkYz4QPzQGO25+uJODSX4jjE0UojO5MbASxhmDemhjuM4I7HGKAkufuY7q1sbee30dWSSNWBXUMPG7Np39QN99s0BHcyc3XZ4ieH20lvbaUUh7gH9RmGSEO42BGxxuD3yKA2OaeZL+zsreVxGJ2uelJkAgoerpIwdiQqfudh5AOOc9Pa8WS1l0C1aNMtjxK8rMASc/TkAdtsmgEfNNzr4yNSn5MZgGgeH9Nm33GrfGxI7UBUpOYeIXEELTXMDxzkt049IIVPUac/VgjcZG/sbtjBupqXQ1HGasY0NDzv7fMqlpxW4nZ+m0S6SR0mHjOM477b/wCXlVmNerUb0tbdOpr6lla28Y9om8/3Ll+hscX4tIsyQIY49S6tcmcZ/lFS1q81NQW3myCzsqMqMq005YfJfuSlgZdP6uNWe47EbYNWKWvT3+Zr7pUVP+jyxyfRnQPhtenMsJO2A6+2+G//AFqhxGC2n8jdcBrN6qT9V9T34m/NYi6PU6W+vp6vq2xqxvjGfbP4rT1M9Dr7XRvq5kbZc7y2MCpf2l2642m0ArpPYMWYbjtvv2rzXpW6PZ0Yzm3Boxx/EywRleBpUUkCSB42xpJwWjK5VGXvpzpYA7ajmse2jzRj+Wn1K18ZOI21zJbTW00cvgdH0MCV0spXUO4+pu/oajuGnhomtYyimmi+/By9EnDEXbMTvGcf62sfnS4qai8wRXuVioz55v8AiZa2mY4f+kTjYqp8Kn/E+4z/AIRk+uKTrRiKdvKe72RyTgXC+IcQMsdtqETyNJL42SEO+51bnJxgY8TYx96rRU58uRdnKnTxq/2XGD4ItoOu7QPjYLD4Qfdi2SPwKl7DzIHe+CKyvIwtpdHE4Z0jJwk1sYmU/fUMgfgH2rFU9PxEyrOa/p8/Mm7N+EwN+lw8z4/iuJc//bwyf0rNKC6GLhVlzlj0L1wT4gWrYjkT5cdh2KD21DGn8gCpVNFapbSW63LkJV9R2z3Hb1+3vWZWHVXGrUMeuRj96A9RwdwQftQHuoUAzQAMO+aAKwPY5xsaA9oBQCgFAKAUBy/4h2inilu89pNc2xtyjiOMth+odOX2AxqzuwGN/KgNXhHK1zNw7iMCJLFBMVNnDNkMqoc6dLfTnSBvtuN9qA+Lhrq/hsLI2k8TW00XXMsZCsIV0lg306cEtuck4CgkEgCW584gjTSW1zwqW6QgCOWJW7aFOC4GwDFt849jg0BX7rg90OEW0dwh/wCuxuiOrlkj6bbFRkg6tXt4hnagJ/jfARd8YmhmiJhksdPU05CusgIwcY1DVkb+R96AhOVeEXkUPGorlHZ+iqIwRz1MRSjKkg6yRo9T69wKArttZxwrbH5C5juCui4mdGClsL5k4232Hf8AG16xklPGN2afjNKU6OVLCXNePgQnE36vh+UkEwIw4BAyfPPnUlaXabaO94kFrHsN+2Thjk8fz+cje4jOVVI57dp/AuWQEnV57+W4B7+nepqsmko1IatkVLempSlUoVVDvPZ8sdDPyvBIkbBlKKW8Ct3Ub/07VJZxlGLzsuhBxepTnUjpabxu11LpyddFLuFRsJnMZPssUkpx+Y0H2aoOJTxGMfMufh6i3KpU8Fj3Z1etUdKR3FJ4MhJ20hthqLqjFtgpbZWJ7aSd/SvHjqZJPoVzjvwy4fcL4Ivl38mhwo/KfSf2z71hKlGRLC4nHrn1ORc58j3HDsNIyyRO2lJF23wThkO4OAx2JG3fyqpUouG5epVlU5EPacbuI4HtopWSKRtTquxY4C4LDfBAAwDg+eawjOWNKM3CLepovHJvwolnXq3pe3jI8CKAJD6EhgQg9iM/bznhQzvIr1bpReI7k7zJw+94ZbJFBdyPbZwPAqvHjsOqmMqxPoDkd98VbpxxsbPgVO2ua8u2is42T5Px2LV8Ob24ltNdyWPjIRm7smBuT576hn2r2RU45RoUrpxocsbpck/50Ob808aa7naTPgGViHkF8jj1Pc/8BVaTyzGjT0Rx1KVHFiNgsbC40nW2k5bxDVhuxyOwrL9iFLEcY7xiniUCboI3TMQUgKwy5YDYEbnSdzXq8zFpd7RywW3lUz6byGQySluHzRRhQW8Mf0rtvnDHAH8xrKMskNek44bJjiXJ8kFqGeONUmuLVujHFLNGgiikDO8IUHLZGpVA7d8nNZlcmrjgEE0/CpflldHEizt0JEBKRkoWRwWRdYYgMR3G58wNPifLqyWzs1v1XXismMpkiKW78fYHwFcE+2e1AbfGeDlJbxI42+V12SzRxqf+rxxurhVG5AGnIG+FOO1ARc3CBIs0diksNq97a/LsI5AEkAYSSIjgEKraTq7Ej2oC4/DVZ9F611F0pWvHLrvpJEMALISN0JBINAXGgFAKAUAoBQCgFAKAUAoBQCgNTilgk8TRP2Yd/MHyI9wazp1HTkpIhuKEa9N05cmcp4zweW2bTIu2fC4+lvz6+3et/RuIVVlc/A4m7sqttLElt0fRkdUxTNvhvDZZ20RKWPmfIfc9hUVWtCksyZYtrWrcS0019kV7i93xKyniaeFo1gm6sWVGkkgKR1V2bUoxjORnsK5e6uKlSprktj6Pw6xo29Ds4POeb8X6F+4R8YrR8C5ikgPmR+ov7jDf+GsY3EWZytJLluXKx4zZXqMkU0M6sCGTIOQRuGjO+PYipVJMgcJwe6wQHBeISWU1xZSh5IY9L2rk5OiQH9Mse+gggE5OMZ8qoXfEKVosT3fRFunbSuEpR+Zoc3sOIRLDKCiK4kGg+LIVl7kEYwx8vStBW49Vnyikvm/sbCjYRpvOckVydy9bWVz12BlGnC6wrFGyPEpwN8ZHbO/7y2vG4xl/Vj819hc2cpxxBnV4JldQyHIPYiuop1IVIqcHlM0coOLxJbn07AYB8zge5wT/AGBP4rMxMN9/o2HYkFR922H9SKM9XM/Py9qqm6PaAUBa/hkhN6COwjcn7eEf3IqSnzK13/1/M67UxrRQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQHzJGGBDAEHuCMj9qJ45HjSawyOPL9pnPy8X+4P7dqm/MVf8mVfyNtnPZr2M079FQsMJf0SMIo/JJVQP6+gNQyk3u9y1CEYrC2RWuKcu3t94Lu4W3tz3gtvEzD/HOwGf9UJjfzqNxcuZPGcYfCsvxf2NW/8AhNw50CxrJCwGNayMSf8AWD6gf2FeOjBmSuqie5z3mP4YzWrxkXETo7hVJOiTJPcIc6tI32bOx2qncLsKcqjeyRcoVlVenG5c4k0qFyx0gDLEscAY3J3Jrh6tWVWbnJ7s3EYKKwjnHNnErg8QNvFLIgwgADMF1ONs4IGM+ZB89jjbq+G0KKs1VnFPm+SzjJprupUddwi30NOTinEeHypHM+sOBjU7yAnGD31HJYeWPxnaSNvZX1JyhH2WGv58zB1bi3liT+pY+duNz/KW8lvLJEJCHKrJoHiVdie3nj71W4LqpVqtBvZfz9SXiGmcIVF1Owcv2xigjluZdcnSUM7eFUGkbKCTgbZLEkse5wAB0XLmax77Ip/N/wATraKVFt/+kiMPI3TYaS6r4QX3BUAu5K5wUT3xFKos4RPC3eluWxxzhvEbmSbrSnwTSPkahpVm1NgDJOAdvQdvSs5xWD23qy1pN7E5xOQrDIy9wpI+4qKPMvVW1BtERytxOSVxE5Lu/wBAAJJIOMDzOfT2PrgZzj4FW3r74ky0NZ3NnxK3VpHjLGF2VGIwPmIQVbHcaWII7HJ7gVnBYRXr1NctuR+gayIRQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUBEX3DLiXvdyQj0gSMHHu0iuc+40/avGn4mSkl0K/eck28Ia5LTT3CgaZZ5WdgCQDgbKNifLbO1avi8P/wAk8eX7ovWdZutGPJeXoRtcMb45dzXMV4gzqwIWRGeMMATpSPGF98KM++Pt2vDoqVlGPims/NmhupYuG/Boxcy8be+khjWAghhowxJOsd2UqDgYHlgb5zsK9sbONjCTlPbrtjl7nleu7hpKJLc/2phsrdFbePbVnG4C5I7D1296pcIr9rdVZ+O/2LF9T0UYR8DaTke9cQS8Qkme2dQxeIvcPGCBpzGd1GPNVfGO1bx05Z7z2II14Y7i39iZ50fhtjwx4uHMjTzssOrIeUgnLasjIGBgrgDxdqlhGK5FSpOcviKBcLFHHb3EGnrwtqkOn9NG1qFkHT3ZQdG5G5UjBJqQiOzcV4PYXfDfm0gVDLCrjTlcF8baVOCQTjt3FeaUSdrPGMnI+DcBmPDk4lbN47eTx4UasDRIDnIONZI8yNse3pGTFzx5b7iNlcE4dikbR+H6wwQnBbw7gkDGSAw9MgfoOgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgMdxEHUqezAg/msKtNVIOEuTWDKMnFqS6FCvrRonKN5dj6j1FfPru1nbVXCXyfidNQrRqw1I5xxKwnfiynTIYQyE+Bin8J7/T5H+vffHQUK9OHDfiSlh9d+vzNbUpzldctsovkcSr9KhfsAK5iU5S+J5NuoxXJELz7we4ksw8MTudelQqM25VtyFBwu2nUcDLDJrpeAW04uVZ8msLzNRxOtF4gufUy2fHuNwxpBHbPpQKiMbSUgKukEk5LHYORhCcdPIyWC9Mak1OdrS+vZOHQlJQ6W6F2eJtJnmMOoHSAoKjxHddOh/TBAnOcPhVbNbPJD15Jo08AMmSwBYkDb6jqcj3PagNHk2G6j4Ld2txDNEYgTH1I2G0rE4BIAchgXJG36gHcGgJT4J2T/ACNzFcKTmdkIfG69GIHsSCCdW+TnOcnOaApN5yRJZ8athHG7QGaN1KpnGJVOdm2IAwTjyO2DQH6AoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQGve2cci4kAI9fT8+VV7i2pV46aiySUqs6TzBnBpuf8O4WEMmttB1kEpqOknwnfGK5ypwanqemTS9/sb6NzLC1Iv8A8NXF9C9xNHpCyaEXUSDpVSSdhndsfirtnwWhHvT73ryKV3e1E9MdjoKrgYFb1JJYRqj2vQKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAqvxN4z8rw+ZgcPIOjH66pMgke4XU3+zUdSWmLZNQhqmj84VrjaH6P+GPDujwy2Ujd16p/74lx+wIH4rZU1iKRq68tVRstVZkIoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQHCvjVx7rXa2qHwW48XvI4BP+6uB92YVTuJ76TYWsMR1eJSOB8MNzcQ265zK4Q48lJ8R/C5P4qGnHMkixOWmLkfqmOMKAqjAAwB6AVsjTn3QCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAflnmn/r15/8AUz/+c9a2r8bNxT+FeiJ34Sf/ABW3+0n/AJT1nb/GRXP/AFs/RNXzWHlAe0B5QHtAeGgFAe0B5QHtAeUB7QHhoBQHtAeUB7QH/9k=)'}}>
							</Link>
							<div className="text mt-3 float-right d-block">
								<div className="d-flex align-items-center pt-2 mb-4 topp">
									<div className="one">
										<span className="day">29</span>
									</div>
									<div className="two pl-1">
										<span className="yr">2020</span>
										<span className="mos">June</span>
									</div>
								</div>
								<h3 className="heading"><Link to="#">Strategies & Planning</Link></h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		

		<section className="ftco-appointment ftco-section img" style={{backgroundImage: 'url(react/images/bg_2.jpg)'}}>
			<div className="overlay"></div>
			<div className="container">
				<div className="row">
					<div className="col-md-6 half ftco-animate">
						<h2 className="mb-4">Don't hesitate to contact us</h2>
						<form  onSubmit={this.submit}>
							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
									<input type="text" className="form-control" name="name" id="name" placeholder="Name"  value={name} onChange={this.changeHandler}/>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
									<input type="text" className="form-control" name="name" id="name" placeholder="Name"  value={name} onChange={this.changeHandler}/>
										
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<div className="form-field">
											<div className="select-wrap">
												<div className="icon"><span className="fa fa-chevron-down"></span></div>
												
											</div>
										</div>
									</div>
								</div>

							
								<div className="col-md-12">
									<div className="form-group">
										<textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message" value={message} 
										onChange={this.changeHandler}></textarea>
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<button type="submit"   className="btn btn-primary py-3 px-4"  > <h2>Submit</h2></button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
		<div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><Circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth-="4" stroke="#eeeeee"/><Circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4" strokeMiterlimit="10" stroke="#F96D00"/></svg></div>
		
		<div className="icon-bar">
  <a href="https://www.facebook.com/abcsolutionco" className="facebook"><i className="fa fa-facebook"></i></a>
  <a href="https://twitter.com/home" className="twitter"><i className="fa fa-twitter"></i></a>
  <a href="https://github.com/Faizan465" className="google"><i className="fa fa-github"></i></a>
  <a href="https://www.linkedin.com/company/68905967/admin/" className="linkedin"><i className="fa fa-linkedin"></i></a>
 
</div>
<div style={{position: 'fixed', right: '3px', bottom: '180px', cursor: 'pointer', fontFamily:'Arial,Helvetica,sans-serif', zIndex: '999'}}><a href="whatsapp://send?phone=+918383049524&amp;text=Hi, I contacted you through your  DigiWeb Solution"><p className="wa__btn_popup_icon"><img src="https://www.apollofertility.com/international-patient/img/whatsapp-icon.png" alt="" width='50' height='50'/></p></a></div>
			

			</div>
		
	
		
			
			
        );      
           }
}
     
export default Home;