import React from "react";
import { Box } from "@mui/material";

export const Content = ({
  sidebarWidth,
  navbarHeight,
  children,
}: React.PropsWithChildren<{ sidebarWidth: number; navbarHeight: number }>) => (
  <Box
    sx={{
      display: "flex",
      flex: "1 1 auto",
      maxWidth: "100%",
      paddingTop: `${navbarHeight}px`,
      paddingLeft: {
        lg: `${sidebarWidth}px`,
      },
      paddingRight: {
        lg: `${sidebarWidth}px`,
      },
    }}
  >
    {children}
  </Box>
);
export default Content;
