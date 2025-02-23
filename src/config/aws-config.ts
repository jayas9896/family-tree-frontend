import { Amplify } from "aws-amplify";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.REACT_APP_AWS_USER_POOL_ID as string,
      userPoolClientId: process.env.REACT_APP_AWS_USER_POOL_CLIENT_ID as string,
      loginWith: {
        oauth: {
          domain: process.env.REACT_APP_AWS_COGNITO_DOMAIN as string,
          scopes: ["email", "openid", "profile", "aws.cognito.signin.user.admin"],
          redirectSignIn: process.env.REACT_APP_AWS_COGNITO_REDIRECT_SIGN_IN as unknown as string[],
          redirectSignOut: process.env.REACT_APP_AWS_COGNITO_REDIRECT_SIGN_OUT as unknown as string[],
          responseType: "code", // or 'token', note that REFRESH token will only be generated when the responseType is
        },
        email: true,
        username: true,
        phone: true,
      }
    },
  },
    API: {
        REST: {
          FamilyTree: {
              endpoint: process.env.REACT_APP_API_URL as string,
              region: process.env.REACT_APP_AWS_REGION,
              service: "execute-api",
          },
        },
    },
});