import React from 'react'
import "./HomeTabel.css";
import Employee_deatils from './Employee_details';

function HomeTabel() {
  return (
<>
<table>
  <thead>
    <tr>
      <th>S.NO</th>
      <th>Name</th>
      <th>E-Mail ID</th>
      <th>Mobile No</th>
      <th>Position</th>
      <th>Hour</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      Employee_deatils.map((Emp) =>{
        return (
          <tr>
            <td>{}</td>
            <td>{Emp.Name}</td>
            <td>{Emp.E_mail_id}</td>
            <td>{Emp.Mobile_no}</td>
            <td>{Emp.Position}</td>
            <td>{Emp.Hour}</td>
            <td>
              <div className="btn">
                <button className='update'>Update</button>
                <button className='delete'>Delete</button>
              </div>
            </td>
          </tr>
        );
      })
    }
  
  </tbody>
</table>
</>
  )
}

export default HomeTabel;