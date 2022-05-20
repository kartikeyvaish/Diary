// Children interface
export interface ChildrenProps { children?: React.ReactNode; }

// seperate margin props
export interface SeperateMarginProps {
    marginLeft?: number;
    marginRight?: number;
    marginTop?: number;
    marginBottom?: number;
    margin?: number;
}

// App Theme types
export interface AppTheme {
    dark: boolean,
    colors: {
        // Compulsory Colors
        background: string,
        card: string,
        border: string,
        primary: string,
        text: string,
        notification: string,
    }
}