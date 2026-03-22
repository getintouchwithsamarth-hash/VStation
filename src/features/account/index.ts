// Account Feature Exports
export { AuthProvider, useAuth } from './AuthContext';
export { LoginPage } from './pages/LoginPage';
export { RegisterPage } from './pages/RegisterPage';
export { PasswordResetRequestPage } from './pages/PasswordResetRequestPage';
export { PasswordResetPage } from './pages/PasswordResetPage';
export { AccountDashboard } from './pages/AccountDashboard';
export { OrderDetailPage } from './pages/OrderDetailPage';
export { useCustomerAccount, useCustomerAddresses, useCustomerOrder, useCustomerOrders } from './hooks';

// Components
export { FormInput } from './components/FormInput';
export { AccountButton } from './components/AccountButton';
export { FormAlert } from './components/FormAlert';
export { AddressCard } from './components/AddressCard';
export { OrderCard } from './components/OrderCard';
export { EmptyState } from './components/EmptyState';
export { AccountNav } from './components/AccountNav';

// Types
export type {
  Customer,
  CustomerAddress,
  CustomerOrder,
  CustomerOrderDetail,
  AuthContextType,
  RegisterData,
  LoginFormData,
  PasswordResetRequestData,
  PasswordResetData
} from './types';
