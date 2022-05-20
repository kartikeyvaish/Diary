// Packages Imports
import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

// Context Imports
import AppNavigator from "../navigation/AppNavigator";
import ThemeContext from "../context/ThemeContext";

// Named imports
import AppContainer from "../components/AppContainer";

// function component for NavigationProvider
function NavigationProvider() {
  // Get the theme from the context
  const { theme } = useContext(ThemeContext);

  // render
  return (
    <NavigationContainer theme={theme}>
      <AppContainer>
        <AppNavigator />
      </AppContainer>
    </NavigationContainer>
  );
}

// exports
export default NavigationProvider;
