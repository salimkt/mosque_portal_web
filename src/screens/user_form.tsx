// src/DetailedForm.tsx
import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Box,
  MenuItem,
  Typography,
  Paper,
  ThemeProvider,
} from "@mui/material";

import { makeStyles } from "@mui/styles";
import Header from "../components/header";
import { theme } from "../utils/styles";
const useStyles = makeStyles((theme: any) => ({
  formContainer: {
    width: "100%",
    maxWidth: 800,
    margin: "auto",
    // padding: theme.spacing(4),
    // backgroundColor: theme.palette.background.paper,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
  field: {
    // marginBottom: theme.spacing(2),
  },
  header: {
    // marginBottom: theme.spacing(3),
    textAlign: "center",
  },
  submitButton: {
    // marginTop: theme.spacing(2),
  },
}));

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export const UserForm: React.FC = () => {
  const classes = useStyles();

  // State for form fields
  const [formData, setFormData] = useState({
    registerNumber: "",
    name: "",
    houseName: "",
    fathersName: "",
    occupation: "",
    maleMembers: "",
    femaleMembers: "",
    area: "",
    mobileNumber: "",
    bloodGroup: "",
    rationCardNumber: "",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically handle form submission, such as sending data to a server
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Typography
        style={{ marginTop: 20, marginBottom: 10 }}
        variant="h5"
        className={classes.header}
      >
        Mahall user registration Form
      </Typography>
      <form style={{ padding: 10 }} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Register Number"
              name="registerNumber"
              value={formData.registerNumber}
              onChange={handleChange}
              className={classes.field}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={classes.field}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="House Name"
              name="houseName"
              value={formData.houseName}
              onChange={handleChange}
              className={classes.field}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Father's Name"
              name="fathersName"
              value={formData.fathersName}
              onChange={handleChange}
              className={classes.field}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              className={classes.field}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Male Members"
              name="maleMembers"
              value={formData.maleMembers}
              onChange={handleChange}
              type="number"
              className={classes.field}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Female Members"
              name="femaleMembers"
              value={formData.femaleMembers}
              onChange={handleChange}
              type="number"
              className={classes.field}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Area"
              name="area"
              value={formData.area}
              onChange={handleChange}
              className={classes.field}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Mobile Number"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              type="tel"
              className={classes.field}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              fullWidth
              label="Blood Group"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              className={classes.field}
              required
            >
              {bloodGroups.map((group) => (
                <MenuItem key={group} value={group}>
                  {group}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Ration Card Number"
              name="rationCardNumber"
              value={formData.rationCardNumber}
              onChange={handleChange}
              className={classes.field}
            />
          </Grid>
        </Grid>
        <Box
          display="flex"
          justifyContent="center"
          className={classes.submitButton}
        >
          <Button
            style={{ marginTop: 10 }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Register
          </Button>
        </Box>
      </form>
    </ThemeProvider>
  );
};
