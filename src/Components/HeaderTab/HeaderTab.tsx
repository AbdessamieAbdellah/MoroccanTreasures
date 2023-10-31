import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function HeaderTab(props:any) {
  return (
    <View style={{ flexDirection: "row", alignSelf: "center", marginTop:5 }}>
      <HeaderButton
        text="🇲🇦 Stock"
        btnColor="white"
        textColor="black"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
       <HeaderButton
        text="🇺🇸  Stock"
        btnColor="black"
        textColor="#f74f63"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
}

const HeaderButton = (props: any) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.text ? "#f74f63" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text
      style={{
        color: props.activeTab === props.text ? "white" : "#f74f63",
        fontSize: 15,
        fontWeight: "900",
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);