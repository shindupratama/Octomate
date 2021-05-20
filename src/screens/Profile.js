import React, { Component } from 'react';
import { ActivityIndicator, LogBox, FlatList, View, ScrollView } from 'react-native';
import { Body, Button, Card, CardItem, Icon, Left, List, ListItem, Text, Thumbnail } from 'native-base';
import { connect } from 'react-redux';
import { profileAnnouncementsFetch } from '../redux/actions/ProfileAction';

const DATA_1 = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Adecco',
    date: '07/10/2019',
    headline: 'A warm welcome onboard!',
    content: 'Hi all, here is a quick onboarding document'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second',
    date: '07/10/2019',
    headline: 'A warm welcome onboard!',
    content: 'Hi all, here is a quick onboarding document'
  }
];

const DATA_2 = [
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Your timesheet has not been submitted!',
    headline: 'Placement 09321 (IBM Singapore) From 12 Jan 2018 To 15 Dec 2018',
    start: 'Placement 09321 (IBM Singapore)',
    end: 'From 12 Jan 2018 To 15 Dec 2018'
  },
  {
    id: 'jsdk68afc-c605-48d3-a4f8-fbdjdga976y3',
    title: 'Your timesheet has not been submitted!',
    headline: 'Placement 09321 (IBM Singapore) From 12 Jan 2018 To 15 Dec 2018',
    start: 'Placement 09321 (IBM Singapore)',
    end: 'From 12 Jan 2018 To 15 Dec 2018'
  }
];

class Profile extends Component {
  componentDidMount() {
    LogBox.ignoreAllLogs();
    this.props.profileAnnouncementsFetch();
  }

  render() {
    console.log('props Profile :', this.props)
    return (
      <View style={{flex: 1, backgroundColor: '#f0f0f0'}}>
        <ScrollView>
          <View style={{flex: 0.4, backgroundColor: 'rgba(92, 184, 178, 0.3)', height: 120}}>
            <List style={{flex: 1}}>
              <ListItem avatar noBorder>
                <Left>
                  <Thumbnail style={{height: 90, width: 90, borderRadius: 90/2}} source={{ uri: 'https://media-exp1.licdn.com/dms/image/C5603AQGG8UXDc11Jaw/profile-displayphoto-shrink_200_200/0/1517572068264?e=1624492800&v=beta&t=_IOhAyxavfkV9CTjr2H0uNZkeRVUhS17v2S8Iq1hrf4' }} />
                </Left>
                <Body>
                  {this.props.associateData == '' && <Text style={{fontSize: 22, fontWeight: 'bold'}}>Shindu Bayu</Text>}
                  {this.props.associateData != '' && <Text style={{fontSize: 22, fontWeight: 'bold'}}>{this.props.associateData.name}</Text>}
                  <Button small bordered style={{backgroundColor: '#fff', borderRadius: 5, borderColor: '#fff', marginTop: 10}} onPress={() => this.props.navigation.navigate('Time In')}>
                    <Text uppercase={false} style={{color: '#5cb8b2', fontWeight: 'bold'}}>Clock In</Text>
                  </Button>
                </Body>
              </ListItem>
            </List>
          </View>
          <View style={{flex: 1.6, backgroundColor: '#f0f0f0'}}>
            <View style={{margin: 15}}>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon type='MaterialCommunityIcons' name='attachment' style={{color: '#b8b8b8', marginRight: 5}} />
                  <Text style={{fontWeight: 'bold', fontSize: 18}}>Announcements</Text>
                </View>
                <Text style={{color: '#5cb8b2'}}>View All</Text>
              </View>
              <View>
                <FlatList
                  horizontal={true}
                  data={DATA_1}
                  renderItem={({ item, index }) => (
                    <View>
                      <Card style={{borderRadius: 5}}>
                        <CardItem style={{flex: 1, borderRadius: 5}}>
                          <View style={{flexDirection: 'column'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                <Text style={{color: 'red', fontSize: 20, fontWeight: 'bold'}}>. <Text style={{color: '#000', fontWeight: 'bold'}}>{item.title}</Text></Text>
                                <Text style={{color: '#969696'}}>{item.date}</Text>
                            </View>
                            <View style={{flexDirection: 'column'}}>
                              <Text style={{fontWeight: 'bold', color: '#5cb8b2'}}>{item.headline}</Text>
                              <Text style={{ flexShrink: 1 }}>{item.content}</Text>
                              <Text>to get you started</Text>
                            </View>
                            <View style={{flexDirection: 'column', marginTop: 10}}>
                              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                <Button small bordered style={{backgroundColor: '#d9d9d9', borderRadius: 5, borderColor: '#fff'}}>
                                  <Text uppercase={false} style={{fontWeight: 'bold', color: '#000'}}>General</Text>
                                </Button>
                                <Text style={{color: '#5cb8b2'}}>Read More</Text>
                              </View>
                            </View>
                          </View>
                        </CardItem>
                      </Card>
                    </View>
                  )}
                  keyExtractor={item => item.id}
                />
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon type='MaterialCommunityIcons' name='calendar' style={{color: '#b8b8b8', marginRight: 5}} />
                  <Text style={{fontWeight: 'bold', fontSize: 18}}>Reminders</Text>
                </View>
              </View>
              <View>
                <FlatList
                  data={DATA_2}
                  renderItem={({ item, index }) => (
                    <View style={{flex: 1}}>
                      <Card style={{borderRadius: 5}}>
                        <CardItem style={{borderRadius: 5}}>
                          <View style={{flex: 1, flexDirection: 'column'}}>
                            <View style={{flexDirection: 'column'}}>
                              <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
                              <Text>{item.start}</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                              <Text style={{flex: 1, alignSelf: 'center', paddingRight: 5}}>{item.end}</Text>
                              <Button small bordered style={{backgroundColor: '#5cb8b2', borderRadius: 5, borderColor: '#fff', alignSelf: 'center', paddingLeft: 5}}>
                                <Text uppercase={false} style={{fontWeight: 'bold', color: '#fff'}}>Submit</Text>
                              </Button>
                            </View>
                          </View>
                        </CardItem>
                      </Card>
                    </View>
                  )}
                  keyExtractor={item => item.id}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.profile.loading,
    error: state.profile.error,
    associateData: state.login.associateData,
    associateAuthToken: state.login.associateAuthToken
  };
};

Profile = connect(mapStateToProps, {profileAnnouncementsFetch})(Profile);

export {Profile};