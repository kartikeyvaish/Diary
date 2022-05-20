// Other Types
import { AppTheme, ChildrenProps } from "./GlobalTypes";

export interface ThemeContextProps {
    ChangeMode?: (mode: string, isSystemDefault?: boolean) => void;
    theme?: AppTheme;
}

// interface for ThemeProvider
export interface ThemeProviderProps extends ChildrenProps { }