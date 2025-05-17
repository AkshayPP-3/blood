import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">BloodAlert</div>
      <nav className="hov">
        <a className="a1" href="#">Home</a>
        <a className="a2" href="#">Find Donors</a>
        <a className="a3" href="/login.html">Login</a>
      </nav>
    </header>
  );
}

export default Header;
