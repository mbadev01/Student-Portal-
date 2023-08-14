import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const Student_Reg_F2 = () => {
  const [selected, setSelected] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [rollNumber, setRollNumber] = useState("");

  const gender = [
    { key: "1", value: "Male" },
    { key: "2", value: "Female " },
    { key: "3", value: "Other" },
  ];

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
        Enter Personal Information
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
        <MaterialIcons name="person" color={"#780000"} size={24} />
        <TextInput
          placeholder="Full Name"
          style={{ flex: 1, marginTop: 1, fontWeight: "500" }}
          value={name}
          onChangeText={(text) => setName(text)}
          autoCapitalize="none"
        />
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
        <FontAwesome name="phone" color={"#780000"} size={24} />
        <TextInput
          placeholder="Phone Number"
          style={{ flex: 1, marginTop: 1, fontWeight: "500" }}
          value={number}
          onChangeText={(text) => setNumber(text)}
          autoCapitalize="none"
        />
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
        <FontAwesome name="phone" color={"#780000"} size={24} />
        <TextInput
          placeholder="Class Roll No."
          style={{ flex: 1, marginTop: 1, fontWeight: "500" }}
          value={rollNumber}
          onChangeText={(text) => setRollNumber(text)}
          autoCapitalize="none"
        />
      </View>
      <View
        style={{
          padding: 5,
          margin: 10,
          width: "100%",
        }}
      >
        <SelectList
          search={false}
          data={gender}
          setSelected={setSelected}
          placeholder="Gender"
          boxStyles={{ color: "#780000" }}
          dropdownItemStyles={{ marginHorizontal: 10 }}
        />
      </View>
    </View>
  );
};

export default Student_Reg_F2;
