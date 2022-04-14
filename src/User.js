import React from 'react'
import {useState,useEffect,useRef} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';
import './user.css'
import usersService from './services/users.service';


function User() {
  const [searchResult, setsearchResult] = useState([])
  const inputEl = useRef("");
  const [users, setusers] = useState([])
 const [Searchterm, setSearchterm] = useState('')

  useEffect(() => {
   loadusers();   
  }, [])

  const loadusers = async () =>{
    // const result = await axios.get(" http://localhost:8087/users");
    usersService.getAll()
    .then(response => {
      console.log("Printing",response.data);
      setusers(response.data.reverse());
      setsearchResult(response.data.reverse());
    })
    .catch(error => {
      console.log("Something went wrong",error);
    })
    // console.log(result);
    //setusers(result.data.reverse())
    
    
  }

  const searchHandler=()=>{
      // console.log(inputEl.current.value)
      setSearchterm(inputEl.current.value);
      if(Searchterm === " "  ){
        setsearchResult(users);
      }
      else if(Searchterm !== "" ){
        const newuserList= users.filter((val)=>{
        return  Object.values(val)
         .join(" ")
         .toLowerCase()
         .includes(Searchterm.toLowerCase());
        });
        setsearchResult(newuserList);
      }      
      else{
        setsearchResult(users);
      }
     
      console.log(searchResult)

  }
  const deleteUser = async id => {
    //await axios.delete(` http://localhost:8087/users/${id}`);
    usersService.remove(id)
    .then(response => {
      console.log('Users deleted Successfully',response.data);  
      loadusers();    
    })
    .catch(error  =>{
      console.log('"Something went wrong',error);
      
    })
    
  }

  return (
    <div className="container text-center mt-4">    
    <div className="user-heading ">
      <h1>Users</h1>
      <div className="search-user mb-3">
      <input
      ref={inputEl}
       type="text" 
      className='prompt'     
      value={Searchterm}
      onChange={searchHandler} 
      placeholder='Search...' />
      <i className="search icon"></i>        
    </div>
    </div>
    
    <div className="display-users">
    <table className="table border shadow ">
  <thead className="table-dark">
    <tr>
      <th scope="col">#</th>      
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {     
      searchResult.map((user,index) => (
      <tr>
        <th scope="row">{index+1}</th>       
        <td>{user.username}</td>
        <td >{user.email}</td>
        <td>         
          <Link className="btn btn-outline-primary crud" to={`/user/edit/${user.id}`}>Edit</Link>
          <Link className="btn btn-danger crud" onClick={() => deleteUser(user.id)}>Delete</Link>
         
        </td>
      
      </tr>
      ))
    }
  </tbody>
</table>
    </div>
    
    </div>
  )
}

export default User