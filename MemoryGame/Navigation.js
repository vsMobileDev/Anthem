import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Anthem from './Anthem'
import ProductDetailScreen from './ProductDetailScreen'
import CartScreen from './CartScreen'
const Routes = () => {
    const Nav = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Nav.Navigator initialRouteName={"Anthem"}>
                <Nav.Screen component={Anthem} name={'Anthem'} />
                <Nav.Screen component={ProductDetailScreen} name={'ProductDetailScreen'} />
                <Nav.Screen component={CartScreen} name={'CartScreen'} />
            </Nav.Navigator>
        </NavigationContainer>
    )
}
export default Routes;