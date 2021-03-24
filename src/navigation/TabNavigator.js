// ./navigation/TabNavigator.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  MainStackNavigator,
  ContactStackNavigator,
  ChatStackNavigator
} from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Contact" component={ContactStackNavigator} />
      <Tab.Screen name="Chat" component={ChatStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
