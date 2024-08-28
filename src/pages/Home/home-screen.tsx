import { useAuthStore } from "@/data/stores/user/user-data";
import React from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";

export const HomeScreen: React.FC = () => {
  const { user, setUser } = useAuthStore();

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <View style={styles.container}>
      {user && (
        <>
          <Text>Welcome, {user.name}!</Text>
          {user.picture && (
            <Image source={{ uri: user.picture }} style={styles.image} />
          )}
          <Text>Email: {user.email}</Text>
          <Button title="Logout" onPress={handleLogout} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 20,
  },
});
