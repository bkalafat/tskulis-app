import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import NewsList from './src/components/NewsList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import NewsDetail from './src/components/NewsDetail';


const Stack = createStackNavigator();


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer >
        <Stack.Navigator >
          <Stack.Screen name="TS KULİS" component={NewsList} options={{
            headerTransparent: true,
            headerBackground: () => (
              <LinearGradient
                colors={['rgba(164, 29, 52, 1)', 'rgba(20, 192, 241, 1)']}
                style={styles.background}
              />
            ),
            headerTitleAlign: 'center',
            headerTintColor: 'white'
          }} />

          <Stack.Screen name="NewsDetail" component={NewsDetail} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    height: '100%',
    backgroundColor: '#fff'
  },
  background: {
    left: 0,
    right: 0,
    top: 0,
    height: 66
  },
});
