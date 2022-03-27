import React from 'react';
import {Text, View, FlatList, StyleSheet, Switch} from 'react-native';
import {db} from '../../repositories/firebase_repository';
import {collection, getDocs} from 'firebase/firestore/lite';
export default class SubscriptionTab extends React.Component {
  state = {
    usersData: [],
  };
  usersData = async () => {
    const users = collection(db, 'users');
    const userSnapshot = await getDocs(users);
    const userList = userSnapshot.docs.map(doc => doc.data());
    this.setState({
      usersData: userList,
    });
  };

  componentDidMount() {
    this.usersData();
  }
  renderNewsItem(item) {
    const {usersName, age, mariatlStatus} = item.item;

    return (
      <View style={styles.usersCard}>
        <View style={styles.textContainer}>
          <Text style={styles.userText}>{usersName}</Text>
          <Text style={styles.userText}>{age}</Text>
        </View>
        <View style={styles.isContainer}>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={mariatlStatus ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            // onValueChange={toggleSwitch}
            value={mariatlStatus}
          />
        </View>
      </View>
    );
  }

  render() {
    console.log(this.state.usersData);
    return (
      <View>
        <FlatList
          data={this.state.usersData}
          renderItem={item => this.renderNewsItem(item)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  usersCard: {
    display: 'flexs',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00bbf0',
    marginBottom: 15,
  },
  isContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  textContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
