import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {useHistory,useParams} from 'react-router-dom'
import './editUser.css';
import {Link} from 'react-router-dom';
import usersService from '../services/users.service';




const EditUser = () => {
    let history = useHistory();
    const  {id} = useParams();
    const [errors, seterrors] = useState({});
    const [isSubmit, setisSubmit] = useState(false);
    const [values, setvalues] = useState({
        username : '',
        email:'',
        password:'',
        password2:'',
        phonenumber:'',
        userRole:''
    })
    
    const loadUser = async () => {
     // const result = await axios.get(` http://localhost:8087/users/${id}`);
      // console.log(result)

     // setvalues(result.data);
     if(id){
         usersService.get(id)
         .then(user => {
             setvalues(user.data);

         })
         .catch(error => {
             console.log('Something went wrong',error);
             
         })
     }
      
    }
    useEffect(() => {
         loadUser()
    },[])
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
    //await axios.put(`http://localhost:8081/users/${id}`,values);
    if(id){
        usersService.update(values)
        .then(response => {
            console.log('Employees data updated succesfully',response.data);
            history.push('/user');
        })

    }else{
        usersService.create(values)
        .then(response => {
            console.log("user added succesfully",response.data);
            history.push('/');
        })
        
        .catch(error =>{
            console.log("somethngf went wrong",error);
        });
       
    }
   history.push('/')
    
}
    const validate  =(values) => {
        let errors = {}
        if(!values.username.trim()){
            errors.username = "Username required"
        }
        if(values.userRole.trim()===""){
            errors.userRole = "User/admin required"
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
 
  return (
      
    <div className="container text-center">
      {Object.keys(errors).length === 0 && isSubmit ? (<div className='ui message success'>Signup Succesfully</div>):(
      <pre>{JSON.stringify(values,undefined,2)}</pre>
    )}
    <div className="form-content-right w-50 mx-auto p-5 ">
       <form action="" className="form mt-4" onSubmit={handleSubmit}>
           <h1 >Register</h1>
           <div className="form-inputs mt-4">
             <label htmlFor="username" className="form-label">
                User
             </label>            
             <select id="userRole"  className="form-control form-control-lg"   name="userRole"   value={values.userRole} onChange={handleChange} placeholder='Enter your username' >
             <option></option>
                <option value="user">User</option>
                <option value="admin">Admin</option>               
                </select>
             {errors.userRole && <p>{errors.userRole}</p>}
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

         <button className="btn btn-warning btn-block mt-4 w-75" type="submit">
              Update User
         </button> 
         </div>

       </form>
   </div>
   </div>
  )
}

export default EditUser