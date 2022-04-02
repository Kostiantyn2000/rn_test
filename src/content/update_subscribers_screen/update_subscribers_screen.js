import React from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import {doc, updateDoc} from 'firebase/firestore/lite';
import {db} from '../../repositories/firebase_repository';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  updateSubscribersAge,
  updateSubscribersName,
} from '../../actions/actions';
class UpdateSubscribersScreen extends React.Component {
  onChangeSubscribersName = text => {
    this.props.updateSubscribersName(text);
  };
  onChangeSubscribersAge = text => {
    this.props.updateSubscribersAge(text);
  };

  UpdateSubscribersInfo = async () => {
    const id = this.props.route.params.id;
    const {name, age} = this.props;
    console.log(name);
    const washingtonRef = doc(db, 'users', id);

    await updateDoc(washingtonRef, {
      userName: name,
      age: age,
    });

    this.props.navigation.navigate('HomeTab');
  };

  render() {
    return (
      <View>
        <Text> Update Form </Text>
        <View>
          <TextInput
            placeholder="Name"
            onChangeText={this.onChangeSubscribersName}
          />
          <TextInput
            placeholder="Age"
            onChangeText={this.onChangeSubscribersAge}
          />
        </View>
        <Button
          title="Update Subscribers"
          color="#000"
          onPress={this.UpdateSubscribersInfo}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.updateReducer.age,
    name: state.updateReducer.name,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {updateSubscribersAge, updateSubscribersName},
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UpdateSubscribersScreen);
