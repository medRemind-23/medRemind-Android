import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomDrawer from "./CustomDrawer";
import Login from "../../screens/Login";
import Dashboard from "../../screens/Dashboard";
import Entry from "../../screens/Entry";
import History from "../../screens/History";
import Push from "../../DB/Push";

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
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Entry" component={Entry} />
      <Drawer.Screen name="History" component={History} />
      <Drawer.Screen name="Push" component={Push} />
    </Drawer.Navigator>
  );
};

// const styles = {
//     headerStyle: {
//         backgroundColor: '#000'
//     }
// }

export default Appstack;
