
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.342dffaaabe247d98d7502cf9fe50581',
  appName: 'cozy-beans-haven',
  webDir: 'dist',
  server: {
    url: 'https://342dffaa-abe2-47d9-8d75-02cf9fe50581.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    buildOptions: {
      keystorePath: null,
      keystoreAlias: null,
      keystorePassword: null,
      keystoreAliasPassword: null,
      releaseType: null,
    }
  }
};

export default config;
