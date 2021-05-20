import React, { Component } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { Button, Icon, Input, Item, Label, Left, Right, Text, Textarea } from 'native-base';
import { Picker } from '@react-native-picker/picker';
import { connect } from 'react-redux';

class NewClaimReport extends Component {
  state = {
    selected2: undefined
  };

  onValueChange2 = (value) => {
    this.setState({selected2: value});
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView>
          <View style={{borderBottomWidth: 1, borderBottomColor: '#ddd'}}>
            <View style={{margin: 15}}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>Draft Claim: November</Text>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>Role: Account Manager, Adecco Personnel</Text>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>Pte Ltd</Text>
            </View>
          </View>
          <View style={{margin: 15, borderBottomColor: '#ddd', borderBottomWidth: 1}}>
            <View style={{marginBottom: 10}}>
              <Item inlineLabel picker style={{borderBottomColor: '#fff', paddingBottom: 5}}>
                <Left style={{flex: 1}}>
                  <Label style={{fontSize: 16}}>Type of Claim</Label>
                </Left>
                <Right style={{flex: 2, backgroundColor: '#f0f0f0', borderRadius: 5}}>
                  <Picker
                    note
                    placeholderStyle={{ color: "#bfc6ea" }}
                    style={{ width: '100%' }}
                    selectedValue={this.state.selected2}
                    onValueChange={(value, index) => this.onValueChange2(value)}
                  >
                    <Picker.Item label="Wallet" value="key0" />
                    <Picker.Item label="ATM Card" value="key1" />
                    <Picker.Item label="Debit Card" value="key2" />
                    <Picker.Item label="Credit Card" value="key3" />
                    <Picker.Item label="Net Banking" value="key4" />
                  </Picker>
                </Right>
              </Item>
              <Item inlineLabel picker style={{borderBottomColor: '#fff', paddingBottom: 5}}>
                <Left style={{flex: 1}}>
                  <Label style={{fontSize: 16}}>Type of Sub Claim</Label>
                </Left>
                <Right style={{flex: 2, backgroundColor: '#f0f0f0', borderRadius: 5}}>
                  <Picker
                    note
                    placeholderStyle={{ color: "#bfc6ea" }}
                    style={{ width: '100%' }}
                    selectedValue={this.state.selected2}
                    onValueChange={(value, index) => this.onValueChange2(value)}
                  >
                    <Picker.Item label="Wallet" value="key0" />
                    <Picker.Item label="ATM Card" value="key1" />
                    <Picker.Item label="Debit Card" value="key2" />
                    <Picker.Item label="Credit Card" value="key3" />
                    <Picker.Item label="Net Banking" value="key4" />
                  </Picker>
                </Right>
              </Item>
              <Item inlineLabel style={{borderBottomColor: '#fff', paddingBottom: 5}}>
                <Left style={{flex: 1}}>
                  <Label style={{fontSize: 16}}>Receipt</Label>
                </Left>
                <Right style={{flex: 2, backgroundColor: '#fff', borderRadius: 5, height: 50, borderWidth: 1, borderColor: '#5cb8b2', borderStyle: 'dashed'}}>
                  <Button transparent iconLeft style={{alignSelf: 'center'}}>
                    <Icon type='MaterialIcons' name='file-upload' style={{color: '#5cb8b2'}} />
                    <Text uppercase={false} style={{color: '#5cb8b2', fontWeight: 'bold'}}>Upload</Text>
                  </Button>
                </Right>
              </Item>
              <Item inlineLabel style={{borderBottomColor: '#fff', paddingBottom: 5}}>
                <Left style={{flex: 1}}>
                  <Label style={{fontSize: 16}}>Receipt Date</Label>
                </Left>
                <Right style={{flex: 2, backgroundColor: '#f0f0f0', borderRadius: 5, height: 50}}>
                  <Input
                    style={{textAlign: 'left'}}
                    defaultValue={'DD/MM/YY'}
                    // onChangeText={(text) => this.props.loginEmailChanged(text)}
                  />
                  {/* <Icon type='Ionicons' name='calendar-outline' style={{justifyContent: 'center', alignItems: 'center'}} /> */}
                </Right>
              </Item>
              <Item inlineLabel style={{borderBottomColor: '#fff', paddingBottom: 5}}>
                <Left style={{flex: 1}}>
                  <Label style={{fontSize: 16}}>Currency</Label>
                </Left>
                <Right style={{flex: 2, backgroundColor: '#f0f0f0', borderRadius: 5, height: 50}}>
                  <Input
                    defaultValue={''}
                    // onChangeText={(text) => this.props.loginEmailChanged(text)}
                  />
                  {/* <Icon type='Ionicons' name='calendar-outline' style={{justifyContent: 'center', alignItems: 'center'}} /> */}
                </Right>
              </Item>
              <Item inlineLabel style={{borderBottomColor: '#fff', paddingBottom: 5}}>
                <Left style={{flex: 1}}>
                  <Label style={{fontSize: 16}}>Receipt Amount</Label>
                </Left>
                <Right style={{flex: 2, backgroundColor: '#f0f0f0', borderRadius: 5, height: 50}}>
                  <Input
                    placeholder={'SGD'}
                    defaultValue={''}
                    // onChangeText={(text) => this.props.loginEmailChanged(text)}
                  />
                </Right>
              </Item>
              <Item inlineLabel style={{borderBottomColor: '#fff', paddingBottom: 5}}>
                <Left style={{flex: 1}}>
                  <Label style={{fontSize: 16}}>Description</Label>
                </Left>
                <Right style={{flex: 2, backgroundColor: '#f0f0f0', borderRadius: 5, height: 100}}>
                  <Textarea placeholder="Textarea" style={{flex: 1}} />
                </Right>
              </Item>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 15, marginRight: 15, marginTop: 5, marginBottom: 20}}>
            <Button bordered block style={{flex: 1, backgroundColor: '#fff', borderColor: '#5cb8b2', borderRadius: 5, marginRight: 5}}>
              {!this.props.loading && <Text uppercase={false} style={{color: '#5cb8b2', fontSize: 16, fontWeight: 'bold'}}>Save</Text>}
              {this.props.loading && <ActivityIndicator size="large" color="#5cb8b2" />}
            </Button>
            <Button block style={{flex: 1, backgroundColor: '#5cb8b2', borderRadius: 5, marginLeft: 5}}>
              {!this.props.loading && <Text uppercase={false} style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>Submit</Text>}
              {this.props.loading && <ActivityIndicator size="large" color="#fff" />}
            </Button>
          </View>
        </ScrollView>
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

NewClaimReport = connect(mapStateToProps, {})(NewClaimReport);

export {NewClaimReport};