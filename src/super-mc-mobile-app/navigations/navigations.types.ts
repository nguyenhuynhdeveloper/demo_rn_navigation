// file định nghĩa RootStackParamList + NavigationProps : Để cung cấp tham số cho hook useNavigation + Từng loại Route của từng màn hình

import {NavigationProp} from '@react-navigation/core/src/types'; // Đinh dạng kiểu dữ liệu của navigation Props -- Thư viện
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
//Cách khác cái NavigationProp === NativeStackNavigationProp

import {RouteProp} from '@react-navigation/native'; // Định dạng kiểu dữ liệu của Route Props -- thư viện

import {routeNames} from './RouteNames';

// Định nghĩa kiểu  RootStackParamList : quyết định route của từng màn hình sẽ là gì ; object chứa key : tên màn hình , value : các trường dữ liệu có thể của route màn hình
export type RootStackParamList = {
  // Màn vay khi sở hữu ô tô
  [routeNames.SCREEN_LOAN_PROPOSAL_BY_OTO]:
    | {
        isWithdrawMoneyFirst?: boolean;
        isIncreaseLoanLimit?: boolean;
      }
    | undefined;

  // Màn Success Screen

  // Mà vay khi sở hữu giấy phép kinh doanh -- chứng chỉ thuế
  [routeNames.SCREEN_LOAN_PROPOSAL_BY_BUSINESS_LICENSE]:
    | {
        isWithdrawMoneyFirst?: boolean;
        isIncreaseLoanLimit?: boolean;
      }
    | undefined;

  // Màn lựa chọn Option Loan
  [routeNames.SCREEN_SELECT_OPTION_LOAN]:
    | {
        isIncreaseLoanLimit?: boolean;
        isWithdrawMoneyFirst?: boolean;
      }
    | undefined;

  // Màn xác nhận đề xuất
  [routeNames.SCREEN_CONFIRM_PROPOSAL]: {} | undefined;

  [routeNames.SCREEN_SETTLEMENT]: {
    debtAckContractNumber?: string;
  };
};
// -----------------------------

// Các type định dạng kiểu dữ liệu của thư viện react-navigation
// NavigationProp // Định dạng kiểu dữ liệu  props Navigation
// RouteProp : Định dạng kiểu dữ liệu của route màn hình

// Sử dụng NavigationProp
export type NavigationProps = NavigationProp<RootStackParamList>; // Định dạng kiểu props của Navigation

// File Quyết định route khi chuyển màn hình chứa gì

// Export ra từng loại route của từng màn hình : Định dạng kiểu dữ liệu route từng màn hình

// Sử dụng RouteProp
export type SettlementRouteProps = RouteProp<
  RootStackParamList,
  routeNames.SCREEN_SETTLEMENT
>;