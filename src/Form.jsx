import { useState } from "react"

export default function NameForm(){
const [firstName,setFirstName]=useState("");
const [lastName,setLastName]=useState("");
const [fullName,setFullName]=useState("");
const [submitted,setSubmitted]=useState(false);

const handleSubmit = (e) => {
    e.preventDefault();
    
    
    if (!firstName.trim()) {
      alert('Please enter your First Name');
      return;
    }
    
    if (!lastName.trim()) {
      alert('Please enter your Last Name');
      return;
    }
    
    setFullName(`${firstName} ${lastName}`);
    setSubmitted(true);
  };



 return (
<div>
     <h1>Full Name Display</h1>
    <form onSubmit={handleSubmit}>
     <div>   
     <label htmlFor="firstName">First Name: </label>   
     <input type="text"
      id="firstName"
      value={firstName}
      onChange={(e)=>setFirstName(e.target.value)}
         required

     
     
     /> 
    </div>
    <div>   
     <label htmlFor="lastName">Last Name: </label>   
     <input type="text"
      id="lastName"
      value={lastName}
      onChange={(e)=>setLastName(e.target.value)}
         required

     
     
     /> 
    </div>
    <button type="submit">Submit</button>
    
    </form>
    {submitted && fullName && (
    <div>
        <p>Full Name : {fullName}</p>
    </div>
    )}

  </div>

 )

}