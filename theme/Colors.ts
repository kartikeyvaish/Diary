// Imports
import ColorPallete from "../constants/ColorPallete"
import { AppTheme } from "../types/GlobalTypes"

// Dark theme colors
const dark: AppTheme = {
    colors: {
        background: ColorPallete.black,
        card: ColorPallete.secondary,
        border: ColorPallete.secondary,
        primary: ColorPallete.primary,
        text: ColorPallete.white,
        notification: ColorPallete.primary,
    },
    dark: true,
}

// Light theme colors
const light: AppTheme = {
    colors: {
        background: ColorPallete.white,
        card: ColorPallete.white,
        border: ColorPallete.secondary,
        primary: ColorPallete.primary,
        text: ColorPallete.black,
        notification: ColorPallete.primary,
    },
    dark: false,
}

// exporting both the themes
export default { dark, light }