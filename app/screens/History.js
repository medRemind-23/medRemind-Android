import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import { doc, getDoc } from "firebase/firestore";

import React, { useContext, useEffect, useState } from "react";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";
import { AuthContext } from "../Nav/AuthProvider";

export default function History() {
  const [userInfo, setUserInfo] = useState(null);
  const [userEntry, setUserEntry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { getUserData, Firedb } = useContext(AuthContext);

  const frequency = {
    1: "Morning",
    2: "Noon",
    3: "Night",
    4: "Morning Noon",
    5: "Morning Night",
    6: "Noon Night",
    7: "Morning Noon Night",
  };

  const gettingData = async () => {
    setIsLoading(true);
    try {
      getUserData().then((x) => {
        //console.log(x.user_id);
        setUserInfo(x.user_id);
        //console.log(userInfo);
        const docRef = doc(Firedb, "Patient", x.user_id);
        getDoc(docRef).then((res) => {
          //console.log(res.data().pres);
          setUserEntry(res.data().pres);
        });
      });
    } catch (e) {
      console.log(`GetEvents Error: ${e}`);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    gettingData().then();
  }, []);
  if (userInfo !== null && userEntry !== null) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={gettingData} />
          }
        >
          <View style={styles.mainContainer}>
            {userEntry.map((pres, index) => {
              var pos = String(pres.time);
              return (
                <View style={styles.card} key={index}>
                  <View style={{ gap: 10 }}>
                    <Text style={styles.name}>{pres.prescription}</Text>
                    <Text style={styles.namesub}>{pres.duration} Days</Text>
                    <Text style={styles.namesub}>{frequency[pos]}</Text>
                  </View>
                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <Image
                      source={require("../assets/pills.png")}
                      style={{ width: 100, height: 100 }}
                    />
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  } else {
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
  },
  name: {
    fontSize: 22,
    color: "#000",
  },
  namesub: {
    fontSize: 18,
    color: "#000",
  },
  mainContainer: {
    paddingVertical: 20,
    alignItems: "center",
  },
  card: {
    backgroundColor: "#4fe7eb",
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: "90%",
    marginVertical: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imag: {
    alignSelf: "center",
    height: 120,
    width: 150,
    resizeMode: "contain",
  },
});
