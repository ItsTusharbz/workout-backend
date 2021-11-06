import "./App.css";
import Routes from "./routes/routes";
import theme from "./theme/theme";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import MainHeader from "./views/Header/MainHeader";
import { Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <MainHeader></MainHeader>
            <Routes />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
