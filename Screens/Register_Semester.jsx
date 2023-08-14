import { View, Text } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import Header from "../Components/Header";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { Button, Headline } from "react-native-paper";
import { SelectList } from "react-native-dropdown-select-list";
import { getFormatedDate } from "react-native-modern-datepicker";
import DatePicker from "react-native-modern-datepicker";
import { Modal } from "react-native";
const Register_Semester = () => {
  const data = [
    { key: "1", value: "Computer Science" },
    { key: "2", value: "Electrical " },
    { key: "3", value: "Mechanical" },
    { key: "4", value: "Bio Medical" },
    { key: "5", value: "BBA" },
    { key: "6", value: "BBAAAA" },
    { key: "7", value: "BSITR" },
  ];
  const data1 = [
    { key: "1", value: "BSCS" },
    { key: "2", value: "BSIT " },
  ];
  const data2 = [
    { key: "1", value: "2k19-spring" },
    { key: "2", value: "2k20-fall " },
  ];
  const [select, setSelected] = useState("");
  const navigation = useNavigation();
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
  // end Date
  const endDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    "YYYY/MM/DD"
  );
  const [selectedEndDate, setSelectedEndDate] = useState("");
  const [endedDate, setEndedDate] = useState("12/12/2023");
  function handleChangeEndDate(propDate) {
    setEndedDate(propDate);
  }
  const handleOnPressEndDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };
  const dataS = [
    { key: "1", value: "1" },
    { key: "2", value: "2 " },
    { key: "3", value: "3" },
    { key: "4", value: "4" },
    { key: "5", value: "5" },
    { key: "6", value: "6" },
    { key: "7", value: "7" },
    { key: "8", value: "8" },
    { key: "9", value: "9" },
    { key: "10", value: "10" },
  ];
  const dataT = [
    { key: "1", value: "Normal" },
    { key: "2", value: "Summer" },
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
            Register Semester
          </Headline>
          <Text>Enter the Semester details</Text>
        </View>
        <SelectList
          search={false}
          data={dataS}
          setSelected={setSelected}
          placeholder="Semester Title"
          boxStyles={{ color: "#780000" }}
          dropdownItemStyles={{ marginHorizontal: 50 }}
        />
        <View style={{ marginTop: 18, width: "100%" }}>
          <SelectList
            search={false}
            data={dataT}
            setSelected={setSelected}
            placeholder="Semester Type"
            boxStyles={{ color: "#780000" }}
            dropdownItemStyles={{ marginHorizontal: 50 }}
          />
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
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
                  onDateChanged={handleChangeEndDate}
                  onSelectedChange={(date) => setSelectedEndDate(date)}
                />

                <TouchableOpacity onPress={handleOnPressEndDate}>
                  <Text style={{ color: "white" }}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
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
                <Text>{selectedEndDate}</Text>
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
        </View>
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
      </ScrollView>
    </View>
  );
};

export default Register_Semester;
