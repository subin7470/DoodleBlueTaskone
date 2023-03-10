import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {AssociatesScreen, CreateNewAssociatesScreen} from '../screens';
const Stack = createNativeStackNavigator();
export const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="associates">
        <Stack.Screen name="associates" component={AssociatesScreen} />
        <Stack.Screen
          name="createNewAssociates"
          component={CreateNewAssociatesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
