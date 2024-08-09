// src/CardGrid.tsx
import React from 'react';
import { Card, CardContent, Typography, Grid, } from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
    pageContainer: {
        width: '210mm',
        height: '297mm',
        margin: '0 auto',
        // padding: theme.spacing(2),
        backgroundColor: '#f0f0f0',
        boxSizing: 'border-box',
        overflow: 'hidden',
    },
    cardGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(100mm, 1fr))', // Adjusts the columns to fit within A4 width
        // gap: theme.spacing(2),
    },
    card: {
        minHeight: '80mm', // Adjust this based on how many cards you want to fit vertically
        // padding: theme.spacing(2),
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    name: {
        fontSize: '1.5rem',
        // marginBottom: theme.spacing(1),
    },
    token: {
        fontSize: '1.2rem',
        color: theme.palette.text.secondary,
    },
}));

const users = [
    { id: 1, name: 'John Doe', token: '12345' },
    { id: 2, name: 'Jane Smith', token: '67890' },
    { id: 3, name: 'Alice Johnson', token: '11223' },
    { id: 4, name: 'Bob Brown', token: '44556' },
    // Add more users as needed
];

const CardGrid: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.pageContainer}>
            <Grid container spacing={2} className={classes.cardGrid}>
                {users.map((user) => (
                    <Grid item key={user.id}>
                        <Card className={classes.card}>
                            <CardContent className={classes.cardContent}>
                                <Typography variant="h6" className={classes.name}>
                                    {user.name}
                                </Typography>
                                <Typography variant="body1" className={classes.token}>
                                    Token: {user.token}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default CardGrid;
