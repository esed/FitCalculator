import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-paper';

const users = [
  {
    key: '1Zone',
    name: 'Edgars S.',
    description:
      'Vidzeme University of Applied Sciences - eIT first-year student, 2nd group',
  },
  {
    key: '2Zone',
    name: 'Edgars N.',
    description:
      'Vidzeme University of Applied Sciences - eIT first-year student, 2nd group',
  },
  {
    key: '3Zone',
    name: 'Anna V.',
    description:
      'Vidzeme University of Applied Sciences - eIT first-year student, 2nd group',
  },
  {
    key: '4Zone',
    name: 'Pēteris U.',
    description:
      'Vidzeme University of Applied Sciences - eIT first-year student, 2nd group',
  },
];

export default class AboutBMIScreen extends Component {
  render() {
    return (
      <ScrollView style={{ marginLeft: 20, marginRight: 20 }}>
        <Image
          style={{ width: '100%', height: 300, marginTop: 10, borderRadius: 5 }}
          source={{
            uri:
              'https://i.ibb.co/1nyrwXn/Whats-App-Image-2020-12-04-at-08-47-03.jpg',
          }}
        />
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <View
              style={{
                padding: 0,
              }}>
              <View>
                <Text
                  style={{
                    height: 25,
                    fontSize: 20,
                    backgroundColor: '#5C7E9A',
                    marginTop: 2,
                    color: 'white',
                    borderRadius: 5,
                    textAlign: 'center',
                  }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: 17,
                    marginTop: 2,
                    color: 'black',
                    borderRadius: 3,
                    textAlign: 'left',
                  }}>
                  {item.description}
                </Text>
              </View>
            </View>
          )}
        />
        <Image
          style={{ width: '100%', height: 55, marginTop: 10, borderRadius: 5 }}
          source={{
            uri:
              'https://i.ibb.co/qs80z9G/Screenshot-2020-12-04-at-18-24-23.png',
          }}
        />
      </ScrollView>
    );
  }
}
