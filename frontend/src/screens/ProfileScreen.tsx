import React, { useState, useEffect } from "react";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { StyleSheet, Text, View, Image } from "react-native";
import { User } from "../utils/User";
import { getUserProfileByUsername } from "../services/github.service";

export interface ProfileScreenProps {
  navigation: NavigationProp<any, any>;
  route: RouteProp<{ params: { username: string } }, "params">;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ route, navigation }) => {
  const { username } = route.params;
  const [isLoading, setisLoading] = useState(true);
  const [currentProfile, setCurrentProfile] = useState<User>();

  useEffect(() => {
    getUserProfileByUsername(username)
      .then((user) => {
        if (user.login) {
          setCurrentProfile(user);
        } else {
          setCurrentProfile(undefined);
        }
        setisLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setisLoading(false);
      });
  }, []);

  return isLoading ? (
    <View style={styles.loader}>
      <Text style={styles.title}>Loading...</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{ uri: currentProfile?.avatar_url }}
      />
      <Text style={styles.name}>{currentProfile?.name}</Text>
      <Text style={styles.login}>@{currentProfile?.login}</Text>
      <Text style={styles.desc}>{currentProfile?.bio}</Text>
      <View style={styles.statContainer}>
        <View style={styles.statItemContainer}>
          <Text style={styles.dataNumber}>
            {currentProfile?.public_repos && currentProfile.total_private_repos
              ? currentProfile.public_repos + currentProfile.total_private_repos
              : currentProfile?.public_repos}
          </Text>
          <Text>repositories</Text>
        </View>

        <View style={styles.statItemContainer}>
          <Text style={styles.dataNumber}>
            {currentProfile?.total_private_repos
              ? currentProfile.total_private_repos
              : 0}
          </Text>
          <Text>stars</Text>
        </View>

        <View style={styles.statItemContainer}>
          <Text style={styles.dataNumber}>
            {currentProfile?.followers ? currentProfile.followers : 0}
          </Text>
          <Text>followers</Text>
        </View>

        <View style={styles.statItemContainer}>
          <Text style={styles.dataNumber}>
            {currentProfile?.following ? currentProfile.following : 0}
          </Text>
          <Text>following</Text>
        </View>
      </View>
      <View
        style={{ paddingHorizontal: 20, marginBottom: 20, width: "100%" }}
      ></View>
      <View style={styles.card}>
        <View style={styles.cardItem}>
          <Text style={styles.cardKey}>Type: </Text>
          <Text style={styles.cardValue}>
            {currentProfile?.type ? `${currentProfile.type}` : "-"}
          </Text>
        </View>
        <View style={styles.cardItem}>
          <Text style={styles.cardKey}>Twitter: </Text>
          <Text style={styles.cardValue}>
            {currentProfile?.twitter_username
              ? `@${currentProfile.twitter_username}`
              : "-"}
          </Text>
        </View>
        <View style={styles.cardItem}>
          <Text style={styles.cardKey}>Email: </Text>
          <Text style={styles.cardValue}>
            {currentProfile?.email ? `${currentProfile.email}` : "-"}
          </Text>
        </View>

        <View style={styles.cardItem}>
          <Text style={styles.cardKey}>Location: </Text>
          <Text style={styles.cardValue}>
            {currentProfile?.location ? `${currentProfile.location}` : "-"}
          </Text>
        </View>

        <View style={styles.cardItem}>
          <Text style={styles.cardKey}>Company: </Text>
          <Text style={styles.cardValue}>
            {currentProfile?.company ? `${currentProfile.company}` : "-"}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },

  name: {
    fontSize: 20,
    fontWeight: "700",
    color: "#4b6584",
    marginTop: 10,
  },
  login: {
    fontSize: 13,
    color: "#778ca3",
    fontStyle: "italic",
  },
  desc: {
    fontSize: 18,
    color: "#99A799",
    marginTop: 15,
    textAlign: "center",
  },
  buttonContainer: {
    backgroundColor: "#4AA96C",
    position: "absolute",
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 30,
    bottom: -20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  statContainer: {
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  statItemContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  dataNumber: {
    fontSize: 30,
    color: "#000",
    fontWeight: "bold",
    marginTop: 20,
  },
  cardLabel: {
    fontSize: 18,
    color: "#000",
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 10,
  },
  cardKey: {
    fontSize: 15,
    color: "#787A91",
  },
  cardValue: {
    fontSize: 15,
    color: "#000",
    fontWeight: "700",
  },
  card: {
    backgroundColor: "#c7ecee",
    width: "90%",
    height: "auto",
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.2,
    elevation: 2.5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  cardItem: {
    width: "100%",
    flexDirection: "row",
    marginVertical: 5,
  },

  title: {
    color: "black",
    paddingBottom: 10,
  },
  loader: {
    flex: 1,
  },
  avatar: {
    borderColor: "#FFF",
    borderWidth: 1,
    borderRadius: 100,
    width: 120,
    height: 120,
  },
});

export default ProfileScreen;
