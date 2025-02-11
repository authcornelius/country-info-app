import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import store from './redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screen/Home';
import Detail from './screen/Detail';
import { ThemeProvider } from './component/ThemeContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen 
              name="Home" 
              component={Home} 
            />
            <Stack.Screen 
              name="Detail" 
              component={Detail} 
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
}
