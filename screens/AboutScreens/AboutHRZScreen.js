import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-paper';

const users = [
  {
    key: '1Zone',
    name: 'Fitness zone',
    effort: 'Very light',
    hr: '50% - 60% of max HR',
    effect: 'Develops maximum performance and speed',
  },
  {
    key: '2Zone',
    name: 'Fat burning zone',
    effort: 'Light',
    hr: '60% - 70% of max HR',
    effect: 'Increases maximum performance capacity',
  },
  {
    key: '3Zone',
    name: 'Aerobic zone',
    effort: 'Moderate',
    hr: '70% - 80% of max HR',
    effect: 'Improves aerobic fitness',
  },
  {
    key: '4Zone',
    name: 'Anaerobic zone',
    effort: 'Hard',
    hr: '80% - 90% of max HR',
    effect: 'Improves basic endurance and fat burning',
  },
  {
    key: '5Zone',
    name: 'VO2 Max zone',
    effort: 'Very hard',
    hr: '90% - 100% of max HR',
    effect: 'Improves overall health and helps recovery',
  },
];

export default class AboutHRZScreen extends Component {
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
                    height: 25,
                    fontSize: 20,
                    marginTop: 2,
                    color: 'black',
                    borderRadius: 3,
                    textAlign: 'left',
                  }}>
                  {item.hr} - {item.effort}
                </Text>
                <Text
                  style={{
                    fontSize: 17,
                    marginTop: 2,
                    color: 'black',
                    borderRadius: 3,
                    textAlign: 'left',
                  }}>
                  {item.effect}
                </Text>
              </View>
            </View>
          )}
        />
      </ScrollView>
    );
  }
}
