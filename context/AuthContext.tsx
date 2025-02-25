import { createContext, useContext, useState, useEffect } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';

interface AuthContextType {
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  signInWithBiometrics: () => Promise<void>;
  hasBiometrics: boolean;
  biometricType: string;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasBiometrics, setHasBiometrics] = useState(false);
  const [biometricType, setBiometricType] = useState('');

  useEffect(() => {
    checkBiometricAvailability();
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
      } else {
        setHasBiometrics(false);
        setBiometricType('');
      }
    } catch (error) {
      console.error('Error checking biometric availability:', error);
      setHasBiometrics(false);
      setBiometricType('');
    }
  }

  const signInWithBiometrics = async () => {
    try {
      const biometricAuth = await LocalAuthentication.authenticateAsync({
        promptMessage: `Sign in with ${biometricType}`,
        disableDeviceFallback: false, // Allow device fallback
        cancelLabel: 'Cancel',
        fallbackLabel: 'Use Password',
      });

      if (biometricAuth.success) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Biometric authentication failed:', error);
    }
  };

  const signIn = async (email: string, password: string) => {
    // TODO: Implement actual authentication
    setIsAuthenticated(true);
  };

  const signOut = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      signIn, 
      signOut, 
      signInWithBiometrics,
      hasBiometrics,
      biometricType
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext); 