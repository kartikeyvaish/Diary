// Packages Imports
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Local component and context imports
import ThemeContext from "../context/ThemeContext";
import useThemeManager from "../hooks/useThemeManager";

// named imports
import { ThemeProviderProps } from "../types/ContextTypes";

// ThemeProvider function component
function ThemeProvider(props: ThemeProviderProps) {
  // Destructuring props
  const { children } = props;

  // use custom hook to manage theme state
  const { ChangeMode, theme } = useThemeManager();

  // Bar Style
  const barStyle = theme.dark === false ? "dark-content" : "light-content";

  // StatusBar background color
  const barBackgroundColor = theme.colors.background;

  // Render component based on user authentication status
  return (
    <ThemeContext.Provider value={{ ChangeMode, theme }}>
      {/* StatusBar */}
      <StatusBar barStyle={barStyle} backgroundColor={barBackgroundColor} animated={true} />
      {/* React Native Paper Theme */}
      {/* children components */}
      <GestureHandlerRootView style={{ flex: 1, backgroundColor: theme.colors.background }}>
        {children}
      </GestureHandlerRootView>
    </ThemeContext.Provider>
  );
}

// Exports
export default ThemeProvider;
