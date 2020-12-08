import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import MoreScreen from './screens/MoreScreen';
import AboutusScreen from './screens/AboutScreens/AboutusScreen';
import NewsScreen from './screens/NewsScreen';
import ResultScreen from './screens/ResultScreen';
import AboutBMIScreen from './screens/AboutScreens/AboutBMIScreen';
import AboutBMRScreen from './screens/AboutScreens/AboutBMRScreen';
import AboutHRZScreen from './screens/AboutScreens/AboutHRZScreen';
import AboutBodyFatScreen from './screens/AboutScreens/AboutBodyFatScreen';
import AboutIWScreen from './screens/AboutScreens/AboutIWScreen';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'FitCalculator',
          headerStyle: {
            backgroundColor: '#5C7E9A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <HomeStack.Screen
        name="Result"
        component={ResultScreen}
        options={{
          title: 'Results',
          headerStyle: {
            backgroundColor: '#5C7E9A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <HomeStack.Screen
        name="More"
        component={MoreScreen}
        options={{
          title: 'More',
          headerStyle: {
            backgroundColor: '#5C7E9A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </HomeStack.Navigator>
  );
}

const NewsStack = createStackNavigator();

function NewsStackScreen() {
  return (
    <NewsStack.Navigator>
      <NewsStack.Screen
        name="News"
        component={NewsScreen}
        options={{
          title: 'Latest fitness news',
          headerStyle: {
            backgroundColor: '#5C7E9A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </NewsStack.Navigator>
  );
}

const MoreStack = createStackNavigator();

function MoreStackScreen() {
  return (
    <MoreStack.Navigator>
      <MoreStack.Screen
        name="More"
        component={MoreScreen}
        options={{
          title: 'More',
          headerStyle: {
            backgroundColor: '#5C7E9A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <MoreStack.Screen name="Home" component={HomeScreen} />
      <MoreStack.Screen
        name="Aboutus"
        component={AboutusScreen}
        options={{
          title: 'About developers',
          headerStyle: {
            backgroundColor: '#5C7E9A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <MoreStack.Screen
        name="AboutBMI"
        component={AboutBMIScreen}
        options={{
          title: 'Body mass index',
          headerStyle: {
            backgroundColor: '#5C7E9A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <MoreStack.Screen
        name="AboutBMR"
        component={AboutBMRScreen}
        options={{
          title: 'Basal metabolic rate',
          headerStyle: {
            backgroundColor: '#5C7E9A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <MoreStack.Screen
        name="AboutBF"
        component={AboutBodyFatScreen}
        options={{
          title: 'Body fat',
          headerStyle: {
            backgroundColor: '#5C7E9A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <MoreStack.Screen
        name="AboutHRZ"
        component={AboutHRZScreen}
        options={{
          title: 'Heart rate zones',
          headerStyle: {
            backgroundColor: '#5C7E9A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <MoreStack.Screen
        name="AboutIW"
        component={AboutIWScreen}
        options={{
          title: 'Perfect weight',
          headerStyle: {
            backgroundColor: '#5C7E9A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </MoreStack.Navigator>
  );
}

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-calculator' : 'ios-calculator';
            } else if (route.name === 'More') {
              iconName = focused ? 'ios-more' : 'ios-more';
            } else if (route.name === 'News') {
              iconName = focused ? 'ios-paper' : 'ios-paper';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#5C7E9A',
          inactiveTintColor: 'gray',
        }}>
        <Tabs.Screen name="Home" component={HomeStackScreen} />
        <Tabs.Screen name="News" component={NewsStackScreen} />
        <Tabs.Screen
          name="More"
          component={MoreStackScreen}
          options={{ title: 'More' }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
