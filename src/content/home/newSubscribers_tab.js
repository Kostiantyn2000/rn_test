import React from 'react';
import {SafeAreaView, View, StyleSheet, Button} from 'react-native';
import {TextInput} from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import {doc, setDoc} from 'firebase/firestore/lite';
import {db} from '../../repositories/firebase_repository';
import uuid from 'react-uuid';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  creatingUserName,
  creatingUserAge,
  creatingUserMaritalStatus,
} from '../../actions/actions';

class NewSubscriberTab extends React.Component {
  userNameCreating = value => {
    this.props.creatingUserName(value);
  };

  userAgeCreating = text => {
    this.props.creatingUserAge(text);
  };

  UserMaritalStatusUserCreating = text => {
    const boolean = text ? true : false;
    this.props.creatingUserMaritalStatus(boolean);
  };

  onPushInfoUsers = async () => {
    const {userName, maritalStatus, age} = this.props.userInfo;
    const id = uuid();
    await setDoc(doc(db, 'users', id), {
      age: age,
      maritalStatus: maritalStatus,
      userName: userName,
      id: id,
    });
  };

  render() {
    return (
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={text => this.userNameCreating(text)}
          defaultValue={this.props.userName}
        />
        <TextInput
          style={styles.input}
          onChangeText={text => this.userAgeCreating(text)}
          value={this.props.age}
        />
        <View>
          <RNPickerSelect
            onValueChange={value => this.UserMaritalStatusUserCreating(value)}
            items={[
              {label: 'Married', value: 'married'},
              {label: 'Unmarried', value: 'unmarried'},
              {label: 'InSearch', value: 'inSearch'},
            ]}
          />
        </View>

        <View>
          <Button onPress={this.onPushInfoUsers} title="Push" color="black" />
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

const mapStateToProps = state => {
  console.log(state);
  return {
    userName: state.userReducer.userName,
    age: state.userReducer.age,
    maritalStatus: state.userReducer.maritalStatus,
    userInfo: state.userReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      creatingUserName,
      creatingUserAge,
      creatingUserMaritalStatus,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NewSubscriberTab);
