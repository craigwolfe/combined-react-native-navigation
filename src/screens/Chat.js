// ./screens/About.js

import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";

const Chat = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is the Chat screen</Text>
      <Button
        title="Go to Welcome"
        onPress={() => navigation.navigate("Welcome")} // We added an onPress event which would navigate to the About screen
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  }
});

export default Chat;
