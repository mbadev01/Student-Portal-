import { View, Text } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import Header from "../Components/Header";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { Headline, Searchbar } from "react-native-paper";

const Search_Student = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
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
            Search Student
          </Headline>
          <Text>Search Student by Roll no. and Name</Text>
        </View>
        <Searchbar
          placeholder="Search by Roll no. and Name"
          onChangeText={(query) => setSearchQuery(query)}
          value={searchQuery}
        />
      </ScrollView>
    </View>
  );
};

export default Search_Student;
