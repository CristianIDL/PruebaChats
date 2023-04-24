import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chats from './pages/Chats';
import ChatScreen from './pages/ChatScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Chats" 
          component={Chats}
          options={{ title: 'SONA', headerTintColor:"#FFF", headerTitleStyle: {fontWeight: 'bold', fontSize: 40}, headerStyle: {backgroundColor: '#6B123C',}, }}  
        />
        <Stack.Screen 
          name="Inbox" 
          component={ChatScreen}
          options={({route}) => ({ title: route.params.userName, headerTintColor:"#FFF", headerTitleStyle: {fontWeight: 'bold', fontSize: 30}, headerStyle: {backgroundColor: '#6B123C',}, })}  
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}