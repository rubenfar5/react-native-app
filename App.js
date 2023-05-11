import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderBackground } from '@react-navigation/elements';
import { Image, View, Text } from 'react-native';

import EventListScreen from './screens/EventListScreen';
import CreateEventScreen from './screens/CreateEventScreen';

const Stack = createNativeStackNavigator();

const LogoTitle = () => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
    <Image
      style={{ width: 120, height: 40, backgroundColor: '#fff' }}
      source={require('./fotos/logo.png')}
    />
    <Text style={{ flex: 1, fontWeight: 'bold', color: '#ec3535', fontSize: 30, textAlign: 'left' }}> Padel </Text>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="EventList"
          component={EventListScreen}
          options={{
            title: 'Padel',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#000',
              fontSize: 30,
            },
            headerTitleAlign: 'center',
            headerTitle: () => <LogoTitle />,
          }} />
        <Stack.Screen name="CreateEvent" component={CreateEventScreen} options={{ title: 'Criar Evento', headerStyle: { backgroundColor: '#ec3535' }, headerTitleStyle: { fontWeight: 'bold', color: '#FFF' }, headerTitleAlign: 'center' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
