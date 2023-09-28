// file : NavigationContainer : của Toàn App

import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {options} from './navigations.constants';

import {routeNames} from './RouteNames';

import {navigationRef} from './navigation.service'; // Import cái ref NavigationContainer ở file navigation.service vào
import {Linking, Platform} from 'react-native';
import * as Screens from '../screens';

const Stack = createNativeStackNavigator();

const RouterMain = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isLoadingDynamic, setLoadingDynamic] = useState<boolean>(true);
  const [initialRouteName, setInitialRouteName] = useState<routeNames>();

  // ---------------------- Chứa các màn hình : khi user đã đăng nhập
  const mainStack = useMemo(
    () => (
      <>
        <Stack.Screen
          name={routeNames.HOMESCREEN}
          component={Screens.HomeScreen}
          options={options}
        />
        <Stack.Screen
          name={routeNames.DETAILSSCREEN}
          component={Screens.DetailsScreen}
          options={options}
        />
      </>
    ),
    [],
  );

  return (
    // <SafeAreaProvider>
    <NavigationContainer ref={navigationRef} independent={true}>
      <Stack.Navigator initialRouteName={routeNames.HOMESCREEN}>
        {mainStack}
      </Stack.Navigator>
    </NavigationContainer>
    // </SafeAreaProvider>
  );
};

export default RouterMain;
