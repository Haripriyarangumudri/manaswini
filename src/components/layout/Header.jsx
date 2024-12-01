import React from "react";

const Header = () => {
  return (
    <>
      <header className="header">
      <div class="logo"><img src="./logo.jpeg" alt="" id="clglogo" /><p><b>Convocation Seating Arrangement</b></p></div>
      <br />
        <nav class="nav">
            <a href="#home">Home</a>
            <a href="#admin-dashboard">Admin Dashboard</a>
            <button class="logout">Logout</button>
        </nav>
      </header>
    </>
  );
};

export default Header;