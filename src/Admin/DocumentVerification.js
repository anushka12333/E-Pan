import './DocumentVerification.css';
import shreya from './shreya.jpg';
import { Link } from 'react-router-dom';
function DocumentVerification() {
  return (

    <div class="container mt-5 text-center">

      <nav class="navbar navbar-expand-lg navbar-light bg-info">

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav nav-fill w-100">
          <Link to="/AppliedDocument">
            <a class="nav-item nav-link active text-white" href="#">Applied Document</a> </Link>
            <a class="nav-item nav-link text-white h5" href="#">Verification<span class="sr-only">(current)</span></a>
            <Link to="/DocumentCorrection">
            <a class="nav-item nav-link text-white" href="#">Correction Documents </a> </Link>
            <button class="btn btn btn-outline-danger text-warning" type="submit" >Logout</button>
          </div>
        </div>
      </nav>


      <div class="card bg-secondary">
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">




            </li>
            <li class="list-group-item">

              <table>
                <tbody>
                  <tr>
                    <td>Name :Shreya</td>
                    <td ><h5>Applicant Photo</h5></td>
                  </tr>
                  <tr>
                    <td>Applicant Father Name : xxx</td>
                  </tr>
                  <tr>
                    <td >Applicant Mother Name : xxx</td>
                    <td RowSpan={4}>
                    <img src={shreya} alt="Shreya's Photo" width="300" height="250"/>
                    </td>
                  </tr>
                  <tr>
                    <td>Applicant gender : Female</td>
                    <td><button class="btn btn-success" type="submit" >Approve</button></td>
                  </tr>
                  <tr>
                    <td>Applicant Phone no. : 23112</td>
                    <td><button class="btn btn-danger" type="submit" >Reject</button></td>
                  </tr>
                  <tr>
                    <td>Applicant emial : shreya@hotmail.com</td>
                  </tr>
                  <tr>
                    <td>Applicant id :134</td>
                  </tr>
                  <tr>
                    <td>Applicant Addresss : Pune</td>
                  </tr>
                </tbody>
              </table>


            </li>

          </ul>
        </div>
      </div>



    </div>



  );
}

export default DocumentVerification;
