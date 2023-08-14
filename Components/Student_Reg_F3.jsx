import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

const Student_Reg_F3 = () => {
  isPass = true;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(true);
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Almost Done
      </Text>
      <View
        style={{
          marginTop: 20,
          borderRadius: 50,
          borderWidth: 2,
          margin: 5,
          padding: 8,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderColor: "##780000",
        }}
      >
        <MaterialIcons name="lock" color={"#780000"} size={24} />
        <TextInput
          isPass={true}
          secureTextEntry={isPass && showPass}
          placeholder="Password"
          style={{ flex: 1, marginTop: 1, fontWeight: "500" }}
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
      <View
        style={{
          marginTop: 20,
          borderRadius: 50,
          borderWidth: 2,
          margin: 5,
          padding: 8,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderColor: "##780000",
        }}
      >
        <MaterialIcons name="lock" color={"#780000"} size={24} />
        <TextInput
          isPass={true}
          secureTextEntry={isPass && showPass}
          placeholder="Confirm Password"
          style={{ flex: 1, marginTop: 1, fontWeight: "500" }}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
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
    </View>
  );
};

export default Student_Reg_F3;
