import * as React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-paper';

export default function AboutIWScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={{ marginLeft: 20, marginRight: 20 }}>
        <Image
          style={{ width: '100%', height: 200, marginTop: 10, borderRadius: 5 }}
          source={{
            uri:
              'https://i.ibb.co/0hP6j8L/Whats-App-Image-2020-12-04-at-08-41-22.jpg',
          }}
        />
        <View style={{ marginTop: 40 }}>
          <Button
            mode="contained"
            color="#5C7E9A"
            onPress={() => {
              navigation.navigate('Aboutus');
            }}>
            About developers
          </Button>
        </View>
        <View style={{ marginTop: 15 }}>
          <Button
            mode="contained"
            color="#5C7E9A"
            onPress={() => {
              navigation.navigate('AboutHRZ');
            }}>
            About HR zones
          </Button>
        </View>
        <View style={{ marginTop: 15 }}>
          <Button
            mode="contained"
            color="#5C7E9A"
            onPress={() => {
              navigation.navigate('AboutBMI');
            }}>
            About BMI
          </Button>
        </View>
        <View style={{ marginTop: 15 }}>
          <Button
            mode="contained"
            color="#5C7E9A"
            onPress={() => {
              navigation.navigate('AboutBF');
            }}>
            About body fat
          </Button>
        </View>
        <View style={{ marginTop: 15 }}>
          <Button
            mode="contained"
            color="#5C7E9A"
            onPress={() => {
              navigation.navigate('AboutBMR');
            }}>
            About BMR
          </Button>
        </View>
        <View style={{ marginTop: 15 }}>
          <Button
            mode="contained"
            color="#5C7E9A"
            onPress={() => {
              navigation.navigate('AboutIW');
            }}>
            About perfect weight
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
