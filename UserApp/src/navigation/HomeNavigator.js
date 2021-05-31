import React from 'react'
import { StyleSheet, Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DestinationSearchScreen from './../screens/DestinationSearch/DestinationSearchScreen';
import SearchResults from './../components/SearchResults/SearchResults';
import OrderScreen from './../screens/OrderScreen/OrderScreen';


const Stack = createStackNavigator();


export default function HomeNavigator({ navigation }) {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    headerRight: () => (
                        <Button
                            onPress={() => navigation.openDrawer()}
                            title="drawer"
                        />)
                }}
            />
            <Stack.Screen
                name='DestinationSearch'
                component={DestinationSearchScreen}
                options={{
                    headerTitle: 'Where we are going?'
                }}
            />
            <Stack.Screen
                name='SearchResults'
                component={SearchResults}
            />
            <Stack.Screen
                name='OrderPage'
                component={OrderScreen}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
