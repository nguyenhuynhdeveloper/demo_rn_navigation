// file sử dụng NavigationContainerRef : để có thể điều hướng màn hình : VD như khi bấm vào thông báo mở App đúng màn hình chỉ định
import {createRef, useCallback} from 'react';
import {StackActions, useNavigation} from '@react-navigation/native'; // navigate của thư viện
import {NavigationContainerRef} from '@react-navigation/core'; // ref của thư viện

import {NavigationProps, RootStackParamList} from './navigations.types'; // Các kiểu định dạng của NavigationProps  , RootStackParamList : bảm Mapping name và route params
import {routeNames} from './RouteNames'; // Emun chứa tên các màn hình

export const useNavigationApp = () => {
  const {...rest} = useNavigation<NavigationProps>();

  const replace = useCallback(
    (screenName: routeNames, param?: object) => {
      rest.dispatch(StackActions.replace(screenName, param));
    },
    [rest],
  );

  const popToTop = useCallback(() => {
    if (rest.canGoBack()) {
      rest.dispatch(StackActions.popToTop());
    }
  }, [rest]);

  return {replace, popToTop, ...rest};
};

// Ref của NavigationContainer : Để có thể navigate màn hình tuỳ ý: Đây mới tạo ra cái biến ref chứ chưa gắn nó vào đâu ,
// import ở file RouterMain.tsx mới gắn vào NavigationContainer

export const navigationRef =
  createRef<NavigationContainerRef<RootStackParamList>>();

// Hàm bắt buộc logout ra bên ngoài màn hình logIn
export function redirectLogout() {
  if (navigationRef?.current?.canGoBack()) {
    navigationRef?.current?.dispatch(StackActions.popToTop());
  }

  if (
    navigationRef?.current?.getCurrentRoute()?.name !== routeNames.SCREEN_HOME // Kiểm tra xem routeName hiện tại
  ) {
    navigationRef?.current?.dispatch(
      StackActions.replace(routeNames.STACK_TABS), // dispatch ra 1 màn hình bất kỳ
    );
  }
}
