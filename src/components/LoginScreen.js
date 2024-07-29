import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login, setError } from '../store/actions';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);

  const handleLogin = () => {
    if (!email) {
      dispatch(setError('Email is required'));
      return;
    }
    dispatch(login(email));
    if (!error) {
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      {error && <Text style={styles.error}>{error}</Text>}
      <Button title="Login" onPress={handleLogin} />
      <Button title="Go to Signup" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
});

export default LoginScreen;