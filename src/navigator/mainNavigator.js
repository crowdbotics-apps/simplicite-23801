import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial192191Navigator from '../features/Tutorial192191/navigator';
import NotificationList192163Navigator from '../features/NotificationList192163/navigator';
import Settings192162Navigator from '../features/Settings192162/navigator';
import Settings192154Navigator from '../features/Settings192154/navigator';
import UserProfile192152Navigator from '../features/UserProfile192152/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial192191: { screen: Tutorial192191Navigator },
NotificationList192163: { screen: NotificationList192163Navigator },
Settings192162: { screen: Settings192162Navigator },
Settings192154: { screen: Settings192154Navigator },
UserProfile192152: { screen: UserProfile192152Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
