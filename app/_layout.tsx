import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import { store } from '../src/store';
import { useEffect } from 'react';
import { initDatabase } from '../src/db/database';
import { configureSentry } from '../src/services/monitoring';
export default function RootLayout() {
 useEffect(()=>{initDatabase().catch(console.error);configureSentry();},[]);
 return <Provider store={store}><Stack screenOptions={{headerShown:false}} /></Provider>;
}
