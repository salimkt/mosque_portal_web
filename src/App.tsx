// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Typography, Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { SignUp } from './screens/signup';
import RouterConfig from './navigation/router.config';



const App = () => {

  return (
    <RouterConfig />
  );
};

// export const Home = () => {
//   return (
//     <Box>
//       <Typography variant="h2" component="h1">
//         Welcome to the Home Page
//       </Typography>
//       <Button
//         className={useStyles().link}
//         variant="contained"
//         color="primary"
//         href="/signup"
//       >
//         Go to Form
//       </Button>
//     </Box>
//   );
// };

export default App;
