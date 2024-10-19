import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../utils/styles";
import Header from "../components/header";
import { UserList } from "../components/userlist";

export const Dashboard = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <UserList />
    </ThemeProvider>
  );
};
