// Packages Imports
import { useEffect, useRef, useState } from "react";
import { Pressable, View, StyleSheet, StatusBar } from "react-native";
import Animated from "react-native-reanimated";
import { RectButton } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";

// Local Files/TasksScreen/Components/Store import
import AnimatedView from "../components/AnimatedView";
import AppContainer from "./../components/AppContainer";
import AppIcon from "../components/AppIcon";
import AppText from "../components/AppText";
import ColorPallete from "../constants/ColorPallete";
import IconNames from "../constants/IconNames";
import TaskItem from "../components/TaskItem";
import TasksActionCreators from "../store/tasks/actions";
import useFirstRender from "../hooks/useFirstRender";
import useKeyboard from "../hooks/useKeyboard";

// Named imports
import { DrawerTabScreenProps } from "../navigation/NavigationTypes";
import { GenerateUniqueID } from "../helper/Helper";
import { TaskItemProps } from "../types/ComponentTypes";

function TasksScreen({ navigation }: DrawerTabScreenProps<"TasksScreen">) {
  // get the store state
  const StateTasks: Array<TaskItemProps> = useSelector(
    (state: any) => state?.tasksState?.tasks ?? []
  );

  // State Dispatcher
  const dispatch = useDispatch();

  // Local States
  const [Focused, SetFocused] = useState<string | null>(null);
  const [CurrentlySwiped, SetCurrentlySwiped] = useState<string>("");

  // Refs
  const currentEditing = useRef({ id: "", text: "" });
  const { firstRender } = useFirstRender();
  const { keyboardShown } = useKeyboard();

  // whenever keyboardShown is false, blur the input
  useEffect(() => {
    if (!keyboardShown) {
      SetFocused(null);
      saveTaskName();
    }
  }, [keyboardShown]);

  // function to mark task as complete
  const markTaskComplete = (id: string) => {
    dispatch(TasksActionCreators.CompleteTask(id));
  };

  // function to add new task to list
  const addNewTask = () => {
    const randomId = GenerateUniqueID();

    dispatch(
      TasksActionCreators.AddTask({
        id: randomId,
        completed: false,
        taskName: "",
      })
    );

    SetFocused(randomId);
  };

  // function to update task name
  const updateTaskName = (id: string, taskName: string) => {
    dispatch(TasksActionCreators.UpdateTask(id, taskName));
    currentEditing.current = { id, text: taskName };
  };

  // function to save task name
  const saveTaskName = () => {
    if (currentEditing.current.id) {
      dispatch(
        TasksActionCreators.UpdateTask(currentEditing.current.id, currentEditing.current.text)
      );
    }
  };

  // function to remove a task based on id
  const removeTask = (id: string) => {
    dispatch(TasksActionCreators.DeleteTask(id));
  };

  return (
    <AppContainer>
      {/* StatusBar */}
      <StatusBar barStyle={"light-content"} backgroundColor={ColorPallete.primary} />

      <View style={styles.headerContainer}>
        <AppIcon
          family={IconNames.Entypo}
          name="menu"
          size={30}
          marginRight={20}
          onPress={() => navigation.openDrawer()}
          color={ColorPallete.white}
        />

        <View>
          <AppText
            text="Your To Do List"
            size={18}
            numberOfLines={1}
            adjustsFontSizeToFit={true}
            color={ColorPallete.white}
          />
        </View>
      </View>

      <Animated.ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {StateTasks.map(task => (
          <TaskItem
            {...task}
            key={task.id}
            onTaskCompletePress={() => markTaskComplete(task.id)}
            firstRenderComplete={!firstRender}
            onTaskNameUpdate={updateTaskName}
            onItemPress={() => SetFocused(task.id)}
            focused={Focused === task.id}
            currentSwiped={CurrentlySwiped ?? ""}
            onSwipeableClose={() => (task.id === CurrentlySwiped ? SetCurrentlySwiped("") : null)}
            onSwipeableOpen={() => SetCurrentlySwiped(task.id)}
            onTaskRemovePress={() => removeTask(task.id)}
          />
        ))}

        <AnimatedView>
          <Pressable style={{ flex: 1 }} onPress={() => SetFocused(null)} />
        </AnimatedView>
      </Animated.ScrollView>

      <RectButton onPress={addNewTask} style={styles.newTaskButton}>
        <AppIcon family={IconNames.AntDesign} color={ColorPallete.white} name="plus" size={30} />
      </RectButton>
    </AppContainer>
  );
}

export default TasksScreen;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: ColorPallete.primary,
    alignItems: "center",
    padding: 15,
    flexDirection: "row",
    marginBottom: 10,
  },
  newTaskButton: {
    backgroundColor: ColorPallete.primary,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    position: "absolute",
    bottom: 40,
    right: 30,
    borderRadius: 100,
  },
});
