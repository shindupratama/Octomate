import * as React from 'react';
import { Button, Dimensions, View } from 'react-native';
import { Badge, Text} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  Assignments,
  Claims,
  Home,
  Leave,
  Login,
  Map,
  NewClaimReport,
  Payslip,
  Profile,
  Roster,
  Settings,
  TimeIn,
  Timesheet,
  Wallet
 } from '../screens';
import { logoutFetch } from '../redux/actions/LoginAction';

const WelcomeStack = createStackNavigator();
const AssignmentsStack = createStackNavigator();
const ClaimsStack = createStackNavigator();
const HomeStack = createStackNavigator();
const LeaveStack = createStackNavigator();
const PayslipStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const RosterStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const TimeInStack = createStackNavigator();
const TimesheetStack = createStackNavigator();
const WalletStack = createStackNavigator();
const Drawer = createDrawerNavigator();

export const isMountedRef = React.createRef();
export const navigationRef = React.createRef();

export const navigate = (name, params) => {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export const WelcomeStackScreen = () => {
  return (
    <WelcomeStack.Navigator headerMode="none">
      <WelcomeStack.Screen name="Login" component={Login} />
    </WelcomeStack.Navigator>
  );
}

const AssignmentsStackScreen = ({ navigation }) => {
  return (
    <AssignmentsStack.Navigator screenOptions={{ 
      headerTitleAlign: 'center',
      headerStyle: { backgroundColor: '#5cb8b2' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' }
    }}>
      <AssignmentsStack.Screen name="Assignments" component={Assignments} options={({ navigation }) => ({
        title: 'Assignments',
        headerLeft: () => (
          <Icon.Button name='menu' size={25} backgroundColor='#5cb8b2' onPress={() => {navigation.openDrawer()}} />
        ),
        headerRight: () => (
          <View style={{flexDirection: 'row'}}>
            <Icon.Button name='bell' size={25} backgroundColor='#5cb8b2' />
            <Badge danger style={{position: 'absolute', right: 5, top: -5, scaleX: 0.8, scaleY: 0.8}}>
              <Text>2</Text>
            </Badge>
          </View>
        ),
      })}/>
    </AssignmentsStack.Navigator>
  );
}

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator screenOptions={{ 
      headerTitleAlign: 'center',
      headerStyle: { backgroundColor: '#5cb8b2' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' }
    }}>
      <HomeStack.Screen name="Home" component={Home} options={({ navigation }) => ({
        title: 'Home',
        headerLeft: () => (
          <Icon.Button name='menu' size={25} backgroundColor='#5cb8b2' onPress={() => {navigation.openDrawer()}} />
        ),
        headerRight: () => (
          <View style={{flexDirection: 'row'}}>
            <Icon.Button name='bell' size={25} backgroundColor='#5cb8b2' />
            <Badge danger style={{position: 'absolute', right: 5, top: -5, scaleX: 0.8, scaleY: 0.8}}>
              <Text>2</Text>
            </Badge>
          </View>
        ),
      })}/>
    </HomeStack.Navigator>
  );
}

const ProfileStackScreen = ({ navigation }) => {
  return (
    <ProfileStack.Navigator screenOptions={{ 
      headerTitleAlign: 'center',
      headerStyle: { backgroundColor: '#5cb8b2' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' }
    }}>
      <ProfileStack.Screen name="Profile" component={Profile} options={({ navigation }) => ({
        title: 'Profile',
        headerLeft: () => (
          <Icon.Button name='menu' size={25} backgroundColor='#5cb8b2' onPress={() => {navigation.openDrawer()}} />
        ),
        headerRight: () => (
          <View style={{flexDirection: 'row'}}>
            <Icon.Button name='bell' size={25} backgroundColor='#5cb8b2' />
            <Badge danger style={{position: 'absolute', right: 5, top: -5, scaleX: 0.8, scaleY: 0.8}}>
              <Text>2</Text>
            </Badge>
          </View>
        ),
      })} />
      <ProfileStack.Screen name="Time In" component={TimeIn} />
      <ProfileStack.Screen name="Map" component={Map} options={({ navigation }) => ({
        title: 'Time In'
      })}/>
    </ProfileStack.Navigator>
  );
}

const TimesheetStackScreen = () => {
  return (
    <TimesheetStack.Navigator screenOptions={{ 
      headerTitleAlign: 'center',
      headerStyle: { backgroundColor: '#5cb8b2' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' }
    }}>
      <TimesheetStack.Screen name="Timesheet" component={Timesheet} options={({ navigation }) => ({
        title: 'Timesheet',
        headerLeft: () => (
          <Icon.Button name='menu' size={25} backgroundColor='#5cb8b2' onPress={() => {navigation.openDrawer()}} />
        ),
        headerRight: () => (
          <View style={{flexDirection: 'row'}}>
            <Icon.Button name='bell' size={25} backgroundColor='#5cb8b2' />
            <Badge danger style={{position: 'absolute', right: 5, top: -5, scaleX: 0.8, scaleY: 0.8}}>
              <Text>2</Text>
            </Badge>
          </View>
        ),
      })} />
    </TimesheetStack.Navigator>
  );
}

const ClaimsStackScreen = () => {
  return (
    <ClaimsStack.Navigator screenOptions={{ 
      headerTitleAlign: 'center',
      headerStyle: { backgroundColor: '#5cb8b2' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' }
    }}>
      <ClaimsStack.Screen name="Claims" component={Claims} options={({ navigation }) => ({
        title: 'Claims',
        headerLeft: () => (
          <Icon.Button name='menu' size={25} backgroundColor='#5cb8b2' onPress={() => {navigation.openDrawer()}} />
        ),
        headerRight: () => (
          <View style={{flexDirection: 'row'}}>
            <Icon.Button name='bell' size={25} backgroundColor='#5cb8b2' />
            <Badge danger style={{position: 'absolute', right: 5, top: -5, scaleX: 0.8, scaleY: 0.8}}>
              <Text>2</Text>
            </Badge>
          </View>
        ),
      })} />
      <ClaimsStack.Screen name="New Claim Report" component={NewClaimReport} />
    </ClaimsStack.Navigator>
  );
}

const LeaveStackScreen = () => {
  return (
    <LeaveStack.Navigator screenOptions={{ 
      headerTitleAlign: 'center',
      headerStyle: { backgroundColor: '#5cb8b2' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' }
    }}>
      <LeaveStack.Screen name="Leave" component={Leave} options={({ navigation }) => ({
        title: 'Leave',
        headerLeft: () => (
          <Icon.Button name='menu' size={25} backgroundColor='#5cb8b2' onPress={() => {navigation.openDrawer()}} />
        ),
        headerRight: () => (
          <View style={{flexDirection: 'row'}}>
            <Icon.Button name='bell' size={25} backgroundColor='#5cb8b2' />
            <Badge danger style={{position: 'absolute', right: 5, top: -5, scaleX: 0.8, scaleY: 0.8}}>
              <Text>2</Text>
            </Badge>
          </View>
        ),
      })} />
    </LeaveStack.Navigator>
  );
}

const RosterStackScreen = () => {
  return (
    <RosterStack.Navigator screenOptions={{ 
      headerTitleAlign: 'center',
      headerStyle: { backgroundColor: '#5cb8b2' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' }
    }}>
      <RosterStack.Screen name="Roster" component={Roster} options={({ navigation }) => ({
        title: 'Roster',
        headerLeft: () => (
          <Icon.Button name='menu' size={25} backgroundColor='#5cb8b2' onPress={() => {navigation.openDrawer()}} />
        ),
        headerRight: () => (
          <View style={{flexDirection: 'row'}}>
            <Icon.Button name='bell' size={25} backgroundColor='#5cb8b2' />
            <Badge danger style={{position: 'absolute', right: 5, top: -5, scaleX: 0.8, scaleY: 0.8}}>
              <Text>2</Text>
            </Badge>
          </View>
        ),
      })} />
    </RosterStack.Navigator>
  );
}

const PayslipStackScreen = () => {
  return (
    <PayslipStack.Navigator screenOptions={{ 
      headerTitleAlign: 'center',
      headerStyle: { backgroundColor: '#5cb8b2' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' }
    }}>
      <PayslipStack.Screen name="Payslip" component={Payslip} options={({ navigation }) => ({
        title: 'Payslip',
        headerLeft: () => (
          <Icon.Button name='menu' size={25} backgroundColor='#5cb8b2' onPress={() => {navigation.openDrawer()}} />
        ),
        headerRight: () => (
          <View style={{flexDirection: 'row'}}>
            <Icon.Button name='bell' size={25} backgroundColor='#5cb8b2' />
            <Badge danger style={{position: 'absolute', right: 5, top: -5, scaleX: 0.8, scaleY: 0.8}}>
              <Text>2</Text>
            </Badge>
          </View>
        ),
      })} />
    </PayslipStack.Navigator>
  );
}

const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator screenOptions={{ 
      headerTitleAlign: 'center',
      headerStyle: { backgroundColor: '#5cb8b2' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' }
    }}>
      <SettingsStack.Screen name="Settings" component={Settings} options={({ navigation }) => ({
        title: 'Settings',
        headerLeft: () => (
          <Icon.Button name='menu' size={25} backgroundColor='#5cb8b2' onPress={() => {navigation.openDrawer()}} />
        ),
        headerRight: () => (
          <View style={{flexDirection: 'row'}}>
            <Icon.Button name='bell' size={25} backgroundColor='#5cb8b2' />
            <Badge danger style={{position: 'absolute', right: 5, top: -5, scaleX: 0.8, scaleY: 0.8}}>
              <Text>2</Text>
            </Badge>
          </View>
        ),
      })} />
    </SettingsStack.Navigator>
  );
}

const WalletStackScreen = () => {
  return (
    <WalletStack.Navigator screenOptions={{ 
      headerTitleAlign: 'center',
      headerStyle: { backgroundColor: '#5cb8b2' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' }
    }}>
      <WalletStack.Screen name="Wallet" component={Wallet} options={({ navigation }) => ({
        title: 'My Wallet',
        headerLeft: () => (
          <Icon.Button name='menu' size={25} backgroundColor='#5cb8b2' onPress={() => {navigation.openDrawer()}} />
        ),
        headerRight: () => (
          <View style={{flexDirection: 'row'}}>
            <Icon.Button name='bell' size={25} backgroundColor='#5cb8b2' />
            <Badge danger style={{position: 'absolute', right: 5, top: -5, scaleX: 0.8, scaleY: 0.8}}>
              <Text>2</Text>
            </Badge>
          </View>
        ),
      })} />
    </WalletStack.Navigator>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

let CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {/* <DrawerItem
        icon={({color, size}) => (
          <Icon 
            name="home" 
            color={'#5cb8b2'}
            size={20}
          />
        )}
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
      /> */}
      <DrawerItem
        label="LOGOUT"
        labelStyle={{fontSize: 16, color: 'red', fontWeight: 'bold'}}
        onPress={() => props.logoutFetch()}
      />
    </DrawerContentScrollView>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.login.token
  };
};

CustomDrawerContent = connect(mapStateToProps, {logoutFetch})(CustomDrawerContent);

export const MainTabScreen = ({ navigation }) => {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContentOptions={{activeTintColor: '#5cb8b2'}} drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeStackScreen} options={{
          title: 'Home',
          drawerIcon: ({focused, size}) => (
            <Icon
                name="home"
                size={size}
                color={focused ? '#5cb8b2' : '#ccc'}
            />
          ),
      }} />
      <Drawer.Screen name="Profile" component={ProfileStackScreen} options={{
          title: 'Profile',
          drawerIcon: ({focused, size}) => (
            <Ionicons
                name="person-circle-outline"
                size={size}
                color={focused ? '#5cb8b2' : '#ccc'}
            />
          ),
      }} />
      <Drawer.Screen name="Assignments" component={AssignmentsStackScreen} options={{
          title: 'Assignments',
          drawerIcon: ({focused, size}) => (
            <Icon
                name="file-document"
                size={size}
                color={focused ? '#5cb8b2' : '#ccc'}
            />
          ),
      }} />
      <Drawer.Screen name="Timesheet" component={TimesheetStackScreen} options={{
          title: 'Timesheet',
          drawerIcon: ({focused, size}) => (
            <Icon
                name="calendar-month-outline"
                size={size}
                color={focused ? '#5cb8b2' : '#ccc'}
            />
          ),
      }} />
      <Drawer.Screen name="Claims" component={ClaimsStackScreen} options={{
          title: 'Claims',
          drawerIcon: ({focused, size}) => (
            <Ionicons
                name="shield-checkmark-outline"
                size={size}
                color={focused ? '#5cb8b2' : '#ccc'}
            />
          ),
      }} />
      <Drawer.Screen name="Leave" component={LeaveStackScreen} options={{
          title: 'Leave',
          drawerIcon: ({focused, size}) => (
            <Icon
                name="logout"
                size={size}
                color={focused ? '#5cb8b2' : '#ccc'}
            />
          ),
      }} />
      <Drawer.Screen name="Roster" component={RosterStackScreen} options={{
          title: 'Roster',
          drawerIcon: ({focused, size}) => (
            <Icon
                name="calendar-text-outline"
                size={size}
                color={focused ? '#5cb8b2' : '#ccc'}
            />
          ),
      }} />
      <Drawer.Screen name="Payslip" component={PayslipStackScreen} options={{
          title: 'Payslip',
          drawerIcon: ({focused, size}) => (
            <Icon
                name="text-box-multiple-outline"
                size={size}
                color={focused ? '#5cb8b2' : '#ccc'}
            />
          ),
      }} />
      <Drawer.Screen name="Settings" component={SettingsStackScreen} options={{
          title: 'Settings',
          drawerIcon: ({focused, size}) => (
            <Ionicons
                name="settings-sharp"
                size={size}
                color={focused ? '#5cb8b2' : '#ccc'}
            />
          ),
      }} />
      <Drawer.Screen name="Wallet" component={WalletStackScreen} options={{
          title: 'My Wallet',
          drawerIcon: ({focused, size}) => (
            <Ionicons
                name="briefcase-outline"
                size={size}
                color={focused ? '#5cb8b2' : '#ccc'}
            />
          ),
      }} />
    </Drawer.Navigator>
  );
}