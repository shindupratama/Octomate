import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Alert, StatusBar} from 'react-native';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeStackScreen, MainTabScreen, navigationRef, isMountedRef } from './routes';

const AppStack = createStackNavigator();

class Navigation extends Component {

  render() {
    // console.log('props Navigation :', this.props.token);
    return (
      <NavigationContainer ref={navigationRef}>
        <StatusBar barStyle="dark-content" backgroundColor="#5cb8b2" />
        <AppStack.Navigator headerMode="none">
          {this.props.associateAuthToken ? <AppStack.Screen name="Main" component={MainTabScreen} /> : <AppStack.Screen name="Login" component={WelcomeStackScreen} />}
        </AppStack.Navigator>
      </NavigationContainer>

      // <NavigationContainer ref={navigationRef}>
      //   <StatusBar barStyle="light-content" backgroundColor="#15a171" />
      //   <AppStack.Navigator headerMode="none">
      //     <AppStack.Screen name="Login" component={WelcomeStackScreen} />
      //     {/* <AppStack.Screen name="Main" component={MainTabScreen} />  */}
      //   </AppStack.Navigator>
      // </NavigationContainer>
    );
  };
}

const mapStateToProps = (state) => {
    return {
      loading: state.login.loading,
      error: state.login.error,
      response: state.login.response,
      associateAuthToken: state.login.associateAuthToken
    };
  };
  
Navigation = connect(mapStateToProps, {})(Navigation);
  
export default Navigation;