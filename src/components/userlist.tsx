// src/UserList.tsx
import React from "react";
import {
  List,
  ListItem,
  Typography,
  IconButton,
  Paper,
  Box,
  Grid,
  Button,
} from "@mui/material";

import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

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

const users = [
  { id: 1, registerNumber: "1234", name: "John Doe", phone: "123-456-7890" },
  { id: 2, registerNumber: "5678", name: "Jane Smith", phone: "098-765-4321" },
  { id: 2, registerNumber: "5678", name: "Jane Smith", phone: "098-765-4321" },
  { id: 2, registerNumber: "5678", name: "Jane Smith", phone: "098-765-4321" },
  { id: 2, registerNumber: "5678", name: "Jane Smith", phone: "098-765-4321" },
  { id: 2, registerNumber: "5678", name: "Jane Smith", phone: "098-765-4321" },
  { id: 2, registerNumber: "5678", name: "Jane Smith", phone: "098-765-4321" },
  { id: 2, registerNumber: "5678", name: "Jane Smith", phone: "098-765-4321" },
  { id: 2, registerNumber: "5678", name: "Jane Smith", phone: "098-765-4321" },
  { id: 2, registerNumber: "5678", name: "Jane Smith", phone: "098-765-4321" },
  { id: 2, registerNumber: "5678", name: "Jane Smith", phone: "098-765-4321" },
  { id: 2, registerNumber: "5678", name: "Jane Smith", phone: "098-765-4321" },
  { id: 2, registerNumber: "5678", name: "Jane Smith", phone: "098-765-4321" },
  { id: 2, registerNumber: "5678", name: "Jane Smith", phone: "098-765-4321" },
  { id: 2, registerNumber: "5678", name: "Jane Smith", phone: "098-765-4321" },
  {
    id: 3,
    registerNumber: "9101",
    name: "Alice Johnson",
    phone: "555-123-4567",
  },
];

export const UserList: React.FC = () => {
  const classes = useStyles();

  const navigate = useNavigate();
  return (
    <div
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
        {users.map((user) => (
          <ListItem key={user.id} className={classes.listItem}>
            <Grid
              style={{ display: "flex", flex: 1 }}
              item
              xs={3}
              // className={classes.gridItem}
            >
              <Typography className={classes.itemText} variant="body2">
                {user.registerNumber}
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
                {user.phone}
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
                  navigate("/");
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
      <Button
        style={{
          margin: 20,
          alignSelf: "center",
        }}
        onClick={() => {
          navigate("/userform");
        }}
        color="success"
        className={classes.button}
      >
        Add More People
      </Button>
    </div>
  );
};
