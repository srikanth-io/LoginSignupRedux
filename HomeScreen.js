import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
  const loggedInUser = useSelector((state) => state.loggedInUser);

  return (
    <View style={styles.container}>
      {loggedInUser ? (
        <>
          <Text>Welcome, {loggedInUser.name}!</Text>
          <Text>Email: {loggedInUser.email}</Text>
        </>
      ) : (
        <Text>No user logged in</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems : 'center',
    marginTop : '50%',
  },
});

export default HomeScreen;