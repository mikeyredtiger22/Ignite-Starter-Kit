import * as React from "react"
import { Linking } from "react-native"
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer"

export function CustomDrawerContentComponent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Open Google"
        onPress={() => Linking.openURL('https://www.google.com')}
      />
    </DrawerContentScrollView>
  )
}
