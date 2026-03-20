// Account Feature Exports
export { AuthProvider, useAuth } from './AuthContext';
export { LoginPage } from './pages/LoginPage';
export { RegisterPage } from './pages/RegisterPage';
export { PasswordResetRequestPage } from './pages/PasswordResetRequestPage';
export { PasswordResetPage } from './pages/PasswordResetPage';
export { AccountDashboard } from './pages/AccountDashboard';
export { useCustomerAccount, useCustomerAddresses, useCustomerOrders } from './hooks';

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
  AuthContextType,
  RegisterData,
  LoginFormData,
  PasswordResetRequestData,
  PasswordResetData
} from './types';
