
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import './applynewcard.css'
import {Link} from 'react-router-dom';




const Applynewcard = () => {
    let history = useHistory();
    const [errors, seterrors] = useState({});
    const [isSubmit, setisSubmit] = useState(false);
    const [values, setvalues] = useState({
        firstname : '',
        lastname :'',
        fathername: '',
        phonenumber1:'',
        phonenumber2:'',
        malefemale:'',
        mothername:'',
        email:'',
        age:'',
        houseno:'',
        Streetno:'',
        area:'',
        pincode:''
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
        if(!values.firstname.trim()){
            errors.username = "first name requried"
        }
        if(values.lastname.trim()===""){
            errors.user = "last name required"
        }
    
        if(!values.fathername){
            errors.password="father name is required "
    
        }
        if(!values.mothername){
            errors.password="mother name is required "
    
        }
        if(!values.malefemale){
            errors.password="gender is required "
        }
        if(values.phonenumber1.length<10){
            errors.phonenumber1="Phone Number must be 10 digits."
        }else if(values.phonenumber1.length>10){
            errors.phonenumber1="Phone Number do not exceed 10 digits."
        }
        if(values.phonenumber2.length<10){
            errors.phonenumber2="Phone Number must be 10 digits."
        }else if(values.phonenumber2.length>10){
            errors.phonenumber2="Phone Number do not exceed 10 digits."
        }
        else if(!values.phonenumber1){
            errors.password="phonenumber is required";
        }
        
        if(!values.age){
            errors.age ="age is required"
        }
        if(!values.houseno){
            errors.houseno ="houseno is required"
        }
        if(!values.Streetno){
            errors.Streetno ="Street no is required"
        }
        if(!values.area){
            errors.area ="area is required"
        }
        if(values.pincode.length<6){
            errors.pincode="Pincode must be 6 digits."
        }else if(values.phonenumber2.length>6){
            errors.pincode="Pincode do not exceed 6 digits."
        }
        else if(!values.pincode){
            errors.password="pincode is required";
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
      
    <div class="container mt-5 text-center">

     <nav class="navbar navbar-expand-lg navbar-light bg-info">
  
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav nav-fill w-100">
      <a class="nav-item nav-link active text-white" href="#"><h4>New card form</h4> <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link text-white" href="#"><h4>Correction form</h4></a>
      <a class="nav-item nav-link text-white" href="#"><h4>Track Status</h4></a>
      <button class="btn btn btn-outline-danger text-warning" type="submit" >Logout</button>
    </div>
  </div>
</nav>


<div class="card bg-secondary">
  <div class="card-body">
  <div className="form-content-right w-100 mx-auto p-5 ">
       <form action="" className="form mt-4" onSubmit={handleSubmit}>  

  <ul class="list-group list-group-flush">
    <li class="list-group-item">

    <table>
  <tbody>
  <div className="form-inputs mt-2">
  <tr>
      <td colSpan={3}><h1>Name</h1></td>
    </tr>
    <tr>
      <td>
             <label htmlFor="first" className="form-label">
                First name
             </label>
             <input type="text" 
              className="form-control form-control-lg" 
              placeholder='Enter your firstname'
                id='firstname' 
                name='firstname'  
                value={values.username}
                 onChange={handleChange} />
             {errors.username && <p>{errors.username}</p>}
         

      </td>
      <td>
      <label htmlFor="lastname" className="form-label">
               Last Name
             </label>
             <input type="text" className="form-control form-control-lg"  placeholder='Enter your lastname'  id='lastname' name='lastname'  value={values.lastname} onChange={handleChange}/>
             {errors.lastname && <p>{errors.lastname}</p>}

      </td>
      <td>
      <label htmlFor="fathername" className="form-label">
               Father Name 
             </label>
             <input type="text" className="form-control form-control-lg"  placeholder='Enter your fathername'  id='fathername' name='fathername'  value={values.fathername} onChange={handleChange}/>
             {errors.fathername && <p>{errors.fathername}</p>}

      </td>
    </tr>
    <tr>
      <td>
      <label htmlFor="phonenumber1" className="form-label">
               Phone Number
             </label>
             <input type="text" className="form-control form-control-lg"  placeholder='Enter your phonenumber'  id='phonenumber' name='phonenumber'  value={values.phonenumber1} onChange={handleChange}/>
             {errors.phonenumber1 && <p>{errors.phonenumber1}</p>}

      </td>
      <td>
      <label htmlFor="phonenumber2" className="form-label">
               Phone Number
             </label>
             <input type="text" className="form-control form-control-lg"  placeholder='Enter your  alternate phonenumber'  id='phonenumber' name='phonenumber'  value={values.phonenumber2} onChange={handleChange}/>
             {errors.phonenumber2 && <p>{errors.phonenumber2}</p>}

      </td>
      <td>
      <label htmlFor="email" className="form-label">
                Email
             </label>
             <input type="text" className="form-control form-control-lg"  placeholder='Enter your email'  id='name' name='email'  value={values.email} onChange={handleChange}/>
             {errors.email && <p>{errors.email}</p>}

      </td>
    </tr>
    <tr>
      <td >
      <label htmlFor="mothername" className="form-label">
               Mother Name
             </label>
             <input type="text" className="form-control form-control-lg"  placeholder='Enter your mother name'  id='mothername' name='phonenumber'  value={values.mothername} onChange={handleChange}/>
             {errors.mothername && <p>{errors.mothername}</p>}

      </td>
      <td>
      <label htmlFor="malefemale" className="form-label">
                Gender
             </label>
             <input type="text" className="form-control form-control-lg"  placeholder='Enter your gender' name='malefemale'  id='malefemale'   value={values.malefemale} onChange={handleChange}/>
             {errors.malefemale && <p>{errors.malefemale}</p>}

      </td>
      <td>
      <label htmlFor="age" className="form-label">
                Age
             </label>
             <input type="text" className="form-control form-control-lg"  placeholder='Enter your age' name='age'  id='age'   value={values.age} onChange={handleChange}/> 
             {errors.age && <p>{errors.age}</p>}
      </td>
    </tr>
    </div> 
  </tbody>
</table>

</li>
<li>
<table id="table2">
  <tbody>
  <tr>
     
     <td className="ui header" id="td2">

     <h1>Permenant Adress</h1>
             <label htmlFor="houseno" className="form-label">
                Houseno
             </label>
             <input type="text" className="form-control form-control-lg"  placeholder='Enter your Houseno' name='houseno'  id='houseno'   value={values.houseno} onChange={handleChange}/> 
             {errors.houseno && <p>{errors.houseno}</p>} 
         
             <label htmlFor="Streetno" className="form-label">
                Streetno
             </label>
             <input type="text" className="form-control form-control-lg"  placeholder='Enter your Streetno' name='Streetno'  id='Streetno'   value={values.password2} onChange={handleChange}/> 
             {errors.Streeetno && <p>{errors.Streetno}</p>}
         
             <label htmlFor="area" className="form-label">
                Area
             </label>
             <input type="text" className="form-control form-control-lg"  placeholder='Enter your area' name='area'  id='area'   value={values.area} onChange={handleChange}/> 
             {errors.area && <p>{errors.area}</p>}
         
             <label htmlFor="pincode" className="form-label">
                Pincode
             </label>
             <input type="text" className="form-control form-control-lg"  placeholder='Enter your pincode' name='pincode'  id='pincode'   value={values.pincode} onChange={handleChange}/> 
             {errors.pincode && <p>{errors.pincode}</p>}

     </td>
     <td className="ui header" id="td3">

     <h1>Present Adress</h1>           

    <label htmlFor="houseno" className="form-label">
       Houseno
    </label>
    <input type="text" className="form-control form-control-lg"  placeholder='Enter your Houseno' name='houseno'  id='houseno'   value={values.houseno} onChange={handleChange}/> 
    {errors.houseno && <p>{errors.houseno}</p>}

    <label htmlFor="Streetno" className="form-label">
       Streetno
    </label>
    <input type="text" className="form-control form-control-lg"  placeholder='Enter your Streetno' name='Streetno'  id='Streetno'   value={values.password2} onChange={handleChange}/> 
    {errors.Streeetno && <p>{errors.Streetno}</p>}

    <label htmlFor="area" className="form-label">
       Area
    </label>
    <input type="text" className="form-control form-control-lg"  placeholder='Enter your area' name='area'  id='area'   value={values.area} onChange={handleChange}/> 
    {errors.area && <p>{errors.area}</p>}

    <label htmlFor="pincode" className="form-label">
       Pincode
    </label>
    <input type="text" className="form-control form-control-lg"  placeholder='Enter your pincode' name='pincode'  id='pincode'   value={values.pincode} onChange={handleChange}/> 
    {errors.pincode && <p>{errors.pincode}</p>}

     </td>
   </tr>
  </tbody>
</table>


</li>

  </ul>
  <div>
            <button onClick={() => history.push('/FileUpload')}>
                Next
            </button>
        </div>
  </form>
</div>
  </div>
</div>
 </div>
  )
}

export default Applynewcard