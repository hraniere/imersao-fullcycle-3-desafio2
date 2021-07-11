import {
  MuiThemeProvider,
  CssBaseline,
  Container,
  Box,
} from "@material-ui/core";
import type { AppProps } from "next/app";
import theme from "../theme";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Component {...pageProps} />
      </Container>
    </MuiThemeProvider>
  );
}
export default MyApp;
