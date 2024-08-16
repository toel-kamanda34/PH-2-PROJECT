import React from 'react';
import logo from '../logo.png';

export default function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-h1">My Bucket List</h1>
      <nav className="navbar">
        <ul>
          <li>
          <a href="#bucket-list-section">Bucket List</a>
          </li>
          <li>
          <a href="#completed-section">Completed Adventures</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
