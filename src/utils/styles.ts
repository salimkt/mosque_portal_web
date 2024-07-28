import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#076324', // Your primary color
        },
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: "#8ebc21", // Color of the border on focus
                    },
                },
            },
        },
    },
});

export const useStyles = makeStyles((theme) => ({
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#ffffff',
        marginTop: '5rem',
        borderColor: '#076324'
    },
    inputField: {
        marginBottom: '1rem',
    },
    submitButton: {
        marginTop: '20px',
    },
}));