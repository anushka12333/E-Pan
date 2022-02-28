import React from 'react'
import useForm from './useForm';
import validate from './validateInfo'
import './Form.css';
import {Link} from 'react-router-dom';



const FormSignup = () => {
 const {handleChange,values, handleSubmit,errors} = useForm(validate);

  return (
    <div className="container text-center">
    <div className="form-content-right ">
       <form action="" className="form mt-4" onSubmit={handleSubmit}>
           <h1 >Register</h1>
           <div className="form-inputs option mt-4">
             <label htmlFor="username" className="form-label">
                Username
             </label>
             <input type="text"  className="form-input option" placeholder='Enter your username'  id='username' name='username'  value={values.username} onChange={handleChange} />
             {errors.username && <p>{errors.username}</p>}
         </div>  
         <div className="form-inputs mt-4">
             <label htmlFor="username" className="form-label">
                Username
             </label>
             <input type="text"  className="form-input" placeholder='Enter your username'  id='username' name='username'  value={values.username} onChange={handleChange} />
             {errors.username && <p>{errors.username}</p>}
         </div>  
         <div className="form-inputs mt-2">
            <label htmlFor="email" className="form-label">
                Email
             </label>
             <input type="text" className="form-input" placeholder='Enter your email'  id='name' name='email'  value={values.email} onChange={handleChange}/>
             {errors.email && <p>{errors.email}</p>}
         </div>  
         <div className="form-inputs mt-2">
            <label htmlFor="phonenumber" className="form-label">
               Phone Number
             </label>
             <input type="text" className="form-input" placeholder='Enter your phonenumber'  id='phonenumber' name='phonenumber'  value={values.phonenumber} onChange={handleChange}/>
             {errors.phonenumber && <p>{errors.phonenumber}</p>}
         </div>  
         <div className="form-inputs mt-2">
             <label htmlFor="password" className="form-label">
                 Password
             </label>
             <input type="password" className="form-input" placeholder='Enter your password' name='password'  id='password'   value={values.password} onChange={handleChange}/>
             {errors.password && <p>{errors.password}</p>}
         </div>  
         <div className="form-inputs mt-2">
             <label htmlFor="password2" className="form-label">
                Confirm password
             </label>
             <input type="password" className="form-input" placeholder='Enter your Confirm Password' name='password2'  id='password2'   value={values.password2} onChange={handleChange}/> 
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