import React, { Component } from 'react';
import './aside.css';

class Aside extends Component {
  render() {
    return (
      <aside className="summary">
        <table className="summary-table">
          <thead>
            <tr>
              <th className="center" colspan="2">Grace Murray Hopper</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="2">
                <img className="photo" src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg" alt="Grace Hopper"></img>
                  <p>Rear Admiral Grace M. Hopper, 1984</p>
            </td>
          </tr>
              <tr>
                <th>Nickname(s)</th>
                <td>"Amazing Grace"</td>
              </tr>
              <tr>
                <th>Born</th>
                <td><p>December 9, 1906</p><p>New York City, New York, U.S.</p></td>
              </tr>
              <tr>
                <th>Died</th>
                <td>January 1, 1992 (aged 85)</td>
              </tr>
              <tr>
                <th>Allegiance</th>
              <td><img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/23px-Flag_of_the_United_States.svg.png" alt="EEUU"></img> United States of America</td>
          </tr>
        </tbody>
      </table>
    </aside>
    );
  }
}

export default Aside;