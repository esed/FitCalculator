import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-paper';

const users = [
  {
    key: '1Zone',
    name: 'Muscle Mass',
    description:
      'Aerobic exercise such as running or cycling has no effect on BMR. However, anaerobic exercise, such as weight-lifting, indirectly leads to a higher BMR because it builds muscle mass, increasing resting energy consumption. The more muscle mass in the physical composition of an individual, the higher the BMR required to sustain their body at a certain level.',
  },
  {
    key: '2Zone',
    name: 'Age',
    description:
      'The more elderly and limber an individual, the lower their BMR, or the lower the minimum caloric intake required to sustain the functioning of their organs at a certain level.',
  },
  {
    key: '3Zone',
    name: 'Gender',
    description: 'Hereditary traits passed down from ancestors influence BMR.',
  },
  {
    key: '4Zone',
    name: 'Weather',
    description:
      'Cold environments raise BMR because of the energy required to create a homeostatic body temperature. Likewise, too much external heat can raise BMR as the body expends energy to cool off internal organs. BMR increases approximately 7% for every increase of 1.36 degrees Fahrenheit in the bodys internal temperature.',
  },
  {
    key: '5Zone',
    name: 'Diet',
    description:
      'Small, routinely dispersed meals increase BMR. On the other hand, starvation can reduce BMR by as much as 30%. Similar to a phone that goes into power-saving mode during the last 5% of its battery, a human body will make sacrifices such as energy levels, moods, upkeep of bodily physique, and brain functions in order to more efficiently utilize what little caloric energy is being used to sustain it.',
  },
  {
    key: '6Zone',
    name: 'Pregnanct',
    description:
      'Ensuring the livelihood of a separate fetus internally increases BMR. This is why pregnant women tend to eat more than usual. Also, menopause can increase or decrease BMR depending on hormonal changes.',
  },
  {
    key: '7Zone',
    name: 'Body frame size',
    description:
      'Certain supplements or drugs raise BMR, mostly to fuel weight loss. Caffeine is a common one.',
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
                  {item.description}
                </Text>
              </View>
            </View>
          )}
        />
      </ScrollView>
    );
  }
}
