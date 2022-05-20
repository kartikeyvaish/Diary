// Packages Imports
import { createDrawerNavigator } from "@react-navigation/drawer";

// Local Imports
import AboutScreen from "../screens/AboutScreen";
import ColorPallete from "../constants/ColorPallete";
import { DrawerParamsList } from "./NavigationTypes";
import TasksScreen from "../screens/TasksScreen";
import MyDrawer from "./MyDrawer";

// Create the DrawerNavigator
const Drawer = createDrawerNavigator<DrawerParamsList>();

// function component for DrawerNavigator
function DrawerNavigator() {
  // render
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "transparent",
        },
        drawerType: "slide",
        lazy: false,
      }}
      drawerContent={props => <MyDrawer {...props} />}
    >
      <Drawer.Screen
        name="TasksScreen"
        component={TasksScreen}
        options={{ drawerLabel: "Tasks", title: "Tasks" }}
      />
      <Drawer.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{ drawerLabel: "About", title: "About" }}
      />
    </Drawer.Navigator>
  );
}

// exports
export default DrawerNavigator;
