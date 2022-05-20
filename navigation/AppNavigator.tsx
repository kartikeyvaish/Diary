// Packages Imports
import { createStackNavigator } from "@react-navigation/stack";

// Local Imports
import { AppStackParamsList } from "./NavigationTypes";
import DrawerNavigator from "./DrawerNavigator";

// create the Stack Navigator
const Stack = createStackNavigator<AppStackParamsList>();

// function component for AppNavigator
function AppNavigator() {
  // render
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={DrawerNavigator} />
    </Stack.Navigator>
  );
}

// exports
export default AppNavigator;
