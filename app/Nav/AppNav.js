import React, { useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator, View } from "react-native";
import { AuthContext } from "./AuthProvider";
import Authstack from "./Drawer/AuthStack";
import Appstack from "./Drawer/AppStack";

const AppNav = () => {
  const { isLoading, userToken, getUserData } = useContext(AuthContext);
  const [userType, setUserType] = useState(null);
  getUserData()
    .then((res) => setUserType(res))
    .catch((e) => setUserType(null));

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#2a2a28",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  if (userType !== null) {
    return (
      <NavigationContainer>
        <Appstack />
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Authstack />
      </NavigationContainer>
    );
  }
};

export default AppNav;
