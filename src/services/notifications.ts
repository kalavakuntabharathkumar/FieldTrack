import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
Notifications.setNotificationHandler({handleNotification:async()=>({shouldShowAlert:true,shouldPlaySound:false,shouldSetBadge:false,shouldShowBanner:true,shouldShowList:true})});
export async function registerForNotifications(){if(Platform.OS==='android')await Notifications.setNotificationChannelAsync('default',{name:'default',importance:Notifications.AndroidImportance.DEFAULT});const permission=await Notifications.requestPermissionsAsync();if(!permission.granted)return null;return Notifications.getExpoPushTokenAsync();}
