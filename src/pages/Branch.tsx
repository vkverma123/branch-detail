import { useEffect, useState } from "react";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";
import DisplayForm, { FormValues } from "./DisplayForm";
import { red } from "@mui/material/colors";
import SettingsIcon from "@mui/icons-material/Settings";
import CustomStepper from "../components/CustomStepper";
import ErrorIcon from "@mui/icons-material/Error";

export const App = () => {
  const [isSaving, setIsSaving] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const [seconds, setSeconds] = useState(300);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        window.location.reload();
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const initialValues = {
    branchCode: "",
    branch: "",
    brand: "",
    salesType: "",
    productType: "",
    tags: [],
  };

  const handleSubmit = async (values: FormValues) => {
    setIsSaving(true);
    try {
      console.log(values);
      // Call to API (Out of Scope)
      // await createBranchMutation.mutateAsync({
      //   ...values
      // })
      enqueueSnackbar("NOT SAVED!", {
        onClose: () => {
          setIsSaving(false);
        },
        variant: "error",
      });
    } catch (e: unknown) {
      console.error(e);
      enqueueSnackbar("Unknown Error", {
        onExit: () => {
          setIsSaving(false);
        },
        variant: "error",
      });
      // debug unsupported error response details
    }
  };

  return (
    <Container maxWidth="xl">
      <Paper elevation={1} sx={{ p: 4 }}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{ backgroundColor: red[500] }}>
            <Toolbar>
              <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
                User Dashboard / Attendance
                <br />
                <b> Attendance </b>
              </Typography>
              <Button color="inherit">Set Password</Button>
              <Button color="inherit">LOGOUT </Button>
              <Typography variant="subtitle1" sx={{ ml: 2 }}>
                | Hi, Mr Mark
              </Typography>
              <IconButton
                size="small"
                edge="start"
                color="inherit"
                sx={{ ml: 2 }}
              >
                <SettingsIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
      </Paper>
      <Paper elevation={1} sx={{ p: 4 }}>
        <Stack spacing={2}>
          <Stack direction="row" justifyContent="space-between">
            <Badge badgeContent={3} color="error">
              <ErrorIcon color="error" />
            </Badge>
            <SettingsIcon color="primary" />
          </Stack>
          <Box sx={{ width: "100%", mt: 2 }}>
            <CustomStepper />
            <Typography mt={2} variant="subtitle1" align="center">
              After{" "}
              <span style={{ color: "red" }}>
                {minutes.toString().padStart(2, "0")}:
                {remainingSeconds.toString().padStart(2, "0")}
              </span>{" "}
              This page will be refreshed
            </Typography>
          </Box>
          <DisplayForm
            initialValues={initialValues}
            onSubmit={handleSubmit}
            isSaving={isSaving}
          />
        </Stack>
      </Paper>
    </Container>
  );
};

export default App;
