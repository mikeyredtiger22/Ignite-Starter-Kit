/**
 * The root navigator is used to switch between major navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow (which is contained in your PrimaryNavigator) which the user
 * will use once logged in.
 */
import React from "react"
import { NavigationContainer, NavigationContainerRef } from "@react-navigation/native"

import { PrimaryNavigator } from "./primary-navigator"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { DemoScreen } from "../screens"
import { CustomDrawerContentComponent } from "../components"

const Drawer = createDrawerNavigator()

const RootStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Main Screen"
      drawerContent={CustomDrawerContentComponent}
    >
      <Drawer.Screen name="Main Screen" component={PrimaryNavigator}/>
      <Drawer.Screen name="Demo" component={DemoScreen}/>
    </Drawer.Navigator>
  )
}

export const RootNavigator = React.forwardRef<
  NavigationContainerRef,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  return (
    <NavigationContainer {...props} ref={ref}>
      <RootStack />
    </NavigationContainer>
  )
})

RootNavigator.displayName = "RootNavigator"
