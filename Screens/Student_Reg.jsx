import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Stepper from "react-native-stepper-ui";
import Student_Reg_F1 from "../Components/Student_Reg_F1";
import Student_Reg_F2 from "../Components/Student_Reg_F2";
import Student_Reg_F3 from "../Components/Student_Reg_F3";

const Student_Reg = () => {
  const navigation = useNavigation();
  const content = [<Student_Reg_F1 />, <Student_Reg_F2 />, <Student_Reg_F3 />];
  const [active, setActive] = useState(0);
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
            alignItems: "center",
            padding: 10,
            margin: 10,
            justifyContent: "space-between",
          }}
        >
          <Image
            source={require("../assets/logo.png")}
            resizeMode="contain"
            style={{
              width: 190,
              height: 170,
            }}
          />
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            Register as a Student
          </Text>
        </View>
        <Stepper
          active={active}
          content={content}
          onBack={() => setActive((p) => p - 1)}
          onFinish={() => Alert.alert("Finish")}
          onNext={() => setActive((p) => p + 1)}
        />
      </ScrollView>
    </View>
  );
};

export default Student_Reg;
