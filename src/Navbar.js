import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

const Navbar = () => {
  const item = useSelector((state) => state.cart);
  return (
    // <div style={{display:'flex', alignItems: 'center', justifyContent:'space between'}}>
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">
            <span className="logo" style={{ fontSize: 20 }}>
              SHOPPINGCART
            </span>
          </Button>
          <div>
            <Link className="navLink" to="/">
              <Button color="inherit" style={{ fontSize: 16 ,fontWeight:"bold"}}>
                HOME
              </Button>
            </Link>
            <Link className="navLink" to="/cart">
              <Badge badgeContent={item.length} color="error">
                <ShoppingCartIcon color="inherit" style={{ fontSize: 26 }} />
              </Badge>
            </Link>
          </div>

        </Toolbar>
      </AppBar>
    </div>
    // </div>
  );
};

export default Navbar;
