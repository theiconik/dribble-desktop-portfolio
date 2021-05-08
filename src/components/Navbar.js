import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <header style={{margin:"60px 60px"}}>
        <div>
          <nav style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <NavLink to="/" exact style={{textDecoration:"none", fontWeight:"800",fontSize:"2rem"}}>
              ti
            </NavLink>
            <div style={{display:"flex", alignItems:"center", height:"43px"}}>
              <NavLink style={{margin:"0 80px", textDecoration:"none", fontWeight:"800",}} to="/post">Blog</NavLink>
              <NavLink to="/about" style={{textDecoration:"none", fontWeight:"800",}}>About</NavLink>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
