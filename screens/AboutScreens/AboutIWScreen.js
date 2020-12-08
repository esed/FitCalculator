import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-paper';

const users = [
  {
    key: '1Zone',
    name: 'Age',
    description:
      'In theory, age should not be a large determinant of a IBW (perfect weight) past the ages of 14-15 for girls and 16-17 for boys, after which most people stop growing. It is actually expected that human males and females to lose 1.5 and 2 inches in height respectively by age 70. It is important to remember that as people age, lean muscle mass decreases and it is easier to accumulate excess body fat. This is a natural process, though it is possible to lessen the effects of aging by adopting various habits such as monitoring diet, exercise, stress, and sleep.',
  },
  {
    key: '2Zone',
    name: 'Gender',
    description:
      'Generally, females weigh less than males even though they naturally have a higher percentage of body fat. This is because the male body generally has higher muscle mass, and muscle is heavier than fat. Not only that, but women generally have lower bone density. Last but not least, males tend to be taller than females.',
  },
  {
    key: '3Zone',
    name: 'Height',
    description:
      'The taller the person, the more muscle mass and body fat they have, which results in more weight. A male at a similar height to a female should weigh about 10-20% heavier.',
  },
  {
    key: '4Zone',
    name: 'Body frame size',
    description:
      'Body frame size is another factor that can have a significant impact on the measurement of ideal weight. Body frame size is typically categorized as small, medium, or large boned. It is measured based on the circumference of a persons wrist in relation to their height, as shown below.',
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
