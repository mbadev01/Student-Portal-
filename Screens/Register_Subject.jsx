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
import Slider from "@react-native-community/slider";

const Register_Subject = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [labValue, setLabValue] = useState(0);
  const [select, setSelected] = useState("");
  const navigation = useNavigation();
  const data = [
    { key: "1", value: "Core" },
    { key: "2", value: "Elective" },
    { key: "3", value: "Supply" },
  ];
  const dataD = [
    { key: "1", value: "Computer Science" },
    { key: "2", value: "Electrical " },
    { key: "3", value: "Mechanical" },
    { key: "4", value: "Bio Medical" },
    { key: "5", value: "BBA" },
    { key: "6", value: "BBAAAA" },
    { key: "7", value: "BSITR" },
  ];
  const dataP = [
    { key: "1", value: "BSCS" },
    { key: "2", value: "BSIT " },
  ];
  const dataS = [
    { key: "1", value: "2k19-spring" },
    { key: "2", value: "2k20-fall " },
  ];
  const dataSE = [
    { key: "1", value: "1" },
    { key: "2", value: "2 " },
    { key: "3", value: "3" },
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
            Register Subject
          </Headline>
          <Text>Enter the Subject details</Text>
          <TextInput
            mode="outlined"
            label="Subject Code"
            placeholder="CS-111"
            placeholderTextColor={"#adb5bd"}
            style={{
              marginTop: 15,
              color: "#780000",
              height: 50,
              width: "100%",
            }}
          />
          <TextInput
            mode="outlined"
            label="Subject Title"
            placeholder="Programming Fundamental"
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
              placeholder="Subject Type"
              boxStyles={{ color: "#780000" }}
              dropdownItemStyles={{ marginHorizontal: 50 }}
            />
          </View>
          <View style={{ marginTop: 18, width: "100%" }}>
            <SelectList
              search={false}
              data={dataD}
              setSelected={setSelected}
              placeholder="Department"
              boxStyles={{ color: "#780000" }}
              dropdownItemStyles={{ marginHorizontal: 50 }}
            />
          </View>
          <View style={{ marginTop: 18, width: "100%" }}>
            <SelectList
              search={false}
              data={dataP}
              setSelected={setSelected}
              placeholder="Program"
              boxStyles={{ color: "#780000" }}
              dropdownItemStyles={{ marginHorizontal: 50 }}
            />
          </View>
          <View style={{ marginTop: 18, width: "100%" }}>
            <SelectList
              search={false}
              data={dataS}
              setSelected={setSelected}
              placeholder="Session"
              boxStyles={{ color: "#780000" }}
              dropdownItemStyles={{ marginHorizontal: 50 }}
            />
          </View>
          <View style={{ marginTop: 18, width: "100%" }}>
            <SelectList
              search={false}
              data={dataSE}
              setSelected={setSelected}
              placeholder="Semester"
              boxStyles={{ color: "#780000" }}
              dropdownItemStyles={{ marginHorizontal: 50 }}
            />
          </View>
          <View style={{ marginTop: 18, width: "100%" }}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Theory Credit Hours
            </Text>
            <Text>{sliderValue}</Text>
            <Slider
              style={{ width: 200, height: 40 }}
              minimumValue={0}
              maximumValue={5}
              minimumTrackImageTrackTintColor="#780000"
              maximumTrackTintColor="#780000"
              step={1}
              value={sliderValue}
              onValueChange={(value) => setSliderValue(value)}
            />
          </View>
          <View style={{ marginTop: 18, width: "100%" }}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Lab Credit Hours
            </Text>
            <Text>{labValue}</Text>
            <Slider
              style={{ width: 200, height: 40 }}
              minimumValue={0}
              maximumValue={5}
              minimumTrackImageTrackTintColor="#780000"
              maximumTrackTintColor="#780000"
              step={1}
              value={labValue}
              onValueChange={(value) => setLabValue(value)}
            />
          </View>
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
      </ScrollView>
    </View>
  );
};

export default Register_Subject;
