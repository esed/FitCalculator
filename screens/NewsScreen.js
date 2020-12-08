import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, View, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Constants } from 'expo';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import New from '../components/news';
import { useLinkTo } from '@react-navigation/native';

export default class App extends Component {
  state = {
    news: [],
  };
  componentDidMount() {
    const API =
      'http://newsapi.org/v2/everything?q=fitness&sortBy=popularity&apiKey=b702527ba8ff4f10a5b259d5c96ec885';
    fetch(API)
      .then((response) => response)
      .then((resp) => resp.json())
      .then((resp) => this.setState({ news: resp.articles }));
  }

  render() {
    const data = this.state.news.map((new1) => {
      return (
        <New
          source={new1.url}
          title={new1.title}
          description={new1.description}
          url={new1.urlToImage}
        />
      );
    });

    return (
      <ScrollView style={{ marginLeft: 20, marginRight: 20 }}>
        {data}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
