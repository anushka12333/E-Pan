import {useEffect,useState} from 'react'
import './login.css'
import {Link} from 'react-router-dom';



const Login = () => {
  const [newvalues, setnewvalues] = useState({
    email:'',
    password:''
})
const [errors, seterrors] = useState({});
const [isSubmit, setisSubmit] = useState(false);
const handleChange2 = e =>{
  const { name, value} = e.target
  setnewvalues({
      ...newvalues,
     [name]:value
  });
};
const handleLogin = e =>{
  e.preventDefault();  
  seterrors(validate(newvalues));
  setisSubmit(true);
}
 const validate  =(newvalues) => {
  const errors = {}
  //const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i;
 
  if(!newvalues.email){
    errors.email = "Email is required";
  }else if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(newvalues.email)){
    errors.email="Email address is invalid";
  }

  if(!newvalues.password){
    errors.password = "Password is required";
  } else if (newvalues.password.length<6){
    errors.password = "Password needs to be 6 characters or more";
}
  return errors;
 };
 useEffect( ()=>{
   console.log(errors);
   
   if(Object.keys(errors).length === 0 && isSubmit){
     console.log(errors);
     
   }
 },[errors]);

  return (
    <div>
    {Object.keys(errors).length === 0 && isSubmit ? (<div className='ui message success'>Login Succesfully</div>):(
      <pre>{JSON.stringify(newvalues,undefined,2)}</pre>
    )}
    <div className="container mt-4 mb-3 w-50 mx-auto p-5">
        <div className="login-heading">
            <h1 className='loginName text-center'>Login</h1>
        </div>
        <div className="login-form-input text-center mt-4">
        <form onSubmit={handleLogin}>
        <div className="mb-3">
            <label for="email" className="form-label">Email address</label>
            <input type="email" className="form-control form-control-lg" placeholder="Enter your Email" id="email" name='email' value={newvalues.email} onChange={handleChange2} />
            {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="mb-3">
            <label for="password" className="form-label">Password</label>
            <input type="password" className="form-control form-control-lg" id="password1" placeholder="Enter your Password" name='password' value={newvalues.password} onChange={handleChange2} />
             <p>{errors.password}</p>
        </div>
    
    <button type="submit" className="btn btn-primary">Login</button>
    <span className="form-input-login mt-2">New User/admin?<Link to="/" >Sign Up</Link></span>
    </form>
    </div>
        

    </div>

    </div>
  )
}

export default Login