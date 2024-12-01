import React from "react";
import "./css/studentDetails.css";
import scroll from "../Images/scroll.svg";
import axios from "axios"; 
import { useEffect, useState } from "react";

const studentDetails = (userData) => {
  const [user, setUser] = useState([]);
  const [searchQuery , setSearchQuery] = useState("");

  useEffect(()=>{
    getAllUser();
  },[searchQuery]);

  const getAllUser= () => {
    axios.get(`http://localhost:3000/getAllUser?search=${searchQuery}`)
      .then((data) => {
        setUser(data.data.data); 
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };
  const userDelete=(_id,name)=>{
    if(window.confirm(`Are you sure you want to delete ${name}`)){
      axios.delete(`http://localhost:3000/deleteUser` , {
      userid:_id,
    }, {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        "Allow-access-Allow-Origin": "*"
      }
    })
      .then((data) => {
        alert(data.data)
        getAllUser();
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
    }
    else{
      console.log("Abra Ka dabra")
  }
  }
  function handleSearch(e){
    setSearchQuery(e.target.value)
  }

  return (
    <>
      <div className="wrapperStudentDetails">
        <div className="contentStudentDetails">
          <div className="headingContentStudentDetails">
            <div className="mainHeadingContentStudentDetails">
              Student Details
            </div>
            <div className="monthHeadingContentStudentDetails">
              <div className="designMonthHeadingContentStudentDetails">
                <div className="nameMonthHeadingContentStudentDetails">
                  October
                </div>
                <div className="iconMonthHeadingContentStudentDetails">
                  <img src={scroll} alt="iconArrow"></img>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="searchbarContentStudentDetails">
            <div className="mainSearchbarContentStudentDetails">
              <input className="inputMainSearchbarContentStudentDetails" type="text" placeholder="Search" name="Search" onChange={handleSearch}> 
              </input>
            </div>
          </div>
          <div className="mainDetailsContentStudentDetails">
            <table className="tableMainDetailsContentStudentDetails">
              <thead className="theadMainDetailsContentStudentDetails">
                <tr className="trowMainDetailsContentStudentDetails">
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>PRN</th>
                  <th>Roll No</th>
                  <th>Email</th>
                  <th>Phone No</th>
                  <th>Department</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody className="tbodyMainDetailsContentStudentDetails">
                {user.map((user, index) => (
                  <tr key={index} className="trowTbodyMainDetailsContentStudentDetails">
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.PRN}</td>
                    <td>{user.RollNo}</td>
                    <td>{user.Email}</td>
                    <td>{user.PhoneNo}</td>
                    <td>{user.Department}</td>
                    <td>{user.Address}</td>
                    <td onClick={()=>{userDelete(user._id,user.firstName)}}>Delete</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default studentDetails;
