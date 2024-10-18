import React, { useState, useEffect, ChangeEvent } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  Autocomplete,
  Grid,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";

// Replace with your own API root URL
const BE_API_ROOT = "https://web-production-962f9.up.railway.app";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const relationshipChoices = [
  { value: "SPOUSE", label: "Spouse" },
  { value: "SON", label: "Son" },
  { value: "DAUGHTER", label: "Daughter" },
  { value: "DAUGHTER_IN_LAW", label: "Daughter-in-law" },
];

// Custom styled container for better visuals
const FormContainer = styled(Box)(({ theme }) => ({
  maxWidth: 600,
  margin: "auto",
  marginTop: theme.spacing(5),
  padding: theme.spacing(3),
  border: "1px solid #ddd",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
}));

interface Dependent {
  name: string;
  mobile: string;
  dob: string;
  blood_group: string;
  father: string;
  relationship: string;
  parent: string;
}

interface Member {
  register_number: string;
}

const CreateDependent: React.FC = () => {
  const [dependent, setDependent] = useState<Dependent>({
    name: "",
    mobile: "",
    dob: "",
    blood_group: "",
    father: "",
    relationship: "",
    parent: "",
  });

  const [members, setMembers] = useState<Member[]>([]); // For the member search
  const [loading, setLoading] = useState(false);
  const [loadingMembers, setLoadingMembers] = useState(false); // For member fetching state
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    }

    const fetchMembers = async () => {
      setLoadingMembers(true);
      try {
        const response = await axios.get<Member[]>(
          BE_API_ROOT + "/api/member/",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setMembers(response.data);
      } catch (error) {
        console.error("Error fetching members:", error);
        //@ts-ignore
        if (error.response?.status === 401) {
          navigate("/");
        }
      } finally {
        setLoadingMembers(false);
      }
    };

    fetchMembers();
  }, [navigate, token]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDependent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(BE_API_ROOT + "/api/dpnd/", dependent, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Dependent created successfully:", response.data);

      // Clear form
      setDependent({
        name: "",
        mobile: "",
        dob: "",
        blood_group: "",
        father: "",
        relationship: "",
        parent: "",
      });

      // Navigate to dependent listing
      navigate("/create-dep");
    } catch (error) {
      console.error("Error creating dependent:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <Typography variant="h4" gutterBottom align="center">
        Add Dependent
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {/* Member Search and Select */}
          <Grid item xs={12}>
            {loadingMembers ? (
              <CircularProgress />
            ) : (
              <Autocomplete
                options={members}
                getOptionLabel={(option) => option.register_number}
                onChange={(event, value) => {
                  setDependent((prev) => ({
                    ...prev,
                    parent: value ? value.register_number : "",
                  }));
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search Member (Parent)"
                    variant="outlined"
                    fullWidth
                  />
                )}
              />
            )}
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={dependent.name}
              onChange={handleInputChange}
              required
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Mobile"
              name="mobile"
              type="tel"
              value={dependent.mobile}
              onChange={handleInputChange}
              required
              variant="outlined"
            />
          </Grid>

          {/* Father and Relationship Fields */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Father"
              name="father"
              value={dependent.father}
              onChange={handleInputChange}
              required
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              select
              fullWidth
              label="Relationship"
              name="relationship"
              value={dependent.relationship}
              onChange={handleInputChange}
              required
              variant="outlined"
            >
              {relationshipChoices.map((choice) => (
                <MenuItem key={choice.value} value={choice.value}>
                  {choice.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Date of Birth and Blood Group */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Date of Birth"
              name="dob"
              type="date"
              value={dependent.dob}
              onChange={handleInputChange}
              InputLabelProps={{
                shrink: true,
              }}
              required
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              select
              fullWidth
              label="Blood Group"
              name="blood_group"
              value={dependent.blood_group}
              onChange={handleInputChange}
              required
              variant="outlined"
            >
              {bloodGroups.map((group) => (
                <MenuItem key={group} value={group}>
                  {group}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="success"
              fullWidth
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Add Dependent"}
            </Button>
          </Grid>

          {/* Add Member Button */}
          <Grid item xs={12}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => navigate("/userform")}
              fullWidth
            >
              Add Member
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormContainer>
  );
};

export default CreateDependent;
