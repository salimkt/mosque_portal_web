import { useState } from 'react';
import { TextField, Button, Container, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme, useStyles } from '../utils/styles';



export const Login = () => {
    const classes = useStyles();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="sm">
                <Box className={classes.formContainer}>
                    <img
                        style={{ width: 400, }} src={require('../assets/images/logo.png')} />
                    <form onSubmit={handleSubmit}>
                        <TextField
                            className={classes.inputField}
                            label="Email"
                            variant="outlined"
                            fullWidth
                            style={styles.textInput}
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <TextField
                            className={classes.inputField}
                            label="Password"
                            variant="outlined"
                            type="password"
                            fullWidth
                            style={styles.textInput}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <Button
                            className={classes.submitButton}
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={styles.textInput}
                            fullWidth
                        >
                            Login
                        </Button>
                        <text style={styles.or}>- OR -</text>
                        <Button
                            className={classes.submitButton}
                            type="button"
                            href="#/signup"
                            variant="outlined"
                            color="primary"
                            style={styles.btn}
                            fullWidth
                        >
                            <text style={styles.logintext}>SignUp</text>
                        </Button>
                    </form>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

const styles = {
    textInput: { marginBottom: 10 },
    or: {
        display: "flex",
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        color: "gray",
    },
    logintext: {
        display: "flex",
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        color: "#000",
        // fontWeight: "bold",
    },
    btn: {
        marginTop: 10,
        backgroundColor: "#fff",
        borderWidth: 1.5,
        borderColor: "#076324",
    }
}