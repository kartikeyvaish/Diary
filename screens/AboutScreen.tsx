// Packages Imports
import { View, StyleSheet, StatusBar, ScrollView, Image, Linking } from "react-native";
import { DrawerTabScreenProps } from "../navigation/NavigationTypes";

// Local Imports
import AppContainer from "../components/AppContainer";
import AppIcon from "../components/AppIcon";
import AppText from "../components/AppText";
import ColorPallete from "../constants/ColorPallete";
import IconNames from "../constants/IconNames";

const LOGO_SIZE = 80;

// function component for AboutScreen
function AboutScreen({ navigation }: DrawerTabScreenProps<"AboutScreen">) {
  // function to handle onPress of email
  const onMailPress = (email: string) => Linking.openURL(`mailto:${email}`);

  // function to handle onPress of github, stackoverflow and linkedin
  const openUrl = (link: string) => Linking.openURL(link);

  // render
  return (
    <AppContainer>
      {/* StatusBar */}
      <StatusBar barStyle={"light-content"} backgroundColor={ColorPallete.primary} />

      <View style={styles.headerContainer}>
        <AppIcon
          family={IconNames.AntDesign}
          name="arrowleft"
          size={30}
          marginRight={20}
          onPress={() => navigation.goBack()}
          color={ColorPallete.white}
        />

        <AppText
          text="About"
          size={18}
          numberOfLines={1}
          adjustsFontSizeToFit={true}
          color={ColorPallete.white}
        />
      </View>

      <ScrollView>
        <AppText text="Diary" size={30} weight="bold" marginLeft={20} marginTop={20} />

        <AppText
          text="App to store all your daily tasks or anything that you want to remember."
          size={16}
          marginTop={10}
          marginLeft={20}
          marginRight={20}
          marginBottom={10}
        />

        <AppText text="About Me" size={22} weight="bold" marginLeft={20} />

        <Image
          source={{ uri: "https://i.imgur.com/3tr7J02.png" }}
          style={{
            width: LOGO_SIZE,
            height: LOGO_SIZE,
            marginBottom: 20,
            borderRadius: LOGO_SIZE,
            marginTop: 20,
            alignSelf: "center",
          }}
        />

        <AppText
          text={
            "The owner of this application is Kartikey Vaish. I am a Full Stack Hybrid Mobile Developer. I am specialized in React Native, ReactJS, NodeJS, ExpressJS, MongoDB, Firebase, and more."
          }
          size={15}
          marginBottom={20}
          marginLeft={20}
          marginRight={20}
        />

        <AppText text="Connect with me" size={22} weight="bold" marginLeft={20} />

        <View style={styles.socialContainer}>
          <AppIcon
            family={IconNames.AntDesign}
            name="github"
            size={40}
            onPress={() => openUrl("https://github.com/kartikeyvaish")}
          />

          <AppIcon
            family={IconNames.MaterialIcons}
            name="email"
            size={40}
            color={ColorPallete.primary}
            onPress={() => onMailPress("kartikeyvaish99@gmail.com")}
          />

          <AppIcon
            family={IconNames.Ionicons}
            name="logo-stackoverflow"
            size={40}
            color={ColorPallete.secondary}
            onPress={() => openUrl("https://stackoverflow.com/users/13170636/kartikey")}
          />

          <AppIcon
            family={IconNames.AntDesign}
            name="linkedin-square"
            size={40}
            color={ColorPallete.primary}
            onPress={() => openUrl("https://www.linkedin.com/in/kartikeyvaish/")}
          />
        </View>
      </ScrollView>
    </AppContainer>
  );
}

// exports
export default AboutScreen;

// styles
const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    backgroundColor: ColorPallete.primary,
    alignItems: "center",
    padding: 15,
    flexDirection: "row",
  },
  socialContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 100,
    marginTop: 20,
  },
});
