import React from 'react';
import './css/RegistrationForm.css';
import sideImage from '../../../public/Images/Filing system-rafiki.png'

const RegistrationForm = () => {
    return (
        <div className="wrapper">
            <div className="innerwrapper">
                <div className="left">
                    <img src={sideImage} alt="images" />
                </div>
                <div className="right">
                    <div className="formDiv">
                        <form className="form" action="/signup" method="post">
                            <div className="navbarForm">
                                <h4 id="registration">Registration</h4>
                                <div className="language">
                                    <div className="langButton">En</div>
                                    <div className="langButton">ही</div>
                                </div>
                            </div>
                            <div id="designBar"></div>
                            <div className="name">
                                <div id="firstName">
                                    <h5>First Name</h5>
                                    <input type="text" className="inputbox" id="firstname" name="firstname" placeholder="Enter First Name" required />
                                </div>
                                <div id="lastName">
                                    <h5>Last Name</h5>
                                    <input type="text" className="inputbox" id="lastname" name="lastname" placeholder="Enter Last name" required />
                                </div>
                            </div>
                            <div className="details">
                                <div id="prnNo">
                                    <h5>PRN Number</h5>
                                    <input type="text" className="inputbox" id="prn" name="prn" placeholder="Enter Registration Number" required />
                                </div>
                                <div id="rollNo">
                                    <h5>Roll Number</h5>
                                    <input type="text" className="inputbox" id="rollno" name="rollno" placeholder="Enter Roll Number" required />
                                </div>
                            </div>
                            <div className="contact">
                                <div id="email">
                                    <h5>Email</h5>
                                    <input type="text" className="inputbox" id="email" name="email" placeholder="Enter your email" required />
                                </div>
                                <div id="phoneNo">
                                    <h5>Phone Number</h5>
                                    <input type="text" className="inputbox" id="PhoneNo" name="PhoneNo" placeholder="Enter your PhoneNo" required />
                                </div>
                            </div>
                            <div className="address">
                                <div id="Department">
                                    <h5>Domain</h5>
                                    <input type="text" className="inputbox" id="department" name="department" placeholder="Enter Your Domain" required />
                                </div>
                                <div id="home">
                                    <h5>Address</h5>
                                    <input type="text" className="inputbox" id="address" name="address" placeholder="Address" required />
                                </div>
                            </div>
                            {/* <br />
                            <input type="text" className="inputbox" id="year" name="year" placeholder="year" required />
                            <input type="text" className="inputbox" id="College" name="college" placeholder="College" required />
                            <br /> */}
                            <input type="submit" className="inputbox" id="submit" value="Submit" />
                            <br />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;
