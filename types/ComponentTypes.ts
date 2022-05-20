// Packages imports
import { ColorValue, GestureResponderEvent, StyleProp, TextProps, TextStyle, ViewStyle } from "react-native";
import Animated from "react-native-reanimated";
import { ChildrenProps, SeperateMarginProps } from "./GlobalTypes";

// AnimatedView Props interface
export interface AnimatedViewProps extends Animated.AnimateProps<ViewStyle>, ChildrenProps {
    style?: any;
    layoutDisabled?: boolean
}

// interface for AppContainer
export interface AppContainerProps extends ChildrenProps {
    style?: StyleProp<ViewStyle>;
    backgroundColor?: ColorValue;
    lightBackgroundColor?: string;
    darkBackgroundColor?: string;
}

// AppIcon props interface
export interface AppIconProps extends SeperateMarginProps {
    name?: any;
    family?: string;
    color?: ColorValue;
    size?: number;
    onPress?: ((event: GestureResponderEvent) => void) | any;
    loading?: boolean;
    style?: StyleProp<TextStyle>;
}

// interface for AppText
export interface AppTextProps extends TextProps, SeperateMarginProps {
    text?: string;
    color?: ColorValue;
    size?: number;
    family?: "ManropeExtraLight" | "ManropeExtraBold" | "ManropeBold" | "ManropeLight" | "ManropeMedium" | "ManropeRegular" | "ManropeSemiBold";
    weight?: "bold" | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
    containerStyle?: StyleProp<ViewStyle>;
}

// interface for LikeButton
export interface IconTogglerProps {
    active: boolean;
    onActivePress?: () => void;
    onInActivePress?: () => void;
    size?: number;
    activeIconProps?: AppIconProps;
    inActiveIconProps?: AppIconProps;
    activeIconComponent?: React.ReactNode;
    inActiveIconComponent?: React.ReactNode;
    disableActivePress?: boolean;
    disableInActivePress?: boolean;
}

// interface for TaskItem
export interface TaskItemProps {
    completed: boolean;
    taskName?: string;
    datetime?: string;
    id: string;
    onTaskCompletePress?: () => void;
    firstRenderComplete?: boolean;
    onTaskNameUpdate?: (id: string, taskName: string) => void;
    onItemPress?: () => void;
    focused?: boolean;
    currentSwiped?: string;
    onTaskRemovePress?: () => void;
    onSwipeableClose?: (() => void) | undefined;
    onSwipeableOpen?: (() => void) | undefined;
}