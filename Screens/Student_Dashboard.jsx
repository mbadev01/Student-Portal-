import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Header from "../Components/Header";
import { Avatar, Headline } from "react-native-paper";
import {
  AntDesign,
  Feather,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Student_Dashboard = () => {
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Headline
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Dashboard
          </Headline>
          <TouchableOpacity>
            <Ionicons
              name="notifications-circle-sharp"
              size={40}
              color={"#780000"}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            elevation: 5,
            width: 300,
            alignItems: "center",
            justifyContent: "center",
            margin: 20,
            borderRadius: 20,
            height: 200,
            backgroundColor: "#dad7cd",
            alignSelf: "center",
          }}
        >
          <Avatar.Icon
            icon="account-circle"
            color="#780000"
            backgroundColor="white"
            style={{ marginTop: 20 }}
          />
          <Headline style={{ fontWeight: "bold" }}>M.Bilal Azhar</Headline>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{
              elevation: 5,
              width: 100,
              alignItems: "center",
              justifyContent: "center",
              margin: 20,
              borderRadius: 20,
              height: 100,
              backgroundColor: "#dad7cd",
              alignSelf: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Qr Scanner")}
              style={{ alignContent: "center" }}
            >
              <AntDesign name="scan1" size={50} color="#780000" />
              <Text>QR Scanner</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              elevation: 5,
              width: 100,
              alignItems: "center",
              justifyContent: "center",
              margin: 20,
              borderRadius: 20,
              height: 100,
              backgroundColor: "#dad7cd",
              alignSelf: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Student Attendance Sheet")}
              style={{ alignItems: "center" }}
            >
              <FontAwesome name="file-text" size={50} color="#780000" />
              <Text>Attendance</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{
              elevation: 5,
              width: 100,
              //alignItems: "center",
              justifyContent: "center",
              margin: 20,
              borderRadius: 20,
              height: 100,
              backgroundColor: "#dad7cd",
              alignSelf: "center",
            }}
          >
            <TouchableOpacity style={{ alignItems: "center" }}>
              <AntDesign name="switcher" size={50} color="#780000" />
              <Text>Result</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              elevation: 5,
              width: 100,
              alignItems: "center",
              justifyContent: "center",
              margin: 20,
              borderRadius: 20,
              height: 100,
              backgroundColor: "#dad7cd",
              alignSelf: "center",
            }}
          >
            <TouchableOpacity>
              <Feather name="trending-up" size={50} color="#780000" />
              <Text>QR Scanner</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Student_Dashboard;
