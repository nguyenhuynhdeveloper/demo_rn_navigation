// install React Navigation 

yarn add @react-navigation/native

Các thư viện phụ thuộc 
yarn add react-native-screens react-native-safe-area-context


Nếu sử dụng mac và phát triển trên ios cần 

npx pod-install ios


react-native-screens : Thư viện yêu cầu 1 bước cài đặt cho android 
Làm theoo các bước trong doc


// Sau đó cần gói app bên trong Navigationcontainer 

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
}



# Cần phải cài đặt thêm thư viện 
yarn add @react-navigation/native-stack


// CÁC THƯ VIỆN VÀ THAM SỐ ĐÃ SỬ DỤNG TRONG super-mc-mobile-app

import {NavigationContainerRef} from '@react-navigation/core'; // ref của thư viện

// Các type định dạng kiểu dữ liệu của thư viện react-navigation
// NavigationProp // Định dạng kiểu dữ liệu  props Navigation
// RouteProp : Định dạng kiểu dữ liệu của route màn hình

import {
  NavigationContainer,
  StackActions,
  useNavigation,
  NavigationProp,
  RouteProp,
  useFocusEffect,
  useRoute,

  
  } from '@react-navigation/native';



import {NavigationProp} from '@react-navigation/core/src/types'; // Đinh dạng kiểu dữ liệu của navigation Props -- Thư viện

import type {
  createNativeStackNavigator,
  NativeStackNavigationProp
  } from '@react-navigation/native-stack';

// NavigationProp === NativeStackNavigationProp : về bản chất 




### dispatch 

import { CommonActions } from '@react-navigation/native';

navigation.dispatch(
  CommonActions.navigate({
    name: 'Profile',
    params: {
      user: 'jane',
    },
  })
);

Có thể sử dụng dispatch để có thể chuyển màn hình khi mà không thao tác logic ở VIEW 