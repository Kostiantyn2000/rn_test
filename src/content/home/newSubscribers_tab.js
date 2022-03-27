/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {SafeAreaView, View, StyleSheet, Text, Button} from 'react-native';
import {TextInput} from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import {doc, setDoc} from 'firebase/firestore/lite';
import {db} from '../../repositories/firebase_repository';
import uuid from 'react-uuid';

export default class NewSubscriberTab extends React.Component {
  state = {
    usersData: {
      usersName: '',
      age: 0,
      mariatlStatus: false,
    },
  };

  usersChange = value => {
    console.log(value);
    this.setState(({usersData}) => {
      const newObj = {...usersData, usersName: value};
      console.log(newObj);
      return {
        usersData: newObj,
      };
    });
  };

  ageChange = text => {
    const value = parseInt(text);
    this.setState(({usersData}) => {
      const newObj = {...usersData, age: value};
      return {
        usersData: newObj,
      };
    });
  };

  mariatalStatusChange = value => {
    const newValue = value ? true : false;
    this.setState(({usersData}) => {
      const newObj = {...usersData, mariatalStatus: newValue};
      console.log(newObj);
      return {
        usersData: newObj,
      };
    });
  };
  onPressPushInfoUsers = async () => {
    const users = this.state.usersData;
    const id = uuid();
    await setDoc(doc(db, 'users', id), {
      age: users.usersName,
      mariatalStatus: users.mariatlStatus,
      usersName: users.usersName,
    });
  };
  render() {
    console.log(this.state.usersData.usersName);
    return (
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={text => this.usersChange(text)}
          defaultValue={this.state.usersName}
        />
        <TextInput
          style={styles.input}
          onChangeText={text => this.ageChange(text)}
          value={this.state.age}
        />
        <View>
          <RNPickerSelect
            onValueChange={value => this.mariatalStatusChange(value)}
            items={[
              {label: 'Married', value: 'married'},
              {label: 'Unmarried', value: 'unmarried'},
              {label: 'InSearch', value: 'inSearch'},
            ]}
          />
        </View>

        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.usersData.usersName.length || '🍕'}
        </Text>
        <View>
          <Button
            onPress={this.onPressPushInfoUsers}
            title="Push"
            color="black"
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
