import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getMessaging, isSupported } from 'firebase/messaging';
const config={apiKey:process.env.EXPO_PUBLIC_FIREBASE_API_KEY,authDomain:process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,projectId:process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,messagingSenderId:process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,appId:process.env.EXPO_PUBLIC_FIREBASE_APP_ID};
export const firebaseApp=Object.values(config).every(Boolean)?(getApps()[0]||initializeApp(config)):null;
export const firebaseAuth=firebaseApp?getAuth(firebaseApp):null;
export async function getWebMessaging(){if(!firebaseApp||!(await isSupported()))return null;return getMessaging(firebaseApp);}
