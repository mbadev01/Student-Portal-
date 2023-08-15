import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import Header from "../Components/Header";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Button, Headline } from "react-native-paper";
const Qr_Scanner = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
      }}
    >
      <Header />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="chevron-left" size={32} color={"#780000"} />
      </TouchableOpacity>
      <View
        style={{
          marginTop: 30,
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          margin: 10,
          justifyContent: "space-between",
        }}
      >
        <Headline
          style={{ fontSize: 20, fontWeight: "bold" }}
          numberOfLines={1}
        >
          Scanner For Attendance
        </Headline>
        <Text>Scan QR code from your Teacher</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Scanner")}>
          <Button
            mode="elevated"
            textColor="#ffffff"
            style={{
              marginTop: 20,
              backgroundColor: "#780000",
            }}
          >
            Scan
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Qr_Scanner;
