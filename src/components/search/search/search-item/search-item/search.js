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
  render() {
    console.log(this.props.clicked);
    const {onSearchChangeText, term, clicked, isClickedSearch} = this.props;
    return (
      <View style={styles.container}>
        <View
          style={
            clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
          }>
          {/* search Icon */}
          <SvgSearch />
          {/* Input field */}
          <TextInput
            style={styles.input}
            placeholder="Search"
            value={term}
            onChangeText={onSearchChangeText}
            onFocus={() => {
              isClickedSearch(true);
            }}
          />
          {/* cross Icon, depending on whether the search bar is clicked or not */}
          {clicked && (
            <TouchableOpacity
              onPress={() => {
                Keyboard.dismiss();
                isClickedSearch(false);
              }}>
              <SvgClose />
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
