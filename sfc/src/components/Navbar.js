import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">美食天地</div>
      <ul className="navbar-links">
        <li><a href="#home">首页</a></li>
        <li><a href="#recipes">菜谱</a></li>
        <li><a href="#about">关于</a></li>
        <li><a href="#contact">联系</a></li>
      </ul>
    </nav>
  );
}

export default Navbar; 