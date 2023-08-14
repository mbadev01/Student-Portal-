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

const Registration = () => {
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
          <Text style={styles.text_style}>Register As</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Student Registration")}
          style={{
            // width: "100%",
            padding: 10,
            borderRadius: 10,
            margin: 10,
            backgroundColor: "#780000",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "900" }}>Student</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Parent Registration")}
          style={{
            // width: "100%",
            padding: 10,
            borderRadius: 10,
            margin: 10,
            backgroundColor: "#780000",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "900" }}>Parent</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
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
            Sing In Instead?
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Registration;

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
