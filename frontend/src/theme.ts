import { PaletteOptions } from "@material-ui/core/styles/createPalette";
import { createMuiTheme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const palette: PaletteOptions = {
  type: "light",
};

const theme = createMuiTheme({
  palette,
});

export default theme;
