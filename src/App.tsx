import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "./ProTip";
import Navbar from "./components/molecules/navbar";
import Footer from "./components/molecules/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUsPage from "./components/pages/about-us";
import { SoftwareToolsPage } from "./components/pages/software-tools";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LandingPage />}></Route>
        <Route path="software-tools" element={<SoftwareToolsPage />}></Route>
        <Route path="about-us" element={<AboutUsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export function LandingPage() {
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
