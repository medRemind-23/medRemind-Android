import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.circles}>
        <Image
          source={require("../assets/blue-pill.png")}
          style={{ width: 200, height: 200, transform: [{ rotate: "-20deg" }] }}
        />
      </View>
      <View style={styles.squares}>
        <Text
          style={{
            color: "#000",
          }}
        >
          Coming Up
        </Text>
        <Text>Test</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 80,
    alignItems: "center",
  },
  circles: {
    width: 300,
    height: 300,
    borderRadius: 300 / 2,
    backgroundColor: "#fff",
    borderColor: "#4fe7eb",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  squares: {
    width: 350,
    height: 100,
    backgroundColor: "#4fe7eb",
    marginTop: 80,
    borderRadius: 50,
    // justifyContent: "center",
    alignItems: "center",
  },
});
