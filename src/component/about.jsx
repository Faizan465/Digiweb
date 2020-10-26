import React, { Component } from 'react'; 
import {Link} from 'react-router-dom';
import './about.css';
class About extends Component {
    state = {  }

    render() { 
        return (
            <div>

<section className="hero-wrap hero-wrap-2" style={{backgroundImage: 'url(images/abt.png)'}} >
  <div className="container">
    <div className="row no-gutters slider-text align-items-end justify-content-center">
      <div className="col-md-9 ftco-animate pb-5 text-center">
        <h1 className="mb-3 bread"   style={{color:'black'}}>About Us</h1>
        <p className="breadcrumbs" ><span  className="mr-2"><Link to="/home"  style={{color:'black'}} >Home <i className="fa fa-chevron-right"  style={{color:'black'}}></i></Link></span> <span  style={{color:'black'}} >About us <i className="fa fa-chevron-right"></i></span></p>
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


<div className="aboutus-section">
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="aboutus">
                        <h1 className="aboutus-title">About Us</h1>
                        <p style={{fontSize:'15'}} className="aboutus-text">In a world of Profit-driven business, we at DigiWeb Solution work following a customer driven business model. Back in 2018 DigiWeb Solution was just an idea, an idea of building an enterprise that will not only provide a hassle free and cost-effective IT service but also providing our customers with an unmatched Quality Service. With this idea, we started and worked our way bit by bit to make this idea a reality Culture is important to DigiWeb Solution, our company values aren't just paper statements. This is a stimulating and fun place to work. Happy and smart people create better service. Like many providers, we recognise that plain speaking is a key element in your decision-making and ensuring that your technology works for you.</p>
                       
                        <Link className="aboutus-more" to="/home">read more</Link>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="aboutus-banner">
                        <img src="images/work-7.jpg" alt="" style={{ width: '120%',height:'60%'}}/>
                    </div>
                </div>
                <div className="col-md-5 col-sm-6 col-xs-12" >
                    <div className="feature" style={{marginLeft:'50px'}}>
                        <div className="feature-box" >
                            <div className="clearfix">
                                <div className="iconset">
                                    <span className=""></span>
                                </div>
                                <div className="feature-content" style={{marginRight:'20%'}} >
                                    <h1 >Work with heart</h1>
                                    <p style={{fontSize:'15'}}> Our main objective is to nurture and prosper our clients objectives and to accompalish their needs of some better perception.</p>
                                </div>
                            </div>
                        </div>
                        <div className="feature-box">
                            <div className="clearfix">
                                <div className="iconset">
                                    <span className=""></span>
                                </div>
                                <div className="feature-content" style={{marginRight:'20%'}}>
                                    <h1>Company Of Professional</h1>
                                    <p style={{fontSize:'15'}}>The very same idea is now a prospering Enterprise  with a team of highly skilled and creative IT professionals and Software developers with an expertise in the field of E-commerce, ERP, Hosting and managing Web Applications and the list goes on and on. It Solution is equipped with a wonderful and passionate team at your service.</p>
                                </div>
                            </div>
                        </div>
                        <div className="feature-box">
                            <div className="clearfix">
                                <div className="iconset">
                                    <span className=""></span>
                                </div>
                                <div className="feature-content" style={{marginRight:'20%'}}>
                                    <h1>Great support</h1>
                                    <p style={{fontSize:'15'}}>Culture is important to DigiWeb Solution, our company values aren't just paper statements. This is a stimulating and fun place to work. Happy and smart people create better service. Like many providers, we recognise that plain speaking is a key element in your decision-making and ensuring that your technology works for you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<br/>
<br/>
<br/>
 
<center>
            <div className="aboutus-area">
    <div className="container">
        <div className="row">
            <div className="col-xs-12">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">    
                <div className="aboutus-image float-left hidden-sm"><img src="images/image_3.jpg" alt=""/></div>
                </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="aboutus-content ">
                    <h2><p><span>Why We Are The Best ?</span></p></h2>
                  <h2>  Why Choose Us ?</h2> <span><ul><li className="text" style={{fontSize:'20'}}>Your success is our success</li><li className="text" style={{fontSize:'20'}}>Cost Effectiveness</li><li className="text" style={{fontSize:'20'}}>Fast Response Times</li><li style={{fontSize:'20'}} className="text">Supporting Productivity</li></ul></span>
                    
                    <p></p>
                    <p style={{fontSize:'15'}}>Culture is important to DigiWeb Solution, our company values aren't just paper statements. This is a stimulating and fun place to work. Happy and smart people create better service. Like many providers, we recognise that plain speaking is a key element in your decision-making and ensuring that your technology works for you.</p>
                    
                    <div className="counter ">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">  
                        <div className="single-counter text-center">
                            <h2 className="counter"><span>5</span></h2>
                            <p>YEARS OF EXP</p>
                            <br/>
                        </div>
                       
                        <div className="single-counter text-center">
                            <h2 className="counter"><span>50</span></h2>
                            <p>WEBSITES COMPLETED</p>
                        </div>
                       
                        <div className="single-counter text-center">
                            <h2 className="counter"><span>5</span></h2>
                            <p>BUSSINESS PARTNER</p>
                        </div>
                        
                        <div className="single-counter text-center">
                            <h2 className="counter"><span>100</span></h2>
                            <p>CLIENTS</p>
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>    
            </div>
        </div>
    </div>
</div>
</center>
         </div>  
            </div>
           
            <br/>
            <br/>
            <br/>
            </div>
          );
    }
}
 
export default  About;