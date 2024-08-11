// src/App.tsx
import { Provider } from "react-redux";
import RouterConfig from "./navigation/router.config";
import { store } from "./toolkit/store";
import { AlertModal } from "./components/alert";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/styles";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterConfig />
        <AlertModal />
      </ThemeProvider>
    </Provider>
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
