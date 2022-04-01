import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import SvgClose from '../../../../../../assets/svg/close';
import SvgSearch from '../../../../../../assets/svg/search';

class Search extends React.Component {
  state = {
    term: '',
    clicked: false,
  };

  onChangeSearch = text => {
    const term = text;
    this.setState({term: text});
    this.props.searchPanel(term);
  };

  isClicked = bool => {
    const clicked = bool;
    this.setState({clicked});
    this.props.isClickedUpdate(clicked);
  };
  render() {
    return (
      <View style={styles.container}>
        <View
          style={
            this.state.clicked
              ? styles.searchBar__clicked
              : styles.searchBar__unclicked
          }>
          {/* search Icon */}
          <SvgSearch />
          {/* Input field */}
          <TextInput
            style={styles.input}
            placeholder="Search"
            value={this.state.term}
            onChangeText={this.onChangeSearch}
            onFocus={() => {
              this.isClicked(true);
            }}
          />
          {/* cross Icon, depending on whether the search bar is clicked or not */}
          {this.state.clicked && (
            <TouchableOpacity
              onPress={() => {
                Keyboard.dismiss();
                this.isClicked(false);
              }}>
              <SvgClose isClicked={this.isClicked} />
            </TouchableOpacity>
          )}
        </View>
        {/* cancel button, depending on whether the search bar is clicked or not */}
        {/* {this.state.clicked && (
          <View>
            <Button
              title={<SvgClose />}
              onPress={() => {
                Keyboard.dismiss();
                this.isClicked(false);
              }}>
              <SvgClose />
            </Button>
          </View> */}
        {/* )} */}
      </View>
    );
  }
}

// styles
const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: 'row',
    width: '95%',
    backgroundColor: '#d9dbda',
    borderRadius: 15,
    alignItems: 'center',
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: 'row',
    width: '80%',
    backgroundColor: '#d9dbda',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: '90%',
  },
});

export default Search;
