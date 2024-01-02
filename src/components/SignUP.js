import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';

const SignUP = (props) => {

  const [credentials,setCredentials] = useState({name: "",email:"",password:"",cpassword:""});
  let navigate = useNavigate();


  const onChange =(e)=>{
      setCredentials({...credentials,[e.target.name]:e.target.value})
  }

  const handelSubmit = async(e)=>{
      e.preventDefault();
      const{name,email,password} = credentials;
      try {
          const response = await fetch('https://cloud-note-backend.onrender.com/api/auth/createuser', {
              method: "POST", // *GET, POST, PUT, DELETE, etc.
        
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({name,email,password})
            });
  
            const json = await response.json();
            console.log(json);
            localStorage.setItem("token" , json);

            if(json){
              // redirect
              navigate("/");
              props.showAlert('success fully sign-in','success');


          }else{
            props.showAlert("incorrect credentials","danger");
          }
          
      } catch (error) {
          console.log(error);
      }
  
  }


  return (
    <div className="container my-3">

      <h1 className='my-5'>sign up</h1>

      <form className='my-3' onSubmit={handelSubmit}>
        <div className="mb-3">
        <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            id="text"
            name="name"
            value={credentials.name}
            required
            minLength={2}
            onChange={onChange}
          />
   </div>
          <div className="mb-3">

          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            required
            value={credentials.email}
            onChange={onChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            required
            minLength={6}
            value={credentials.password}
            onChange={onChange}
          />
        </div>


        <div className="mb-3">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            
            required
            minLength={6}
            value={credentials.cpassword}
            onChange={onChange}
          />
        </div>

        <button disabled= {credentials.cpassword !== credentials.password} type="submit" className="custom-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUP;
