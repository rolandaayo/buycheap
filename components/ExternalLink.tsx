import { Link } from 'expo-router';
import { Platform } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

export function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <Link
      href={href}
      onPress={(e) => {
        if (Platform.OS !== 'web') {
          e.preventDefault();
          WebBrowser.openBrowserAsync(href);
        }
      }}>
      {children}
    </Link>
  );
} 