import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  Image,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import Constants from 'expo-constants';
import { Button } from 'react-native-paper';

function Input(props) {
  return (
    <View>
      <Text>{props.label}</Text>
      <TextInput {...props} />
    </View>
  );
}

Input.propTypes = {
  label: PropTypes.string,
};

export default function HomeScreen({ navigation }) {
  const [heights, setHeights] = useState('');
  const [selectedHeight, setSelectedHeight] = useState('');

  const [ages, setAges] = useState('');
  const [selectedAge, setSelectedAge] = useState('');

  const [weights, setWeights] = useState('');
  const [selectedWeight, setSelectedWeight] = useState('');

  const [genders, setGenders] = useState('');
  const [selectedGender, setSelectedGender] = useState('');

  const [counter, setCounter] = useState(70);

  return (
    <View style={{ marginLeft: 20, marginRight: 20 }}>
      <ScrollView>
        <Image
          style={{ width: '100%', height: 100, marginTop: 10, borderRadius: 5 }}
          source={{
            uri:
              'https://i.ibb.co/Xb4RzjX/Whats-App-Image-2020-12-04-at-12-56-15.jpg',
          }}
        />
        <View style={{ marginTop: 10 }} />
        <View style={styles.textAlign}>
          <Text style={styles.textHeader}>Height</Text>
          <Text style={styles.textHeader}>Weight</Text>
        </View>
        <View style={styles.textAlign}>
          <Input
            style={styles.textInputLeft}
            placeholder=" cm "
            onChangeText={(e) => {
              setHeights(e);
            }}
            onSubmitEditing={(e) => {
              setSelectedHeight(e.nativeEvent.text);
            }}
            onFocus={() => {
              setSelectedHeight('');
              setHeights('');
            }}
          />
          <Input
            style={styles.textInputRight}
            placeholder=" kg "
            onChangeText={(e) => {
              setWeights(e);
            }}
            onSubmitEditing={(e) => {
              setSelectedWeight(e.nativeEvent.text);
            }}
            onFocus={() => {
              setSelectedWeight('');
              setWeights('');
            }}
          />
        </View>
        <View style={styles.textAlign}>
          <Text style={styles.textHeader}>Age</Text>
          <Text style={styles.textHeader}>Gender</Text>
        </View>
        <View style={styles.textAlign}>
          <Input
            style={styles.textInputLeft}
            placeholder=" years "
            onChangeText={(e) => {
              setAges(e);
            }}
            onSubmitEditing={(e) => {
              setSelectedAge(e.nativeEvent.text);
            }}
            onFocus={() => {
              setSelectedAge('');
              setAges('');
            }}
          />

          <Input
            style={styles.textInputRight}
            placeholder=" male/female "
            onChangeText={(e) => {
              setGenders(e);
            }}
            onSubmitEditing={(e) => {
              setSelectedGender(e.nativeEvent.text);
            }}
            onFocus={() => {
              setSelectedGender('');
              setGenders('');
            }}
          />
        </View>

        <Text style={styles.textHeader}>Resting heart rate</Text>
        <View style={styles.textAlign}>
          <Button
            mode="contained"
            color="#5C7E9A"
            contentStyle={{}}
            onPress={() => {
              setCounter(counter - 1);
            }}>
            Down
          </Button>
          <Text style={styles.textCounter}>{counter}</Text>
          <Button
            mode="contained"
            color="#5C7E9A"
            contentStyle={{}}
            onPress={() => {
              setCounter(counter + 1);
            }}>
            Up
          </Button>
        </View>
        <View style={{ marginTop: 40 }}>
          <Button
            mode="contained"
            color="#5C7E9A"
            onPress={() =>
              navigation.navigate('Result', {
                height: heights,
                age: ages,
                weight: weights,
                counter: counter,
              })
            }>
            Calculate
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
    color: 'gray',
    alignSelf: 'stretch',
  },
  textCounter: {
    fontSize: 25,
    color: 'black',
    alignSelf: 'stretch',
  },
  textAlign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInputLeft: {
    width: 140,
    height: 35,
    fontSize: 20,
    backgroundColor: '#5C7E9A',
    marginTop: 2,
    color: 'white',
    placeholderTextColor: 'white',
    borderRadius: 3,
    textAlign: 'left',
  },
  textInputRight: {
    width: 140,
    height: 35,
    fontSize: 20,
    backgroundColor: '#5C7E9A',
    marginTop: 2,
    color: 'white',
    placeholderTextColor: 'white',
    borderRadius: 3,
    textAlign: 'right',
  },
});
