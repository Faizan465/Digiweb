import React from 'react';
import './App.css';
import {BrowserRouter as Router,Redirect,Route,Switch } from "react-router-dom";
import Header from  './component/layout/pages/Header';
import Homes from './component/layout/homes';
import About from './component/about';
import Services from './component/services';
import Portfolios from  './component/portfolios';
import Blogs from './component/blogs';
import Contact from './component/layout/contact';
import Footer from  './component/layout/pages/Footer';


function App(){

  return (

    <Router>
    
<Header/>
<Switch>

<Route  exact path= "/homes"  exact component={Homes} /> 
<Route   exact path= "/about" component={About} />
<Route exact path= "/services" component={Services}/>
<Route exact path= "/portfolios" component={Portfolios}/>
<Route  exact path= "/blogs" component={Blogs}/>
<Route exact path= "/contact"  component={Contact}/>
<Route   exact path= "/" component={Homes} /> 
</Switch>
<Footer/>
</Router>


  );
  
}


export default App;
