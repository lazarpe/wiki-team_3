import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ProTip from "./ProTip";
import Navbar from "./components/molecules/Navbar";
import Footer from "./components/molecules/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Material UI Create React App example in TypeScript
          </Typography>
          <ProTip />
          <Footer />
        </Box>
      </Container>
    </>
  );
}
