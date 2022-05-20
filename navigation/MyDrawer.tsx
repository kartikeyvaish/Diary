// Packages Imports
import { View, StyleSheet, StyleProp, ViewStyle, Switch } from "react-native";
import { DrawerContentComponentProps, useDrawerProgress } from "@react-navigation/drawer";
import Animated, { useAnimatedStyle, interpolate } from "react-native-reanimated";
import { RectButton } from "react-native-gesture-handler";

// Local Imports
import AppContainer from "../components/AppContainer";
import AppText from "../components/AppText";
import ColorPallete from "../constants/ColorPallete";
import useColors from "../hooks/useColors";

// interface for MyDrawer
export interface MyDrawerProps extends DrawerContentComponentProps {}

// function component for MyDrawer
function MyDrawer(props: MyDrawerProps) {
  // Destructuring props
  const { descriptors, navigation, state } = props;
  const progress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(progress.value, [0, 1], [0, 1]);
    const translateX = interpolate(progress.value, [0, 1], [100, 0]);
    const width = interpolate(progress.value, [0, 1], [0, 90]);

    return {
      opacity,
      transform: [{ translateX }],
      width: `${width}%`,
    };
  }, []);

  // get the colors
  const { colors, dark, ChangeMode } = useColors();

  // render
  return (
    <AppContainer style={styles.container}>
      <View style={styles.topViewStyle}>
        <AppText text="Diary" color={ColorPallete.white} size={25} weight="bold" marginTop={10} />

        <AppText
          text="App to store all your daily tasks or anything that you want to remember."
          color={ColorPallete.white}
          size={15}
          marginTop={10}
        />
      </View>

      <View style={{ flex: 2, overflow: "hidden" }}>
        {state.routes.map((route, index) => {
          // Onpress of a tab
          const onPress = () => {
            navigation.navigate(route.name);
          };

          // if drawer is focused
          const focused = state.index === index;

          // style for the focused drawer item
          const viewStyle: StyleProp<ViewStyle> = [
            {
              backgroundColor: focused ? ColorPallete.primary : colors?.background,
            },
          ];

          // render the item
          return (
            <RectButton onPress={onPress} key={route.key}>
              <Animated.View style={[styles.drawerItem, viewStyle, animatedStyle]}>
                <AppText
                  text={descriptors[route.key].options.title}
                  color={focused ? ColorPallete.white : undefined}
                  weight="400"
                  size={16}
                  numberOfLines={1}
                />
              </Animated.View>
            </RectButton>
          );
        })}
      </View>

      <View style={styles.themeChangeContainer}>
        <AppText text="Dark Mode" size={18} weight="bold" marginTop={5} />
        <Switch
          value={dark}
          onChange={ChangeMode ? () => ChangeMode(dark ? "light" : "dark") : null}
          thumbColor={dark ? ColorPallete.primary : undefined}
          trackColor={{ false: undefined, true: ColorPallete.primary }}
        />
      </View>
    </AppContainer>
  );
}

// exports
export default MyDrawer;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerItem: {
    justifyContent: "center",
    padding: 15,
    elevation: 20,
    borderRadius: 5,
    alignSelf: "center",
    margin: 10,
  },
  topViewStyle: {
    paddingBottom: 20,
    backgroundColor: ColorPallete.primary,
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  themeChangeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
  },
});
