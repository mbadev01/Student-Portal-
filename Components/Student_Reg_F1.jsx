import { View, Text } from "react-native";
import React, { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";

const Student_Reg_F1 = () => {
  const [selected, setSelected] = useState("");
  const data = [
    { key: "1", value: "Computer Science" },
    { key: "2", value: "Electrical " },
    { key: "3", value: "Mechanical" },
    { key: "4", value: "Bio Medical" },
    { key: "5", value: "BBA" },
    { key: "6", value: "BBAAAA" },
    { key: "2", value: "BSITR" },
  ];
  const data1 = [
    { key: "1", value: "BSCS" },
    { key: "2", value: "Software Engineering " },
    { key: "3", value: "BSIT" },
  ];
  const data2 = [
    { key: "1", value: "2k19" },
    { key: "2", value: "2K20 " },
    { key: "3", value: "2K21" },
  ];
  const data3 = [
    { key: "1", value: "Blue" },
    { key: "2", value: "Red " },
    { key: "3", value: "Green" },
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
        Enter University Information
      </Text>
      <View
        style={{
          padding: 5,
          margin: 10,
          width: "100%",
        }}
      >
        <SelectList
          search={false}
          data={data}
          setSelected={setSelected}
          placeholder="Department"
          boxStyles={{ color: "#780000" }}
          dropdownItemStyles={{ marginHorizontal: 10 }}
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
          data={data1}
          setSelected={setSelected}
          placeholder="Programs"
          boxStyles={{ color: "#780000" }}
          dropdownItemStyles={{ marginHorizontal: 10 }}
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
          data={data2}
          setSelected={setSelected}
          placeholder="Session"
          boxStyles={{ color: "#780000" }}
          dropdownItemStyles={{ marginHorizontal: 10 }}
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
          data={data3}
          setSelected={setSelected}
          placeholder="Section"
          boxStyles={{ color: "#780000" }}
          dropdownItemStyles={{ marginHorizontal: 10 }}
        />
      </View>
    </View>
  );
};

export default Student_Reg_F1;
