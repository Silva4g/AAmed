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
        title: 'Cadastro'
      }
    },
    ForgotPassword: {
      screen: ForgotPassword,
      navigationOptions: {
        title: 'ForgotPassword',
        headerTitleAlign: 'center',
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
        headerPressColorAndroid: '#fff',
        headerTitleStyle: {
          color: '#fff',
        },
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#52c8fa'
        }
      }
    })
);

export default Routes;