import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const CustomSearchBar = () => {
  const [search, setSearch] = useState("");
  const navigation = useNavigation();

  const handleText = (text: string) => {
    setSearch(text);
  };

  const handleSearch = () => {
    if (search !== "") {
      navigation.navigate("Profile" as never, { username: search } as never);
      setSearch("");
    }
  };

  return (
    <View style={styles.container}>
      <Searchbar
        autoComplete={false}
        style={styles.inputContainer}
        inputStyle={styles.input}
        placeholder="Enter the user's login here..."
        onChangeText={handleText}
        onIconPress={handleSearch}
        value={search}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    borderWidth: 0,
    marginVertical: 10,
  },
  input: {
    borderWidth: 0,
  },
  inputContainer: {
    borderWidth: 0,
    backgroundColor: "#c7ecee",
    borderRadius: 50,
  },
});

export default CustomSearchBar;
