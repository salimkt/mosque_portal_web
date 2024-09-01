// src/DetailedForm.tsx
import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Box,
  MenuItem,
  Typography,
  ThemeProvider,
  Autocomplete,
} from "@mui/material";
import * as actions from "../toolkit/reducers";
import { makeStyles } from "@mui/styles";
import Header from "../components/header";
import { theme } from "../utils/styles";
import { store, useAppDispatch, useAppSelector } from "../toolkit/store";
import { addPeople, updateMemberData } from "../utils/api_utils";
import { useNavigate } from "react-router-dom";
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

const defaultform = {
  register_number: "",
  name: "",
  house_name: "",
  fathers_name: "",
  occupation: "",
  male_members: 0,
  female_members: 0,
  area: "",
  mobile_number: "",
  blood_group: "",
  ration_card_number: "",
};

export const UserForm: React.FC = () => {
  const classes = useStyles();
  const dispach = useAppDispatch();
  const navigate = useNavigate();
  // State for form fields
  const formData = useAppSelector((state) => state.main.formdata);
  const house_names: any = useAppSelector((state) => state.main.house_names);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispach(
      actions.setFormData({
        ...formData,
        [name]: value,
      })
    );
  };
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("formData", formData);
    store.getState().flags.editing
      ? updateMemberData(formData)
          .then((res) => {
            dispach(
              actions.setAlert({
                visible: true,
                message: "Updation success!",
                mode: "success",
              })
            );
            dispach(actions.setFormData(defaultform));
            dispach(actions.setEditing(false));
            navigate("/dashboard");
          })
          .catch((err) => {
            dispach(
              actions.setAlert({
                visible: true,
                message: "Updation failed!",
                mode: "error",
              })
            );
          })
      : addPeople(formData)
          .then((res) => {
            dispach(
              actions.setAlert({
                visible: true,
                message: "Registration success!",
                mode: "success",
              })
            );
            const members = store.getState().main.userlist;
            members.push({ ...formData, id: 0 });
            store.dispatch(actions.setMembers({ ...members, id: "" }));
            dispach(actions.setFormData(defaultform));
          })
          .catch((err) => {
            dispach(
              actions.setAlert({
                visible: true,
                message: "Registration failed!",
                mode: "error",
              })
            );
          });

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
              disabled={store.getState().flags.editing}
              label="Register Number"
              name="register_number"
              value={formData.register_number}
              onChange={handleChange}
              className={classes.field}
              // required
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
              // required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              freeSolo
              options={house_names}
              getOptionLabel={(option) => option}
              value={formData.house_name}
              renderInput={(params) => (
                <TextField
                  {...params}
                  value={formData.house_name}
                  onChange={(event) => {
                    event.preventDefault();
                    dispach(
                      actions.setFormData({
                        ...formData,
                        house_name: event.target.value,
                      })
                    );
                  }}
                  {...params}
                  label="House Name"
                  fullWidth
                />
              )}
              onChange={(event, newValue) => {
                dispach(
                  actions.setFormData({
                    ...formData,
                    house_name: newValue ? newValue : "",
                  })
                );
              }}
            />
            {/* <TextField
              fullWidth
              label="House Name"
              name="houseName"
              value={formData.houseName}
              onChange={handleChange}
              className={classes.field}
            /> */}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Father's Name"
              name="fathers_name"
              value={formData.fathers_name}
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
              name="male_members"
              value={formData.male_members}
              onChange={handleChange}
              type="number"
              className={classes.field}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Female Members"
              name="female_members"
              value={formData.female_members}
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
              name="mobile_number"
              value={formData.mobile_number}
              onChange={handleChange}
              type="tel"
              className={classes.field}
              // required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              fullWidth
              label="Blood Group"
              name="blood_group"
              value={formData.blood_group}
              onChange={handleChange}
              className={classes.field}
              // required
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
              name="ration_card_number"
              value={formData.ration_card_number}
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
            {store.getState().flags.editing ? "Submit" : "Register"}
          </Button>
        </Box>
      </form>
    </ThemeProvider>
  );
};
