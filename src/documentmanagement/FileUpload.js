import './fileupload.css';
import React, {useState} from 'react';
import axios from 'axios';
 

function FileUpload() {

  const [file, setFile] = useState()
  const [values, setvalues] = useState({
    user:''
})

  const handleChange = e =>{
    const { name, value} = e.target
    setvalues({
        ...values,
       [name]:value
    });
};
  function handleSubmit(event){
    event.preventDefault()
    const url = 'http://localhost:3000/uploadFile';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });

  }

  return (

    <div className="container text-center">
       <form action="" className="form mt-4" onSubmit={handleSubmit}>
           <div className="form-inputs mt-4">
             <label htmlFor="username" className="form-label">
                User
             </label>      
             <select id="user" className="form-control form-control-lg"  name="user"   value={values.user} onChange={handleChange} >
             <option hidden value="">select the id proof</option>
                <option value="user">Adhaar card</option>
                <option value="user">Ration card</option>
                <option value="admin">Driving Lisense</option>
                <option value="admin">Passport</option>               
                </select>
         </div>  
         </form>
    <div className="FileUpload">
        <form onSubmit={handleSubmit}>
          <h1>React File Upload</h1>
          <input type="file" onChange={handleChange}/>
          <button type="submit">Upload</button>
        </form>
    </div>
    
        </div>
  );
}

export default FileUpload;