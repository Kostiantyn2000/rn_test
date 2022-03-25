import React from 'react';
import {Text, View, FlatList} from 'react-native';
import NewsRepository from '../../repositories/news_repository';
export default class NewsTab extends React.Component {
  state = {
    news: [],
  };
  _newsRepositories = new NewsRepository();
  componentDidMount() {
    this._newsRepositories.getWarNews().then(data => {
      this.setState({
        news: data.articles,
      });
    });
  }

  renderNewsItem(item) {
    const {author} = item.item;
    return <Text>{author}</Text>;
  }

  render() {
    // console.log(this.state.news);
    return (
      <View>
        <FlatList
          data={this.state.news}
          renderItem={item => this.renderNewsItem(item)}
        />
      </View>
    );
  }
}
