import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { AuthContext } from "../AuthProvider";

export default function CustomDrawer(props) {
  const { logout } = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerStyle}
      >
        <View style={styles.imageBody}>
          {/* <Image
            source={require("../../assets/thandava.png")}
            style={styles.imag}
          /> */}
          <View style={styles.lines} />
        </View>
        <View style={styles.drawerOption}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ backgroundColor: "#2a3a4a" }}>
        <TouchableOpacity
          onPress={() => {
            logout();
          }}
          style={styles.loginbutton}
        >
          <Text style={styles.buttontext}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerStyle: {
    backgroundColor: "#2a3a4a",
    color: "#fff",
    height: "100%",
  },
  loginbutton: {
    color: "#fff",
    width: "100%",
    marginVertical: 10,
    borderTopColor: "#4fe7eb",
    borderTopWidth: 1,
    backgroundColor: "#2a3a4a",
    // borderRadius: 20,
    padding: 10,
  },
  buttontext: {
    color: "#fff",
    textAlign: "center",
    fontSize: 15,
  },
  imageBody: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  imag: {
    height: 170,
    width: 150,
    resizeMode: "contain",
    marginBottom: 30,
  },
  drawerOption: {
    marginTop: 20,
  },
  lines: {
    borderBottomColor: "#4fe7eb",
    borderBottomWidth: 1,
    height: 1,
    width: "100%",
  },
});
