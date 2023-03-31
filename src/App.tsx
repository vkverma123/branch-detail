import { CssBaseline, ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import theme from "./theme";
import AppRouter from "./AppRouter";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={2000}
      >
        <AppRouter />
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
