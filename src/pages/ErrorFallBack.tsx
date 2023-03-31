import React from "react";
import { useNavigate } from "react-router-dom";
import { FallbackProps } from "react-error-boundary";
import { Box, Button, Container, Typography } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

export const ErrorFallback: React.ComponentType<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  console.error({ error });

  const navigate = useNavigate();

  let errorTitle: string;
  let errorDescription: string;

  errorTitle = "Exception: " + error.name;
  errorDescription = error.message;

  const handleClick = () => {
    resetErrorBoundary();
    navigate("/branch");
  };

  return (
    <Box
      component="main"
      sx={{
        alignItems: "center",
        display: "flex",
        flexGrow: 1,
        minHeight: "100%",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography align="center" color="textPrimary" variant="h1">
            {errorTitle}
          </Typography>
          <Typography align="center" color="textPrimary" variant="subtitle2">
            {errorDescription}
          </Typography>
          <Button
            startIcon={<RestartAltIcon fontSize="small" />}
            sx={{ mt: 3 }}
            variant="contained"
            onClick={handleClick}
          >
            Retry
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ErrorFallback;
