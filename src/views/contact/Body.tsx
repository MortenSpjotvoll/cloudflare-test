import type * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "../../components/Paper";
import background from "@assets/curvylines.png";

export default function Body(props: React.HTMLAttributes<HTMLDivElement>) {
  const { children } = props;

  return (
    <Box
      sx={{
        display: "flex",
        backgroundImage: background,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ mt: 7, mb: 12 }}>
          <Paper
            background="light"
            sx={{ py: { xs: 4, md: 8 }, px: { xs: 3, md: 6 } }}
          >
            {children}
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
