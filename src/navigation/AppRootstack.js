import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AddJourney, Journeys, JourneyDetails} from '../screens';

const Stack = createStackNavigator();

const AppRootstack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Journeys'}>
        <Stack.Screen name="AddJourney" component={AddJourney} />
        <Stack.Screen name="Journeys" component={Journeys} />
        <Stack.Screen name="JourneyDetails" component={JourneyDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return <AppRootstack />;
};
