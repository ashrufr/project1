import React from 'react';
import classes from '/src/components/infoitem.module.css';
import Theader from '/src/components/tableheader.js';

class clusterSummary extends React.Component {
    render() {
      return <div>
        <table className="item" cellspacing="0">
            <tr>
                    <td rowspan="3">Oracle Web Center</td>
                    <td >owc-isilon</td>
                    <td>NLX</td>
                    <td>YES</td>
            </tr>
            <tr>
                    <td>owc-isilon</td>
                    <td>NLX</td>
                    <td>YES</td>
                    <td>3T</td>
            </tr>
            <tr>
                    <td>3</td>
                    <td>3</td>
                    <td>200G</td>
                    <td>300G</td>
                    <td>2.7T</td>
            </tr>
        </table>
        </div>
    }
}

export default clusterSummary;
