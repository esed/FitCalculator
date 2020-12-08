import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-paper';

const users = [
  {
    key: '1Zone',
    name: 'Essential fat',
    women: 'ACE definition for women: below 13%',
    men: 'ACE definition for men: below 5%',
  },
  {
    key: '2Zone',
    name: 'Athletes',
    women: 'ACE definition for women: 14%-20%',
    men: 'ACE definition for men: 6%-13%',
  },
  {
    key: '3Zone',
    name: 'Fitness',
    women: 'ACE definition for women: 21%-24%',
    men: 'ACE definition for men: 14%-17%',
  },
  {
    key: '4Zone',
    name: 'Acceptable',
    women: 'ACE definition for women: 25%-31%',
    men: 'ACE definition for men: 18%-24%',
  },
  {
    key: '5Zone',
    name: 'Obesity',
    women: 'ACE definition for women: 32% & above',
    men: 'ACE definition for men: 25%',
  },
];

export default class AboutBMIScreen extends Component {
  render() {
    return (
      <ScrollView style={{ marginLeft: 20, marginRight: 20 }}>
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
                  {item.men}
                </Text>
                <Text
                  style={{
                    fontSize: 17,
                    marginTop: 2,
                    color: 'black',
                    borderRadius: 3,
                    textAlign: 'left',
                  }}>
                  {item.women}
                </Text>
              </View>
            </View>
          )}
        />
      </ScrollView>
    );
  }
}
