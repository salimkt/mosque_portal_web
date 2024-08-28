// src/SuccessAlert.tsx
import React from "react";
import { Alert, AlertTitle, Snackbar, IconButton } from "@mui/material";
import { store, useAppSelector } from "../toolkit/store";
import { alert_payload, setAlert } from "../toolkit/reducers";
// import CloseIcon from "@mui/icons-material/Close";

export const AlertModal: React.FC<{}> = () => {
  //@ts-ignore
  const alert: alert_payload = useAppSelector((state) => state.main.alert);
  function handleClose(event: any): void {
    store.dispatch(
      setAlert({
        visible: false,
        message: "",
        mode: "success",
      })
    );
    // throw new Error("Function not implemented.");
  }

  return (
    <Snackbar
      open={alert.visible}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={handleClose}
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
          backgroundColor: alert.mode == "success" ? "#4caf50" : "#d32f2f",
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
