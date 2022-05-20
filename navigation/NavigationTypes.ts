// Packages Imports  
import { StackScreenProps } from "@react-navigation/stack";

// Local Imports 
import { DrawerScreenProps } from "@react-navigation/drawer";


// App Navigator Screen Params
export type AppStackParamsList = {
    // App Stack Screens
    HomeScreen: undefined
};

// Drawer Navigator Screen Params
export type DrawerParamsList = {
    // Drawer Stack Screens 
    TasksScreen: undefined;
    AboutScreen: undefined;
};

// Props for App Navigator's Screens
export type AppScreenProps<Screen extends keyof AppStackParamsList> = StackScreenProps<
    AppStackParamsList,
    Screen
>;

// Props for App Navigator's Screens
export type DrawerTabScreenProps<Screen extends keyof DrawerParamsList> = DrawerScreenProps<
    DrawerParamsList,
    Screen
>;