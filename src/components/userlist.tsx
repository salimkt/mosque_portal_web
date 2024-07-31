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
} from "@mui/material";

import { makeStyles } from "@mui/styles";

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
    flex: 1,
    padding: theme.spacing(0, 2),
    textAlign: "center",
  },
  iconButton: {
    color: theme.palette.primary.main,
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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

  return (
    <Paper
      style={{ marginTop: 20, width: "100%" }}
      className={classes.listContainer}
    >
      <Box className={classes.header}>
        <Typography
          style={{ display: "flex", flex: 1 }}
          className={classes.itemText}
          variant="body1"
        >
          Register Number
        </Typography>
        <Typography
          style={{
            display: "flex",
            flex: 2,
            justifyContent: "flex-start",
          }}
          className={classes.itemText}
          variant="body1"
        >
          Name
        </Typography>
        <Typography
          style={{ display: "flex", flex: 1 }}
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
            <Grid container spacing={2}>
              <Grid
                style={{ display: "flex", flex: 1 }}
                item
                xs={3}
                className={classes.gridItem}
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
                  //   backgroundColor: "red",
                }}
                item
                xs={3}
                className={classes.gridItem}
              >
                <Typography
                  style={{
                    alignItems: "flex-start",
                    // backgroundColor: "blue",
                  }}
                  className={classes.itemText}
                  variant="body2"
                >
                  {user.name}
                </Typography>
              </Grid>
              <Grid
                style={{ display: "flex", flex: 1 }}
                item
                xs={4}
                className={classes.gridItem}
              >
                <Typography className={classes.itemText} variant="body2">
                  {user.phone}
                </Typography>
              </Grid>
              <Grid
                style={{ display: "flex", flex: 1 }}
                item
                xs={2}
                className={classes.gridItem}
              >
                <IconButton
                  edge="end"
                  aria-label="edit"
                  className={classes.iconButton}
                >
                  Edit
                </IconButton>
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};
