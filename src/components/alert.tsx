// src/SuccessAlert.tsx
import React from "react";
import { Alert, AlertTitle, Snackbar, IconButton } from "@mui/material";
import { useAppSelector } from "../toolkit/store";
// import CloseIcon from "@mui/icons-material/Close";

export const AlertModal: React.FC<{}> = () => {
  const alert = useAppSelector((state) => state.main.alert);
  function handleClose(event: any): void {
    throw new Error("Function not implemented.");
  }

  return (
    <Snackbar
      open={alert.visible}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={handleClose}
        //@ts-ignore
        severity={alert.mode}
        variant="filled"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={handleClose}
          >
            X{/* <CloseIcon fontSize="inherit" /> */}
          </IconButton>
        }
        sx={{
          minWidth: "300px",
          backgroundColor: "#4caf50",
          color: "#ffffff",
          boxShadow: "0 3px 5px rgba(0, 0, 0, 0.3)",
        }}
      >
        {/* { && <AlertTitle>{"title"}</AlertTitle>} */}
        {alert.message}
      </Alert>
    </Snackbar>
  );
};
