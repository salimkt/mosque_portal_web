// src/CardGrid.tsx
import React from "react";
import { Card, CardContent, Typography, Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "../components/header";
//@ts-ignore
import html2pdf from "html2pdf.js";
import { useAppSelector } from "../toolkit/store";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    width: "210mm",
    // height: '297mm',
    margin: 0,
    //   padding: theme.spacing(2),
    backgroundColor: "#f0f0f0",
    boxSizing: "border-box",
    overflow: "scroll",
  },
  cardGrid: {
    width: "210mm",
    // height: '297mm',
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // Two cards per row
    // maxWidth: '100%', // Ensures grid does not exceed page width
    alignItems: "center",
    //   gap: theme.spacing(4), // Spacing between cards
  },
  card: {
    minHeight: "100mm", // Increase card height for better aesthetics
    //   padding: theme.spacing(3),
    backgroundColor: "#ffffff",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    borderRadius: "12px",
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 16px 32px rgba(0, 0, 0, 0.2)",
    },
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  name: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    //   marginBottom: theme.spacing(1),
    //   color: theme.palette.primary.main,
  },
  token: {
    fontSize: "1.3rem",
    //   color: theme.palette.text.secondary,
  },
}));

const users = [
  { id: 1, name: "John Doe", token: "12345" },
  { id: 2, name: "Jane Smith", token: "67890" },
  { id: 3, name: "Alice Johnson", token: "11223" },
  { id: 4, name: "Bob Brown", token: "44556" },
  { id: 4, name: "Bob Brown", token: "44556" },
  { id: 4, name: "Bob Brown", token: "44556" },
  { id: 4, name: "Bob Brown", token: "44556" },
  { id: 4, name: "Bob Brown", token: "44556" },
  { id: 1, name: "John Doe", token: "12345" },
  { id: 2, name: "Jane Smith", token: "67890" },
  { id: 3, name: "Alice Johnson", token: "11223" },
  { id: 4, name: "Bob Brown", token: "44556" },
  { id: 4, name: "Bob Brown", token: "44556" },
  { id: 4, name: "Bob Brown", token: "44556" },
  { id: 4, name: "Bob Brown", token: "44556" },
  { id: 4, name: "Bob Brown", token: "44556" },
  // Add more users as needed
];

const CardGrid: React.FC = () => {
  const classes = useStyles();
  const people: any = useAppSelector((state) => state.main.userlist);
  function generatePDF() {
    const element = document.getElementById("tokens");
    const opt = {
      margin: [0, 0, 0, 0], // Top, right, bottom, left
      filename: "document.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 5 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    html2pdf().from(element).set(opt).save();
  }

  return (
    <div
      style={{
        width: "100%",
        alignItems: "center",
        paddingBottom: 20,
        backgroundColor: "grey",
      }}
    >
      <Header />
      <Button
        onClick={generatePDF}
        style={{
          position: "absolute",
          right: 10,
          top: 100,
          backgroundColor: "green",
          color: "white",
          fontWeight: "bold",
        }}
      >
        PDF
      </Button>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          backgroundColor: "grey",
        }}
        id="tokens"
      >
        <div
          style={{
            width: "210mm",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {people.map((user: any, index: number) => (
            <div
              style={{
                width: "49.96%",
                height: "59.4mm",
                // marginBottom: "1.06mm",
                borderRadius: 5,
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: "2px",
                borderColor: "black",
              }}
            >
              <Typography variant="h6" className={classes.name}>
                Name: {user?.name}
              </Typography>
              <Typography variant="body1" className={classes.token}>
                Token: {1000 + index}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
