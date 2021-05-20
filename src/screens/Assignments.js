import React, { Component } from 'react';
import { ActivityIndicator, Image, ImageBackground, TouchableOpacity, View } from 'react-native';
import { Card, CardItem, Form, Icon, Item, Input, Label, Button, Root, Text, Toast } from 'native-base';
import { connect } from 'react-redux';

class Assignments extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 36, fontWeight: 'bold'}}>Assignments</Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.login.loading,
    error: state.login.error,
    email: state.login.email,
    password: state.login.password
  };
};

Assignments = connect(mapStateToProps, {})(Assignments);

export {Assignments};