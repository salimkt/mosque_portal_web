import { useEffect, useState } from "react";
import { TextField, Button, Container, Box, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme, useStyles } from "../utils/styles";
import Header from "../components/header";
import { UserList } from "../components/userlist";
import { getAreaNames, getHouseNames, getMembers } from "../utils/api_utils";
import { store } from "../toolkit/store";
import { setHouseNames, setAreaNames, setMembers } from "../toolkit/reducers";

export const Dashboard = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <UserList />
    </ThemeProvider>
  );
};

const styles = {
  textInput: { marginBottom: 10 },
  or: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    color: "gray",
  },
  logintext: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    color: "#000",
    // fontWeight: "bold",
  },
  btn: {
    marginTop: 10,
    backgroundColor: "#fff",
    borderWidth: 1.5,
    borderColor: "#076324",
  },
};
