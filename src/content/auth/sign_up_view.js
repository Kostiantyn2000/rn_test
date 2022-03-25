import React from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../repositories/firebase_repository';

export default class SignUp extends React.Component {
  state = {email: '', password: '', errorMessage: null};
  handleSignUp = () => {
    const {email, password} = this.state;
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => this.props.navigation.navigate('HomeTab'))
      .catch(error => this.setState({errorMessage: error.message}));
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Sign Up</Text>
        {/* {this.state.errorMessage && (
          <Text style={{color: 'red'}}>{this.state.errorMessage}</Text>
        )} */}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({password})}
          value={this.state.password}
        />
        <View style={styles.btnSingUpContainer}>
          <Button title="Sign Up" onPress={this.handleSignUp} />
        </View>
        <View style={styles.btnLoginContainer}>
          <Button
            style={styles.btnLogin}
            title="Already have an account? Login"
            onPress={() => this.props.navigation.navigate('SingIn')}
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
  btnSingUpContainer: {
    marginTop: 40,
  },
  btnLoginContainer: {
    marginTop: 15,
  },
});
