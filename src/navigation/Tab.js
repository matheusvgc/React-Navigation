import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons';
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'TelaA':
                iconName = focused
                    ? 'ios-home'
                    : 'ios-home-outline';
                break
            case 'TelaB':
                iconName = focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline';
                break
            case 'TelaC':
                iconName = focused ? 'ios-list-circle' : 'ios-list';
                break

          }

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'blue',
        tabBarLabelStyle: { fontSize: 22 },
        tabBarShowLabel: false
    })}
    initialRouteName = 'TelaB'>
        <Tab.Screen name = 'TelaA' component={TelaA} />
        <Tab.Screen name = 'TelaB' component={TelaB} />
        <Tab.Screen name = 'TelaC' component={TelaC} />
    </Tab.Navigator>
)