import { View, Text } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import Header from "../Components/Header";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { Button, Headline, TextInput } from "react-native-paper";
import { SelectList } from "react-native-dropdown-select-list";

const Register_Section = () => {
  const navigation = useNavigation();
  const [select, setSelected] = useState("");
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
    { key: "2", value: "BSIT " },
  ];
  const data2 = [
    { key: "1", value: "2k19-spring" },
    { key: "2", value: "2k20-fall " },
  ];
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: 40,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            margin: 10,
            justifyContent: "space-between",
          }}
        >
          <Headline
            style={{
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            Register Section
          </Headline>
          <Text>Enter the Section details</Text>
          <TextInput
            mode="outlined"
            label="Section Title"
            placeholder="Blue"
            placeholderTextColor={"#adb5bd"}
            style={{
              marginTop: 15,
              color: "#780000",
              height: 50,
              width: "100%",
            }}
          />
          <View style={{ marginTop: 18, width: "100%" }}>
            <SelectList
              search={false}
              data={data}
              setSelected={setSelected}
              placeholder="Department"
              boxStyles={{ color: "#780000" }}
              dropdownItemStyles={{ marginHorizontal: 50 }}
            />
          </View>
          <View style={{ marginTop: 18, width: "100%" }}>
            <SelectList
              search={false}
              data={data1}
              setSelected={setSelected}
              placeholder="Program"
              boxStyles={{ color: "#780000" }}
              dropdownItemStyles={{ marginHorizontal: 50 }}
            />
          </View>
          <View style={{ marginTop: 18, width: "100%" }}>
            <SelectList
              search={false}
              data={data2}
              setSelected={setSelected}
              placeholder="Session"
              boxStyles={{ color: "#780000" }}
              dropdownItemStyles={{ marginHorizontal: 50 }}
            />
          </View>
          <TouchableOpacity activeOpacity={0.8}>
            <Button
              mode="elevated"
              textColor="#ffffff"
              style={{
                marginTop: 20,
                backgroundColor: "#780000",
              }}
            >
              REGISTER
            </Button>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register_Section;
