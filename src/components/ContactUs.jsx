import React, { Component } from 'react';

class ContactUs extends Component {
    render() {
        return (
            <div>
            {/* <h1>Welcome to Admin Operations page.. </h1>
            <h1></h1>
            <button className="btn btn-success" onClick={this.redirectToAllStudent}>All Student details </button>
             */}

            <div className="row shadow p-3 mb-5 bg-white rounded">
<h2 className="text-center ">Contact Us</h2>
            </div>
            <div>
            <div class="container-a">
                    

                

                    <div class="jay m-4 ">
                        <div class="card flip-card p-5 align-center shadow p-3 mb-5 bg-white rounded">
                            
                            <div class="card_back card_cont">
                            <h1>Campus Reception</h1>
                            <p>Reception: 0755-6185300/1/2/3/4, 0755-6685400/1/2</p><br></br>
                            <p>Toll Free: 7440777111,7440777222, 7440777555</p>
                            </div>
                        </div>
                    </div>
                    <div class="jay m-4">
                        <div class="card flip-card p-5 align-center shadow p-3 mb-5 bg-white rounded">
                            
                            <div class="card_back card_cont">
                            <h1>Student Verification</h1>
                            <p>0755-6185300,6185352 <br></br>E-mail id: verifications@lnct.ac.in</p><br>
                            </br>
                            <h2>Email</h2>
                            <p>info@lnct.ac.in, admission@lnct.ac.in, jobs@lnct.ac.in</p>
                               
                            </div>
                        </div>
                    </div>
                    <div class="jay m-4">
                        <div class="card flip-card p-5 align-center shadow p-3 mb-5 bg-white rounded">
                            
                            <div class="card_back card_cont">
                            <h1>City Office</h1>
                            <p>0755-6185300,6185352, 9876543210</p><br>
                            </br>
                            <p>Pune: Flat No. 302, APV Complex, Near BP Petrol Pump, West Boring Canal Road Patna, Bihar. </p>
                               
                            </div>
                        </div>
                    </div>
                   

            </div>
            </div>
            

        </div>
        );
    }
}

export default ContactUs;