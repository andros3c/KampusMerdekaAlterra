import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Nav() {
 
const history = useHistory();
const Action =()=>{
    history.push({
        pathname:'/About_app'
    

    })
}
  return (
    <nav class="nav nav-pills flex-column flex-sm-row">
      <a
        class="flex-sm-fill text-sm-center nav-link "
        aria-current="page"
        href="#"
      >
       Home
      </a>
      

      <a class="flex-sm-fill text-sm-center nav-link" onClick={Action} href="#">
        About App
      </a>
      <a class="flex-sm-fill text-sm-center nav-link" onClick href="#">
        About Author
      </a>
    </nav>
  );
}

export default Nav;

// active bg-danger
