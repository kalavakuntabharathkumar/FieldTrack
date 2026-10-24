import * as Sentry from '@sentry/react-native';
let configured=false;
export function configureSentry(){const dsn=process.env.EXPO_PUBLIC_SENTRY_DSN;if(dsn&&!configured){Sentry.init({dsn,sendDefaultPii:false,tracesSampleRate:0.1});configured=true;}}
export function captureError(error:unknown){if(configured)Sentry.captureException(error);}
