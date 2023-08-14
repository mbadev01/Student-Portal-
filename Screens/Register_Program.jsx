import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import React, { useState } from "react";
import Header from "../Components/Header";
import { MaterialIcons } from "@expo/vector-icons";
import { Button, Headline, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { SelectList } from "react-native-dropdown-select-list";
import { getFormatedDate } from "react-native-modern-datepicker";
import DatePicker from "react-native-modern-datepicker";
const Register_Program = () => {
  const navigation = useNavigation();
  const [select, setSelected] = useState("");

  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    "YYYY/MM/DD"
  );
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [startedDate, setStartedDate] = useState("12/12/2023");
  function handleChangeStartDate(propDate) {
    setStartedDate(propDate);
  }

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };

  const data = [
    { key: "1", value: "Computer Science" },
    { key: "2", value: "Electrical " },
    { key: "3", value: "Mechanical" },
    { key: "4", value: "Bio Medical" },
    { key: "5", value: "BBA" },
    { key: "6", value: "BBAAAA" },
    { key: "2", value: "BSITR" },
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
            Register Program
          </Headline>
          <Text>Enter the Program details</Text>
          <View
            style={{
              marginTop: 15,
              width: "100%",
            }}
          >
            <SelectList
              search={false}
              data={data}
              setSelected={setSelected}
              placeholder="Department"
              boxStyles={{ color: "#780000" }}
              dropdownItemStyles={{ marginHorizontal: 50 }}
            />
          </View>
          <TextInput
            mode="outlined"
            label="Program Title"
            placeholder="Bachelor of Computer Science"
            style={{
              marginTop: 15,
              color: "#780000",
              height: 50,
              width: "100%",
            }}
          />
          <TextInput
            mode="outlined"
            label="Program Abbreviation"
            placeholder="BSCS"
            style={{
              marginTop: 15,
              color: "#780000",
              height: 50,
              width: "100%",
            }}
          />
          <TextInput
            mode="outlined"
            label="Program Type"
            placeholder="1 Year"
            style={{
              marginTop: 15,
              color: "#780000",
              height: 50,
              width: "100%",
            }}
          />
          <View>
            <View>
              <Text style={{ fontSize: 18 }}>Starting Date</Text>
              <TouchableOpacity
                style={{
                  width: "100%",
                  borderWidth: 1,
                  borderRadius: 4,
                  borderColor: "#222",
                  height: 50,
                  paddingLeft: 8,
                  fontSize: 18,
                  justifyContent: "center",
                  marginTop: 14,
                }}
                onPress={handleOnPressStartDate}
              >
                <Text>{selectedStartDate}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={openStartDatePicker}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  margin: 20,
                  backgroundColor: "#780000",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                  padding: 35,
                  width: "100%",

                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                  elevation: 5,
                }}
              >
                <DatePicker
                  mode="calendar"
                  minimumDate={startDate}
                  selected={startedDate}
                  onDateChanged={handleChangeStartDate}
                  onSelectedChange={(date) => setSelectedStartDate(date)}
                />

                <TouchableOpacity onPress={handleOnPressStartDate}>
                  <Text style={{ color: "white" }}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
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

export default Register_Program;
