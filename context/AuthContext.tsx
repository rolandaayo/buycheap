import { createContext, useContext, useState, useEffect } from 'react';
import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import * as LocalAuthentication from 'expo-local-authentication';
import { Platform } from 'react-native';

const API_URL = Platform.select({
  android: 'http://172.20.10.7:5001/api/auth',
  ios: 'http://172.20.10.7:5001/api/auth',
  default: 'http://172.20.10.7:5001/api/auth',
});

type User = {
  id: string;
  username: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  token: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (username: string, email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  signInWithBiometrics: () => Promise<void>;
  hasBiometrics: boolean;
  biometricType: string | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [hasBiometrics, setHasBiometrics] = useState(false);
  const [biometricType, setBiometricType] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load initial auth state
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        await Promise.all([
          loadStoredAuth(),
          checkBiometricAvailability()
        ]);
      } catch (error) {
        console.error('Auth initialization error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // Comment out or remove this effect
  // useEffect(() => {
  //   if (isLoading) return;

  //   if (!user) {
  //     router.replace('/login');
  //   } else {
  //     router.replace('/(tabs)');
  //   }
  // }, [user, isLoading]);

  // Add this near your other useEffect hooks
  useEffect(() => {
    // Development only: Clear stored auth data on app start
    if (__DEV__) {
      SecureStore.deleteItemAsync('token');
      SecureStore.deleteItemAsync('user');
    }
  }, []);

  async function checkBiometricAvailability() {
    try {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      const enrolled = await LocalAuthentication.isEnrolledAsync();
      
      if (compatible && enrolled) {
        const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
        setHasBiometrics(true);
        
        if (types.includes(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION)) {
          setBiometricType('Face ID');
        } else if (types.includes(LocalAuthentication.AuthenticationType.FINGERPRINT)) {
          setBiometricType('Touch ID');
        } else {
          setBiometricType('Biometric');
        }
      }
    } catch (error) {
      console.error('Error checking biometric availability:', error);
    }
  }

  async function loadStoredAuth() {
    try {
      // Clear any stored auth data
      await SecureStore.deleteItemAsync('token');
      await SecureStore.deleteItemAsync('user');
    } catch (error) {
      console.error('Error loading auth info:', error);
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Store auth data
      await Promise.all([
        SecureStore.setItemAsync('token', data.token),
        SecureStore.setItemAsync('user', JSON.stringify(data.user))
      ]);

      setToken(data.token);
      setUser(data.user);
      
      // Navigate after successful login
      router.replace('/(tabs)');
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const signUp = async (username: string, email: string, password: string) => {
    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Signup failed');
      }

      // Store auth data
      await Promise.all([
        SecureStore.setItemAsync('token', data.token),
        SecureStore.setItemAsync('user', JSON.stringify(data.user))
      ]);

      setToken(data.token);
      setUser(data.user);
      
      // Navigate after successful signup
      router.replace('/(tabs)');
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await SecureStore.deleteItemAsync('token');
      await SecureStore.deleteItemAsync('user');
      setToken(null);
      setUser(null);
      router.replace('/(auth)/login');
    } catch (error) {
      console.error('Signout error:', error);
    }
  };

  const signInWithBiometrics = async () => {
    try {
      const biometricAuth = await LocalAuthentication.authenticateAsync({
        promptMessage: `Sign in with ${biometricType}`,
        disableDeviceFallback: false,
        cancelLabel: 'Cancel',
        fallbackLabel: 'Use Password',
      });

      if (biometricAuth.success) {
        // Implement your biometric auth logic here
        console.log('Biometric authentication successful');
      }
    } catch (error) {
      console.error('Biometric authentication failed:', error);
    }
  };

  if (isLoading) {
    return null; // Or a loading spinner
  }

  return (
    <AuthContext.Provider value={{
      user,
      token,
      signIn,
      signUp,
      signOut,
      signInWithBiometrics,
      hasBiometrics,
      biometricType,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 