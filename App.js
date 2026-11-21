
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AppProvider } from './AppContext';

import ShopScreen from './screens/ShopScreen';
import CartScreen from './screens/CartScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#2563EB',
            },
            headerTintColor: '#FFFFFF',
            tabBarActiveTintColor: '#2563EB',
            tabBarInactiveTintColor: '#888888',
          }}
        >
          <Tab.Screen
            name="Shop"
            component={ShopScreen}
          />

          <Tab.Screen
            name="Cart"
            component={CartScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
