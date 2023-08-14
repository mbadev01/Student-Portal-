import { View, Text, Image } from "react-native";
import React from "react";
import { Headline } from "react-native-paper";

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/logo.png")}
        style={{ width: 60, height: 50 }}
      />
      <Headline
        style={{
          fontWeight: "bold",
          fontSize: 20,
          marginHorizontal: 12,
        }}
      >
        NFC IET Student Portal
      </Headline>
    </View>
  );
};

export default Header;
