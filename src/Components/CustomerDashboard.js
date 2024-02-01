import React from 'react';
import './CustomerDashboard.css';
import Table from 'react-bootstrap/Table';

function CustomerDashboard(){
    return(
<div>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>CustomerId</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Orders</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
           <td>@mdo</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
           <td>@mdo</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
           <td>@mdo</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
           <td>@mdo</td>
        </tr><tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
           <td>@mdo</td>
        </tr>
        
      </tbody>
    </Table>
</div>
    );
}

export default CustomerDashboard;
