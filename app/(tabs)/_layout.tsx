import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/assets/constants/images'
import { icons } from '@/assets/constants/icons'

const _Layout = () => {
  return (
    <Tabs>
        <Tabs.Screen
           name='index'
           options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <>
                    <ImageBackground 
                        source={images.highlight}
                    >
                        <Image source={icons.home} tintColor="#151312" className='size-5' />
                        <Text>Home</Text>
                    </ImageBackground>
                </>
            )
           }}
        />
        <Tabs.Screen
            name='search'
            options={{
                headerShown: false,
                title: 'Search'
            }}
        />
        <Tabs.Screen
            name='saved'
            options={{
                headerShown: false,
                title: 'Saved'
            }}
        />
        <Tabs.Screen
            name='profile'
            options={{
                headerShown: false,
                title: 'Profile'
            }}
        />
    </Tabs>
  )
}

export default _Layout