import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-paper';

const users = [
  {
    key: '1Zone',
    name: 'Underweight',
    mw: 'CDC definition for men and women: below 18.5',
    men: 'NHANES II definition for men: below 20.7',
    women: 'NHANES II definition for women: below 19.1',
  },
  {
    key: '2Zone',
    name: 'Normal weight',
    mw: 'CDC definition for men and women: 18.5-24.9',
    men: 'NHANES II definition for men: 20.7-26.4',
    women: 'NHANES II definition for women: 19.1-25.8',
  },
  {
    key: '3Zone',
    name: 'Marginally overweight',
    mw: 'CDC definition for men and women: n/a',
    men: 'NHANES II definition for men: 26.4-27.8',
    women: 'NHANES II definition for women: 25.8-27.3',
  },
  {
    key: '4Zone',
    name: 'Overweight',
    mw: 'CDC definition for men and women: 25-29.9',
    men: 'NHANES II definition for men: 27.8-31.1',
    women: 'NHANES II definition for women: 27.3-32.3',
  },
  {
    key: '5Zone',
    name: 'Obese',
    mw: 'CDC definition for men and women: 30 & above',
    men: 'NHANES II definition for men: 31.1 & above',
    women: 'NHANES II definition for women: 32.3 & above',
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
                  {item.mw}
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
