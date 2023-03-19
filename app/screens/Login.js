import { useContext, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import { AuthContext } from "../Nav/AuthProvider";

function Login({ navigation }) {
  const { login, error, loading } = useContext(AuthContext);
  const [email, setEmail] = useState(null);
  const [error1, setError] = useState(null);
  const [password, setPassword] = useState(null);

  if (!loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          {/* <Image
            source={require("../../assets/thandava.png")}
            // <Image source={require('../../assets/thandava.png')}
            style={styles.imag}
          /> */}
        </View>
        <View style={styles.inputs}>
          <TextInput
            placeholder="ID"
            placeholderTextColor="#000"
            style={styles.emailpass}
            value={email}
            onChangeText={(emai) => setEmail(emai)}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#000"
            style={styles.emailpass}
            secureTextEntry={true}
            value={password}
            onChangeText={(pass) => setPassword(pass)}
          />
          <TouchableOpacity
            onPress={() => {
              try {
                setError(null);
                login(email, password);
                console.log(email, password);
                navigation.navigate("Dashboard");
              } catch (e) {
                setError("Error");
              }
            }}
            style={styles.loginbutton}
          >
            <Text style={styles.buttontext}>Login</Text>
          </TouchableOpacity>
          {error && <Text style={styles.error}>{error}</Text>}
        </View>
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
    alignItems: "center",
    paddingVertical: 50,
    color: "#000",
  },

  inputs: {
    paddingTop: 80,
    marginBottom: 25,
  },
  emailpass: {
    width: 250,
    paddingVertical: 0,
    marginBottom: 50,
    borderBottomColor: "#4fe7eb",
    color: "#000",
    borderBottomWidth: 1,
    fontSize: 17,
  },
  loginbutton: {
    marginTop: 10,
    backgroundColor: "#4fe7eb",
    borderRadius: 20,
    color: "#000",
    padding: 15,
  },
  buttontext: {
    color: "#000",
    textAlign: "center",
    fontSize: 20,
  },
  error: {
    color: "#f00",
    paddingTop: 20,
    fontSize: 15,
    textAlign: "left",
    fontWeight: "bold",
  },
  imag: {
    marginTop: 100,
    height: 280,
    width: 200,
    resizeMode: "contain",
  },
});

export default Login;
