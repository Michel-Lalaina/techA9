"use client"

import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#16a34a", // Vert principal moderne
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#22c55e" // Vert plus clair
    },
    background: {
      default: "#ffffff",
      paper: "#f9fafb"
    },
    text: {
      primary: "#111827",
      secondary: "#4b5563"
    }
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h3: {
      fontWeight: 700
    },
    h4: {
      fontWeight: 600
    },
    button: {
      textTransform: "none",
      fontWeight: 600
    }
  },
  shape: {
    borderRadius: 12
  }
})

export default function MuiProvider({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
