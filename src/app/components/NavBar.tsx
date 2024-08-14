import { View, Text } from 'react-native'
import {Donut, LockKeyhole, MessageCircleMore, Search, User} from 'lucide-react-native'
import { colors } from '@/src/styles/colors'
import React from 'react'

const NavBar = () => {
  return (
    <View className='flex-row justify-evenly items-end gap-3 pb-7 pt-2 bg-bgColor'>
      <LockKeyhole color={"#fff"} size={36}/>
      <Search color={"#fff"} size={36}/>
      <Donut color={colors.primaryVariant} size={48}/>
      <MessageCircleMore color={"#fff"} size={36}/>
      <User color={"#fff"} size={36}/>
    </View>
  )
}

export default NavBar