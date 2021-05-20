import React, { Component } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, ScrollView, View, LogBox } from 'react-native';
import { Button, Icon, Left, List, ListItem, Right, Text } from 'native-base';
import { connect } from 'react-redux';
import { Calendar } from 'react-native-calendars';
import moment from 'moment/min/moment-with-locales';

const DATA = [
  {
    id: 'bbjacbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Another Associate',
    time: '05:00 PM TO 07:00 PM',
    hours: '02H 00M',
    break: '00H 00M',
    status: 'Submitted'
  },
  {
    id: '3akjj8afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'SIN8 Associate',
    time: '07:00 AM TO 02:00 PM',
    hours: '07H 00M',
    break: '01H 00M',
    status: 'Approved'
  },
  {
    id: 'nfkjsk8afc-c605-48d3-a4f8-fbd91gjsla97f63',
    title: 'SIN8 Associate',
    time: '07:00 AM TO 00:00 PM',
    hours: '03H 00M',
    break: '01H 00M',
    status: 'Rejected'
  }
];

const vacation = {key:'vacation', color: '#5cb8b2', selectedDotColor: 'blue'};
const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key:'workout', color: 'green'};

class Timesheet extends Component {
  componentDidMount() {
    LogBox.ignoreAllLogs();
  }

  renderCustomHeader = (date) => {
    const header = date.toString('MMMM yyyy');
    const [month, year] = header.split(' ');
  
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 10}}>
        <Icon type='AntDesign' name='calendar' style={{color: '#5cb8b2', marginRight: 5, fontSize: 18, fontWeight: 'bold'}} />
        <Text style={{marginLeft: 5, fontWeight: 'bold', paddingTop: 10, paddingBottom: 10, color: '#5cb8b2', paddingRight: 5}}>{`${month}`}</Text>
        <Text style={{marginRight: 5, fontWeight: 'bold', paddingTop: 10, paddingBottom: 10, color: '#5cb8b2', paddingRight: 5}}>{year}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView>
          <View style={{borderBottomColor: '#ddd', borderBottomWidth: 1}}>
            <Calendar
              current={Date()}
              minDate={'2012-05-10'}
              maxDate={'2012-05-30'}
              onDayPress={(day) => {console.log('selected day', day)}}
              onDayLongPress={(day) => {console.log('selected day', day)}}
              monthFormat={'yyyy MM'}
              onMonthChange={(month) => {console.log('month changed', month)}}
              hideArrows={false}
              hideExtraDays={true}
              disableMonthChange={false}
              firstDay={1}
              hideDayNames={false}
              showWeekNumbers={false}
              disableArrowLeft={false}
              disableArrowRight={false}
              disableAllTouchEventsForDisabledDays={true}
              renderHeader={this.renderCustomHeader}
              enableSwipeMonths={true}
              markedDates={{
                '2021-05-21': {dots: [vacation, massage, workout], selected: true, selectedColor: 'rgba(92, 184, 178, 0.5)'},
                '2017-10-26': {dots: [massage, workout], disabled: true}
              }}
              theme={{
                backgroundColor: '#ffffff',
                calendarBackground: '#ffffff',
                textSectionTitleColor: '#5cb8b2',
                textSectionTitleDisabledColor: '#d9e1e8',
                selectedDayBackgroundColor: '#00adf5',
                selectedDayTextColor: '#000',
                todayTextColor: '#00adf5',
                dayTextColor: '#000',
                textDisabledColor: '#000',
                dotColor: '#00adf5',
                selectedDotColor: '#ffffff',
                arrowColor: '#5cb8b2',
                disabledArrowColor: '#d9e1e8',
                textDayFontWeight: '300',
                textMonthFontWeight: 'bold',
                textDayHeaderFontWeight: '300',
                textDayFontSize: 16,
                textMonthFontSize: 16,
                textDayHeaderFontSize: 16
              }}
            />
            <View style={{flexDirection: 'row', alignItems: 'center', margin: 15, paddingVertical: 10, paddingHorizontal: 10}}>
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Icon type='AntDesign' name='exclamationcircleo' style={{color: '#b8b8b8', marginRight: 5, fontSize: 18}} />
                <Text style={{color: '#5cb8b2', flexWrap: 'wrap'}}>Tip: Tap and hold the date to add multiple timesheets</Text>
              </View>
            </View>
            <Button style={{borderRadius: 30, backgroundColor: '#5cb8b2', marginRight: 15, marginBottom: 10, alignSelf: 'flex-end'}}>
              <Icon type="AntDesign" name="plus" style={{fontSize: 14, fontWeight: 'bold'}} />
            </Button>
          </View>
          <View style={{borderBottomColor: '#ddd', borderBottomWidth: 1}}>
            <View style={{margin: 15}}>
              <Text style={{color: '#5cb8b2', fontSize: 12}}>{moment(new Date()).format('ddd DD')}</Text>
              <Text style={{fontWeight: 'bold'}}>{moment(new Date()).format('MMMM YYYY')}</Text>
            </View>
          </View>
          <View>
          <FlatList
            data={DATA}
            renderItem={({ item, index }) => (
              <View style={{borderBottomColor: '#ddd', borderBottomWidth: 1}}>
                <List style={{marginBottom: 10}}>
                  <ListItem noBorder style={{paddingTop: 10, paddingBottom: 0}}>
                    <Left style={{flex: 2}}>
                      <Text uppercase={false}>{item.title}</Text>
                    </Left>
                    <Right style={{flex: 1}}>
                      <Button small style={{borderRadius: 5, backgroundColor: `${item.status == 'Submitted' ? '#ffcc80' : item.status == 'Approved' ? '#e6ee9c' : '#f48fb1'}`}}>
                        <Text uppercase={false} style={{color: '#000', fontWeight: 'bold'}}>{item.status}</Text>
                      </Button>
                    </Right>
                  </ListItem>
                  <ListItem noBorder style={{paddingTop: 0, paddingBottom: 0}}>
                    <Left>
                      <Text style={{fontWeight: 'bold'}}>Time: <Text style={{fontWeight: 'normal'}}>{item.time}</Text></Text>
                    </Left>
                  </ListItem>
                  <ListItem noBorder style={{paddingTop: 0, paddingBottom: 0}}>
                    <Left>
                      <Text style={{fontWeight: 'bold'}}>Total Hours: <Text style={{fontWeight: 'normal'}}>{item.hours}</Text></Text>
                    </Left>
                  </ListItem>
                  <ListItem noBorder style={{paddingTop: 0, paddingBottom: 0}}>
                    <Left>
                      <Text style={{fontWeight: 'bold'}}>Break: <Text style={{fontWeight: 'normal'}}>{item.break}</Text></Text>
                    </Left>
                    <Right>
                      <Text style={{color: '#5cb8b2', fontSize: 13, textDecorationLine: 'underline'}}>{item.status == 'Submitted' ? 'Edit' : ''}</Text>
                    </Right>
                  </ListItem>
                </List>
              </View>
            )}
            keyExtractor={item => item.id}
          />
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

Timesheet = connect(mapStateToProps, {})(Timesheet);

export {Timesheet};