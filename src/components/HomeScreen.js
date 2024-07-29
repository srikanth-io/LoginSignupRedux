import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
  const loggedInUser = useSelector((state) => state.loggedInUser);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/icon.png')} style={styles.logo} />
      {loggedInUser ? (
        <View style={styles.userInfo}>
          <Text style={styles.welcomeText}>Welcome back, {loggedInUser.name}!</Text>
          <Text style={styles.infoText}>Email: {loggedInUser.email}</Text>
        </View>
      ) : (
        <Text style={styles.infoText}>No user logged in</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  userInfo: {
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default HomeScreen;