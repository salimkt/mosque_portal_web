// src/UserList.tsx
import React, { useEffect } from "react";
import { List, ListItem, Typography, Box, Grid, Button } from "@mui/material";

import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { store, useAppSelector } from "../toolkit/store";
import { handleEdit } from "../utils/functions";
const useStyles = makeStyles((theme: any) => ({
  listContainer: {
    width: "100%",
    maxWidth: 800,
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "auto",
    borderRadius: "8px",
  },
  listItem: {
    borderBottom: "1px solid #ddd",
    padding: theme.spacing(2),
  },
  header: {
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(2),
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    color: theme.palette.common.white,
    display: "flex",
    justifyContent: "space-between",
  },
  itemText: {
    // flex: 1,
    padding: theme.spacing(0, 2),
    textAlign: "center",
  },
  iconButton: {
    color: theme.palette.primary.main,
  },
  gridItem: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  button: {
    // marginLeft: theme.spacing(2),
  },
}));

export const UserList: React.FC = () => {
  const classes = useStyles();
  const userlist: any = useAppSelector((state) => state.main.userlist);
  const navigate = useNavigate();
  useEffect(() => {}, []);

  return (
    <div
      id="userlist"
      // className={classes.listContainer}
      style={{
        // margin: 0,
        display: "flex",
        marginTop: 20,
        // width: "100%",
        flexDirection: "column",
        alignSelf: "center",
        // margin: 10,
        flex: 1,
        borderRadius: 5,
      }}
    >
      <div
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          style={{
            margin: 20,
            alignSelf: "center",
          }}
          onClick={() => {
            navigate("/cards");
            // generatePDF();
          }}
          color="success"
          className={classes.button}
        >
          Print
        </Button>
        <Button
          style={{
            margin: 20,
            alignSelf: "center",
          }}
          onClick={() => {
            navigate("/userform");
            // generatePDF();
          }}
          color="success"
          className={classes.button}
        >
          Add Member
        </Button>
      </div>
      <Box className={classes.header}>
        <Typography
          style={{
            display: "flex",
            flex: 1,
            // backgroundColor: "red",
            justifyContent: "flex-start",
          }}
          className={classes.itemText}
          variant="body1"
        >
          Register Number
        </Typography>
        <Typography
          style={{
            display: "flex",
            flex: 2,
            // backgroundColor: "green",
            justifyContent: "flex-start",
          }}
          className={classes.itemText}
          variant="body1"
        >
          Name
        </Typography>
        <Typography
          style={{
            display: "flex",
            flex: 1,
            paddingLeft: 40,
            // backgroundColor: "blue",
          }}
          className={classes.itemText}
          variant="body1"
        >
          Phone Number
        </Typography>
        <Typography
          style={{ display: "flex", flex: 1 }}
          className={classes.itemText}
          variant="body1"
        ></Typography>
      </Box>

      <List>
        {userlist.map((user: any, index: number) => (
          <ListItem className={classes.listItem}>
            <Grid
              style={{ display: "flex", flex: 1 }}
              item
              xs={3}
              // className={classes.gridItem}
            >
              <Typography className={classes.itemText} variant="body2">
                {user.register_number}
              </Typography>
            </Grid>
            <Grid
              style={{
                display: "flex",
                flex: 2,
                justifyContent: "flex-start",
                // alignItems: "flex-start",
                //   backgroundColor: "red",
              }}
              item
              // xs={3}
              className={classes.gridItem}
            >
              <Typography
                style={{
                  textAlign: "initial",
                }}
                className={classes.itemText}
                variant="body2"
              >
                {user.name}
              </Typography>
            </Grid>
            <Grid
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "flex-start",
              }}
              item
              // xs={4}
              className={classes.gridItem}
            >
              <Typography
                style={{
                  textAlign: "initial",
                }}
                className={classes.itemText}
                variant="body2"
              >
                {user.mobile}
              </Typography>
            </Grid>
            <Grid
              style={{ display: "flex", flex: 1 }}
              item
              xs={2}
              className={classes.gridItem}
            >
              <Button
                style={{
                  margin: 20,
                  alignSelf: "center",
                }}
                onClick={() => {
                  handleEdit(user, navigate);
                }}
                color="success"
                className={classes.button}
              >
                Edit
              </Button>
            </Grid>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
