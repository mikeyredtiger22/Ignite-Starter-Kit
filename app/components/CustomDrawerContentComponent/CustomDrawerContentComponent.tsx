import * as React from "react"
import { Image, ImageStyle, Linking, View, ViewStyle } from "react-native"
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer"
import { flatten, mergeAll } from "ramda"
const drawerCover = require("./purpleCover.jpg")

const DRAWER_ITEM: ViewStyle = { borderWidth: 1, borderRadius: 0, marginVertical: -0.5 }
const DRAWER_HEADER: ViewStyle = { height: 200, backgroundColor: '#7f32e9', marginBottom: 12, marginTop: -100 }
const DRAWER_HEADER_IMAGE: ImageStyle = { height: 200 }

export function CustomDrawerContentComponent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView
      {...mergeAll(flatten([{ contentContainerStyle: { flex: 1, backgroundColor: '#da81ff' } }, props]))}
    >
      <View style={DRAWER_HEADER}>
        <Image source={drawerCover} style={DRAWER_HEADER_IMAGE} resizeMode={"cover"} />
      </View>
      <DrawerItemList activeTintColor='#ffffff' itemStyle={DRAWER_ITEM} {...props} />
      <View style={{ flex: 1, backgroundColor: '#da81ff', justifyContent: "flex-end" }}>
        <DrawerItem
          style={{ ...DRAWER_ITEM, justifyContent: "flex-end", marginBottom: 45 }}
          label="Open Google"
          onPress={() => Linking.openURL('https://www.google.com')}
        />
      </View>
    </DrawerContentScrollView>
  )
}
