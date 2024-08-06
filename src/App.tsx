// src/App.tsx
import { Provider } from "react-redux";
import RouterConfig from "./navigation/router.config";
import { store } from "./toolkit/store";
import { AlertModal } from "./components/alert";

const App = () => {
  return (
    <Provider store={store}>
      <RouterConfig />
      <AlertModal />
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
