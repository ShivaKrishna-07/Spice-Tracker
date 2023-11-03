import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <>
      <Menu borderless fixed="top" >
        {/* <Menu.Item>
          <img src="" alt="" />
        </Menu.Item> */}
        <Menu.Item style={{fontWeight:'bolder'}} name="Home" as={Link} to='/'/>
        <Menu.Item style={{fontWeight:'bolder'}} name="Recipe" as={Link} to='/recipes'/>
      </Menu>
    </>
  );
}

export default Navbar;
