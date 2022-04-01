import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import NewsRepository from '../../repositories/news_repository';
import Search from '../../components/search/search/search-item/search-item/search';
export default class NewsTab extends React.Component {
  state = {
    news: [],
    term: '',
    clicked: false,
  };

  searchPanel = term => {
    this.setState({term});
  };

  isClickedUpdate = bool => {
    this.setState({clicked: bool});
  };

  _newsRepositories = new NewsRepository();
  componentDidMount() {
    this._newsRepositories.getWarNews().then(data => {
      this.setState({
        news: data.articles,
      });
    });
  }

  render() {
    const Item = ({author, title}) => (
      <View style={styles.item}>
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    );

    const renderItem = ({item}) => {
      if (this.state.term === '') {
        return <Item author={item.author} title={item.title} />;
      }
      if (
        item.author
          .toUpperCase()
          .includes(this.state.term.toUpperCase().trim().replace(/\s/g, ''))
      ) {
        return <Item author={item.author} title={item.title} />;
      }
      if (
        item.title
          .toUpperCase()
          .includes(this.state.term.toUpperCase().trim().replace(/\s/g, ''))
      ) {
        return <Item author={item.author} title={item.title} />;
      }
    };

    return (
      <View>
        <Search
          searchPanel={this.searchPanel}
          isClickedUpdate={this.isClickedUpdate}
        />
        <FlatList data={this.state.news} renderItem={renderItem} />
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
