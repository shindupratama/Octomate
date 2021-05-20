import React, { Component } from 'react';
import { ActivityIndicator, Alert, View } from 'react-native';
import { Form, Icon, Item, Input, Button, Text } from 'native-base';
import { connect } from 'react-redux';
import { loginEmailChanged, loginPasswordChanged, loginFetch, clearLoginError } from '../redux/actions/LoginAction';

class Login extends Component {
  state = {
    show_password: false,
    validation: ''
  }

  onLoginPress = () => {
    if(this.props.email === '' && this.props.password === '') {
      Alert.alert(
        "Warning",
        "fill in the email & password!",
        [
          {
            text: "Cancel",
            onPress: () => console.log('error'),
            style: "cancel"
          }
        ],
        { cancelable: false }
      );
    } else if(this.props.email === '') {
        Alert.alert(
          "Warning",
          "fill in the email!",
          [
            {
              text: "Cancel",
              onPress: () => console.log('error'),
              style: "cancel"
            }
          ],
          { cancelable: false }
        );
    } else if(this.props.password === '') {
        Alert.alert(
          "Warning",
          "fill in the password!",
          [
            {
              text: "Cancel",
              onPress: () => console.log('error'),
              style: "cancel"
            }
          ],
          { cancelable: false }
        );
    } else {
        this.props.loginFetch(this.props.email, this.props.password);
    }
  }

  renderError = () => {
    if(this.props.error) {
      Alert.alert(
        "Error",
        `${this.props.error}`,
        [
          {
            text: "Cancel",
            onPress: () => this.props.clearLoginError(),
            style: "cancel"
          }
        ],
        { cancelable: false }
      )
    }
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#5cb8b2'}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <Icon type='Ionicons' name='apps' style={{color: '#fff', alignSelf: 'center', marginRight: 5}} />
          <Text style={{color: '#fff', fontSize: 36, fontWeight: 'bold', alignSelf: 'center'}}>octomate</Text>
        </View>
        <View style={{flex: 1}}>
          <View style={{flex: 1, margin: 10}}>
            <Form style={{flex: 1, borderBottomColor: '#fff'}}>
              <Item style={{marginLeft: 20, marginRight: 20}}>
                <Input
                  keyboardType={'email-address'}
                  style={{color: '#fff', textDecorationLine: 'none'}}
                  placeholder={"E-mail"}
                  placeholderTextColor={'#ddd'}
                  defaultValue={this.props.email}
                  onChangeText={(text) => this.props.loginEmailChanged(text)}
                />
              </Item>
              <Item style={{marginLeft: 20, marginRight: 20}}>
                <Input
                  style={{color: '#fff', textDecorationLine: 'none'}}
                  placeholder={"Password"}
                  placeholderTextColor={'#ddd'}
                  secureTextEntry={!this.state.show_password ? true : false}
                  defaultValue={this.props.password}
                  onChangeText={(text) => this.props.loginPasswordChanged(text)}
                />
                {!this.state.show_password && <Icon active type="MaterialCommunityIcons" name="eye-off" style={{color: '#fff'}} onPress={() => this.setState({show_password: true})} />}
                {this.state.show_password && <Icon active type="MaterialCommunityIcons" name="eye" style={{color: '#fff'}} onPress={() => this.setState({show_password: false})} />}
              </Item>
              <View style={{margin: 10}}>
                <Button block style={{height: 50, borderRadius: 5, backgroundColor: '#fff', margin: 10}} onPress={() => this.onLoginPress()}>
                    {!this.props.loading && <Text uppercase={false} style={{color: '#5cb8b2', fontSize: 16, fontWeight: 'bold'}}>Login</Text>}
                    {this.props.loading && <ActivityIndicator size="large" color="#5cb8b2" />}
                </Button>
              </View>
            </Form>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#fff', textDecorationLine: 'underline'}}>Forgot Password?</Text>
        </View>
        {this.renderError()}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.login.loading,
    error: state.login.error,
    email: state.login.email,
    password: state.login.password,
    associateData: state.login.associateData,
  };
};

Login = connect(mapStateToProps, { loginEmailChanged, loginPasswordChanged, loginFetch, clearLoginError})(Login);

export {Login};