import {
  View,
  Text,
  StatusBar,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Header from "../Components/Header";
import { Button, Headline, TextInput } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Register_Department = () => {
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
            Register Department
          </Headline>
          <Text>Enter the Department details</Text>

          <TextInput
            mode="outlined"
            label="Department Name"
            placeholder="Computer Science"
            style={{
              marginTop: 15,
              color: "#780000",
              height: 50,
              width: "100%",
            }}
          />
          <TextInput
            mode="outlined"
            label="Department Abbreviation"
            placeholder="CS"
            style={{
              marginTop: 15,
              color: "#780000",
              height: 50,
              width: "100%",
            }}
          />
          <TextInput
            mode="outlined"
            label="Department Latitude"
            placeholder="321"
            style={{
              marginTop: 15,
              color: "#780000",
              height: 50,
              width: "100%",
            }}
          />
          <TextInput
            mode="outlined"
            label="Department Longitude"
            placeholder="21"
            style={{
              marginTop: 15,
              color: "#780000",
              height: 50,
              width: "100%",
            }}
          />
          <TextInput
            mode="outlined"
            label="No. of Programs"
            placeholder="21"
            style={{
              marginTop: 15,
              color: "#780000",
              height: 50,
              width: "100%",
            }}
          />
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

export default Register_Department;
