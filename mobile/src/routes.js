import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Map from './screens/Map';
import ForgotPassword from './screens/ForgotPassword';
import Register from './screens/Register';
import Login from './screens/Login';

const Routes = createAppContainer(
  createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions: {
        title: 'Login'
      }
    },
    Register: {
      screen: Register,
      navigationOptions: {
        title: 'Register yourself'
      }
    },
    ForgotPassword: {
      screen: ForgotPassword,
      navigationOptions: {
        title: 'ForgotPassword',
        headerTitleAlign: 'center',
        backgroundColor: '#737b'
      }
    },
    Map: {
      screen: Map,
      navigationOptions: {
        title: 'Map'
      }
    }
  },
    {
      initialRouteName: 'Login',
      defaultNavigationOptions: {
        gestureEnabled: true,
        gestureDirection: "horizontal",
        // headerBackground: '#fa97bc'
        headerPressColorAndroid: '#F90',
        headerTitleStyle: {
          color: '#5a55fc',
        },
        headerTintColor: '#b4d',
        headerStyle: {
          backgroundColor: '#ff4757'
        }
      }
    })
);

export default Routes;