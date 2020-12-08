import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { RadioButton, Button } from 'react-native-paper';

export default function ResultScreen({ route, navigation }) {
  const { height, age, weight, counter } = route.params;

  return (
    <View style={{ marginLeft: 20, marginRight: 20 }}>
      <ScrollView>
        <View style={styles.textAlign}>
          <Text style={styles.textHeader}>BMR (kcal)</Text>
          <Text style={styles.textHeader}>BFP (%)</Text>
        </View>
        <View style={styles.textAlign}>
          <Text style={styles.textInputLeft}>
            {Math.round(
              (11.322 * weight + 3.9485 * height - 5.0035 * age + 267.9105) *
                100 +
                Number.EPSILON
            ) / 100}
          </Text>
          <Text style={styles.textInputRight}>
            {Math.round(
              (1.2 * ((weight / ((height * height) / 100)) * 100) +
                0.23 * age -
                10.8) *
                100 +
                Number.EPSILON
            ) / 100}
          </Text>
        </View>
        <View style={styles.textAlign}>
          <Text style={styles.textHeader}>HRR (bpm)</Text>
          <Text style={styles.textHeader}>BMI (kg/m2)</Text>
        </View>
        <View style={styles.textAlign}>
          <Text style={styles.textInputLeft}>
            {Math.round(
              (212 - 0.5 * age - 0.11 * weight) * 100 + Number.EPSILON
            ) / 100}
          </Text>
          <Text style={styles.textInputRight}>
            {Math.round(
              (weight / ((height * height) / 100)) * 100 * 100 + Number.EPSILON
            ) / 100}{' '}
          </Text>
        </View>
        <Text style={styles.textHeader}>Perfect weight (kg)</Text>
        <Text style={styles.textInputCenter}>
          {Math.round(
            ((18.5 * weight) / ((weight / ((height * height) / 100)) * 100)) *
              100 +
              Number.EPSILON
          ) / 100}{' '}
          -{' '}
          {Math.round(
            ((25 * weight) / ((weight / ((height * height) / 100)) * 100)) *
              100 +
              Number.EPSILON
          ) / 100}
        </Text>
        <Text style={styles.textHeader}>Heart rate zones (bpm)</Text>
        <Text
          style={{
            height: 25,
            fontSize: 20,
            backgroundColor: 'greenyellow',
            marginTop: 5,
            color: 'black',
            borderRadius: 3,
            textAlign: 'left',
          }}>
          Fitness zone:{' '}
          {Math.round(
            (212 - 0.5 * age - 0.11 * weight) * 0.5 * 100 + Number.EPSILON
          ) / 100}{' '}
          -{' '}
          {Math.round(
            (212 - 0.5 * age - 0.11 * weight) * 0.6 * 100 + Number.EPSILON
          ) / 100}
        </Text>
        <Text
          style={{
            height: 25,
            fontSize: 20,
            backgroundColor: 'yellow',
            marginTop: 5,
            color: 'black',
            borderRadius: 3,
            textAlign: 'left',
          }}>
          Fat burn zone:{' '}
          {Math.round(
            (212 - 0.5 * age - 0.11 * weight) * 0.6 * 100 + Number.EPSILON
          ) / 100}{' '}
          -{' '}
          {Math.round(
            (212 - 0.5 * age - 0.11 * weight) * 0.7 * 100 + Number.EPSILON
          ) / 100}
        </Text>
        <Text
          style={{
            height: 25,
            fontSize: 20,
            backgroundColor: 'orange',
            marginTop: 5,
            color: 'white',
            borderRadius: 3,
            textAlign: 'left',
          }}>
          Aerobic zone:{' '}
          {Math.round(
            (212 - 0.5 * age - 0.11 * weight) * 0.7 * 100 + Number.EPSILON
          ) / 100}{' '}
          -{' '}
          {Math.round(
            (212 - 0.5 * age - 0.11 * weight) * 0.8 * 100 + Number.EPSILON
          ) / 100}
        </Text>
        <Text
          style={{
            height: 25,
            fontSize: 20,
            backgroundColor: 'orangered',
            marginTop: 5,
            color: 'white',
            borderRadius: 3,
            textAlign: 'left',
          }}>
          Anaerobic zone:{' '}
          {Math.round(
            (212 - 0.5 * age - 0.11 * weight) * 0.8 * 100 + Number.EPSILON
          ) / 100}{' '}
          -{' '}
          {Math.round(
            (212 - 0.5 * age - 0.11 * weight) * 0.9 * 100 + Number.EPSILON
          ) / 100}
        </Text>
        <Text
          style={{
            height: 25,
            fontSize: 20,
            backgroundColor: 'firebrick',
            marginTop: 5,
            color: 'white',
            borderRadius: 3,
            textAlign: 'left',
          }}>
          VO2 Max zone:{' '}
          {Math.round(
            (212 - 0.5 * age - 0.11 * weight) * 0.9 * 100 + Number.EPSILON
          ) / 100}{' '}
          -{' '}
          {Math.round(
            (212 - 0.5 * age - 0.11 * weight) * 100 + Number.EPSILON
          ) / 100}
        </Text>
        <View style={{ marginTop: 40 }}>
          <Button
            mode="contained"
            color="#5C7E9A"
            onPress={() => {
              navigation.navigate('Home');
            }}>
            Back
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center',
    color: 'grey',
    alignSelf: 'stretch',
  },
  textAlign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInputLeft: {
    width: 140,
    height: 25,
    fontSize: 20,
    backgroundColor: '#5C7E9A',
    marginTop: 2,
    color: 'white',
    borderRadius: 3,
    textAlign: 'left',
  },
  textInputRight: {
    width: 140,
    height: 25,
    fontSize: 20,
    backgroundColor: '#5C7E9A',
    marginTop: 2,
    color: 'white',
    borderRadius: 3,
    textAlign: 'right',
  },
  textInputCenter: {
    height: 25,
    fontSize: 20,
    backgroundColor: '#5C7E9A',
    marginTop: 2,
    color: 'white',
    borderRadius: 3,
    textAlign: 'center',
  },
});
