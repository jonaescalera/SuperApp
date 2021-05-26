import React, {useState, FunctionComponent} from 'react';
import {
  TouchableHighlight,
  TextInput,
  SafeAreaView,
  Alert,
  View,
  Text,
} from 'react-native';

import styles from './Login.style';

interface User {
  userName: string;
  password: string;
}

const Login: FunctionComponent<User> = () => {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const sendLogin = () => Alert.alert(`Welcome ${userName}`);

  return (
    <SafeAreaView style={styles.view}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUserName}
        value={userName}
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        placeholder="Password"
        value={password}
      />
      <TouchableHighlight onPress={sendLogin}>
        <View style={styles.button}>
          <Text>Log In</Text>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default Login;
