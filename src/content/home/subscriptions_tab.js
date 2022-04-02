import React from 'react';
import {Text, View, Button, FlatList, StyleSheet, Switch} from 'react-native';
import {db} from '../../repositories/firebase_repository';
import {collection, getDocs} from 'firebase/firestore/lite';
import {collectionUsers} from '../../actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class SubscriptionTab extends React.Component {
  usersData = async () => {
    const users = collection(db, 'users');
    const userSnapshot = await getDocs(users);
    const userList = userSnapshot.docs.map(doc => doc.data());
    this.props.collectionUsers(userList);
  };

  updateUsers = id => {
    this.props.navigation.navigate('UpdateSubscribers', {
      id: id,
    });
  };

  componentDidMount() {
    this.usersData();
  }
  renderNewsItem(item) {
    const {userName, age, maritalStatus, id} = item.item;

    return (
      <View style={styles.usersCard}>
        <View style={styles.textContainer}>
          <Text style={styles.userText}>{userName}</Text>
          <Text style={styles.userText}>{age}</Text>
        </View>
        <View style={styles.isContainer}>
          <Switch
            trackColor={maritalStatus ? '#767577' : '#81b0ff'}
            thumbColor={maritalStatus ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            value={maritalStatus}
          />
        </View>
        <View>
          <Button
            title="Update Subscribers"
            color="#000"
            onPress={() =>
              this.props.navigation.navigate('UpdateSubscribers', {id: id})
            }
          />
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.listContainer}>
        <FlatList
          data={this.props.users}
          renderItem={item => this.renderNewsItem(item)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  usersCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00bbf0',
    marginBottom: 15,
    marginTop: 35,
  },
});

const mapStateToProps = state => {
  return {
    users: state.usersReducer.users,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      collectionUsers,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionTab);
