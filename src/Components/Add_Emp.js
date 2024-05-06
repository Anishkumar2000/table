import React from "react";
import "./Add_Emp.css";

function Add_Emp() {
  return (
    <>
      <div className="container">
        <div className="head">
          <h1>Add Employee</h1>
        </div>
        <div className="form">
          <div className="inp">
            <div className="id">
              <label for="emp_id">Id :</label>
              <input type="text" id="emp_id" />
            </div>
            <div className="name">
              <label for="name">Name :</label>
              <input type="text" id="name" />
            </div>
            <div className="mail">
              <label for="mail">E-Mail ID :</label>
              <input type="text" id="mail" />
            </div>
            <div className="mobile">
              <label for="mobile">Mobile No :</label>
              <input type="text" id="mobile" />
            </div>
            <div className="salary">
              <label for="salary">Salary / Hour :</label>
              <input type="text" id="salary" />
            </div>
          </div>
          <div className="btn">
            <button className="sub">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Add_Emp;
