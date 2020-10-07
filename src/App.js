import React from 'react';
import './App.css';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom' ;
import Header from  './component/layout/pages/Header';
import Home from './component/layout/home';
import About from './component/about';
import Services from './component/services';
import Portfolios from  './component/portfolios';
import Blogs from './component/blogs';
import Contact from './component/layout/contact';
import Footer from  './component/layout/pages/Footer';
function App() {

  return (

    <Router>
   
     <Header/>

 
     <Route exact path="/" component={Home} />
     <Route exact path="/home" component={Home} />
<Route path="/about" component={About} />
<Route path="/services" component={Services}/>
<Route path="/portfolios" component={Portfolios} />
<Route path="/blogs" component={Blogs} />
<Route path="/contact" component={Contact} />



<Footer/>

</Router>


  );
}

export default App;
