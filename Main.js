import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./Screens/Login";
import Registration from "./Screens/Registration.jsx";
import Parent_Reg from "./Screens/Parent_Reg";
import Student_Reg from "./Screens/Student_Reg";
import Admin_Dashboard from "./Screens/Admin_Dashboard";
import Register_Department from "./Screens/Register_Department";
import Register_Program from "./Screens/Register_Program";
import Register_Session from "./Screens/Register_Session";
import Register_Section from "./Screens/Register_Section";
import Register_Semester from "./Screens/Register_Semester";
import Register_Subject from "./Screens/Register_Subject";
import Register_Teacher from "./Screens/Register_Teacher";
import Search_Student from "./Screens/Search_Student";
const Main = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration Page" component={Registration} />
        <Stack.Screen name="Parent Registration" component={Parent_Reg} />
        <Stack.Screen name="Student Registration" component={Student_Reg} />
        <Stack.Screen name="Admin Dashboard" component={Admin_Dashboard} />
        <Stack.Screen name="Register_Dept" component={Register_Department} />
        <Stack.Screen name="Register_Program" component={Register_Program} />
        <Stack.Screen name="Register Session" component={Register_Session} />
        <Stack.Screen name="Register Section" component={Register_Section} />
        <Stack.Screen name="Register Semester" component={Register_Semester} />
        <Stack.Screen name="Register Subject" component={Register_Subject} />
        <Stack.Screen name="Register Teacher" component={Register_Teacher} />
        <Stack.Screen name="Search Student" component={Search_Student} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
