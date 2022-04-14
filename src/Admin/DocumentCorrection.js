import './DocumentCorrection.css';
import { Link } from 'react-router-dom';

function DocumentCorrection() {
  return (

    <div class="container mt-5 text-center">

      <nav class="navbar navbar-expand-lg navbar-light bg-info">

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav nav-fill w-100">

            <Link to="/AppliedDocument">
            <a class="nav-item nav-link active text-white" href="#">Applied Document</a> </Link>
            <Link to="/DocumentVerification">
      <a class="nav-item nav-link text-white" href="#">Verification</a></Link>
            <a class="nav-item nav-link text-white h5" href="#">Correction Documents <span class="sr-only">(current)</span></a>
            <button class="btn btn btn-outline-danger text-warning" type="submit" >Logout</button>
          </div>
        </div>
      </nav>


      <div class="card bg-secondary">
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">


              <table>
                <tbody>
                  <tr>
                    <td>Applicant Name :Bhanuj Kumar</td>
                    <td>Applicant Phone no. : 33242</td>
                    <td>Applicant Id no. : 223</td>
                  </tr>
                  <tr>
                    <td>Applicant Addresss : Patna </td>
                    <td>Applicant Gender : Male</td>
                    <td>Applicant Age :22</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>Applicant Email : bhanujkumar1@gmail.com</td>
                    <td><button class="btn btn-link" type="submit" >View document</button></td>
                  </tr>
                </tbody>
              </table>


            </li>
            <li class="list-group-item">

              <table>
                <tbody>
                  <tr>
                    <td>Applicant Name :Ankush</td>
                    <td>Applicant Phone no. :34222 </td>
                    <td>Applicant Id no. : 122</td>
                  </tr>
                  <tr>
                    <td>Applicant Addresss : Ranchi</td>
                    <td>Applicant Gender :Male</td>
                    <td>Applicant Age : 23</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>Applicant Email : ankush33@gmail.com</td>
                    <td><button class="btn btn-link" type="submit" > View document</button></td>
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

export default DocumentCorrection;
