import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Container } from "@mui/material";
import Link from "next/link";


export default function ButtonAppBar() {
  return (
    <Container>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                style={{
                backgroundColor: "white",
                color: "black",
                }}
                elevation={0}
            >
                <Toolbar>
                    <Link href="/about" style={{textDecoration : "none", color : "black", fontWeight : "20px"}}>
                        About
                    </Link>
                <Container sx={{ textAlign: "center" }}>
                    <h1>
                        <Link style={{textDecoration : "none", color : "black"}} href="/">My Application</Link>
                    </h1>
                </Container>
                </Toolbar>
            </AppBar>
        </Box>
    </Container>
  );
}
