import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import './Form.css';
import {Link} from 'react-router-dom';




const FormSignup = () => {
    let history = useHistory();
    const [errors, seterrors] = useState({});
    const [isSubmit, setisSubmit] = useState(false);
    const [values, setvalues] = useState({
        username : '',
        email:'',
        password:'',
        password2:'',
        phonenumber:'',
        user:''
    })
    const handleChange = e =>{
        const { name, value} = e.target
        setvalues({
            ...values,
           [name]:value
        });
    };
    
   const handleSubmit = async e =>{
    e.preventDefault();
    seterrors(validate(values));
    setisSubmit(true);
    await axios.post("http://localhost:8081/users",values);
   history.push('/')
    
}
    const validate  =(values) => {
        let errors = {}
        if(!values.username.trim()){
            errors.username = "Username required"
        }
        if(values.user.trim()===""){
            errors.user = "User/admin required"
        }
    
        if(!values.email){
            errors.email = "Email required"
        }else if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(values.email)){
            errors.email="Email address is invalid"
        }
        
        if(!values.password){
            errors.password="Password is required "
    
        }else if(!values.password){
            errors.password="Password is required";
        } else if (values.password.length<6){
            errors.password = "Password needs to be 6 characters or more";
        }
        if(!values.password2){
            errors.password2 ="Password is required"
        }else if (values.password2 !== values.password){
            errors.password2= "Password do not match ."
        }
        if(values.phonenumber.length<10){
            errors.phonenumber="Phone Number must be 10 digits."
        }else if(values.phonenumber.length>10){
            errors.phonenumber="Phone Number do not exceed 10 digits."
        }
        return errors;
    }
    useEffect( ()=>{
        console.log(errors);
        
        if(Object.keys(errors).length === 0 && isSubmit){
          console.log(errors);
          
        }
      },[errors]);
 
//  const {handleChange,values, handleSubmit,errors} = useForm(validate);

  return (
      
    <div className="container text-center">
      
    <div className="form-content-right w-50 mx-auto p-5 ">
       <form action="" className="form mt-4" onSubmit={handleSubmit}>
           <h1 >Register</h1>
           <div className="form-inputs mt-4">
             <label htmlFor="username" className="form-label">
                User
             </label>      
             <select id="user" className="form-control form-control-lg"  name="user"   value={values.user} onChange={handleChange} >
             <option hidden value="">Enter user/admin</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>               
                </select>
             {errors.user && <p>{errors.user}</p>}
         </div>  
         <div className="form-inputs mt-2">
             <label htmlFor="username" className="form-label">
                Username
             </label>
             <input type="text" 
              className="form-control form-control-lg" 
              placeholder='Enter your username'
                id='username' 
                name='username'  
                value={values.username}
                 onChange={handleChange} />
             {errors.username && <p>{errors.username}</p>}
         </div>  
         <div className="form-inputs mt-2">
            <label htmlFor="email" className="form-label">
                Email
             </label>
             <input type="text" className="form-control form-control-lg"  placeholder='Enter your email'  id='name' name='email'  value={values.email} onChange={handleChange}/>
             {errors.email && <p>{errors.email}</p>}
         </div>  
         <div className="form-inputs mt-2">
            <label htmlFor="phonenumber" className="form-label">
               Phone Number
             </label>
             <input type="text" className="form-control form-control-lg"  placeholder='Enter your phonenumber'  id='phonenumber' name='phonenumber'  value={values.phonenumber} onChange={handleChange}/>
             {errors.phonenumber && <p>{errors.phonenumber}</p>}
         </div>  
         <div className="form-inputs mt-2">
             <label htmlFor="password" className="form-label">
                 Password
             </label>
             <input type="password" className="form-control form-control-lg"  placeholder='Enter your password' name='password'  id='password'   value={values.password} onChange={handleChange}/>
             {errors.password && <p>{errors.password}</p>}
         </div>  
         <div className="form-inputs mt-2">
             <label htmlFor="password2" className="form-label">
                Confirm password
             </label>
             <input type="password" className="form-control form-control-lg"  placeholder='Enter your Confirm Password' name='password2'  id='password2'   value={values.password2} onChange={handleChange}/> 
             {errors.password2 && <p>{errors.password2}</p>}
         </div> 
         <div className="container text-center">

         <button className="btn btn-primary mt-4" type="submit">
               Sign up 
         </button> 
         </div>
         <span className="form-input-login mt-2">Aready have an account ?<Link to="/login" >Login</Link></span>
       </form>
   </div>
   </div>
  )
}

export default FormSignup