import './TrackStatus.css';
import logo1 from './trackpic1.png';
import logo2 from './trackpic2.png';
import { Link } from 'react-router-dom';


function TrackStatus() {
    return (
        <div class="container mt-5 text-center">

            <nav class="navbar navbar-expand-lg navbar-light bg-info">

                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav nav-fill w-100">
                        <a class="nav-item nav-link active text-white" href="#">New Card Form </a>
                        <a class="nav-item nav-link text-white" href="#">Correction Form</a>
                        <a class="nav-item nav-link text-white" href="#">Track Status<span class="sr-only" id="current1">(current)</span></a>
                        <button class="btn btn btn-outline-danger text-warning" type="submit" >Logout</button>
                    </div>
                </div>
            </nav>



            <div class="card">
                <div class="card-body">

                    <table>
                        <tbody>
                            <tr>
                                <td >
                                    
                                <img src={logo1} alt="Track Logo" width="250" height="250"/>

                                </td>
                                <td>

                                    <form>
                                        <div class="form-group">
                                            <h3>Track your Applicant</h3>
                                            <label for="trackStatus"></label>
                                            <input type="text" class="form-control" id="enterApplicationId"  placeholder="Enter your Application Id"/>
                                        </div>
                                        
                                        <Link to="/TrackStatusResults">
                                        <button type="submit" class="btn btn-primary" id="trackButton">Track</button>
                                        </Link>
                                    </form>


                                </td>
                                <td>
                                <img src={logo2} alt="Track Logo" width="250" height="250" />

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>




        </div>

    )
}

export default TrackStatus;