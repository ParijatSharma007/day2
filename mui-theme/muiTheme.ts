import { PaletteMode } from "@mui/material";
import type { ThemeOptions } from "@mui/material/styles";
import { pallete } from "./pallete";

export const MuiThemeOptions = (mode: PaletteMode): ThemeOptions => {
    return {
      palette: pallete(mode)
    }
}