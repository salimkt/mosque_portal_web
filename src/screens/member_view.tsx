import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import { useAppSelector } from "../toolkit/store";
import { handleEdit } from "../utils/functions";
import { useNavigate } from "react-router-dom";

// Styled box for the main card container
const InfoBox = styled(Card)(({ theme }) => ({
  maxWidth: "100%",
  margin: "auto",
  marginTop: theme.spacing(4),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
}));

// Sample data (replace with props or fetched data)

export const MemberView: React.FC = () => {
  const user = useAppSelector((state) => state.main.memberdata);
  console.log(user);

  const house_names: any = useAppSelector((state) => state.main.house_names);
  const area_names: any = useAppSelector((state) => state.main.area_names);

  const navigate = useNavigate();

  const handleEditClick = () => {
    console.log("Edit button clicked");
    handleEdit(user, navigate);
    // Logic for editing
  };

  const handleDelete = () => {
    console.log("Delete button clicked");
    // Logic for deleting
  };

  return (
    <InfoBox>
      <CardContent>
        {/* Main Name and Edit/Delete Buttons */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            {user.name}
          </Typography>
          <Box display="flex" gap={2} mt={{ xs: 2, sm: 0 }}>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleEditClick}
            >
              Edit
            </Button>
            <Button variant="contained" color="error" onClick={handleDelete}>
              Delete
            </Button>
          </Box>
        </Box>

        <Divider style={{ margin: "10px 0" }} />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Register Number:</strong> {user.register_number}
            </Typography>
            <Typography variant="body1">
              <strong>Mobile:</strong> {user.mobile}
            </Typography>
            <Typography variant="body1">
              <strong>Date of Birth:</strong> {user.dob}
            </Typography>
            <Typography variant="body1">
              <strong>Father's Name:</strong> {user.father}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>House Name:</strong>{" "}
              {
                house_names.filter((house: any) => house.id == user.house)[0]
                  .name
              }
            </Typography>
            <Typography variant="body1">
              <strong>Area:</strong> <br />
              {area_names.filter((area: any) => area.id == user.area)[0].name}
            </Typography>
          </Grid>
        </Grid>

        <Divider style={{ margin: "20px 0" }} />

        <Typography variant="h6" gutterBottom>
          Dependents
        </Typography>

        {/* Dependents List */}
        <List>
          {user.dependents?.map((dependent: any) => (
            <ListItem
              key={dependent.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              divider
            >
              <Box display="flex" alignItems="center" flexWrap="wrap">
                <Avatar sx={{ bgcolor: "primary.main", marginRight: 2 }}>
                  {dependent.name.charAt(0)}
                </Avatar>
                <ListItemText
                  primary={dependent.name}
                  secondary={
                    <>
                      <Typography variant="body2">
                        <strong>Relationship:</strong> {dependent.relationship}
                      </Typography>
                      <Typography variant="body2">
                        <strong>Blood Group:</strong> {dependent.blood_group}
                      </Typography>
                      <Typography variant="body2">
                        <strong>Date of Birth:</strong> {dependent.dob}
                      </Typography>
                      <Typography variant="body2">
                        <strong>Mobile:</strong> {dependent.mobile}
                      </Typography>
                    </>
                  }
                />
              </Box>

              {/* Edit/Delete Buttons for Dependents */}
              <Box display="flex" gap={2} mt={{ xs: 2, sm: 0 }}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleEditClick}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleDelete}
                >
                  Delete
                </Button>
              </Box>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </InfoBox>
  );
};
