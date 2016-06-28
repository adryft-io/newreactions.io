import React from 'react';
import Sidebar from './Sidebar.jsx';

const Dashboard = () => (
  <div>
    <div>
      <h3>Welcome Esther,</h3>
      <p>This is your personal dashboard. You may browse your formulae below.You may also use the filters to find what you are looking for.</p>
      <span className="divider"></span>
    </div>
    <div>
      <h3>Filter</h3>
      <div className="row">
        <div className="col-4">
          <ul>
            <li>placeholder</li>
            <li>placeholder</li>
            <li>placeholder</li>
            <li>placeholder</li>
          </ul>
        </div>
        <div className="col-4">
          <ul>
            <li>placeholder</li>
            <li>placeholder</li>
            <li>placeholder</li>
            <li>placeholder</li>
            <li>placeholder</li>
          </ul>
        </div>
        <div className="col-4">
          <ul>
            <li>placeholder</li>
            <li>placeholder</li>
            <li>placeholder</li>
            <li>placeholder</li>
            <li>placeholder</li>
          </ul>
        </div>
      </div>
    </div>
    <Sidebar>
      <h3>Formulae information</h3>
      <ul>
        <li><b>Created in:</b> date</li>
        <li><b>Name:</b>date</li>
        <li><b>Authenticated:</b>yes</li>
      </ul>
      <a className="button">create a formulae</a>
    </Sidebar>
  </div>
);

export default Dashboard;
