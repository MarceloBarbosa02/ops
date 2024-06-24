import { ExpoConfig } from 'expo/config';

const APP_ID = process.env.EXPO_PUBLIC_APP_ID;

const config: ExpoConfig = {
  name: 'app_kirvano',
  slug: 'app_kirvano',
  version: '1.1.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  userInterfaceStyle: 'automatic',
  scheme: 'kirvano',
  assetBundlePatterns: ['**/*'],
  splash: {
    image: './assets/images/splash.png',
    resizeMode: 'cover',
  },
  ios: {
    bundleIdentifier: APP_ID,
    userInterfaceStyle: 'automatic',
    associatedDomains: [
      'applinks:app-dev.kirvano.com',
      'applinks:app-stg.kirvano.com',
      'applinks:app-qa3.kirvano.com',
      'applinks:app-qa2.kirvano.com',
      'applinks:app-qa.kirvano.com',
      'applinks:app.kirvano.com',
    ],
    config: {
      usesNonExemptEncryption: false,
    },
    infoPlist: {
      NSCameraUsageDescription: 'Allow $(PRODUCT_NAME) to access camera.',
      NSMicrophoneUsageDescription:
        'Allow $(PRODUCT_NAME) to access your microphone.',
      NSPhotoLibraryUsageDescription:
        'Allow $(PRODUCT_NAME) permission to access your location.',
      NSLocationAlwaysUsageDescription:
        'Allow $(PRODUCT_NAME) permission to save photos.',
      NSLocationWhenInUseUsageDescription:
        'Allow $(PRODUCT_NAME) to save photos.',
    },
    privacyManifests: {
      NSPrivacyAccessedAPITypes: [
        {
          NSPrivacyAccessedAPIType: 'NSPrivacyAccessedAPICategoryDiskSpace',
          NSPrivacyAccessedAPITypeReasons: ['85F4.1'],
        },
        {
          NSPrivacyAccessedAPIType: 'NSPrivacyAccessedAPICategoryFileTimestamp',
          NSPrivacyAccessedAPITypeReasons: ['DDA9.1', '3B52.1'],
        },
      ],
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/icon.png',
      backgroundColor: '#051726',
    },
    userInterfaceStyle: 'automatic',
    package: APP_ID,
    permissions: [
      'android.permission.CAMERA',
      'android.permission.RECORD_AUDIO',
    ],
    intentFilters: [
      {
        action: 'VIEW',
        autoVerify: true,
        data: [
          {
            scheme: 'https',
            host: 'app-stg.kirvano.com',
            pathPrefix: '/email-confirmation/',
          },
          {
            scheme: 'https',
            host: 'app-stg.kirvano.com',
            pathPrefix: '/contact-update/email-validation/',
          },
          {
            scheme: 'https',
            host: 'app-stg.kirvano.com',
            pathPrefix: '/reset-password/',
          },
          {
            scheme: 'https',
            host: 'app-qa.kirvano.com',
            pathPrefix: '/email-confirmation/',
          },
          {
            scheme: 'https',
            host: 'app-qa.kirvano.com',
            pathPrefix: '/contact-update/email-validation/',
          },
          {
            scheme: 'https',
            host: 'app-qa.kirvano.com',
            pathPrefix: '/reset-password/',
          },
          {
            scheme: 'https',
            host: 'app.kirvano.com',
            pathPrefix: '/email-confirmation/',
          },
          {
            scheme: 'https',
            host: 'app.kirvano.com',
            pathPrefix: '/contact-update/email-validation/',
          },
          {
            scheme: 'https',
            host: 'app.kirvano.com',
            pathPrefix: '/reset-password/',
          },
        ],
        category: ['BROWSABLE', 'DEFAULT'],
      },
    ],
  },
  owner: 'kirvano',
  experiments: {
    typedRoutes: true,
    tsconfigPaths: true,
  },
  plugins: [
    'expo-router',
    'expo-font',
    [
      'expo-image-picker',
      {
        photosPermission:
          'The app accesses your photos to let you share them with your friends.',
      },
    ],
    [
      'expo-document-picker',
      {
        iCloudContainerEnvironment: 'Production',
      },
    ],
    [
      'onesignal-expo-plugin',
      {
        mode: 'production',
      },
    ],
    [
      '@sentry/react-native/expo',
      {
        url: 'https://sentry.io/',
        organization: 'kirvano',
        project: 'app-mobile',
      },
    ],
  ],
};

export default config;
