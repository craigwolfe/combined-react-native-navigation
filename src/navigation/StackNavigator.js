// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import Profile from "../screens/Profile";
import Welcome from "../screens/Welcome";
import Chat from "../screens/Chat";

//screenOptionStyle
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8"
  },
  headerTintColor: "white",
  headerBackTitle: "Back"
};

const Stack = createStackNavigator();

// ./navigation/StackNavigator.js

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#9AC4F8"
        },
        headerTintColor: "white",
        headerBackTitle: "Back"
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};

//contact stack navigator
const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};

const ChatStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Chat" component={Contact} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, ContactStackNavigator, ChatStackNavigator };
