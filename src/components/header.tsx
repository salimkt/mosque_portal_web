// src/Header.tsx
import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";

import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles: any = makeStyles((theme: any) => ({
  appBar: {
    backgroundColor: "red", // Customize the background color
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "100%",
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const Header: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <AppBar
      style={{
        backgroundColor: "#fff",
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        height: 60,
        marginBottom: 10,
      }}
      position="static"
      className={classes.appBar}
    >
      <Toolbar style={{ justifyContent: "space-between" }}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <img
            style={{ width: 100 }}
            src={require("../assets/images/logo.png")}
          />
        </IconButton>

        <Button
          onClick={() => {
            navigate("/");
          }}
          color="success"
          className={classes.button}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
