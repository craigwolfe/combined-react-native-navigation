// ./screens/Profile.js

import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is the Profile screen</Text>
      <Button
        title="Go to Contact"
        onPress={() => navigation.navigate("Contact")} // We added an onPress event which would navigate to the About screen
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

export default Profile;
