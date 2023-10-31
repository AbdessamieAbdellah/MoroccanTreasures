import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Divider } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SearchBar({ searchInput, setSearchInput, }: any) {
  const clearInput = () => {
    setSearchInput(""); // Set the search input to an empty string
  };

  return (
    <View style={{ marginBottom: 1, flexDirection: "row", marginTop:5 }}>
      <View style={styles.textInputContainer}>
        <View style={{ marginLeft: 10, flexDirection: "row" }}>
          <Ionicons
            name="search"
            size={25}
            color="red"
            style={{ marginRight: 10 }}
          />
          <Divider orientation="vertical" width={1} color="gray" />
        </View>

        <TextInput
          placeholder="Search"
          style={styles.textInput}
          value={searchInput}
          onChangeText={(text) => setSearchInput(text)}
        />

        {searchInput.length > 0 && ( // Conditionally render the "close-circle" icon
          <TouchableOpacity onPress={clearInput}>
            <Ionicons
              name="close-circle"
              size={25}
              color="#adadad"
              style={{ marginRight: 5 }}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#ffc0cb",
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    width: Platform.OS === "android" ? 355 : 390,
  },
  textInput: {
    backgroundColor: "#ffc0cb",
    borderRadius: 20,
    fontWeight: "700",
    color: "black",
    marginLeft: 10,
    flex: 1,
  },
});
