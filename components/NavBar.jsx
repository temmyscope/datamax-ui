import { useState, useContext } from "react";


const NavBar = ({}) => {
    return(
      <header className="nav-bar">
        <div style={{ marginLeft:'5%' }}>
          Logo
        </div>

        <div style={{ marginRight:'5%' }}>
          <div className="avatar">
            DM
          </div>
        </div>
      </header>
    );
}

export default NavBar;