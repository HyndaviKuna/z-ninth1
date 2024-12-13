import React from 'react';
import './Menu.css'; 

function Menu() {
  return (
    <nav className="menu-bar">
      <ul>
        <li><a href="/">Step 1</a></li>
        <li><a href="/">Step 2</a></li>
        <li><a href="/services">Step 3</a></li>
        <li><a href="/services">Total No. of Processed Doc</a></li>
        <li className="Li1"><a href="/contact">04</a></li>
      </ul>
    </nav>
  );
}

export default Menu;
