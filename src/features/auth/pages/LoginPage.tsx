import { Box, Button, Container, Paper, Typography } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: 30,
          borderRadius: 7,
        },
      },
    },
  },
})

export default function LoginPage() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Paper elevation={10}>
          <Typography variant="h5" component="h1">
            Student management
          </Typography>
          <Box mt={4}>
            <Button fullWidth variant="contained" color="primary">
              Fake login
            </Button>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  )
}
