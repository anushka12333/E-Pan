import './TrackStatusResults.css';

function TrackStatusResults() {
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


            <div class="card bg-secondary">
                <div class="card-body bg-primary">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">


                            <table>
                                <tbody>
                                    <tr>
                                        <td>Applicant Name :Bhanuj Kumar</td>
                                        <td>Applicant Phone no. : 33242</td>
                                        <td>Applicant Age : 22</td>
                                    </tr>
                                    <tr>
                                        <td>Applicant Addresss : xxxx </td>
                                        <td colSpan={2}>Applicant Id: 223</td>
                                    </tr>
                                    <tr>
                                        <td>Applicant Email : bhanujkumar1@gmail.com</td>
                                        <td>Applicant Aadhar : xxxx</td>
                                        <td><button class="btn btn-success" type="submit" >Approved</button></td>
                                    </tr>
                                </tbody>
                            </table>


                        </li>
                        <li class="list-group-item">

                        <table>
                                <tbody>
                                    <tr>
                                        <td>Applicant Name :Ankush</td>
                                        <td>Applicant Phone no. : 34222</td>
                                        <td>Applicant Age : 23</td>
                                    </tr>
                                    <tr>
                                        <td>Applicant Addresss : xxxx </td>
                                        <td colSpan={2}>Applicant Id: 122</td>
                                    </tr>
                                    <tr>
                                        <td>Applicant Email : ankush33@gmail.com</td>
                                        <td>Applicant Aadhar : xxxx</td>
                                        <td><button class="btn btn-danger" type="submit" >Rejected</button></td>
                                    </tr>
                                </tbody>
                            </table>


                        </li>
                        <li class="list-group-item">
                        <table>
                                <tbody>
                                    <tr>
                                        <td>Applicant Name :Shreys</td>
                                        <td>Applicant Phone no. : 23112</td>
                                        <td>Applicant Age : 21</td>
                                    </tr>
                                    <tr>
                                        <td>Applicant Addresss : xxxx </td>
                                        <td colSpan={2}>Applicant Id: 134</td>
                                    </tr>
                                    <tr>
                                        <td>Applicant Email : shreya@hotmail.com</td>
                                        <td>Applicant Aadhar : xxxx</td>
                                        <td><button class="btn btn-warning" type="submit" >in Progress</button></td>
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

export default TrackStatusResults;
