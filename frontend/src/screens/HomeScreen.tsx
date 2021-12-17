import React from "react";
import { NavigationProp } from "@react-navigation/native";
import { StyleSheet, Image, Text, View } from "react-native";
import CustomSearchBar from "../components/CustomSearchBar";

export interface HomeScreenProps {
  navigation: NavigationProp<any, any>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => (
  <View style={styles.container}>
    <Image style={styles.logo} source={require("../assets/git-logo.png")} />
    <Text style={styles.title}>Github</Text>
    <Text style={styles.info}>search for a githup profile</Text>
    <CustomSearchBar />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  title: {
    fontSize: 50,
    fontWeight: "700",
  },
  info: {
    fontSize: 18,
    textAlign: "right",
    marginBottom: 10,
  },
});

export default HomeScreen;
