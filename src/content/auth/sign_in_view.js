import React from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../repositories/firebase_repository';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class SingIn extends React.Component {
  state = {email: '', password: '', errorMessage: null};
  handleLogin = () => {
    const {email, password} = this.state;
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => this.getData(userCredential))
      .catch(error => this.setState({errorMessage: error.message}));
  };

  getData = async value => {
    const jsonValue = value._tokenResponse.email;
    try {
      await AsyncStorage.getItem('UserName').then(val => {
        if (val != null || jsonValue) {
          this.props.navigation.navigate('HomeTab');
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Login</Text>
        {this.state.errorMessage && (
          <Text style={styles.text}>{this.state.errorMessage}</Text>
        )}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({password})}
          value={this.state.password}
        />
        <View style={styles.btnLoginContainer}>
          <Button title="Login" onPress={this.handleLogin} />
        </View>
        <View style={styles.btnSignUpContainer}>
          <Button
            title="Don't have an account? Sign Up"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '500',
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
  },
  btnLoginContainer: {
    marginTop: 40,
  },
  btnSignUpContainer: {
    marginTop: 15,
  },
});
