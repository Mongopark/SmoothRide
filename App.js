import { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Alert } from "react-native";
import Login from "./screen/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tripmap from "./screen/Tripmap";
import { Provider, useDispatch, useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { store, persistor } from "./store";
import Forgetpassword from "./screen/Forgetpassword";
import DriverProfile from "./screen/Drive/DriverProfile";
import RiderProfile from "./screen/rider/RiderProfile";
import RiderTrips from "./screen/rider/RiderTrips";
import RiderRequest from "./screen/rider/RiderRequest";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DriverTabNavigation from "./screen/Drive/DriverTabNavigation";
import { PersistGate } from "redux-persist/integration/react";
import RiderPaths from "./screen/rider/RiderPath";
import ExitDriverScreen from "./screen/Drive/ExitDriverScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import messaging from '@react-native-firebase/messaging';
// import messaging from "@react-native-firebase/messaging";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RiderTabNavigation } from "./screen/rider/RiderTabnavigation";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: false,
//     shouldSetBadge: false,
//   }),
// });

// Can use this function below OR use Expo's Push Notification Tool from: https://expo.dev/notifications


export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  

  // useEffect(() => {
  //   async function getNotificationPermission() {
  //     const { status } = await Notifications.getPermissionsAsync();
  //     if (status !== "granted") {
  //       const { status } = await Notifications.requestPermissionsAsync();
  //     }
  //     if (status !== "granted") {
  //       // Handle the case where the user declines permission
  //       console.log("Failed to get push token for push notification!");
  //       return;
  //     }
  
  //     let token;
  //     token = (await Notifications.getExpoPushTokenAsync()).data;
  
  //     console.log({ first_token: token });
  //     // Permission granted, handle accordingly
  //     // await AsyncStorage.setItem("PushToken", token);
  //     // const value = await AsyncStorage.getItem("PushToken");
  
  //     // console.log({ value });
  //     // setPushToken(value);
  //   }
  
  //   getNotificationPermission();
  //   // getNotificationPermission();
  // }, []);

  // useEffect(() => {
  //   registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

  //   notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
  //     setNotification(notification);
  //   });

  //   responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
  //     console.log(response);
  //   });

  //   return () => {
  //     Notifications.removeNotificationSubscription(notificationListener.current);
  //     Notifications.removeNotificationSubscription(responseListener.current);
  //   };
  // }, []);

  // useEffect(() => {
  //   const backgroundSubscription =
  //     Notifications.addNotificationResponseReceivedListener((response) => {
  //       console.log({ response });

  //       const data = response.notification.request.content.data;
  //       console.log(data)
  //       dispatch(NotificationDataModalFunC(true));

  //       dispatch(NotificationDataFunC(response));
  //     });

  //   const foregroundSubscription =
  //     Notifications.addNotificationReceivedListener((notification) => {
  //       console.log({ notification });

  //       dispatch(NotificationDataModalFunC(true));
  //       dispatch(NotificationDataFunC(notification));
  //     });

  //   return () => {
  //     backgroundSubscription.remove();
  //     foregroundSubscription.remove();
  //   };
  // }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: "white",
                },
              }}
            />

            <Stack.Screen
              name="TabNavigation"
              component={RiderTabNavigation}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="DriverTabNavigation"
              component={DriverTabNavigation}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="RiderPaths"
              component={RiderPaths}
              options={{
                headerShown: false,
              }}
            />
            {/* <Stack.Screen
            name="riderprofile"
            component={RiderProfile}
            options={{
              headerShown: false,
            }}
          /> */}

            <Stack.Screen
              name="forgetpassword"
              component={Forgetpassword}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="tripmap"
              component={Tripmap}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="exitdriver"
              component={ExitDriverScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
    // <View style={styles.container}>
    // <Text>it works</Text>
    // </View>
  );
}