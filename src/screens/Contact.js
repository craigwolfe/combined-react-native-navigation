// ./screens/Contact.js

import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";

const Contact = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is the Contact screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")} // We added an onPress event which would navigate to the About screen
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

export default Contact;
