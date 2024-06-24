module.exports = [
  {
    env: 'development',
    infoBase: {
      baseURL: 'https://app-api-dev.kirvano.com',
      headers: {
        Accept: 'application/json',
        Origin: 'https://app-dev.kirvano.com',
        'Content-Type': 'application/json',
      },
      timeout: 50000,
    },
    mobile: {
      app_name: 'Kirvano DEV',
      avatar_url: 'https://app-api-stg.kirvano.com/users/update-photo',
      isTesting: true,
    },
  },
  {
    env: 'production',
    infoBase: {
      baseURL: 'https://app-api.kirvano.com',
      headers: {
        Accept: 'application/json',
        Origin: 'https://app.kirvano.com',
        'Content-Type': 'application/json',
      },
      timeout: 50000,
    },
    mobile: {
      app_name: 'Kirvano',
      avatar_url: 'https://app-api.kirvano.com/users/update-photo',
      isTesting: false,
    },
  },
  {
    env: 'sandbox-qa',
    infoBase: {
      baseURL: 'https://app-api-qa.kirvano.com',
      headers: {
        Accept: 'application/json',
        Origin: 'https://app-qa.kirvano.com',
        'Content-Type': 'application/json',
      },
      timeout: 50000,
    },
    mobile: {
      app_name: 'Kirvano QA',
      avatar_url: 'https://app-api-qa.kirvano.com/users/update-photo',
      isTesting: true,
    },
  },
  {
    env: 'sandbox-qa2',
    infoBase: {
      baseURL: 'https://app-api-qa2.kirvano.com',
      headers: {
        Accept: 'application/json',
        Origin: 'https://app-qa2.kirvano.com',
        'Content-Type': 'application/json',
      },
      timeout: 50000,
    },
    mobile: {
      app_name: 'Kirvano QA2',
      avatar_url: 'https://app-api-qa2.kirvano.com/users/update-photo',
      isTesting: true,
    },
  },
  {
    env: 'sandbox-stg',
    infoBase: {
      baseURL: 'https://app-api-stg.kirvano.com',
      headers: {
        Accept: 'application/json',
        Origin: 'https://app-stg.kirvano.com',
        'Content-Type': 'application/json',
      },
      timeout: 50000,
    },
    mobile: {
      app_name: 'Kirvano STG',
      avatar_url: 'https://app-api-stg.kirvano.com/users/update-photo',
      isTesting: true,
    },
  },
];
