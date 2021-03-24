// ./screens/Profile.js

import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is the Welcome screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home")} // We added an onPress event which would navigate to the About screen
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

export default Welcome;
