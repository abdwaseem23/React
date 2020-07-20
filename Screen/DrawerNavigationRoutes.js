/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import Navigators
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

//Import External Screens
import HomeScreen from './drawerScreens/HomeScreen';
// import SettingsScreen from './drawerScreens/SettingsScreen';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';
import FeedbackScreen from './drawerScreens/FeedbackScreen';
import ContactUsScreen from './drawerScreens/ContactUsScreen';
import CompletedCaseScreen from './drawerScreens/CompletedCaseScreen';
import CaseUploadScreen from './drawerScreens/CaseUploadScreen';
import AboutUsScreen from './drawerScreens/AboutUsScreen';
import MyInformationScreen from './drawerScreens/MyInformationScreen';

const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Home Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});

// const SecondActivity_StackNavigator = createStackNavigator({
//   First: {
//     screen: SettingsScreen,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Setting Screen',
//       headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
//       headerStyle: {
//         backgroundColor: '#307ecc',
//       },
//       headerTintColor: '#fff',
//     }),
//   },
// });

const ThirdActivity_StackNavigator = createStackNavigator({
  First: {
    screen: FeedbackScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Feedback Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});

const ForthActivity_StackNavigator = createStackNavigator({
  First: {
    screen: ContactUsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Contact Us Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});

const FifthActivity_StackNavigator = createStackNavigator({
  First: {
    screen: CompletedCaseScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Completed Cases Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});

const SixthActivity_StackNavigator = createStackNavigator({
  First: {
    screen: CaseUploadScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Case Upload Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});

const SeventhActivity_StackNavigator = createStackNavigator({
  First: {
    screen: AboutUsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'About Us Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});

const EightActivity_StackNavigator = createStackNavigator({
  First: {
    screen: MyInformationScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'My Information Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});

const DrawerNavigatorRoutes = createDrawerNavigator(
  {
    HomeScreen: {
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Home Screen',
      },
    },
    // SettingsScreen: {
    //   screen: SecondActivity_StackNavigator,
    //   navigationOptions: {
    //     drawerLabel: 'Setting Screen',
    //   },
    // },
  },
  {
   FeedbackScreen: {
      screen: ThirdActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Feedback Screen',
      },
    }
  },
  {
    ContactUsScreen: {
       screen: ForthActivity_StackNavigator,
       navigationOptions: {
         drawerLabel: 'Contact Us Screen',
       },
     }
   },
   {
    CompletedCasesScreen: {
       screen: FifthActivity_StackNavigator,
       navigationOptions: {
         drawerLabel: 'Completed Cases Screen',
       },
     }
   },
   {
    CaseUploadScreen: {
       screen: SixthActivity_StackNavigator,
       navigationOptions: {
         drawerLabel: 'Case Upload Screen',
       },
     }
   },
   {
    AboutUsScreen: {
       screen: SeventhActivity_StackNavigator,
       navigationOptions: {
         drawerLabel: 'About Us Screen',
       },
     }
   },
   {
    MyInformationScreen: {
       screen: EightActivity_StackNavigator,
       navigationOptions: {
         drawerLabel: 'My Information Screen',
       },
     }
   },
  {
    contentComponent: CustomSidebarMenu,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  }
);
export default DrawerNavigatorRoutes;