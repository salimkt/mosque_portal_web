import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  Typography,
  Box,
  Grid,
  Button,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { store, useAppSelector } from "../toolkit/store";
import { handleMemberView } from "../utils/functions";
import { setEditing, setFormData } from "../toolkit/reducers";

const useStyles = makeStyles((theme: any) => ({
  container: {
    width: "100%",
    maxWidth: "1000px",
    margin: "auto",
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    backgroundColor: theme.palette.background.paper,
  },
  header: {
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(2),
    borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`,
    color: theme.palette.common.white,
    textAlign: "left", // Align the headings to the left
  },
  listItem: {
    padding: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.default,
  },
  alternateRow: {
    backgroundColor: theme.palette.action.hover, // Alternate row color
  },
  itemText: {
    textAlign: "left", // Align the data to the left
  },
  searchContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  button: {
    marginLeft: theme.spacing(1),
  },
  searchBox: {
    width: "50%", // Search bar takes half the width
  },
}));

export const UserList: React.FC = () => {
  const classes = useStyles();
  const userlist: any = useAppSelector((state) => state.main.userlist);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredUserList = userlist.filter((user: any) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {}, []);

  return (
    <Box className={classes.container}>
      {/* Search Bar and Action Buttons */}
      <Box className={classes.searchContainer}>
        <TextField
          variant="outlined"
          label="Search by Name"
          value={searchQuery}
          onChange={handleSearchChange}
          className={classes.searchBox} // Set the search bar width to half
        />
        <Box
          display="flex"
          justifyContent="flex-end"
          mt={2}
          gap={2} // Adds space between buttons
        >
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate("/cards")}
          >
            Print
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              store.dispatch(setEditing(false));
              store.dispatch(
                setFormData({
                  register_number: "",
                  name: "",
                  mobile: "",
                  dob: "",
                  father: "",
                  house: 0,
                  area: 0,
                  blood_group: "",
                  dependents: [],
                })
              );
              navigate("/userform");
            }}
          >
            Add Member
          </Button>
        </Box>
      </Box>

      {/* List Header */}
      <Box className={classes.header}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Typography variant="body1">Register Number</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1">Name</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body1">Phone Number</Typography>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Box>

      {/* User List */}
      <List>
        {filteredUserList.map((user: any, index: number) => (
          <ListItem
            key={index}
            className={`${classes.listItem} ${
              index % 2 === 0 ? classes.alternateRow : ""
            }`}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={3}>
                <Typography className={classes.itemText} variant="body2">
                  {user.register_number}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography className={classes.itemText} variant="body2">
                  {user.name}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography className={classes.itemText} variant="body2">
                  {user.mobile}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => handleMemberView(user, navigate)}
                >
                  View
                </Button>
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
