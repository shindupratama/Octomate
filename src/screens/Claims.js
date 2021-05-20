import React, { Component } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { Body, Button, Card, CardItem, Fab, Icon, Left, List, ListItem, Right, Tab, Tabs, Text, Thumbnail } from 'native-base';
import { connect } from 'react-redux';

const DATA_1 = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    no: 'first',
    title: 'My Claim',
    headline: 'Applications',
    active: true
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    no: 'second',
    title: 'My Claim',
    headline: 'Entitlements',
    active: false
  },
  {
    id: 'nfke68afc-c605-48d3-a4f8-fbd91gjsla97f63',
    no: 'third',
    title: 'My Claim',
    headline: 'Drafts',
    active: false
  }
];

const DATA_2 = [
  {
    id: 'bd7rjfbea-c1b1-46c2-aed5-3ad5374hb28ba',
    claim_no: 'Claim #234276',
    role: 'Role: SIN8 Associate',
    amount: 'Amount $50.00',
    status: 'Approved',
    submit_on: 'Submitted on 11/03/2021, 09:21 PM',
    result: 'Approved on 11/02/2021, 11:00 PM'
  },
  {
    id: '3adsj8afc-c605-48d3-wkf8-fbd91vkd7f63',
    claim_no: 'Claim #234275',
    role: 'Role: SIN8 Associate',
    amount: 'Amount $50.00',
    status: 'Pending',
    submit_on: 'Submitted on 11/02/2021, 01:11 AM',
    result: 'Pending Client Approval'
  },
  {
    id: 'nfkjjs8afc-c605-48d3-amv8-fbd91gjslaiehdj63',
    claim_no: 'Claim #234275',
    role: 'Role: SIN8 Associate',
    amount: 'Amount $50.00',
    status: 'Rejected',
    submit_on: 'Submitted on 10/02/2021, 10:53 AM',
    result: 'Rejected on 11/02/2021, 12:53 PM'
  }
];

class Claims extends Component {
  state = {
    active: false
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#f0f0f0'}}>
        <View>
          {/* <FlatList
            horizontal={true}
            data={DATA_1}
            renderItem={({ item, index }) => (
              <View style={{flexDirection: 'row'}}>
                <Card style={{marginLeft: 5, marginRight: 5}}>
                  <CardItem>
                    <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                      <Icon type='MaterialCommunityIcons' name='calendar' style={{color: '#b8b8b8'}} />
                      <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
                      <Text style={{fontWeight: 'bold'}}>{item.headline}</Text>
                    </View>
                  </CardItem>
                </Card>
              </View>
            )}
            keyExtractor={item => item.id}
          /> */}
          <View style={{flexDirection: 'row'}}>
            <Card style={{flex: 1, marginLeft: 5, marginRight: 5}}>
              <CardItem>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                  <Icon type='MaterialCommunityIcons' name='calendar' style={{color: '#b8b8b8'}} />
                  <Text style={{fontWeight: 'bold', fontSize: 13}}>My Claim</Text>
                  <Text style={{fontWeight: 'bold', fontSize: 13}}>Applications</Text>
                </View>
              </CardItem>
            </Card>
            <Card style={{flex: 1, marginLeft: 5, marginRight: 5}}>
              <CardItem>
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                  <Icon type='AntDesign' name='filetext1' style={{color: '#b8b8b8'}} />
                  <Text style={{fontWeight: 'bold', fontSize: 13}}>My Claim</Text>
                  <Text style={{fontWeight: 'bold', fontSize: 13}}>Entitlements</Text>
                </View>
              </CardItem>
            </Card>
            <Card style={{flex: 1, marginLeft: 5, marginRight: 5}}>
              <CardItem style={{justifyContent: 'center', alignItems: 'center'}}>
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                  <Icon type='AntDesign' name='file1' style={{color: '#b8b8b8'}} />
                  <Text style={{fontWeight: 'bold', fontSize: 13}}>My Claim</Text>
                  <Text style={{fontWeight: 'bold', fontSize: 13}}>My Drafts</Text>
                </View>
              </CardItem>
            </Card>
          </View>
        </View>
        <View style={{flex: 0.13, backgroundColor: '#fff'}}>
          <Tabs tabBarUnderlineStyle={{backgroundColor: '#5cb8b2'}}>
            <Tab heading="All" tabStyle={{backgroundColor: '#fff'}} textStyle={{color: '#b5b3b3', fontSize: 12}} activeTabStyle={{backgroundColor: '#fff'}} activeTextStyle={{color: '#5cb8b2', fontWeight: 'normal', fontSize: 12}}>
              {/* <View style={{flex: 1, marginLeft: 15, marginRight: 15, marginTop: 10}}>
                <Button small iconRight block style={{backgroundColor: '#f0f0f0'}}>
                  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{color: '#999', }}>Sort by date submitted</Text>
                    <Icon type="FontAwesome" name='sort' style={{color: '#999'}} />
                  </View>
                </Button>
              </View> */}
            </Tab>
            <Tab heading="Approved" tabStyle={{backgroundColor: '#fff'}} textStyle={{color: '#b5b3b3', fontSize: 12}} activeTabStyle={{backgroundColor: '#fff'}} activeTextStyle={{color: '#5cb8b2', fontWeight: 'normal', fontSize: 12}}>
            </Tab>
            <Tab heading="Processed" tabStyle={{backgroundColor: '#fff'}} textStyle={{color: '#b5b3b3', fontSize: 12}} activeTabStyle={{backgroundColor: '#fff'}} activeTextStyle={{color: '#5cb8b2', fontWeight: 'normal', fontSize: 12}}>
            </Tab>
            <Tab heading="Pending" tabStyle={{backgroundColor: '#fff'}} textStyle={{color: '#b5b3b3', fontSize: 12}} activeTabStyle={{backgroundColor: '#fff'}} activeTextStyle={{color: '#5cb8b2', fontWeight: 'normal', fontSize: 12}}>
            </Tab>
            <Tab heading="Rejected" tabStyle={{backgroundColor: '#fff'}} textStyle={{color: '#b5b3b3', fontSize: 12}} activeTabStyle={{backgroundColor: '#fff'}} activeTextStyle={{color: '#5cb8b2', fontWeight: 'normal', fontSize: 12}}>
            </Tab>
          </Tabs>
        </View>
        <View style={{flex: 0.13, backgroundColor: '#fff'}}>
          <View style={{marginLeft: 15, marginRight: 15, marginTop: 10, backgroundColor: '#fff'}}>
            <Button small iconRight block style={{backgroundColor: '#f0f0f0'}}>
              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{color: '#999', }}>Sort by date submitted</Text>
                <Icon type="FontAwesome" name='sort' style={{color: '#999', fontSize: 12}} />
              </View>
            </Button>
          </View>
        </View>
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <FlatList
            data={DATA_2}
            renderItem={({ item, index }) => (
              <View style={{borderBottomColor: '#ddd', borderBottomWidth: 1}}>
                <List style={{marginBottom: 10}}>
                  <ListItem thumbnail noBorder style={{paddingTop: 0, paddingBottom: 0}}>
                    <Left>
                      <Thumbnail style={{width: 70}} square source={{ uri: 'https://www.nysenate.gov/sites/default/files/press-release/main-image/amazon_product_onboarding_0.jpg' }} />
                    </Left>
                    <Body>
                      <Text style={{color: '#5cb8b2', fontWeight: 'bold'}}>{item.claim_no}</Text>
                      <Text>{item.role}</Text>
                      <Text>{item.amount}</Text>
                    </Body>
                    <Right>
                      <Button small style={{borderRadius: 5, backgroundColor: `${item.status == 'Pending' ? '#ffcc80' : item.status == 'Approved' ? '#e6ee9c' : '#f48fb1'}`}}>
                        <Text uppercase={false} style={{color: '#000', fontWeight: 'bold'}}>{item.status}</Text>
                      </Button>
                    </Right>
                  </ListItem>
                  <ListItem noBorder style={{paddingTop: 0, paddingBottom: 0}}>
                    <Left>
                      <Text>{item.submit_on}</Text>
                    </Left>
                  </ListItem>
                  <ListItem noBorder style={{paddingTop: 0, paddingBottom: 0}}>
                    <Left>
                      <Text>{item.result}</Text>
                    </Left>
                    <Right>
                      <Text style={{color: '#5cb8b2', fontSize: 13, textDecorationLine: 'underline'}}>{item.status == 'Approved' ? 'View' : item.status == 'Pending' ? 'View/Edit' : 'See Remarks'}</Text>
                    </Right>
                  </ListItem>
                </List>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <View>
          <Fab
            active={this.state.active}
            direction="up"
            style={{ backgroundColor: '#5cb8b2' }}
            position="bottomRight"
            onPress={() => {
              this.setState({ active: !this.state.active });
              this.props.navigation.navigate('New Claim Report');
            }}>
            <Icon type="AntDesign" name="plus" />
          </Fab>
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

Claims = connect(mapStateToProps, {})(Claims);

export {Claims};