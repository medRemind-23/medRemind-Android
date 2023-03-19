import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomDrawer from "./CustomDrawer";
import Login from "../../screens/Login";
import Test from "../../screens/Test";
import Entry from "../../screens/Entry";

const Drawer = createDrawerNavigator();

const Appstack = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: "#000" },
        headerTintColor: "#fff",
        drawerActiveBackgroundColor: "#4fe7eb",
        drawerLabelStyle: {
          marginLeft: 10,
          fontSize: 16,
          color: "#fff",
          //drawerActiveTintColor: "#000",
        },
      }}
    >
      <Drawer.Screen name="Test" component={Test} />
      <Drawer.Screen name="Entry" component={Entry} />
    </Drawer.Navigator>
  );
};

// const styles = {
//     headerStyle: {
//         backgroundColor: '#000'
//     }
// }

export default Appstack;
