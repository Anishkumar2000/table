import React from 'react';
import "./HomeTabel.css";
import Employee_deatils from './Employee_details';
import { Link } from 'react-router-dom';



function HomeTabel() {
  return (
    <>
      <div className="Container">
        <div className="Head">
          <h1>Employees Details</h1>
        </div>
        <div className="btn1">
          <Link to="/Add_Emp">
            <button className="add">ADD</button>
          </Link>
        </div>
        {/* <Table> */}
        <table>
          <thead>
            <tr>
              <th>Emp ID</th>
              <th>Name</th>
              <th>E-Mail ID</th>
              <th>Mobile No</th>
              <th>Position</th>
              <th>Salary / Hour</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Employee_deatils.map((Emp) => {
              return (
                <tr className={Emp.Name}>
                  <td>{Emp.Id}</td>
                  <td>{Emp.Name}</td>
                  <td>{Emp.E_mail_id}</td>
                  <td>{Emp.Mobile_no}</td>
                  <td>{Emp.Position}</td>
                  <td>{Emp.Hour}</td>
                  <td>
                    <div className="btn">
                      <Link to="/Update_Emp">
                        <button className="update">Update</button>
                      </Link>
                      <button className="delete">Delete</button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* </Table> */}
        <footer></footer>
      </div>
    </>
  );
}

export default HomeTabel;