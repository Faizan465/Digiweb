
import React,{ useState , useEffect} from "react";

function Employees() {

const [employee, setEmployees] = useState([]);
const [hasError,setErrors] = useState(false);

useEffect(() => {
   async function fetch() {
 const result = await fetch("https://reqres.in/api/users");
result
.json().
then(res => setEmployees( result ))
.catch(() => setErrors( true ));
  }

 fetch();

  });

return(
  <div>
    <h1>EMPLOYEE</h1>
   <h3>RESULT</h3>
<div>{JSON.stringify(Employees)}</div>
<div>{JSON.stringify(hasError)}</div>
</div>
)

}
export default Employees;