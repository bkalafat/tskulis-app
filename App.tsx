import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import NewsList from './src/components/NewsList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


export default function App() {
  return (

    <SafeAreaView style={styles.container}>
      <NavigationContainer >
        <Stack.Navigator >
          <Stack.Screen name="Anasayfa" component={NewsList}  />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    width:'auto',
    height:'100%',
    backgroundColor: '#fff'
  },
});
