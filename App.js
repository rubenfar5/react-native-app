import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EventListScreen from './screens/EventListScreen';
import CreateEventScreen from './screens/CreateEventScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="EventList" component={EventListScreen} options={{ title: 'Padel', headerStyle: {backgroundColor: '#ec3535'},     headerTitleStyle: { fontWeight: 'bold', color: '#FFF' }, headerTitleAlign: 'center'}} />
        <Stack.Screen name="CreateEvent" component={CreateEventScreen} options={{ title: 'Criar Evento', headerStyle: {backgroundColor: '#ec3535'},     headerTitleStyle: { fontWeight: 'bold', color: '#FFF' }, headerTitleAlign: 'center'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
