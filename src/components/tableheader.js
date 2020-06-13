import React from 'react';
import Aux from './aux.js';
import './infoitem.module.css';

class theader extends React.Component {
    render() {
      return <Aux>
        <tr>
          <th>System</th>
          <th>Zone</th>
          <th>PROD</th>
          <th>DR/HA</th>
          <th>Quota</th>
          <th>NFS</th>
          <th>SMB</th>
          <th>Logical</th>
          <th>Physical</th>
          <th>Available</th>
        </tr>
      </Aux>
    }
  }

export default theader;