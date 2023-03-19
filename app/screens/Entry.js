import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import React, { useContext, useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import { AuthContext } from "../Nav/AuthProvider";

const Entry = () => {
  const { login, error } = useContext(AuthContext);
  const [medicine, setMedicine] = useState(null);
  const [duration, setDuration] = useState(null);
  const [time, setTime] = useState(null);

  const times = [
    { label: "Morning", value: "1" },
    { label: "Noon", value: "2" },
    { label: "Night", value: "3" },
    { label: "Morning Noon", value: "4" },
    { label: "Morning Night", value: "5" },
    { label: "Noon Night", value: "6" },
    { label: "Morning Noon Night", value: "7" },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{ fontSize: 50, textAlign: "center" }}>How is your</Text>
        <Text style={{ fontSize: 50, textAlign: "center", paddingBottom: 50 }}>
          health today?
        </Text>
      </View>
      <View>
        <TextInput
          placeholder="Meidcine"
          style={styles.classs}
          placeholderTextColor="#000"
          value={medicine}
          onChangeText={(nam) => setMedicine(nam)}
        />
      </View>

      <View style={styles.inputs}>
        <TextInput
          placeholder="Duration"
          style={styles.classs}
          placeholderTextColor="#000"
          value={duration}
          onChangeText={(pass) => setDuration(pass)}
        />
      </View>

      <View style={styles.dropinputs}>
        <View style={styles.drop}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={times}
            // search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={"Time"}
            searchPlaceholder="Search..."
            value={time}
            onChange={(item) => {
              setTime(item.value);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color={"white"}
                name="downcircleo"
                size={20}
              />
            )}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          try {
            post(medicine, duration, time);
            setMedicine(null);
            setDuration(null);
            setTime(null);
          } catch (e) {
            console.log("Error", e);
          }
        }}
        style={styles.loginbutton}
      >
        <Text style={styles.buttontext}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 50,
  },
  loginbutton: {
    color: "#000",
    width: 250,
    marginTop: 20,
    borderColor: "#4fe7eb",
    borderWidth: 3,
    backgroundColor: "#4fe7eb",
    borderRadius: 20,
    padding: 15,
  },
  classs: {
    color: "#000",
    width: 350,
    height: 60,
    paddingHorizontal: 20,
    marginBottom: 50,
    borderColor: "#4fe7eb",
    borderBottomWidth: 1,
    fontSize: 17,
    borderRadius: 10,
    marginRight: 20,
  },
  buttontext: {
    color: "#000",
    textAlign: "center",
    fontSize: 20,
  },
  drop: {
    paddingVertical: 10,
  },
  dropinputs: {
    flexDirection: "row",
  },
  dropdown: {
    color: "#000",
    height: 60,
    width: 350,
    marginRight: 20,
    marginBottom: 50,
    borderColor: "#4fe7eb",
    borderBottomWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "#fff",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color: "#000",
  },
  placeholderStyle: {
    backgroundColor: "#fff",
    color: "#000",
    fontSize: 16,
  },
  selectedTextStyle: {
    color: "#000",
    fontSize: 16,
  },
  iconStyle: {
    //color: "#000",
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    color: "#fff",
    height: 40,
    fontSize: 16,
  },
  imag: {
    height: 120,
    width: 150,
    marginBottom: 40,
    resizeMode: "contain",
  },
});

export default Entry;
