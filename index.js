import { AppRegistry, Dimensions} from 'react-native';
import { DrawerNavigator } from 'react-navigation';

//Components
import HeaderComponent from './src/components/HeaderComponent';
import HomeScreen from './src/screens/Home';
import LoginScreen from './src/screens/Login';
import SettingsScreen from './src/screens/Settings';
//import App from './App';

var{height,width} = Dimensions.get('window');

let drawerRouteConfig = {
    Home: {
        screen:HomeScreen,
    },
    Settings: {
        screen: SettingsScreen,
    },
    Login: {
        screen: LoginScreen,
    },
};
let drawerNavConfig = {
    initialRouteName:'Login',
    drawerWidth: width / 2,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRouteRoute: 'DrawerToggle',
    contentOptions: {
        activeTintColor:'#265ae3',
    }
};

const App = DrawerNavigator(drawerRouteConfig,drawerNavConfig);

AppRegistry.registerComponent('syeApp', () => App);
