import { View, Text } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { Button, Headline, TextInput } from "react-native-paper";
import { SelectList } from "react-native-dropdown-select-list";
import Slider from "@react-native-community/slider";

const Register_Teacher = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [labValue, setLabValue] = useState(0);
  const [select, setSelected] = useState("");
  const navigation = useNavigation();
  const data = [
    { key: "1", value: "Programming Fundamental" },
    { key: "2", value: "Compiler Construction" },
    { key: "3", value: "Game Development" },
    { key: "4", value: "Data Warehousing" },
    { key: "5", value: "Wireless Networks" },
    { key: "6", value: "Java" },
    { key: "7", value: "Data Communication" },
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
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Register Teacher in Subject
          </Headline>
          <Text>Enter the Teacher details</Text>
          <TextInput
            mode="outlined"
            label="Teacher Name"
            placeholder="M. Bilal Azhar"
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
            label="Teacher Email"
            placeholder="name@nfciet.edu.pk"
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
            label="Teacher Phone Number"
            placeholder="0300000000"
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
            label="Teacher Password"
            placeholder="..............."
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
              maximumValue={1}
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

export default Register_Teacher;
