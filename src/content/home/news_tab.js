import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import NewsRepository from '../../repositories/news_repository';
import Search from '../../components/search/search/search-item/search-item/search';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  searchChangedNews,
  isSearchBarClickedNews,
  getSpecifiedNews,
  getCollectionNews,
} from '../../actions/actions';
class NewsTab extends React.Component {
  _newsRepositories = new NewsRepository();

  onSearchChangeText = term => {
    this.props.searchChangedNews(term);
    this.props.getSpecifiedNews(term);
  };

  isClickedSearch = bool => {
    this.props.isSearchBarClickedNews(bool);
  };

  componentDidMount() {
    this.props.getCollectionNews();
  }

  render() {
    console.log(this.props.clicked);
    const Item = ({author, title}) => (
      <View style={styles.item}>
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    );

    const renderItem = ({item}) => {
      return <Item author={item.author} title={item.title} />;
    };

    return (
      <View>
        <Search
          onSearchChangeText={this.onSearchChangeText}
          term={this.props.term}
          clicked={this.props.clicked}
          isClickedSearch={this.isClickedSearch}
        />

        <FlatList data={this.props.news} renderItem={renderItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: 'lightgrey',
  },
  author: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
    fontStyle: 'italic',
  },

  title: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 5,
    fontStyle: 'italic',
  },
});

const mapStateToProps = state => {
  return {
    term: state.newsReducer.term,
    clicked: state.newsReducer.clicked,
    news: state.newsReducer.news,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      searchChangedNews,
      isSearchBarClickedNews,
      getSpecifiedNews,
      getCollectionNews,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsTab);
