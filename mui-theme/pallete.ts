import { PaletteMode, PaletteOptions } from "@mui/material";


export const pallete = (mode: PaletteMode): PaletteOptions => {
    return {
      mode,
      background: {
        default: mode === "light" ? "#f5f8fa" : "#000",
        paper: mode === "light" ? "#fff" : "#000"
      }
    }
}