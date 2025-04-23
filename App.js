// App.tsx
import * as React from 'react';
import { CommonActions, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, View, Text } from 'react-native';

const Drawer = createDrawerNavigator();
const StackOne = createNativeStackNavigator();
const StackTwo = createNativeStackNavigator();

const ScreenA = ({ navigation }) => {
  const handleNavigation = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          { name: 'StackTwo', params: { screen: 'ScreenB' } },
          { name: 'StackTwo', params: { screen: 'ScreenC' } },
        ],
      })
    );
  }
  return (
    <View>
      <Text>Screen A</Text>
      <Button title="Go to Screen C as soon as you start the app" onPress={() => handleNavigation()} />
    </View>
  )
}

const ScreenB = ({ navigation }) => (
  <View>
    <Text>Screen B</Text>
    <Button title="Go to Screen C" onPress={() => navigation.navigate('ScreenC')} />
  </View>
);

const ScreenC = () => (
  <View>
    <Text>Screen C</Text>
  </View>
);

function StackOneNavigator() {
  return (
    <StackOne.Navigator>
      <StackOne.Screen name="ScreenA" component={ScreenA} />
    </StackOne.Navigator>
  );
}

function StackTwoNavigator() {
  return (
    <StackTwo.Navigator>
      <StackTwo.Screen name="ScreenB" component={ScreenB} />
      <StackTwo.Screen name="ScreenC" component={ScreenC} />
    </StackTwo.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="StackOne">
        <Drawer.Screen name="StackOne" component={StackOneNavigator} />
        <Drawer.Screen name="StackTwo" component={StackTwoNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
