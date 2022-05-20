import { AppTheme } from "../../types/GlobalTypes";

export interface ThemeInitialStateProps {
    mode?: string,
    theme?: AppTheme,
}

// ThemeActionProps interface
export interface ThemeActionProps {
    type: string;
    payload?: ThemeInitialStateProps;
}