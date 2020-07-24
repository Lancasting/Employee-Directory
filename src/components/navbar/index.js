import React from "react";

export const Navbar = (props) => {
    let { handleInputChange } = props

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <h1>Employee Search</h1>
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={()=> handleInputChange()}>Search</button>
        </form>
    </nav>

  );
}


