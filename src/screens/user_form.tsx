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
  CircularProgress,
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
    marginTop: "20px",
  },
}));

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const defaultform = {
  register_number: "",
  name: "",
  mobile: "",
  dob: "",
  father: "",
  house: 0,
  area: 0,
  blood_group: "",
};

export const UserForm: React.FC = () => {
  const classes = useStyles();
  const dispach = useAppDispatch();
  const navigate = useNavigate();
  // State for form fields
  const formData = useAppSelector((state) => state.main.formdata);
  const house_names: any = useAppSelector((state) => state.main.house_names);
  const area_names: any = useAppSelector((state) => state.main.area_names);

  const [loading, setLoading] = useState(false);
  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    console.log(name, value);

    dispach(
      actions.setFormData({
        ...formData,
        //@ts-ignore
        [name]: isNaN(value) ? value?.toUpperCase() : Number(value),
      })
    );
  };
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log("formData", formData);
    store.getState().flags.editing
      ? updateMemberData(formData)
          .then((res) => {
            setLoading(false);
            dispach(
              actions.setAlert({
                visible: true,
                message: "Updation success!",
                mode: "success",
              })
            );
            setTimeout(() => {
              dispach(
                actions.setAlert({
                  visible: false,
                  message: "",
                  mode: "success",
                })
              );
            }, 3000);
            dispach(actions.setFormData(defaultform));
            dispach(actions.setEditing(false));
            navigate("/dashboard");
          })
          .catch((err) => {
            setLoading(false);
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
            setLoading(false);
            dispach(
              actions.setAlert({
                visible: true,
                message: "Registration success!",
                mode: "success",
              })
            );
            setTimeout(() => {
              dispach(
                actions.setAlert({
                  visible: false,
                  message: "",
                  mode: "success",
                })
              );
            }, 3000);
            let members = store.getState().main.userlist;
            store.dispatch(actions.setMembers([...members, res.data]));
            dispach(actions.setFormData(defaultform));
          })
          .catch((err) => {
            console.log(err, "Errrrr");
            setLoading(false);
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
        Mahall member registration Form
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
              select
              fullWidth
              label="House Name"
              name="house"
              value={formData.house}
              onChange={handleChange}
              required
            >
              {house_names.map((house: any) => (
                <MenuItem key={house.id} value={house.id}>
                  {house.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Father's Name"
              name="father"
              value={formData.father}
              onChange={handleChange}
              className={classes.field}
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              select
              fullWidth
              label="Area"
              name="area"
              value={formData.area}
              onChange={handleChange}
              required
            >
              {area_names.map((area: any) => (
                <MenuItem key={area.id} value={area.id}>
                  {area.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Date of Birth"
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Mobile Number"
              name="mobile"
              value={formData.mobile}
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
        </Grid>
        <Box
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems={"center"}
          className={classes.submitButton}
        >
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ width: "50%" }}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={24} color={"info"} />
            ) : store.getState().flags.editing ? (
              "Submit"
            ) : (
              "Register"
            )}
          </Button>
          <Grid style={{ width: "50%", marginTop: 20 }} item xs={12}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => navigate("/create-dep")}
              fullWidth
            >
              Add dependent
            </Button>
          </Grid>
        </Box>
      </form>
    </ThemeProvider>
  );
};
