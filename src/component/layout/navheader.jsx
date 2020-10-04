import React, { Component,useState } from 'react';
import {Link} from 'react-router-dom';
import Select from 'react-select';
class Navbar extends Component {
  constructor(props){
super(props);
this.state ={
  value:"coconut",
  list:[
    {id:"1" ,country:"combodia"},
    {id:"2" ,country:"china"},
    {id:"3" ,country:"usa"}

    
   ]




};

  };

    render() { 
        return ( 
            <div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <Link to="/home"> Home
         </Link>
      </li>
      <li class="nav-item">
      <Link to="/about"> about
         </Link>
      </li>
      <li class="nav-item dropdown">
       
      <select >
{this.state.list.map(country =>(
  <option key={country.id} value={country.country}>
  {country.country}
  </option>
))}


      </select>
     
      
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
      <img src={process.env.PUBLIC_URL + "logo192.png"} height="20"></img>
    </ul>
   
  </div>
</nav>
</div>
         );
    }
}
 
export default Navbar ;
