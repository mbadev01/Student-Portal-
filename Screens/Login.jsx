import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  isPass = true;
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(true);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mid_container}>
          <Image
            source={require("../assets/logo.png")}
            resizeMode="contain"
            style={{ width: 190, height: 170 }}
          />
          <Text style={styles.text_style}>Sign In</Text>
        </View>
        {/* <ActivityIndicator size={"large"} color={"#780000"} /> */}
        <View style={styles.input_view}>
          <MaterialIcons name="email" color={"#780000"} size={24} />
          <TextInput
            isPass={false}
            placeholder="EMAIL"
            style={styles.input_text}
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.input_view}>
          <MaterialIcons name="lock" color={"#780000"} size={24} />
          <TextInput
            isPass={true}
            secureTextEntry={isPass && showPass}
            placeholder="Password"
            style={styles.input_text}
            value={password}
            onChangeText={(text) => setPassword(text)}
            autoCapitalize="none"
          />
          {isPass && (
            <TouchableOpacity onPress={() => setShowPass(!showPass)}>
              <Entypo
                name={`${showPass ? "eye-with-line" : "eye"}`}
                size={24}
                color={"#780000"}
              />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Registration Page")}
          style={{
            marginTop: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "900",
            }}
          >
            Register Instead?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Admin Dashboard")}
          style={{
            // width: "100%",
            padding: 10,
            borderRadius: 10,
            margin: 10,
            backgroundColor: "#780000",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "900" }}>Sign In</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  mid_container: {
    marginTop: "40%",
    alignItems: "center",
    padding: 10,
    margin: 10,
    justifyContent: "space-between",
  },
  text_style: {
    fontSize: 25,
    fontWeight: "bold",
  },
  input_text: {
    flex: 1,
    marginTop: 1,
    fontWeight: "500",
    // color: "#212529",
  },
  input_view: {
    marginTop: 20,
    borderRadius: 50,
    borderWidth: 2,
    margin: 5,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "##780000",
  },
});
