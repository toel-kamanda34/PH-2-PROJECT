import React from 'react'
import logo from '../logo.png';
export default function Header() {
  return (
    <div>
       <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1> My Bucket List</h1>
      </header>
    </div>
  )
}
