import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {MainScreen} from "../screens/MainScreen";
import {PostScreen} from "../screens/PostScreen";
import {THEME} from "../theme";
import {Platform} from "react-native";

// const PostNavigator = createStackNavigator(
//     {
//         Main: MainScreen,
//         Post: PostScreen
//     },
//     {
//         initialRouteName: 'Main',
//         defaultNavigationOptions: {
//             headerStyle: {
//                 backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
//             },
//             headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
//         }
//     }
// )
//
// export  const AppNavigation = createAppContainer(PostNavigator)

const Stack = createNativeStackNavigator();

export default  function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Main"
                screenOptions={{
                    headerStyle: {backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'},
                    headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
                }}
            >
                <Stack.Screen name="Main" component={MainScreen} options={{title: 'Мой блог'}}/>
                <Stack.Screen name="Post" component={PostScreen} options={({ route }) => ({ title: 'Пост от ' + new Date (route.params.date).toLocaleDateString() })} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
